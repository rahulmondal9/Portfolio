export const portfolioData = {
  personalInfo: {
    name: "RAHUL MONDAL",
    title: "Data Analyst",
    description: "Transforming raw data into actionable insights through advanced analytics, machine learning, and data visualization. Specializing in data science with hands-on experience in Python, SQL, Power BI, and Tableau.",
    phone: ["+91 8768963374"],
    email: "rahul425wy@gmail.com",
    location: "Garhbeta, West Medinipur, West Bengal, India"
  },

  skills: {
    programming: ["Python", "C", "SQL", "Data Structures & Algorithms"],
    ml: ["Pandas", "NumPy", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Statistical Analysis"],
    deepLearning: ["Deep Learning", "OpenCV", "CNN", "Computer Vision"],
    cloud: ["Excel", "Power BI", "Tableau", "MS Office Suite", "Data Pipeline Development"],
    interests: [
      { name: "Data Science", tooltip: "Advanced data analysis, pattern recognition, and predictive modeling. Working with real-world datasets to extract meaningful insights and drive data-driven decision making." },
      { name: "Machine Learning", tooltip: "Supervised and unsupervised learning techniques, model training, hyperparameter tuning, and performance optimization. Building intelligent systems that learn from data." }
    ]
  },

  education: [
    {
      institution: "NSHM Knowledge Campus, Durgapur",
      period: "Present",
      degree: "Bachelor of Technology in Computer Science & Engineering (Data Science)"
    },
    {
      institution: "Baital Gopeswar Pal Vidyapith (HS)",
      period: "2018-2020",
      Board: "West Bengal Board of Higher Secondary Education",
      degree: "Higher Secondary Education - 86%",
      certificateUrl: "/certificates/HS_Result.pdf"
    },
    {
      institution: "Uttarbil Bidhan Chandra Sikshayatan (HS)",
      period: "2018",
      Board: "West Bengal Board of Secondary Education",
      degree: "Secondary Education - 80.85%",
      certificateUrl: "/certificates/Madhyamik_Result.pdf"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Real-Time Road Lane Detection System",
      description: "Developed a real-time lane detection model using OpenCV and deep learning during Next24Tech internship. Preprocessed image data and fine-tuned Convolutional Neural Networks (CNNs) for improved accuracy. Integrated the detection algorithm into an autonomous driving system prototype.",
      tags: ["OpenCV", "Deep Learning", "CNN", "Computer Vision", "Image Processing"],
      status: "completed",
      githubUrl: "https://github.com/rahulmondal9/rahulmondal9"
    },
    {
      id: 2,
      title: "Machine Learning Classification & Regression Models",
      description: "Designed and trained ML models for classification and regression tasks using Python and scikit-learn. Performed comprehensive data preprocessing, feature engineering, model evaluation, and hyperparameter tuning to improve performance.",
      tags: ["Python", "Scikit-Learn", "Machine Learning", "Data Preprocessing", "Model Optimization"],
      status: "completed",
      githubUrl: "https://github.com/rahulmondal9/CODSOFT"
    },
    {
      id: 3,
      title: "Data Analytics & Visualization Dashboard",
      description: "Created interactive dashboards using Tableau and Power BI for business intelligence and data storytelling. Worked with real-world datasets using Python (Pandas, NumPy) and SQL to clean, analyze, and visualize data patterns.",
      tags: ["Tableau", "Power BI", "Python", "Pandas", "SQL", "Data Visualization"],
      status: "completed",
      githubUrl: "https://github.com/rahulmondal9"
    },
    {
      id: 4,
      title: "Predictive Analytics & Statistical Modeling",
      description: "Built predictive models using statistical analysis and machine learning techniques. Focused on pattern recognition, data exploration, and generating actionable insights from complex datasets using Python and various ML libraries.",
      tags: ["Python", "Statistical Analysis", "Predictive Modeling", "Data Science"],
      status: "completed",
      githubUrl: "https://github.com/rahulmondal9/LLM_Evaluation_Pipeline"
    },
    {
      id: 5,
      title: "End-to-End Data Pipeline Development",
      description: "Developed comprehensive data pipelines covering data collection, cleaning, transformation, analysis, and visualization. Implemented automated workflows for efficient data processing and insights generation.",
      tags: ["Python", "Data Engineering", "ETL", "Automation", "Data Analysis"],
      status: "completed",
      githubUrl: "https://github.com/rahulmondal9/Digit_Recognition"
    },
    {
      id: 6,
      title: "AI Assistant",
      description: "Building an intelligent AI assistant leveraging Large Language Models (LLMs) and Natural Language Processing (NLP). Implementing conversational AI capabilities with context-awareness, multi-turn dialogue management, and integration with various data sources. Exploring prompt engineering, fine-tuning techniques, and creating a user-friendly interface for seamless human-AI interaction.",
      tags: ["Python", "LLM", "NLP", "AI", "Machine Learning", "Conversational AI"],
      status: "ongoing",
      githubUrl: "https://github.com/rahulmondal9"
    }
  ],

  experience: [
    {
      title: "Data Science & Analytics Intern",
      company: "Zidio Development",
      period: "Aug 2024 – Nov 2024",
      location: "Remote",
      description: "Gained hands-on experience in data manipulation, visualization, and analysis. Worked with Python (Pandas, NumPy), SQL to clean, analyze, and visualize real-world datasets. Explored machine learning basics and gained valuable insights into predictive modeling.",
      tags: ["Python", "SQL", "Data Analysis", "Machine Learning"],
      certificates: [
        { name: "Certificate", url: "/certificates/Certificate.pdf" },
        { name: "Training Certificate", url: "/certificates/Tranning_Certificate.pdf" }
      ]
    },
    {
      title: "Technology & Services Intern",
      company: "Next24Tech",
      period: "Mar 2024 – May 2024",
      location: "Remote",
      description: "Developed and implemented a real-time road lane line detection model using OpenCV and deep learning. Preprocessed image data and fine-tuned CNNs for improved accuracy. Collaborated with cross-functional teams and documented project outcomes.",
      tags: ["OpenCV", "Deep Learning", "CNN", "Computer Vision"],
      certificates: [
        { name: "Certificate", url: "/certificates/Next24Tech.jpg" }
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "CodSoft",
      period: "Aug 2024 – Sep 2024",
      location: "Remote",
      description: "Worked on real-world machine learning projects focused on supervised and unsupervised learning. Designed and trained ML models for classification and regression tasks. Performed data preprocessing, model evaluation, and hyperparameter tuning.",
      tags: ["Python", "Automation", "Data Processing", "Problem Solving"],
      certificates: [
        { name: "Certificate", url: "/certificates/CODSOFT.pdf" }
      ]
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Effective Writing Certification",
      subtitle: "NPTEL - IIT Roorkee",
      description: "Successfully completed a comprehensive course on effective writing, enhancing communication skills and demonstrating proficiency in academic and professional writing standards.",
      icon: "🏆",
      type: "ACADEMIC",
      date: "Jan - Feb 2023",
      certificateUrl: "/certificates/NPTEL_Effective_Writing.png"
    },
    {
      id: 2,
      title: "Data Science Excellence",
      subtitle: "Academic Achievement",
      description: "Recognized for outstanding performance in data science coursework and practical projects, demonstrating strong analytical and problem-solving capabilities.",
      icon: "🎖️",
      type: "ACADEMIC",
      date: "2024",
      certificateUrl: null
    },
    {
      id: 3,
      title: "Internship Excellence",
      subtitle: "Professional Recognition",
      description: "Completed multiple successful internships with outstanding performance reviews, contributing significantly to real-world data science and technology projects.",
      icon: "⭐",
      type: "PROFESSIONAL",
      date: "2024",
      certificateUrl: null
    }
  ],

  aiAgents: [
    { name: "ChatGPT", color: "#10a37f", icon: "🤖" },
    { name: "CursorAI", color: "#6366f1", icon: "🎯" },
    { name: "Gemini", color: "#4285f4", icon: "💎" },
    { name: "MS Copilot", color: "#0078d4", icon: "🤝" },
    { name: "Ollama", color: "#ff6b6b", icon: "🦙" },
    { name: "Blackbox", color: "#e1dd8aff", icon: "📦" },
    { name: "Stability AI", color: "#ff6600", icon: "🎨" },
    { name: "Grok", color: "#aad8f6ff", icon: "🧠" },
    { name: "Meta AI", color: "#0084ff", icon: "👁️" },
    { name: "GitHub Copilot", color: "#ffffff", icon: "💻" },
    { name: "Replit", color: "#667eea", icon: "⚡" },
    { name: "Canva AI", color: "#00c4cc", icon: "🖼️" },
    { name: "Sora", color: "#ff006e", icon: "🎬" },
    { name: "Notebook LM", color: "#4a90e2", icon: "📓" },
    { name: "Perplexity", color: "#00a9ff", icon: "🔍" },
    { name: "Deepseek", color: "#d078edff", icon: "🔬" }
  ]
};