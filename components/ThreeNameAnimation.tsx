'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

const ThreeNameAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Track scene elements to clean up
    let camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer,
      controls: OrbitControls,
      font: any,
      text: THREE.Mesh,
      lineText: THREE.Object3D,
      isInitialized = false,
      animationId: number | null = null,
      clock: THREE.Clock

    // Check if device is mobile
    const checkMobile = () => {
      const width = window.innerWidth
      const isMobileDevice = width <= 768
      setIsMobile(isMobileDevice)
      console.log(
        'Device check:',
        isMobileDevice ? 'Mobile' : 'Desktop',
        `Width: ${width}px`
      )
      return isMobileDevice
    }

    // Create and configure the entire scene
    const init = () => {
      console.log('Initializing/Reinitializing Three.js scene')

      // Get container dimensions
      const containerWidth = containerRef.current!.clientWidth
      const containerHeight = containerRef.current!.clientHeight
      console.log('Container dimensions:', containerWidth, 'x', containerHeight)

      // Mobile status
      const mobile = checkMobile()

      // Clean up previous scene if it exists
      if (isInitialized) {
        console.log('Cleaning up previous scene elements')
        scene.clear()
        renderer.dispose()
        controls.dispose()

        // Cancel any ongoing animation
        if (animationId !== null) {
          cancelAnimationFrame(animationId)
          animationId = null
        }

        // Remove the canvas
        const existingCanvas = containerRef.current!.querySelector('canvas')
        if (existingCanvas) {
          containerRef.current!.removeChild(existingCanvas)
        }
      }

      // Initialize clock for animation
      clock = new THREE.Clock()
      clock.start()

      // Create new scene
      scene = new THREE.Scene()
      scene.background = null // Transparent background
      console.log('New scene created with transparent background')

      // Camera setup - different for mobile
      camera = new THREE.PerspectiveCamera(
        45,
        containerWidth / containerHeight,
        1,
        10000
      )
      camera.position.set(0, -30, mobile ? 150 : 200)
      console.log('Camera position:', camera.position)

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)
      console.log('Lighting setup complete')

      // Renderer setup
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(containerWidth, containerHeight)
      containerRef.current?.appendChild(renderer.domElement)
      console.log('Renderer created with pixel ratio:', window.devicePixelRatio)

      // Make canvas responsive
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'

      // Controls setup - adjust for mobile
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = false
      controls.enablePan = false
      controls.rotateSpeed = mobile ? 0.3 : 0.5 // Slower rotation on mobile
      controls.target.set(0, 0, 0)
      controls.update()
      controls.addEventListener('change', render)
      console.log('OrbitControls configured')

      // We're now initialized
      isInitialized = true

      // If we already have the font, create the text right away
      if (font) {
        createText()
        startAnimation()
      } else {
        // Font loader - only load font the first time
        console.log('Starting font loader')
        const loader = new FontLoader()
        loader.load(
          'fonts/helvetiker_regular.typeface.json',
          function (loadedFont) {
            console.log('Font loaded successfully')
            font = loadedFont
            createText()
            startAnimation()
          },
          // onProgress callback
          function (xhr) {
            console.log(
              'Font loading progress:',
              Math.round((xhr.loaded / xhr.total) * 100) + '%'
            )
          },
          // onError callback
          function (err) {
            console.error('Error loading font:', err)
          }
        )
      }
    }

    // Animation loop with wobbling effect
    const startAnimation = () => {
      function animate() {
        animationId = requestAnimationFrame(animate)

        // Get elapsed time
        const time = clock.getElapsedTime()

        if (text && lineText) {
          // Create wobble effect by varying position and rotation

          // Horizontal wobble
          const wobbleX = Math.sin(time * 1.5) * 2

          // Slight vertical bounce
          const wobbleY = Math.sin(time * 2.2) * 1

          // Subtle rotation
          const wobbleRotation = Math.sin(time * 1.8) * 0.05

          // Apply to both text and line text
          text.position.x = wobbleX
          text.position.y = wobbleY
          text.rotation.z = wobbleRotation

          lineText.position.x = wobbleX
          lineText.position.y = wobbleY
          lineText.rotation.z = wobbleRotation
        }

        renderer.render(scene, camera)
      }

      animate()
      console.log('Animation loop with wobble effect started')
    }

    // Function to create/update text
    const createText = () => {
      console.log('Creating text...')
      if (!font) {
        console.warn('Font not loaded yet, cannot create text')
        return
      }

      // Update mobile check on each text creation (for orientation changes)
      const currentMobile = checkMobile()

      // Update text message based on current device type
      const currentTextMessage = 'Ayazhan\nKadessova'
      const currentTextSize = currentMobile ? 36: 48
      console.log('Text config:', {
        message: currentTextMessage,
        size: currentTextSize,
      })

      // Text materials
      const matLite = new THREE.MeshBasicMaterial({
        color: '#8e6dd0',
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      })

      // Edge material
      const matDark = new THREE.LineBasicMaterial({
        color: '#8e6dd0',
        side: THREE.DoubleSide,
      })

      // Generate text shapes
      console.log('Generating text shapes')
      const shapes = font.generateShapes(currentTextMessage, currentTextSize)
      console.log('Number of shapes generated:', shapes.length)

      const geometry = new THREE.ShapeGeometry(shapes)
      geometry.computeBoundingBox()

      console.log('Text bounding box before centering:', {
        min: geometry.boundingBox?.min,
        max: geometry.boundingBox?.max,
        width: geometry.boundingBox
          ? geometry.boundingBox.max.x - geometry.boundingBox.min.x
          : 'unknown',
        height: geometry.boundingBox
          ? geometry.boundingBox.max.y - geometry.boundingBox.min.y
          : 'unknown',
      })

      // Calculate text width for centering
      const xMid =
        -0.5 * (geometry.boundingBox!.max.x - geometry.boundingBox!.min.x)
      // Apply the translation to the geometry
      geometry.translate(xMid, 5, 0)
      console.log('Geometry translated by offsets')

      // Log bounding box after translation
      geometry.computeBoundingBox() // Recompute after translation
      console.log('Text bounding box after centering:', {
        min: geometry.boundingBox?.min,
        max: geometry.boundingBox?.max,
        center: {
          x: (geometry.boundingBox!.min.x + geometry.boundingBox!.max.x) / 2,
          y: (geometry.boundingBox!.min.y + geometry.boundingBox!.max.y) / 2,
        },
      })

      // Create mesh with text
      text = new THREE.Mesh(geometry, matLite)
      text.position.z = -20 // Move text slightly forward from the origin
      console.log('Text mesh created and positioned at:', text.position)
      scene.add(text)

      // Create outlines for the text
      console.log('Creating text outlines')
      const holeShapes: THREE.Shape[] = []
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i]
        if (shape.holes && shape.holes.length > 0) {
          console.log(`Shape ${i} has ${shape.holes.length} holes`)
          for (let j = 0; j < shape.holes.length; j++) {
            const hole = shape.holes[j]
            holeShapes.push(hole)
          }
        }
      }
      shapes.push(...holeShapes)
      console.log('Total shapes after adding holes:', shapes.length)

      lineText = new THREE.Object3D()
      for (const element of shapes) {
        const shape = element
        const points = shape.getPoints()
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

        // Important: Apply the same translation to each line geometry
        lineGeometry.translate(xMid, 5, 0)

        const lineMesh = new THREE.Line(lineGeometry, matDark)
        lineText.add(lineMesh)
      }
      console.log(
        'Line text object created with',
        lineText.children.length,
        'line segments'
      )

      // Add the line text to the scene
      scene.add(lineText)
      console.log('Line text added to scene')

      // Render the scene after creating the text
      render()
      console.log('Text creation complete and rendered')
    }

    const render = () => {
      renderer.render(scene, camera)
    }

    // Initialize the scene
    init()

    // Handle resize by reinitializing the entire scene
    const handleResize = () => {
      console.log('Resize event detected, reinitializing scene')
      init()
    }

    // Set up event listeners
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', () => {
      console.log('Orientation changed')
      // Wait a moment for the browser to update dimensions after rotation
      setTimeout(handleResize, 100)
    })

    // Cleanup function
    return () => {
      console.log('Cleaning up Three.js resources')
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)

      if (isInitialized) {
        if (animationId !== null) {
          cancelAnimationFrame(animationId)
        }

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
