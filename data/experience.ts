import { Experience } from '@/types/data'

export const experiences: Experience[] = [
  {
    company: 'The Trade Desk',
    link: 'https://www.thetradedesk.com',
    location: 'Hong Kong',
    position: 'Software Engineering Intern',
    period: 'Jun. 2025 - Aug. 2025',
    projects: [
      {
        name: 'Creative Assignment Recommender',
        tech: ['GraphQL', 'C#', '.NET'],
        achievements: [
          'Led the design and rollout of a creative recommender feature for Kokai, an AI-powered programmatic advertising platform, automating the creative selection process for advertisers and generating an average of 4,300 daily assignments with 99% uptime in 300ms, using Graphic, .NET, C#, GraphQL.',
          'Conducted analysis of advertiser-specific patterns to integrate data pipelines, improving recall by 15% through dynamic thresholding and enabling more effective advertising campaign strategies.',
          'Collaborated with engineering teams to validate feature integrity via End-to-End and Integration tests, managed database migrations, and ensured seamless daily deployments while minimizing disruptions to existing systems.',
        ],
      },
    ],
  },
  {
    company: 'GitRoll',
    link: 'https://gitroll.io',
    location: 'California, USA',
    position: 'Full Stack Developer Intern',
    period: 'Sep. 2024 - Dec. 2024',
    projects: [
      {
        name: 'Productivity Tools',
        tech: ['Next.js', 'TypeScript', 'Firebase'],
        achievements: [
          'Developed tools for process management, enabling visibility into queued processes and filtering out repositories, resulting in faster issue resolution',
          'Integrated an open-source custom theme into the GitRoll Profile Card, showcasing developer performance metrics in an engaging format',
        ],
      },
    ],
  },
  {
    company: 'J.P.Morgan Chase & Co.',
    link: 'https://www.jpmorganchase.com',
    location: 'Kowloon, Hong Kong',
    position: 'Frontend Developer Intern',
    period: 'Jun. 2024 – Aug. 2024',
    projects: [
      {
        name: 'Migration to React',
        tech: ['React.js', 'Redux.js', 'Java', 'JSP', 'RESTful API'],
        achievements: [
          'Designed, implemented, tested a revamp of an in-house application from Java Servlet and JSP to a React.js with Redux.js frontend connected to a RESTful API backend, increasing maintainability, improving user experience and meeting performance demands via optimized rendering',
        ],
      },
    ],
  },
  {
    company: 'J.P.Morgan Chase & Co.',
    link: 'https://www.jpmorganchase.com',
    location: 'Kowloon, Hong Kong',
    position: 'Software Engineering Intern',
    period: 'Jun. 2023 – Aug. 2023',
    projects: [
      {
        name: 'Diversity, Equity, Inclusion Chatbot',
        tech: ['ReactJS', 'NodeJS', 'TypeScript', 'API'],
        achievements: [
          "Led a team of 3 developer interns within a larger team of 6 to build a full-stack chatbot that uses NLP model fine-tuned for company's DEI rules",
        ],
      },
      {
        name: 'Streamlined Observability as Code and Automated CI/CD',
        tech: ['Dynatrace', 'Terraform', 'Jenkins', 'Bash'],
        achievements: [
          'Implemented Terraform automation for programmatic creation of synthetic monitors for 10+ app services, reducing repetitive setup and configuration time to seconds, encouraging consistency across the infrastructure, and enabling proper tag policies for analysis of failure patterns across endpoints',
        ],
      },
    ],
  },
  {
    company: 'Super Cat Technology Limited',
    link: 'https://www.linkedin.com/company/super-chain/people/?facetNetwork=F',
    location: 'Kowloon, Hong Kong',
    position: 'Software Engineering Intern',
    period: 'Jun. 2022 - Sep. 2022',
    projects: [
      {
        name: 'Automated ML',
        tech: ['Python', 'PyCaret', 'MongoDB', 'Fastapi', 'Streamlit'],
        achievements: [
          'Developed the Classification component of AutoML, utilizing user-defined criteria to identify optimal ML models for input data and accurately classify target data, resulting in improved customer churn prediction for client companies',
          'Boosted T5-based Table QA accuracy from 60% to 88% by filtering columns through semantic search and checking their relevancy',
        ],
      },
      {
        name: 'Automated Multi-label text classification',
        tech: ['Python', 'PyTorch', 'transformers'],
        achievements: [
          'Upgraded model used to analyze customer reviews from binary to multi-label sentiment analysis with topical grouping, allowing businesses to make data-driven decisions about where to focus improvement efforts every month',
        ],
      },
    ],
  },
]
