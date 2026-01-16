export const skillsData = {
  frontend: {
    title: 'FRONT-END',
    description: `• At ASML, I developed over three Power BI dashboards and conducted workshops to transfer Power BI and automation expertise to the Korean team, enabling them to effectively utilize these tools. Additionally, I have extensive experience with FineReport, having completed more than 10 projects using the platform.

• Utilized Fanruan products to develop JavaScript and CSS-based solutions, enabling interactive 3D model visualization with GLB and GeoJSON formats.

• Implemented API integrations and AI systems for perspective switching and advanced functionality in smart building and factory management.`,
    skills: [
      { name: 'POWER BI / FineReport / FineBI / Power Query', percent: 95 },
      { name: 'JAVASCRIPT', percent: 90 },
      { name: 'HTML / CSS', percent: 75 },
    ],
    color: 'green',
  },
  backend: {
    title: 'BACK-END',
    description: `• Extensively utilized SQL in professional roles to process cross-industry data, including in the finance, accounting, and manufacturing sectors. Proficient in database design and development, including stored procedures, triggers, and views.

• Self-taught extensively through platforms like Coursera and DataCamp. Proficient in using Pandas and NumPy for data analysis and processing. Developed projects in stock backtesting and data visualization.

• At Fanruan, assisted a university in Macau by designing and implementing data integration solutions, building data warehouses and pipelines.

• Gained foundational knowledge in object-oriented programming through Coursera courses. Understands design patterns and data structures, with the ability to develop and maintain basic applications.`,
    skills: [
      { name: 'MS SQL Server / ORACLE SQL / MySQL', percent: 93 },
      { name: 'Python (Pandas/Numpy) / Excel VBA / R', percent: 80 },
      { name: 'Kettle / FineDataLink', percent: 75 },
      { name: 'Java / C++', percent: 35 },
    ],
    color: 'blue',
  },
  other: {
    title: 'OTHER',
    description: `• Experienced in deploying and managing Fanruan products on WildFly and Tomcat servers, including troubleshooting deployment issues.

• Proficient in Linux server setup and management:
  - Worked with multiple distributions including Ubuntu, CentOS, Rocky Linux, and Debian
  - Assisted clients with product deployment on Linux systems
  - Configured server environments for optimal performance

• Implemented high-availability solutions using Nginx and Keepalived:
  - Set up server clusters for improved reliability and performance
  - Configured automatic failover mechanisms
  - Implemented load balancing across multiple servers
  - Ensured system stability under heavy workloads`,
    skills: [
      { name: 'Wildfly, Tomcat, Nginx, Keepalived', percent: 80 },
      { name: 'Linux (Ubuntu/CentOS/Rocky Linux/Debian)', percent: 65 },
      { name: 'GITHUB', percent: 60 },
    ],
    color: 'orange',
  },
};
