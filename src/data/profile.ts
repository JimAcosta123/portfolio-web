// Edita este archivo con tus datos reales. Es el unico lugar donde se definen.
export const profile = {
  name: 'Jim Kleber Acosta Acosta',
  role: 'Desarrollador de Software Full Stack',
  tagline: 'Construyo APIs REST y aplicaciones web con Java, .NET, Node.js y React.',
  bio: [
    'Tecnico Profesional en Desarrollo de Software egresado de SENATI. Me enfoco en backend (Spring Boot, ASP.NET Core, Node.js/TypeScript) y en interfaces web con React.',
    'Me gusta escribir codigo claro, con pruebas automatizadas, documentacion y despliegues reproducibles con Docker y GitHub Actions.',
  ],
  location: 'Lima, Peru',
  email: 'jimkleberacostaacosta@gmail.com',
  githubUser: 'JimAcosta123',
  linkedin: 'https://www.linkedin.com/in/TU_PERFIL',
  cvUrl: '',
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['Java 17', 'Spring Boot 3', 'Spring Security', 'C# / .NET 8', 'ASP.NET Core', 'Node.js', 'Express', 'TypeScript'] },
  { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'HTML / CSS', 'Recharts'] },
  { group: 'Bases de datos', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'H2', 'JPA / Hibernate', 'EF Core', 'Mongoose', 'Flyway'] },
  { group: 'Calidad y DevOps', items: ['JUnit 5', 'Mockito', 'xUnit', 'Jest', 'Vitest', 'Docker', 'GitHub Actions', 'Git', 'Swagger / OpenAPI', 'JWT'] },
];
