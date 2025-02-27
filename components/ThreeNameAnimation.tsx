'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

const ThreeNameAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer,
      controls: OrbitControls,
      text: THREE.Mesh,
      lineText: THREE.Object3D,
      font: any,
      geometry: THREE.ShapeGeometry,
      shapes: THREE.Shape[]

    const textMessage = 'Ayazhan\nKadessova'
    const textSize = 42

    // Initialize scene
    const init = () => {
      // Get container dimensions
      const containerWidth = containerRef.current!.clientWidth
      const containerHeight = containerRef.current!.clientHeight

      // Camera setup
      camera = new THREE.PerspectiveCamera(
        45,
        containerWidth / containerHeight,
        1,
        10000
      )
      camera.position.set(0, -50, 200)

      // Scene setup
      scene = new THREE.Scene()
      scene.background = null // Transparent background

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)

      // Font loader
      const loader = new FontLoader()
      loader.load(
        'fonts/helvetiker_regular.typeface.json',
        function (loadedFont) {
          font = loadedFont

          // Add handleResize call to initialization
          handleResize()

          // Animation
          function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
          }
          animate()
        }
      )

      // Renderer setup
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(containerWidth, containerHeight)
      containerRef.current?.appendChild(renderer.domElement)

      // Make canvas responsive
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'

      // Controls setup
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = false
      controls.enablePan = false
      controls.rotateSpeed = 0.5
      controls.target.set(0, 0, 0)
      controls.update()
      controls.addEventListener('change', render)

      // Handle resize
      window.addEventListener('resize', handleResize)
    }

    // Function to create/update text based on current container size
    const createText = () => {
      if (!font) return

      // Clear previous text if it exists
      if (text) scene.remove(text)
      if (lineText) scene.remove(lineText)

      // Get current container width for responsive positioning
      const containerWidth = containerRef.current!.clientWidth

      // Text material
      const matLite = new THREE.MeshPhongMaterial({
        color: 0x000000,
        specular: 0x444444,
        shininess: 30,
        side: THREE.DoubleSide,
      })

      // Edge material
      const matDark = new THREE.LineBasicMaterial({
        color: 0x444444,
        side: THREE.DoubleSide,
      })

      // Generate text shapes
      shapes = font.generateShapes(textMessage, textSize)
      geometry = new THREE.ShapeGeometry(shapes)
      geometry.computeBoundingBox()

      // Calculate center position based on current container size
      const textWidth =
        geometry.boundingBox!.max.x - geometry.boundingBox!.min.x

      // Calculate xMid value for centering
      const xMid = -0.5 * textWidth
      geometry.translate(xMid, 0, 0)

      // Adjust xPosition based on container width
      // Map container width to world units - may need tuning
      const worldFactor = containerWidth / 500
      const xPosition = xMid + 20 * worldFactor

      // Create mesh with text
      text = new THREE.Mesh(geometry, matLite)
      text.position.x = xPosition
      text.position.z = -20
      scene.add(text)

      // Create outlines for the text
      const holeShapes: THREE.Shape[] = []
      for (const element of shapes) {
        const shape = element
        if (shape.holes && shape.holes.length > 0) {
          for (const hole of shape.holes) {
            holeShapes.push(new THREE.Shape(hole.getPoints()))
          }
        }
      }
      shapes.push(...holeShapes)

      lineText = new THREE.Object3D()
      for (const element of shapes) {
        const shape = element
        const points = shape.getPoints()
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
        lineGeometry.translate(xMid, 0, 0)
        const lineMesh = new THREE.Line(lineGeometry, matDark)
        lineText.add(lineMesh)
      }

      lineText.position.x = xPosition
      scene.add(lineText)
    }

    const handleResize = () => {
      if (!containerRef.current) return

      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight

      // Update camera aspect ratio
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()

      // Resize renderer
      renderer.setSize(newWidth, newHeight)

      // Rebuild the text to ensure proper centering
      createText()

      render()
    }

    const render = () => {
      renderer.render(scene, camera)
    }

    // Initialize the scene
    init()

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)

      if (renderer) {
        renderer.dispose()
        const canvas = renderer.domElement
        if (containerRef.current?.contains(canvas)) {
          containerRef.current.removeChild(canvas)
        }
      }

      if (controls) {
        controls.dispose()
      }

      if (scene) {
        scene.clear()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='w-full h-full'
      style={{
        height: '150px',
        position: 'relative',
      }}
    />
  )
}

export default ThreeNameAnimation
