# Menús Expo - Proyecto de Aplicación Móvil

Este repositorio contiene el código fuente de una aplicación móvil desarrollada con **React Native** y **Expo**. El proyecto ha sido estructurado para mantener un código limpio, modular y escalable.

## 👨‍💻 Información del Desarrollador

*   **Nombre:** Josue Proaño
*   **Instituto:** ISTUJ
*   **Profile:** Desarrollador de Software

## 📂 Estructura del Proyecto

La estructura de carpetas y archivos principales de este proyecto es la siguiente:

```text
prueba_movil/
├── App.js                 # Punto de entrada principal de la aplicación.
├── app.json               # Configuración global del proyecto Expo.
├── package.json           # Dependencias y scripts del proyecto.
├── index.js               # Punto de entrada registrado en Expo.
├── assets/                # Imágenes, fuentes y otros recursos estáticos.
├── public/                # Archivos públicos para la web u otros entornos.
└── src/                   # Código fuente principal de la aplicación.
    ├── components/        # Componentes reutilizables de la interfaz de usuario.
    ├── navigation/        # Configuración de rutas y navegación de la app.
    ├── screens/           # Pantallas principales de la aplicación.
    └── utils/             # Funciones utilitarias y scripts de apoyo.
```

## 🚀 Tecnologías Utilizadas

*   [React Native](https://reactnative.dev/)
*   [Expo](https://expo.dev/)

## 🛠 Instalación y Configuración

Siga estos pasos para ejecutar el proyecto de forma local en su entorno de desarrollo:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/DinnZart/menus_expo.git
   ```

2. **Acceder al directorio del proyecto:**
   ```bash
   cd menus_expo
   ```

3. **Instalar las dependencias:**
   Asegúrese de tener en su equipo [Node.js](https://nodejs.org/) instalado. Luego, instale los paquetes necesarios (incluyendo React Navigation, Reanimated, Gesture handler, etc.):
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo:**
   Para levantar el proyecto en Expo, ejecute:
   ```bash
   npm start
   ```
   *(Este comando usará el script definido en el `package.json` que ejecuta `expo start`).*

Luego de iniciar el servidor, puede escanear el código QR generado en la terminal con la aplicación de **Expo Go** (disponible en Android e iOS) o usar las teclas de atajo de la terminal para abrir la aplicación en un emulador conectado (`a` para Android, `i` para iOS).
