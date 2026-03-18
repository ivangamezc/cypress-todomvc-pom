![Cypress Tests](https://github.com/ivangamezc/cypress-todomvc-pom/actions/workflows/main.yml/badge.svg)

# Cypress Automation Suite - TodoMVC 🚀

Este proyecto es una suite de pruebas automatizadas para la aplicación TodoMVC, desarrollada con **Cypress**. El repositorio muestra la evolución de una estrategia de pruebas, desde un enfoque básico hasta arquitecturas avanzadas.

🛠️ Tecnologías utilizadas
* Cypress: Framework de pruebas E2E.
* JavaScript: Lenguaje de programación.
* Cucumber (Gherkin): Metodología BDD para pruebas en lenguaje natural.
* Page Object Model (POM): Patrón de diseño para mejorar la mantenibilidad.

📂 Estructura del Proyecto
El proyecto está organizado en tres niveles de madurez:

1.  Nivel Básico (`cypress/e2e/test/basico/`): Scripts lineales para pruebas rápidas.
2.  Nivel POM (`cypress/support/pages/`): Uso de clases y selectores centralizados para evitar duplicidad de código.
3.  **Nivel BDD/Cucumber** (`cypress/e2e/test/features/`): Pruebas escritas en lenguaje humano (español) conectadas a la lógica de negocio.

🧪 Pruebas Automatizadas
La suite cubre el 100% de la lógica de TodoMVC:
* ✨ Creación: Agregar nuevas tareas.
* ✏️ Edición: Modificar tareas existentes mediante doble clic.
* 🗑️ Eliminación: Borrar tareas de la lista.
* ✅ Check/Uncheck: Marcar y desmarcar tareas como completadas.
* 🔍 Filtros: Visualización por estados (All, Active, Completed).

🤖 Integración Continua (CI/CD)
Este proyecto cuenta con un flujo de trabajo automatizado mediante **GitHub Actions**.

🛠️ Pipeline de Testing
Cada vez que se realiza un `push` o un `pull request` a la rama principal, se dispara un **Workflow** automático que realiza las siguientes tareas:
1.  **Entorno:** Levanta una máquina virtual con `ubuntu-latest`.
2.  **Instalación:** Configura Node.js y descarga todas las dependencias del proyecto.
3.  **Ejecución:** Lanza la suite completa de pruebas de **Cypress** en el navegador Chrome.
4.  **Validación:** Asegura que los tres niveles de prueba (Básico, POM y Cucumber) mantienen un estado de **PASS**.