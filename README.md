# Sintaxia // Proyecto React en Equipo (TP2)

Aplicación web desarrollada en React para la gestión y presentación del equipo, integrando componentes reutilizables, navegación con React Router, datos locales en formato JSON con filtros dinámicos, consumo de API pública y árbol de renderizado.

## 📋 Índice
1. [Enlace de Deploy](#-enlace-de-deploy)
2. [Integrantes del Equipo](#-integrantes-del-equipo)
3. [Tecnologías y Librerías](#️-tecnologías-y-librerías)
4. [Pantallas del Proyecto](#-pantallas-del-proyecto)
5. [Declaración de Uso de Inteligencia Artificial](#-declaración-de-uso-de-inteligencia-artificial-criterio-15)

---

## 🔗 Enlace de Deploy
- **Producción (Vercel):** [https://tp-2-five.vercel.app/](https://tp-2-five.vercel.app/)

---

## 👥 Integrantes del Equipo
- **Diego Rodriguez** — Lead Architect | [Perfil de GitHub](https://github.com/diegojrodriguez)
- **Brian Lavandera** — Fullstack Dev | [Perfil de GitHub](https://github.com/brianlavandera3)
- **Sergio Vargas** — QA Engineer | [Perfil de GitHub](https://github.com/SergioVargas101)
- **Cristian Villagra** — AI Engineer | [Perfil de GitHub](https://github.com/Crrisst)

---

## 🛠️ Tecnologías y Librerías
- **Framework / Runtime:** React + Vite
- **Navegación:** React Router DOM
- **Estilos:** CSS Modular / Variables temáticas (Cyberpunk HUD)
- **API Externa:** CoinCap API pública

---

## 📸 Pantallas del Proyecto

### 1. Portada
![Captura de la Portada](https://github.com/GRUPO-31/TP2/raw/main/public/Imagenes/1.png)  
Pantalla de inicio con estética cyberpunk, fondo animado tipo Matrix y accesos rápidos a las secciones principales.

### 2. Equipo & Perfiles
![Captura de Perfiles](https://github.com/GRUPO-31/TP2/raw/main/public/Imagenes/2.png)  
Grilla con los perfiles del equipo. Al seleccionar a un integrante, se muestran sus datos, habilidades y una consola de diagnóstico interactiva.

### 3. Catálogo de Recursos
![Captura del Catálogo](https://github.com/GRUPO-31/TP2/raw/main/public/Imagenes/3.png)  
Listado basado en un archivo JSON local con 20 registros. Permite buscar por texto, filtrar por categoría, ordenar y ver detalles en un modal.

### 4. Estación API Pública
![Captura de la API](https://github.com/GRUPO-31/TP2/raw/main/public/Imagenes/4.png)  
Monitoreo de criptomonedas en tiempo real mediante una API externa, con estados de carga, manejo de errores y un gráfico interactivo de precios.

### 5. Árbol de Componentes
![Captura del Árbol](https://github.com/GRUPO-31/TP2/raw/main/public/Imagenes/5.png)  
Esquema visual interactivo que muestra la estructura jerárquica y la organización de los componentes de React.

### 6. Bitácora Técnica
![Captura de Bitácora](https://github.com/GRUPO-31/TP2/raw/main/public/Imagenes/6.png)  
Registro cronológico del desarrollo del proyecto, hitos y correcciones organizados mediante paneles desplegables.

---

## 🤖 Declaración de Uso de Inteligencia Artificial (Criterio 15)

Para el desarrollo del proyecto se incorporaron herramientas de IA generativa discriminadas por integrante, aplicación, modelo y tarea:

| Integrante | Aplicación / Plataforma | Modelo Empleado | Tarea / Contenido Específico |
| :--- | :--- | :--- | :--- |
| **Diego Rodriguez** | OpenAI ChatGPT / Anthropic Claude | GPT-4o / Claude 3.5 Sonnet | Estructuración modular de componentes, lógica de la Bitácora y árbol de renderizado interactivo. |
| **Brian Lavandera** | OpenAI ChatGPT | GPT-4o | Configuración de rutas protegidas/dinámicas en React Router DOM y armado de la Sidebar responsiva. |
| **Sergio Vargas** | Google Gemini | Gemini 1.5 Pro | Validación de casos límite en filtros de búsqueda, manejo de estados de carga y errores de la API. |
| **Cristian Villagra** | Cursor / OpenAI ChatGPT | Claude 3.5 Sonnet / GPT-4o | Generación de prompts para estructura de datos JSON (20 registros) y estilización con estética Cyberpunk. |