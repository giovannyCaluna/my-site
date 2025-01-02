// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

interface WorkExperienceItem {
  title: string;
  company: string;
  responsibilities: string[];
}

interface Resources {
  [key: string]: {
    translation: {
      welcome: string;
      greeting: string;
      start: string;
      certifications: string;
      cert1: string;
      cert2: string;
      cert3: string;
      education: string;
      degree1: string;
      institution1: string;
      thesis1: string;
      degree2: string;
      institution2: string;
      thesis2: string;
      email: string;
      phone: string;
      location: string;
      interests: string;
      interestsContent: string;
      profile: string;
      profileContent: string;
      skills: string;
      skillsList: string[];
      workExperience: string;
      workExperienceList: WorkExperienceItem[];
    };
  };
}

const resources: Resources = {
  en: {
    translation: {
      welcome: "Welcome to my personal website",
      greeting: "Hello, I'm Giovanny Caluña, how are you?",
      start: "Start",
      certifications: "Certifications",
      cert1: "Google Cloud Associate Cloud Engineer (Jan 2022)",
      cert2: "SQL for Data Analysis Masterclass (Udemy, July 2021)",
      cert3: "Practical Test-Driven Development for Java Programmers (Udemy, March 2021)",
      education: "Education",
      degree1: "MSc in Computer Science",
      institution1: "University of Szeged, Hungary (2022-2024)",
      thesis1: "Privacy-Based Blockchain Electronic Voting System",
      degree2: "BSc in Information Technology",
      institution2: "Yachay Tech University, Ecuador (2014-2020)",
      thesis2: "Classification of Plant Leaf Diseases Using Deep Learning Techniques",
      email: "Email: giovannycaluna@gmail.com",
      phone: "Phone: +36707859869",
      location: "Location: Szeged, Hungary",
      interests: "Interests",
      interestsContent: "Blockchain, AI/ML, Decentralized Applications, Technology Trends",
      profile: "Profile",
      profileContent: "Dynamic and adaptable computer scientist with a proven track record in software development and AI/ML model customization. Skilled in Java (Spring Boot), TypeScript (React, Angular, Nest), Python, and R, with experience in decentralized web applications (Blockchain, Web3). Highly motivated and open to relocation, ready to contribute to innovative projects.",
      skills: "Skills",
      skillsList: [
        "Programming Languages: Java, TypeScript, SQL, Python, R, C++, C#, Solidity",
        "Software Development: Spring Boot, React, Angular, Nest, Strapi",
        "Databases: DB2, MongoDB, MySQL, PostgreSQL",
        "Other Tools: Docker, GCP, Kubernetes, Jenkins",
        "Languages: Spanish (Native), English (Advanced)",
      ],
      workExperience: "Work Experience",
      workExperienceList: [
        {
          title: "Full Stack Developer",
          company: "Digevo (January 2025 – Present)",
          responsibilities: [
            "Developing dynamic web applications using React.",
            "Integrating backend services with Strapi for efficient content management.",
            "Customizing Strapi web services for unique client needs.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Urba Digital (June 2024 – December 2024)",
          responsibilities: [
            "Developing dynamic web applications using React.",
            "Integrating backend services with Strapi for efficient content management.",
            "Customizing Strapi web services for unique client needs.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Kontri.io (Feb 2024 – May 2024)",
          responsibilities: [
            "Handled data migration, ETL, and API integration scripts.",
            "Utilized GCP services to optimize data storage and workflows.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Kruger Corporation (Jan 2021 – Dec 2023)",
          responsibilities: [
            "Developed containerized applications with Docker for scalability.",
            "Designed, implemented, and documented RESTful APIs.",
            "Enhanced CI/CD pipelines for efficient software delivery.",
          ],
        },
      ],
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi blog personal",
      greeting: "Hola, Soy Giovanny Caluna ¿cómo estás?",
      start: "Iniciar",
      certifications: "Certificaciones",
      cert1: "Google Cloud Associate Cloud Engineer (Ene 2022)",
      cert2: "SQL para el Análisis de Datos Masterclass (Udemy, Julio 2021)",
      cert3: "Desarrollo Orientado a Pruebas para Programadores Java (Udemy, Marzo 2021)",
      education: "Educación",
      degree1: "Máster en Ciencias de la Computación",
      institution1: "Universidad de Szeged, Hungría (2022-2024)",
      thesis1: "Sistema de Votación Electrónica Blockchain Basado en Privacidad",
      degree2: "Licenciatura en Tecnología de la Información",
      institution2: "Universidad Yachay Tech, Ecuador (2014-2020)",
      thesis2: "Clasificación de Enfermedades de Hojas de Plantas Usando Técnicas de Aprendizaje Profundo",
      email: "Correo electrónico: giovannycaluna@gmail.com",
      phone: "Teléfono: +36707859869",
      location: "Ubicación: Szeged, Hungría",
      interests: "Intereses",
      interestsContent: "Blockchain, IA/ML, Aplicaciones Descentralizadas, Tendencias Tecnológicas",
      profile: "Perfil",
      profileContent: "Científico informático dinámico y adaptable con un historial comprobado en desarrollo de software y personalización de modelos de IA/ML. Hábil en Java (Spring Boot), TypeScript (React, Angular, Nest), Python y R, con experiencia en aplicaciones web descentralizadas (Blockchain, Web3). Altamente motivado y dispuesto a reubicarse, listo para contribuir a proyectos innovadores.",
      skills: "Habilidades",
      skillsList: [
        "Lenguajes de Programación: Java, TypeScript, SQL, Python, R, C++, C#, Solidity",
        "Desarrollo de Software: Spring Boot, React, Angular, Nest, Strapi",
        "Bases de Datos: DB2, MongoDB, MySQL, PostgreSQL",
        "Otras Herramientas: Docker, GCP, Kubernetes, Jenkins",
        "Idiomas: Español (Nativo), Inglés (Avanzado)",
      ],
      workExperience: "Experiencia Laboral",
      workExperienceList: [
        {
          title: "Desarrollador Full Stack",
          company: "Digevo (Enero 2025 – Presente)",
          responsibilities: [
            "Desarrollando aplicaciones web dinámicas utilizando React.",
            "Integrando servicios backend con Strapi para una gestión eficiente de contenidos.",
            "Personalizando los servicios web de Strapi para necesidades únicas de los clientes.",
          ],
        },
        {
          title: "Desarrollador Full Stack",
          company: "Urba Digital (Junio 2024 – Diciembre 2024)",
          responsibilities: [
            "Desarrollando aplicaciones web dinámicas utilizando React.",
            "Integrando servicios backend con Strapi para una gestión eficiente de contenidos.",
            "Personalizando los servicios web de Strapi para necesidades únicas de los clientes.",
          ],
        },
        {
          title: "Desarrollador Full Stack",
          company: "Kontri.io (Feb 2024 – Mayo 2024)",
          responsibilities: [
            "Manejando migración de datos, ETL y scripts de integración de APIs.",
            "Utilizando servicios de GCP para optimizar el almacenamiento de datos y los flujos de trabajo.",
          ],
        },
        {
          title: "Desarrollador Full Stack",
          company: "Kruger Corporation (Enero 2021 – Diciembre 2023)",
          responsibilities: [
            "Desarrollando aplicaciones contenerizadas con Docker para escalabilidad.",
            "Diseñando, implementando y documentando APIs RESTful.",
            "Mejorando pipelines CI/CD para una entrega de software eficiente.",
          ],
        },
      ],
    },
  },
};

i18n
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language when translations are not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
