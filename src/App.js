import './App.css';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header>
        <h1>Giovanny E. Caluña</h1>
        <p>Email: giovannycaluna@gmail.com | Phone: +36707859869 | Location: Szeged, Hungary</p>
      </header>

      <section>
        <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Profile</h2>
        <p>
          Dynamic and adaptable computer scientist with a proven track record in software development and AI/ML model customization. Skilled in Java (Spring Boot), TypeScript (React, Angular, Nest), Python, and R, with experience in decentralized web applications (Blockchain, Web3). Highly motivated and open to relocation, ready to contribute to innovative projects.
        </p>
      </section>

      <section>
        <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Skills</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Programming Languages: Java, TypeScript, SQL, Python, R, C++, C#, Solidity</li>
          <li>Software Development: Spring Boot, React, Angular, Nest, Strapi</li>
          <li>Databases: DB2, MongoDB, MySQL, PostgreSQL</li>
          <li>Other Tools: Docker, GCP, Kubernetes, Jenkins</li>
          <li>Languages: Spanish (Native), English (Advanced)</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Education</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <strong>MSc in Computer Science</strong><br />
            University of Szeged, Hungary (2022-2024)<br />
            Thesis: Privacy-Based Blockchain Electronic Voting System
          </li>
          <li>
            <strong>BSc in Information Technology</strong><br />
            Yachay Tech University, Ecuador (2014-2020)<br />
            Thesis: Classification of Plant Leaf Diseases Using Deep Learning Techniques
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Work Experience</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <strong>Full Stack Developer</strong><br />
            Urba Digital (June 2024 – Present)<br />
            <ul>
              <li>Developing dynamic web applications using React.</li>
              <li>Integrating backend services with Strapi for efficient content management.</li>
              <li>Customizing Strapi web services for unique client needs.</li>
            </ul>
          </li>
          <li>
            <strong>Full Stack Developer</strong><br />
            Kontri.io (Feb 2024 – May 2024)<br />
            <ul>
              <li>Handled data migration, ETL, and API integration scripts.</li>
              <li>Utilized GCP services to optimize data storage and workflows.</li>
            </ul>
          </li>
          <li>
            <strong>Full Stack Developer</strong><br />
            Kruger Corporation (Jan 2021 – Dec 2023)<br />
            <ul>
              <li>Developed containerized applications with Docker for scalability.</li>
              <li>Designed, implemented, and documented RESTful APIs.</li>
              <li>Enhanced CI/CD pipelines for efficient software delivery.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Certifications</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Google Cloud Associate Cloud Engineer (Jan 2022)</li>
          <li>SQL for Data Analysis Masterclass (Udemy, July 2021)</li>
          <li>Practical Test-Driven Development for Java Programmers (Udemy, March 2021)</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Interests</h2>
        <p>Blockchain, AI/ML, Decentralized Applications, Technology Trends</p>
      </section>
    </div>
  );
}

export default App;
