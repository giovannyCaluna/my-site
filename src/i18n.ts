// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

interface WorkExperienceItem {
  title: string;
  company: string;
  country: string;
  modality: string;
  responsibilities: string[];
}

interface Resources {
  [key: string]: {
    translation: {
      home: string;
      welcome: string;
      hobbies: string;
      hobbies_description: string;
      greeting: string;
      thesis: string;
      start: string;
      explore: string;
      certifications: string;
      cert1: string;
      cert2: string;
      cert3: string;
      education: string;
      education_subtitle: string;
      degree1: string;
      institution1: string;
      thesis1: string;
      description1: string;
      degree2: string;
      institution2: string;
      thesis2: string;
      description2: string;
      email: string;
      phone: string;
      location: string;
      interests: string;
      interestsContent: string;
      profile: string;
      profileContent: string;
      skills: string;
      skills_subtitle: string;
      skillsList: string[];
      workExperience: string;
      workExperience_subtitle: string;

      workExperienceList: WorkExperienceItem[];

    };
  };
}

const resources: Resources = {
  en: {
    translation: {
      home: "Home",
      hobbies: "Hobbies",
      hobbies_description: "Throughout my life, I have explored various physical activities, including gym workouts, CrossFit, and calisthenics. While studying in Hungary, I developed a passion for dance, particularly Bachata and Salsa.",
      welcome: "Welcome to my personal blog!",
      greeting: "  Hi! I’m Giovanny Caluña, a passionate software developer with expertise in Java, TypeScript, React, and more. I have a strong background in computer science and specialize in creating efficient, reliable solutions in the financial systems domain. Explore my work, connect with me, and let’s build something amazing together!",
      start: "Start",
      thesis: "Thesis",
      explore: "Explore",
      certifications: "Certifications",
      cert1: "Google Cloud Associate Cloud Engineer (Jan 2022)",
      cert2: "SQL for Data Analysis Masterclass (Udemy, July 2021)",
      cert3: "Practical Test-Driven Development for Java Programmers (Udemy, March 2021)",
      education: "Education",
      education_subtitle: "My higher education journey was marked by two transformative stages that allowed me to grow both professionally and personally.",
      degree1: "MSc in Computer Science",
      institution1: "University of Szeged, Hungary (2022-2024)",
      thesis1: "Privacy-Based Blockchain Electronic Voting System",
      description1: "In 2022, I was honored to receive the Stipendium Hungaricum, a prestigious scholarship from the Hungarian government. This incredible opportunity allowed me to advance my academic development while experiencing the rich culture and history of Europe.",
      degree2: "BSc in Information Technology",
      institution2: "Yachay Tech University, Ecuador (2014-2020)",
      thesis2: "Classification of Plant Leaf Diseases Using Deep Learning Techniques",
      description2: "In 2014, a new university was founded in Ecuador. Driven by a desire to explore opportunities beyond traditional universities, I moved from Quito to Urcuquí. Yachay Tech University was created with the mission of advancing research and innovation in Ecuador. This transformative experience allowed me to learn from world-class professors and collaborate with exceptionally talented peers. Undoubtedly, Yachay Tech reshaped my perspective and became the cornerstone of my professional career and personal growth.",
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
      skills_subtitle: "Throughout my academic journey and professional experience, I have acquired and honed a diverse set of skills across various programming languages, tools, and technologies. Below are some of the key competencies I offer",
      workExperience: "Work Experience",
      workExperience_subtitle: "After completing my bachelor's degree, I secured my first job during the challenging times of the pandemic.",
      workExperienceList: [
        {
          title: "Full Stack Developer",
          company: "Digevo (January 2025 – Present)",
          country: "Chile",
          modality: "Remote",
          responsibilities: [
            "Integrate MercadoPago payments using React nad Node JS",
            "Stablish strategies to recover and increase subscription payments",
            "Customizing a wordpress theme for a client",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Urba Digital (June 2024 – December 2024)",
          country: "Ecuador",
          modality: "Remote",
          responsibilities: [
            "Developing dynamic web applications using React.",
            "Integrating backend services with Strapi for efficient content management.",
            "Customizing Strapi web services for unique client needs.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Kontri.io (Feb 2024 – May 2024)",
          country: "Hungary",
          modality: "Remote",
          responsibilities: [
            "Handled data migration from cryptocurrencies platforms with Nest js.",
            "Utilized GCP services to optimize data storage and workflows.",
            "Desing and develop components in React with material UI.",
          ],
        },
        {
          title: "Intenrship",
          company: "University of Szeged (Software Development Deparment) (December 2023 – January 2024)",
          country: "Hungary",
          modality: "Remote",
          responsibilities: [
            " Designed and developed a comprehensive web application for student internship registrations, meeting all functional requirements.",
            "Deployed and debugged applications using Google Firebase services, ensuring a smooth user experience.",
            "Applied Object-Oriented Analysis and Design principles to achieve modular and scalable solutions.",
            "Documented all development phases, ensuring clarity and maintainability for future iterations.",
            "Utilized GCP services to optimize data storage and workflows."
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Kruger Corporation (Jan 2021 – Dec 2023)",
          country: "Ecuador",
          modality: "Remote",
          responsibilities: [
            "Led Java-based application development in a containerized environment (Docker), enhancing scalability and efficiency.",
            "Optimized Cron Jobs with Java Threads for improved operational performance.",
            "Designed and implemented database architectures, improving data consistency and application performance.",
            " Enhanced CI/CD pipelines to streamline software deployment and ensure system reliability.",
            "Delivered well-documented RESTful APIs, adhering to industry best practices.",
            "Collaborated with product and QA teams to resolve critical issues and improve system reliability.",
            "Implemented and managed RabbitMQ for message queuing, facilitating asynchronous processing and improving system responsiveness."
          ],
        },
      ],
    },
  },
  es: {
    translation: {
      home: "Inicio",
      hobbies: "Pasatiempos",
      hobbies_description: "A lo largo de mi vida, he explorado diversas actividades físicas, como entrenamientos en el gimnasio, CrossFit y calistenia. Durante mis estudios en Hungría, desarrollé una pasión por el baile, especialmente Bachata y Salsa.",
      welcome: "Bienvenido a mi blog personal",
      greeting: "¡Hola! Soy Giovanny Caluña, un apasionado desarrollador de software con experiencia en Java, TypeScript, React y más. Tengo una sólida formación en informática y me especializo en la creación de soluciones eficientes y confiables en el ámbito de los sistemas financieros. ¡Explora mi trabajo, conéctate conmigo y construyamos algo increíble juntos!",
      start: "Iniciar",
      thesis: "Tesis",
      explore: "Explorar",
      certifications: "Certificaciones",
      cert1: "Google Cloud Associate Cloud Engineer (Ene 2022)",
      cert2: "SQL para el Análisis de Datos Masterclass (Udemy, Julio 2021)",
      cert3: "Desarrollo Orientado a Pruebas para Programadores Java (Udemy, Marzo 2021)",
      education: "Educación",
      education_subtitle: "Mi trayectoria en la educación superior estuvo marcada por dos etapas transformadoras que me permitieron crecer tanto profesional como personalmente.",
      degree1: "Máster en Ciencias de la Computación",
      institution1: "Universidad de Szeged, Hungría (2022-2024)",
      thesis1: "Sistema de Votación Electrónica Blockchain Enfocado en Privacidad",
      description1: "En 2022, tuve el honor de recibir el Stipendium Hungaricum, una prestigiosa beca del gobierno húngaro. Esta increíble oportunidad me permitió avanzar en mi formación académica mientras disfrutaba de la rica cultura e historia de Europa.",
      degree2: "Ingeniería en Tecnologías de la Información",
      institution2: "Universidad Yachay Tech, Ecuador (2014-2020)",
      thesis2: "Clasificación de Enfermedades de Hojas de Plantas Usando Técnicas de Aprendizaje Profundo",
      description2: "En 2014, se fundó una nueva universidad en Ecuador. Impulsado por el deseo de explorar oportunidades más allá de las universidades tradicionales, me mudé de Quito a Urcuquí. La Universidad Yachay Tech fue creada con la misión de impulsar la investigación y la innovación en Ecuador. Esta experiencia transformadora me permitió aprender de profesores de clase mundial y colaborar con compañeros excepcionalmente talentosos. Sin lugar a dudas, Yachay Tech transformó mi perspectiva y se convirtió en la piedra angular de mi carrera profesional y mi crecimiento personal.",
      email: "Correo electrónico: giovannycaluna@gmail.com",
      phone: "Teléfono: +36707859869",
      location: "Ubicación: Szeged, Hungría",
      interests: "Intereses",
      interestsContent: "Blockchain, IA/ML, Aplicaciones Descentralizadas, Tendencias Tecnológicas",
      profile: "Perfil",
      profileContent: "Científico informático dinámico y adaptable con un historial comprobado en desarrollo de software y personalización de modelos de IA/ML. Hábil en Java (Spring Boot), TypeScript (React, Angular, Nest), Python y R, con experiencia en aplicaciones web descentralizadas (Blockchain, Web3). Altamente motivado y dispuesto a reubicarse, listo para contribuir a proyectos innovadores.",
      skills: "Habilidades",
      skills_subtitle: "A lo largo de mi trayectoria académica y experiencia profesional, he adquirido y perfeccionado un conjunto diverso de habilidades en varios lenguajes de programación, herramientas y tecnologías. A continuación, se presentan algunas de las competencias clave que ofrezco",
      skillsList: [
        "Lenguajes de Programación: Java, TypeScript, SQL, Python, R, C++, C#, Solidity",
        "Desarrollo de Software: Spring Boot, React, Angular, Nest, Strapi",
        "Bases de Datos: DB2, MongoDB, MySQL, PostgreSQL",
        "Otras Herramientas: Docker, GCP, Kubernetes, Jenkins",
        "Idiomas: Español (Nativo), Inglés (Avanzado)",
      ],
      workExperience: "Experiencia Laboral",
      workExperience_subtitle: "Después de completar mis estudios de ingeniería, conseguí mi primer empleo durante los  desafiantes tiempos de la pandemia.",

      workExperienceList: [
        {
          "title": "Desarrollador Full Stack",
          "company": "Digevo (Enero 2025 – Presente)",
          "country": "Chile",
          "modality": "Remoto",
          "responsibilities": [
            "Integración de pagos con MercadoPago utilizando React y Node.js.",
            "Diseño e implementación de estrategias para recuperar y aumentar los pagos de suscripción.",
            "Personalización de un tema de WordPress para un cliente."
          ]
        },
        {
          "title": "Desarrollador Full Stack",
          "company": "Urba Digital (Junio 2024 – Diciembre 2024)",
          "country": "Ecuador",
          "modality": "Remoto",
          "responsibilities": [
            "Desarrollo de aplicaciones web dinámicas utilizando React.",
            "Integración de servicios backend con Strapi para una gestión eficiente de contenido.",
            "Personalización de servicios web de Strapi para necesidades únicas de los clientes."
          ]
        },
        {
          "title": "Desarrollador Full Stack",
          "company": "Kontri.io (Febrero 2024 – Mayo 2024)",
          "country": "Hungría",
          "modality": "Remoto",
          "responsibilities": [
            "Migración de datos desde plataformas de criptomonedas utilizando Nest.js.",
            "Optimización del almacenamiento de datos y flujos de trabajo mediante servicios de GCP.",
            "Diseño y desarrollo de componentes en React con Material UI."
          ]
        },
        {
          "title": "Practicante",
          "company": "Universidad de Szeged (Departamento de Desarrollo de Software) (Diciembre 2023 – Enero 2024)",
          "country": "Hungría",
          "modality": "Remoto",
          "responsibilities": [
            "Diseño y desarrollo de una aplicación web integral para el registro de prácticas estudiantiles, cumpliendo con todos los requisitos funcionales.",
            "Despliegue y depuración de aplicaciones utilizando servicios de Google Firebase, garantizando una experiencia de usuario fluida.",
            "Aplicación de principios de análisis y diseño orientado a objetos para lograr soluciones modulares y escalables.",
            "Documentación de todas las fases de desarrollo para garantizar claridad y mantenibilidad.",
            "Optimización del almacenamiento de datos y flujos de trabajo mediante servicios de GCP."
          ]
        },
        {
          "title": "Desarrollador Full Stack",
          "company": "Kruger Corporation (Enero 2021 – Diciembre 2023)",
          "country": "Ecuador",
          "modality": "Remoto",
          "responsibilities": [
            "Liderazgo en el desarrollo de aplicaciones basadas en Java en un entorno contenedor (Docker), mejorando la escalabilidad y eficiencia.",
            "Optimización de trabajos Cron utilizando hilos en Java para un mejor rendimiento operativo.",
            "Diseño e implementación de arquitecturas de bases de datos, mejorando la consistencia de datos y el rendimiento de las aplicaciones.",
            "Mejora de las canalizaciones de CI/CD para agilizar el despliegue de software y garantizar la fiabilidad del sistema.",
            "Entrega de APIs RESTful bien documentadas, cumpliendo con las mejores prácticas de la industria.",
            "Colaboración con equipos de producto y QA para resolver problemas críticos y mejorar la fiabilidad del sistema.",
            "Implementación y gestión de RabbitMQ para colas de mensajes, facilitando el procesamiento asíncrono y mejorando la capacidad de respuesta del sistema."
          ]
        }
      ]


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
