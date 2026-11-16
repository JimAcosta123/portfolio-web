import { profile } from './profile';

export interface Project {
  name: string;
  repo: string;
  summary: string;
  stack: string[];
  highlights: string[];
  category: 'Full stack' | 'Backend' | 'Frontend';
}

const gh = (repo: string) => `https://github.com/${profile.githubUser}/${repo}`;

export const projects: Project[] = [
  {
    name: 'FinTrack',
    repo: gh('fintrack'),
    category: 'Full stack',
    summary: 'Gestor de finanzas personales: ingresos, gastos por categoria, resumen mensual y graficos de tendencia.',
    stack: ['React', 'TypeScript', 'Recharts', '.NET 8', 'EF Core', 'SQLite', 'xUnit', 'Vitest'],
    highlights: ['Migraciones EF Core y pruebas de integracion con WebApplicationFactory', 'Aislamiento de datos por usuario', 'CI con dos jobs (backend y frontend)'],
  },
  {
    name: 'CitaFacil API',
    repo: gh('citafacil-api'),
    category: 'Backend',
    summary: 'Reserva de citas para negocios de servicios con deteccion de solapamientos, disponibilidad y roles.',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'Flyway', 'PostgreSQL', 'JUnit 5', 'Mockito', 'Docker'],
    highlights: ['Roles ADMIN/CLIENT con @PreAuthorize', 'Reglas de negocio probadas con reloj fijo', 'Esquema versionado con Flyway'],
  },
  {
    name: 'LinkShort API',
    repo: gh('linkshort-api'),
    category: 'Backend',
    summary: 'Acortador de URLs con alias, expiracion y estadisticas de clics.',
    stack: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Zod', 'Jest', 'Supertest', 'Docker'],
    highlights: ['Validacion de entrada y de variables de entorno con Zod', 'Rate limiting y cabeceras de seguridad', '23 pruebas automatizadas'],
  },
  {
    name: 'TaskFlow',
    repo: gh('taskflow-mern'),
    category: 'Full stack',
    summary: 'Gestor de proyectos y tareas con autenticacion, construido con el stack MERN.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    highlights: ['Rutas protegidas en backend y frontend', 'CRUD de proyectos y tareas por usuario'],
  },
  {
    name: 'BiblioTech API',
    repo: gh('bibliotech-api'),
    category: 'Backend',
    summary: 'API de gestion de biblioteca: catalogo, usuarios y prestamos con control de disponibilidad.',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA', 'H2 / PostgreSQL', 'Swagger'],
    highlights: ['Arquitectura en capas', 'Autenticacion JWT', 'Documentacion OpenAPI'],
  },
  {
    name: 'ShopApi',
    repo: gh('shopapi-dotnet'),
    category: 'Backend',
    summary: 'API de e-commerce con catalogo, pedidos y descuento de stock transaccional.',
    stack: ['C#', 'ASP.NET Core 8', 'EF Core', 'SQLite', 'JWT', 'Swagger'],
    highlights: ['Validacion de stock al crear pedidos', 'Swagger con autorizacion JWT'],
  },
  {
    name: 'Portfolio Web',
    repo: gh('portfolio-web'),
    category: 'Frontend',
    summary: 'Este sitio: portafolio responsive con tema claro/oscuro, desplegado automaticamente en GitHub Pages.',
    stack: ['React', 'TypeScript', 'Vite', 'GitHub Actions', 'GitHub Pages'],
    highlights: ['Contenido centralizado en archivos de datos', 'Despliegue continuo en cada push'],
  },
];
