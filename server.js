const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));



// Portfolio data
const portfolioData = {
  personal: {
    name: "Venkadesh M",
    title: "Senior Software engineer",
    email: "venkadesh.m16@gmail.com",
    phone: "+91 9894654504",
    location: "Bengaluru",
    bio: "a Software Engineer with expertise in real-time data processing using Kafka and Python. My experience includes building scalable streaming pipelines, automating workflows, and optimizing backend systems. I also work on automation engineering and performance testing to deliver fast and reliable solutions.",
    github: "https://github.com/venkadeshm16",
    linkedin: "https://www.linkedin.com/in/venkadesh-m16/"
  },
  
  experience: [
  {
    company: "Wipro limited",
    position: "Senior Engineer / Team Lead",
    duration: "Jan 2025 - Present",
    description: "Leading a team of engineers in developing real-time data processing pipelines and automation frameworks. Architecting Kafka-based streaming systems and Python backend services using Flask. Overseeing containerized deployments with Docker and Kubernetes, and building backend services with Spring Boot. Mentoring team members and ensuring high-quality, scalable, and reliable solutions.",
    technologies: ["Kafka", "Python", "Flask", "Spring Boot", "Docker", "Kubernetes", "K6", "Automation Testing", "MinIO"]
  },
    {
      company: "Wipro limited",
      position: "scholler trainee",
      duration: "2021 - 2025",
      description: "Worked on real-time data processing pipelines and automation frameworks. Built Kafka-based streaming systems and Python backend services using Flask. Developed scalable applications and automated testing frameworks. Managed containerized deployments using Docker and Kubernetes, and built backend services with Spring Boot",
      technologies: ["Kafka", "Python", "Flask", "Spring Boot", "Docker", "Kubernetes", "K6", "Automation Testing", "MinIO"]
    }
  ],
  
technologies: {
  backend: ["Python", "Flask", "Spring Boot"],
  databases: ["MySQL", "PostgreSQL", "Redis", "MinIO"],
  tools: ["Git", "Docker", "Kubernetes", "K6", "Jenkins", "GitHub"],
  other: ["Kafka", "REST APIs", "Automation Testing", "Performance Testing", "CI/CD"]
},
  
  projects: [
    {
      name: "Ericsson Intelligent Controller",
      description: "Contributed to the development of an intelligent, event-driven controller platform compliant with O-RAN R1 standards, enabling real-time telecom network automation. Designed and built scalable streaming services using Kafka and Spring Boot, and integrated Python-based microservices for orchestration and processing.",
      technologies: ["Python", "Flask", "Spring Boot","MySQL", "PostgreSQL", "Redis", "MinIO","Git", "Docker", "Kubernetes", "K6", "Jenkins", "GitHub","Kafka", "REST APIs", "Automation Testing", "Performance Testing", "CI/CD"],
      image: "/images/eic.jpg"
    },
    {
      name: "Real Time Data Ingestion And Processing",
      description: "Built a real-time ICU data streaming platform using Kafka and MinIO. Integrated multiple hospital systems, processed critical patient data, and enabled live monitoring and historical analytics through Grafana.",
      technologies: ["Python","Minio","Kafka","Docker","Kubernets","Prometues","Grafana"],
      github: "https://github.com/venkadeshm16/real-time-data-ingestion-and-processing",
      image: "/images/realtime.jpg"
    },
    {
      name: "Sentiment Analysis Tool",
      description: "A containerised Sentiment Analysis Tool built with Python and Docker, offering REST API endpoints for text sentiment classification and insights",
      technologies: ["Python", "API Integration","Docker","NLP"],
      github: "https://github.com/venkadeshm16/sentiment-analysis-tool",
      demo: "https://sentiment-analysis-tool-1m4c.onrender.com/register",
      image: "/images/senti.jpg"
    }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { data: portfolioData });
});

app.get('/experience', (req, res) => {
  res.render('experience', { data: portfolioData });
});

app.get('/projects', (req, res) => {
  res.render('projects', { data: portfolioData });
});

app.get('/contact', (req, res) => {
  res.render('contact', { data: portfolioData });
});



app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
