# Sintaxia // Proyecto React en Equipo (TP2)

Aplicación web desarrollada en React para la gestión y presentación del equipo, integrando componentes reutilizables, navegación con React Router, datos locales en formato JSON con filtros dinámicos, consumo de API pública y árbol de renderizado.

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

## 📸 Índice y Pantallas del Proyecto

### 1. Portada
![Captura de la Portada](./ruta/a/tu/captura-portada.png)  
Panel central con efecto *glassmorphism* sobre un reactor holográfico 3D y fondo animado tipo Matrix. Presenta la identidad corporativa de Sintaxia, accesos rápidos y métricas de red reactivas al cursor.

### 2. Equipo & Perfiles
![Captura de Equipo](./ruta/a/tu/captura-equipo.png)  
Grilla interactiva estilizada con efectos CRT y escaneo láser. Al abrir un perfil, se despliegan habilidades, enlaces y una consola táctica que simula un escaneo del integrante en tiempo real.

### 3. Catálogo de Recursos
![Captura del Catálogo](./ruta/a/tu/captura-catalogo.png)  
Base de datos local (JSON) con 20 registros. Incluye buscador por texto, filtros por categoría, ordenamiento y un modal de inspección táctica que registra los clics de la sesión.

### 4. Estación API Pública
![Captura de la API](./ruta/a/tu/captura-api.png)  
Consumo de la API de CoinGecko para el monitoreo de criptomonedas. Muestra cotizaciones en vivo (manejando estados de carga y error) y un gráfico interactivo del historial de precios mediante Recharts.

### 5. Árbol de Componentes
![Captura del Árbol](./ruta/a/tu/captura-arbol.png)  
Esquema jerárquico interactivo que documenta la estructura real de componentes de React. Los nodos se pueden expandir y contraer para explorar la arquitectura.

### 6. Bitácora Técnica
![Captura de Bitácora](./ruta/a/tu/captura-bitacora.png)  
Registro cronológico de los hitos de desarrollo, decisiones de diseño y correcciones de código. Organizado mediante paneles desplegables y etiquetas de estado.


## 🤖 Declaración de Uso de Inteligencia Artificial (Criterio 15)

Para el desarrollo del proyecto se incorporaron herramientas de IA generativa discriminadas por integrante, aplicación, modelo y tarea:

| Integrante | Aplicación / Plataforma | Modelo Empleado | Tarea / Contenido Específico |
| :--- | :--- | :--- | :--- |
| **Diego Rodriguez** | OpenAI ChatGPT / Anthropic Claude | GPT-4o / Claude 3.5 Sonnet | Estructuración modular de componentes, lógica de la Bitácora y árbol de renderizado interactivo. |
| **Brian Lavandera** | OpenAI ChatGPT | GPT-4o | Configuración de rutas protegidas/dinámicas en React Router DOM y armado de la Sidebar responsiva. |
| **Sergio Vargas** | Google Gemini | Gemini 1.5 Pro | Validación de casos límite en filtros de búsqueda, manejo de estados de carga y errores de la API. |
| **Cristian Villagra** | Cursor / OpenAI ChatGPT | Claude 3.5 Sonnet / GPT-4o | Generación de prompts para estructura de datos JSON (20 registros) y estilización con estética Cyberpunk. |