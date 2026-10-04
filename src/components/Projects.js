import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

// Import Images
import okrapic from '../Images/okra-website.webp';
import vitalized from '../Images/vitalized-website.webp';
import medhub from '../Images/medhub360-website.webp';
import sl from '../Images/SL-website.webp';
import dl from '../Images/Filetransfer.webp';
import sahyogi from '../Images/sahyogi.webp';
import aws from '../Images/AWS.webp';
import db from '../Images/Diabetes.webp';
import wcs from '../Images/th.webp';
import lex from '../Images/lex.webp';
import Portfolio from '../Images/portfolio.webp';
import devops from '../Images/devops.webp';
import anonChat from '../Images/anon-chat.png';
import route from '../Images/route.webp';
import wecalm from '../Images/wecalm.webp';
import contextImg from '../Images/contxt.webp';
import vpc from '../Images/vpc-aws.webp';
import aiCombined from '../Images/ai-combined.png';
import multiTool from '../Images/multi-tool-agent.png';
import mlops from '../Images/mlops.png';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDescs, setExpandedDescs] = useState({});

  const projects = [
    {
      id: 'mlops-pipeline',
      category: 'DevOps',
      title: 'Scalable MLOps Pipeline with Model Monitoring',
      description: 'Built an end-to-end MLOps pipeline with DVC, Prefect, MLflow, and GitHub Actions CI/CD, deploying a Dockerized FastAPI inference service to Render. Implemented production monitoring and model observability with Prometheus, Grafana, and Evidently AI, providing real-time system metrics, model performance tracking, and automated data drift detection for reliable ML operations.',
      image: mlops,
      technologies: ['Prefect', 'MLflow', 'Prometheus', 'Grafana'],
      github: 'https://github.com/namansrivastavaaa/End-to-end-MLOPS-Pipeline',
      youtube: 'https://www.youtube.com/watch?v=LTsR5537USc'
    },
    {
      id: 'multi-tool-agent',
      category: 'Machine Learning',
      title: 'Multi-Tool LLM Workflow',
      description: 'A dynamic workflow capable of executing real-time web searches (Tavily), API querying (Wikipedia), and calci calculations. The system integrates document parsing (PDFs/DOCX) enabling the agent to autonomously extract context from unstructured data and write generated outputs directly in text format.',
      image: multiTool,
      technologies: ['LangGraph', 'Gemini API', 'Tavily'],
      github: 'https://github.com/namansrivastavaaa/langgraph-gemini-multi-tool-agent',
      demo: 'https://multi-tool-agent.streamlit.app/'
    },
    {
      id: 'routeguard',
      title: 'RouteGuard: Real-Time Detection',
      category: 'Fullstack',
      description: 'Real-Time Loitering Detection , Proactive route planning and geofencing based tracking Navigation system.',
      image: route,
      technologies: ['React', 'Python', 'OpenCV', 'OSM API'],
      github: 'https://github.com/namansrivastavaaa/RouteGuard',
      youtube: 'https://www.youtube.com/watch?v=LGjBXVr_ZvM'
    },
    {
      id: 'vpc-aws-button',
      category: 'Cloud',
      title: 'Advanced Secure VPC Architecture on AWS',
      description: 'Made an AWS Virtual Private Cloud and demonstrated the connection with private EC2 instance using SSH inside NAT instance',
      image: vpc,
      technologies: ['AWS', 'VPC', 'EC2', 'IAM'],
      github: 'https://github.com/namansrivastavaaa/Cloud-AWS/tree/main/Virtual%20Private%20Cloud%20Setup',
      youtube: ''
    },
    {
      id: 'sahyogi-button',
      category: 'Fullstack',
      title: 'AI Sign lang Telemedicine System',
      description: 'Designed a two-way real-time communication system where mute patients stream hand-gesture video during live WebRTC-Based video calls on his side. The hand landmark is then processed by ML model and predicted text is delivered live to the doctor\'s interface via MongoDB with TTS support.',
      image: sahyogi,
      technologies: ['React', 'WebRTC', 'MongoDB'],
      github: 'https://github.com/namansrivastavaaa/sih-site',
      youtube: 'https://youtu.be/eXR-V_Ck7VA?si=OxYaDhNPUAbsYDEK'
    },
    {
      id: 'context-ai',
      category: 'Machine Learning',
      title: 'Multi level retrieval pipeline',
      description: 'Intelligent document assistant using RAG and LLMs to interact with documents through natural language.',
      image: contextImg,
      technologies: ['Flask', 'Pinecone', 'Groq API', 'spaCy'],
      github: 'https://github.com/Context-Driven-Legal-Text-Analysis/Context_Driven_Text_Analysis',
      demo: 'https://contextai.tiiny.site/'
    },
    {
      id: 'anon-chat-button',
      category: 'Fullstack',
      title: 'Anon Chat – Anonymous Messaging',
      description: 'Real-time anonymous chat application built with WebSockets. No login required — just create or join a room and start chatting instantly.',
      image: anonChat,
      technologies: ['Node.js', 'WebSocket', 'Express', 'Render'],
      github: 'https://github.com/namansrivastavaaa/Anon-chat',
      demo: 'https://anon-chat-e7x5.onrender.com'
    },
    {
      id: 'ml-mini-projects',
      category: 'Machine Learning',
      title: 'AI Projects (Mini Projects)',
      description: 'Machine Learning (Customer Segmentation), Deep Learning (Vehicle Classifier CNN), Natural Language Processing (Kindle Review Sentiment Analyzer), and LSTM (Word Predictor)',
      image: aiCombined,
      technologies: [],
      demo: 'https://ecommerce-prediction-segmentation.streamlit.app/',
      demoText: 'ML',
      demo2: 'https://vehicleclassifiercnn.streamlit.app/',
      demo2Text: 'CNN',
      demo3: 'https://nlp-learning-naman.streamlit.app/',
      demo3Text: 'NLP',
      demo4: 'https://next-wordd-prediction.streamlit.app/',
      demo4Text: 'RNN',
      demo7: 'https://agenticc-rag.streamlit.app/',
      demo7Text: 'RAG'
    },
    {
      id: 'dl-button',
      category: 'Cloud',
      title: 'Anonymous File Share',
      description: 'Upload and download files securely without requiring user login.',
      image: dl,
      technologies: ['GCP', 'Google API', 'Flask'],
      github: 'https://github.com/namansrivastavaaa/File_Storage',
      youtube: 'https://www.youtube.com/watch?v=5xgZ00DH89w'
    },

    {
      id: 'AWS-button',
      category: 'Cloud',
      title: 'Serverless Web App',
      description: 'Fully serverless architecture using AWS Lambda and DynamoDB.',
      image: aws,
      technologies: ['AWS Lambda', 'DynamoDB', 'JS'],
      github: 'https://github.com/namansrivastavaaa/Cloud-AWS',
      youtube: 'https://youtu.be/bld7EkDXFR4?si=4ccr0Le0AUv6gtfL'
    },
    {
      id: 'ml-button',
      category: 'Cloud',
      title: 'Diabetes Prediction (ML) on AWS',
      description: 'Machine Learning model deployed on AWS for predicting diabetes. Features like AWS SNS for notif, DynamoDB for preds was used',
      image: db,
      technologies: ['Python', 'AWS', 'Flask', 'ML'],
      github: 'https://github.com/namansrivastavaaa/Diabetes_Prediction_onAWS',
      youtube: 'https://youtu.be/OqBdSu4jDhs?si=s80-z3eRVexeqTu1'
    },
    {
      id: 'devops-button',
      category: 'DevOps',
      title: 'DevOps CI/CD Pipeline',
      description: 'React app with Docker containerization and GitHub Actions workflow.',
      image: devops,
      technologies: ['Docker', 'React', 'GitHub Actions'],
      github: 'https://github.com/namansrivastavaaa/to-do_devops_',
      youtube: 'https://www.youtube.com/watch?v=NSN33CLi0M8'
    },
    {
      id: 'pulse-tracker',
      category: 'Fullstack',
      title: 'Critical mental health support system',
      description: 'Privacy-preserving mental health tracking system for students with automated SOS triggers and SHA-256 anonymization.',
      image: wecalm,
      technologies: ['React', 'Flask', 'MongoDB', 'Recharts'],
      github: 'https://github.com/namansrivastavaaa/Counselling-Management-',
      youtube: ''
    },
    {
      id: 'wcs-button',
      category: 'Machine Learning',
      title: 'AI Content Summarizer',
      description: 'NLP-based tool to summarize long web articles automatically.',
      image: wcs,
      technologies: ['Python', 'NLP', 'Flask'],
      github: 'https://github.com/namansrivastavaaa/Ai_content_summarizer',
      youtube: 'https://www.youtube.com/watch?v=X9xr08p2mtk'
    },
    {
      id: 'medhub-button',
      category: 'Fullstack',
      title: 'Medhub360',
      description: 'Medical resource aggregator and appointment booking system.',
      image: medhub,
      technologies: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/namansrivastavaaa/Healthcare',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'okra-button',
      category: 'Machine Learning',
      title: 'Okra Maturity Analysis',
      description: 'Agricultural tech solution for analyzing crop maturity via images.',
      image: okrapic,
      technologies: ['Python', 'Image Processing'],
      github: 'https://github.com/namansrivastavaaa/Okra-Maturity-Analysis',
      youtube: 'https://www.youtube.com/@naman_0804'
    },
    {
      id: 'vitalized-button',
      category: 'Fullstack',
      title: 'Vitalized Healthcare',
      description: 'Comprehensive healthcare platform for connecting patients and doctors.',
      image: vitalized,
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/namansrivastavaaa/vitalized-vit',
      youtube: 'https://youtu.be/PPTDtrzJOT8?si=e32v89AZyyjjZ0av'
    },
    {
      id: 'portfolio-button',
      category: 'Fullstack',
      title: 'Portfolio Website',
      description: 'The website you are currently looking at!',
      image: Portfolio,
      technologies: ['React', 'EmailJs', 'CSS3'],
      github: 'https://github.com/namansrivastavaaa/Portfolio-Naman',
      youtube: 'https://www.youtube.com/watch?v=u4lYKwQs48s'
    },
    {
      id: 'asl-button',
      category: 'Machine Learning',
      title: 'Sign Language Translator',
      description: 'Real-time ASL/ISL translation using computer vision and deep learning.',
      image: sl,
      technologies: ['TensorFlow', 'OpenCV', 'Python'],
      github: 'https://github.com/namansrivastavaaa/Sign-Language-Translator',
      youtube: 'https://youtu.be/qMkM-zELXGI?si=hYzMO1V07OooRW-y'
    },
    {
      id: 'lex-button',
      category: 'Cloud',
      title: 'Lex ChatBot',
      description: 'Intelligent conversational bot powered by Amazon Lex.',
      image: lex,
      technologies: ['AWS Lex', 'AI', 'Cloud'],
      github: 'https://github.com/namansrivastavaaa?tab=repositories',
      youtube: 'https://www.youtube.com/watch?v=lU9DK8GRS1k'
    }
  ];

  const categories = ['All', 'Fullstack', 'Machine Learning', 'DevOps', 'Cloud'];

  const categoryColors = {
    'Fullstack': 'var(--accent)',
    'Machine Learning': 'var(--violet)',
    'DevOps': 'var(--amber)',
    'Cloud': 'var(--blue)',
  };

  const otherProjectIds = ['pulse-tracker', 'wcs-button', 'medhub-button', 'okra-button', 'vitalized-button', 'portfolio-button', 'asl-button', 'lex-button', 'AWS-button', 'devops-button', 'dl-button'];

  const mainProjects = projects.filter(p => !otherProjectIds.includes(p.id));
  const modalProjects = projects.filter(p => otherProjectIds.includes(p.id));

  const displayedProjects = activeFilter === 'All'
    ? mainProjects
    : projects.filter(p => p.category === activeFilter);

  const redirectToProject = (url) => {
    if (url) window.open(url, '_blank');
  };

  const DESC_CLAMP_THRESHOLD = 80; // chars; descriptions longer than this get a toggle

  const toggleDesc = (id) => {
    setExpandedDescs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderProject = (project, index) => {
    const isExpanded = !!expandedDescs[project.id];
    const isLong = project.description.length > DESC_CLAMP_THRESHOLD;

    return (
      <div
        key={project.id}
        className="proj-row"
        style={{
          '--i': index,
          '--cat-color': categoryColors[project.category] || 'var(--accent)',
          flexShrink: 0
        }}
      >
        <div className="proj-row-header">
          <h3 className="proj-row-title">{project.title}</h3>
          <span className="proj-row-category">{project.category}</span>
        </div>
        <div className="proj-row-body">
          <div className="proj-row-details">
            <p className={`proj-row-desc${!isExpanded && isLong ? ' clamped' : ''}`}>{project.description}</p>
            {isLong && (
              <button
                className="proj-read-more-btn"
                onClick={(e) => { e.stopPropagation(); toggleDesc(project.id); }}
              >
                {isExpanded ? 'Read Less ▲' : 'Read More ▼'}
              </button>
            )}
            <div className="proj-row-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="proj-tech-pill">{tech}</span>
              ))}
            </div>
            <div className="proj-row-actions">
              {project.github && (
                <button
                  className="proj-action-btn"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.github); }}
                >
                  <FaGithub /> <span>{project.githubText || 'Source Code'}</span>
                </button>
              )}
              {project.github2 && (
                <button
                  className="proj-action-btn"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.github2); }}
                >
                  <FaGithub /> <span>{project.github2Text || 'Source Code 2'}</span>
                </button>
              )}
              {project.github3 && (
                <button
                  className="proj-action-btn"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.github3); }}
                >
                  <FaGithub /> <span>{project.github3Text || 'Source Code 3'}</span>
                </button>
              )}
              {project.youtube && (
                <button
                  className="proj-action-btn proj-action-yt"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.youtube); }}
                >
                  <FaYoutube /> <span>Demo</span>
                </button>
              )}
              {project.demo && (
                <button
                  className="proj-action-btn proj-action-demo"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo); }}
                >
                  <FaExternalLinkAlt /> <span>{project.demoText || 'Demo'}</span>
                </button>
              )}
              {project.demo2 && (
                <button
                  className="proj-action-btn proj-action-demo"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo2); }}
                >
                  <FaExternalLinkAlt /> <span>{project.demo2Text || 'Demo 2'}</span>
                </button>
              )}
              {project.demo3 && (
                <button
                  className="proj-action-btn proj-action-demo"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo3); }}
                >
                  <FaExternalLinkAlt /> <span>{project.demo3Text || 'Demo 3'}</span>
                </button>
              )}
              {project.demo4 && (
                <button
                  className="proj-action-btn proj-action-demo"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo4); }}
                >
                  <FaExternalLinkAlt /> <span>{project.demo4Text || 'Demo 4'}</span>
                </button>
              )}
              {project.demo5 && (
                <button
                  className="proj-action-btn proj-action-demo"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo5); }}
                >
                  <FaExternalLinkAlt /> <span>{project.demo5Text || 'Demo 5'}</span>
                </button>
              )}
              {project.demo6 && (
                <button
                  className="proj-action-btn proj-action-demo"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo6); }}
                >
                  <FaExternalLinkAlt /> <span>{project.demo6Text || 'Demo 6'}</span>
                </button>
              )}
              {project.demo7 && (
                <button
                  className="proj-action-btn proj-action-demo"
                  onClick={(e) => { e.stopPropagation(); redirectToProject(project.demo7); }}
                >
                  <FaExternalLinkAlt /> <span>{project.demo7Text || 'Demo 7'}</span>
                </button>
              )}
            </div>
          </div>
          {project.image && (
            <div className="proj-row-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="project-section" className="project">
      {/* Premium Typography Header */}
      <div className="premium-section-header" style={{ marginBottom: "2rem" }}>
        <h2 className="premium-heading">Showcase &<br />Works.</h2>

      </div>

      {/* Filter tabs */}
      <div className="proj-filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`proj-filter-tab${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
            style={{ '--cat-color': categoryColors[cat] || 'var(--text-primary)' }}
          >
            {cat}
            {activeFilter === cat && <span className="proj-filter-dot" />}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div className="proj-list">
        {displayedProjects.map(renderProject)}
      </div>

      {!isModalOpen && (
        <div className="see-all-container">
          <button className="see-all-btn" onClick={() => setIsModalOpen(true)}>
            See Other Projects
          </button>
        </div>
      )}

      {isModalOpen && createPortal(
        <div className="project-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h2 className="premium-heading" style={{ fontSize: '2.5rem', marginTop: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Other Projects</h2>
            <div className="proj-list modal-proj-grid" style={{ overflowY: 'auto', maxHeight: '70vh', paddingRight: '10px' }}>
              {modalProjects.map(renderProject)}
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}

export default Projects;