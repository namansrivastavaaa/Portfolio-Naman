import { FiBookOpen, FiCloud, FiCpu, FiFileText, FiPlay, FiExternalLink, FiCode } from 'react-icons/fi';

const prepSections = [
  {
    icon: <FiBookOpen />,
    title: 'DSA — A to Z',
    description: 'A structured roadmap covering arrays, strings, graphs, trees, DP, and interview-level problem solving.',
    accent: 'web',
    resources: [
      {
        label: "Striver's A to Z DSA Sheet",
        url: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z',
        type: 'Sheet'
      }
    ]
  },
  {
    icon: <FiCpu />,
    title: 'Complete AI',
    description: 'ML, deep learning, NLP, MLOps, and deployment fundamentals from one comprehensive course.',
    accent: 'ml',
    resources: [
      {
        label: 'Complete Machine Learning, NLP & MLOps Bootcamp (Krish Naik)',
        url: 'https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/',
        type: 'Udemy'
      },
      {
        label: 'Machine Learning — Part 1',
        url: 'https://youtu.be/ie4oGI85SAE?si=PIMhjLQg3aXU4jnS',
        type: 'Video'
      },
      {
        label: 'Machine Learning — Part 2',
        url: 'https://youtu.be/Eky8CZXapBQ?si=Z4uhlZMb3Y7y1EIU',
        type: 'Video'
      },
      {
        label: 'Deep Learning (Krish Naik) — YouTube',
        url: 'https://youtu.be/d2kxUVwWWwU?si=VlHiFHHz_0cbnAqr',
        type: 'Video'
      },
      {
        label: 'NLP — Natural Language Processing (Krish Naik)',
        url: 'https://youtu.be/ENLEjGozrio?si=PJgYlMmDpVsP3QJz',
        type: 'Video'
      }
    ]
  },
  {
    icon: <FiCode />,
    title: 'Full-Stack Web Development',
    description: 'JavaScript, React, Express.js, and MongoDB — the MERN stack essentials.',
    accent: 'web',
    resources: [
      {
        label: 'JavaScript — Full Course',
        url: 'https://www.youtube.com/playlist?list=PLrdDvCsCDu0GG0_qgNTcR7R6R95ad8x1X',
        type: 'Playlist'
      },
      {
        label: 'React JS — Complete Guide',
        url: 'https://www.youtube.com/playlist?list=PLrdDvCsCDu0Gdr-E7NlcFYaNPw29t7xmq',
        type: 'Playlist'
      },
      {
        label: 'Linking Express.js (API) to React',
        url: 'https://www.youtube.com/watch?v=PeuFbuzoseE',
        type: 'Video'
      },
      {
        label: 'Mongoose — MongoDB with API',
        url: 'https://www.youtube.com/watch?v=wgwo5hbY7SY',
        type: 'Video'
      }
    ]
  },
  {
    icon: <FiCloud />,
    title: 'AWS',
    description: 'Core cloud concepts for interviews: VPC, EC2, Lambda, and networking fundamentals.',
    accent: 'cloud',
    resources: [
      {
        label: 'AWS VPC — Virtual Private Cloud Explained',
        url: 'https://youtu.be/fZuxp_pOzgI?si=dEkza_6-X6g2LYSd',
        type: 'Video'
      },
      {
        label: 'AWS Lambda — Serverless Concepts',
        url: 'https://youtu.be/43tIX7901Gs?si=tY-scJhPQJed6eTr',
        type: 'Video'
      },
      {
        label: 'AWS EC2 — Compute Basics',
        url: 'https://youtu.be/NWzfgAw_DYA?si=3UFkDhZ_SCQAhzpG',
        type: 'Video'
      }
    ]
  },
  {
    icon: <FiFileText />,
    title: 'My Blogs',
    description: 'Notes, tutorials, and project write-ups covering cloud, AI, and dev workflows.',
    accent: 'cloud',
    resources: [
      {
        label: 'Dev.to — Naman Srivastava',
        url: 'https://dev.to/namansrivastavaaa',
        type: 'Blog'
      }
    ]
  }
];

const Prep = () => {
  return (
    <div className="page-content">
      <header className="premium-section-header">
        <span className="eyebrow">// Resources</span>
        <h1 className="premium-heading">Interview Prep</h1>
        <p className="premium-subtitle">
          Curated resources for DSA, AI, cloud, OOPs, and the study material I actually leaned on while preparing.
        </p>
      </header>

      <div className="prep-categories">
        {prepSections.map((section) => (
          <div className="prep-category-card" key={section.title}>
            <div className={`prep-category-icon ${section.accent}`}>
              {section.icon}
            </div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <ul className="prep-resource-list">
              {section.resources.map((item, idx) => (
                <li key={`${section.title}-${idx}`}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="prep-resource-item">
                    {item.type === 'Video' || item.type === 'Playlist' ? <FiPlay /> : <FiExternalLink />}
                    <span className="prep-item-text">{item.label}</span>
                    <span className="prep-item-badge">{item.type}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prep;
