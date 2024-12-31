import Section from './Section';

function WorkExperience() {
  return (
    <Section title="Work Experience">
      <ul style={{ paddingLeft: '20px' }}>
      <li>
          <strong>Full Stack Developer</strong><br />
          Digevo (January 2025 – Present)<br />
          <ul>
            <li>Developing dynamic web applications using React.</li>
            <li>Integrating backend services with Strapi for efficient content management.</li>
            <li>Customizing Strapi web services for unique client needs.</li>
          </ul>
        </li>
        <li>
          <strong>Full Stack Developer</strong><br />
          Urba Digital (June 2024 – December 2024)<br />
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
    </Section>
  );
}

export default WorkExperience;
