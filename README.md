# Portfolio Web — Sitio personal (React + TypeScript + GitHub Pages)

[![Deploy](https://github.com/JimAcosta123/portfolio-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/JimAcosta123/portfolio-web/actions)

Sitio de portafolio personal, responsive y con tema claro/oscuro, que presenta mis proyectos, habilidades y datos de contacto. Se despliega automaticamente en **GitHub Pages** con cada push a `main`.

**Sitio en vivo:** https://JimAcosta123.github.io/portfolio-web/

## Caracteristicas

- Secciones: inicio, proyectos (con filtro por tipo), habilidades, sobre mi y contacto.
- Todo el contenido vive en dos archivos de datos (`src/data/profile.ts` y `src/data/projects.ts`): para actualizar el sitio no hace falta tocar componentes.
- Tema claro/oscuro: respeta la preferencia del sistema y recuerda la eleccion del visitante.
- Sin dependencias de UI: CSS propio con variables, grid y `clamp()` para tipografia fluida.
- Build estatico con Vite y despliegue continuo con GitHub Actions (`actions/deploy-pages`).

## Stack

React 18, TypeScript 5, Vite 5, GitHub Actions, GitHub Pages.

## Como correrlo en local

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # genera dist/
npm run preview      # sirve dist/ para revisarlo
```

## Personalizar

1. Edita `src/data/profile.ts`: nombre, rol, bio, email, `githubUser`, LinkedIn y (opcional) URL de tu CV.
2. Edita `src/data/projects.ts`: agrega o quita proyectos; `repo` usa `githubUser` automaticamente.
3. Cambia colores en `src/styles.css` (variables `--primary`, `--bg`, ...).

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub con el nombre `portfolio-web` (o el que quieras).
2. En el repo: **Settings > Pages > Build and deployment > Source: GitHub Actions**.
3. Haz push a `main`: el workflow `deploy.yml` construye el sitio con `VITE_BASE=/<nombre-del-repo>/` y lo publica.
4. La URL final aparece en la pestana **Actions** y en Settings > Pages.

> Si prefieres la URL raiz `https://JimAcosta123.github.io/`, nombra el repo `JimAcosta123.github.io` y cambia en `deploy.yml` la variable `VITE_BASE` a `/`.

---
Proyecto de portafolio de Jim Kleber Acosta Acosta, Desarrollador de Software (SENATI).
