# 💼 Portafolio - Milagros Belén Pedrasa

Portafolio profesional desarrollado con React y Tailwind CSS. Diseño moderno, minimalista y completamente responsive.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite&logoColor=white)

## ✨ Características

- ⚡️ **React 18** con Vite para desarrollo rápido
- 🎨 **Tailwind CSS** para estilos modernos y responsive
- 📱 **Diseño completamente responsive** (mobile, tablet, desktop)
- ✨ **Animaciones suaves** y transiciones elegantes
- 🎯 **Diseño minimalista** y profesional
- 🌙 **Tema oscuro** optimizado
- 🚀 **Performance optimizado** con Vite

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en: `http://localhost:5173`

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build         # Construye para producción
npm run preview       # Previsualiza build de producción
```

## 🛠️ Tecnologías

- **React 18.2.0** - Biblioteca de UI
- **Vite 5.0.8** - Build tool y dev server
- **Tailwind CSS 3.4.0** - Framework de CSS utility-first
- **React Icons** - Iconos para React
- **PostCSS** - Procesador de CSS

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   └── img/
│       └── CV-IMG.jpg          # Imagen de perfil
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación principal
│   │   ├── Hero.jsx            # Sección principal
│   │   ├── About.jsx           # Sobre mí
│   │   ├── Skills.jsx          # Habilidades técnicas
│   │   ├── Projects.jsx        # Proyectos destacados
│   │   ├── Contact.jsx         # Información de contacto
│   │   └── Footer.jsx          # Pie de página
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales y Tailwind
├── index.html                  # HTML principal
├── package.json                # Dependencias y scripts
├── tailwind.config.js          # Configuración de Tailwind
├── vite.config.js              # Configuración de Vite
└── README.md                   # Este archivo
```

## ⚙️ Configuración

### Actualizar Enlaces Sociales

Edita estos archivos para agregar tus enlaces:

1. **src/components/Hero.jsx** (líneas ~45-55)
2. **src/components/Contact.jsx** (líneas ~25-35)

Reemplaza:
- `https://github.com/tu-usuario` → Tu GitHub
- `https://linkedin.com/in/tu-perfil` → Tu LinkedIn

### Agregar Proyectos

Edita **src/components/Projects.jsx** y actualiza el array `projects`:

```jsx
const projects = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción breve del proyecto...',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    demo: 'https://tu-demo.com',
    github: 'https://github.com/tu-usuario/proyecto',
  },
  // Agrega más proyectos aquí
]
```

### Personalizar Colores

Los colores principales están en `tailwind.config.js`. Modifica la paleta `primary` y `dark` según tus preferencias.

## 📝 Checklist Antes de Publicar

- [ ] Actualizar enlaces de GitHub y LinkedIn
- [ ] Agregar tus proyectos reales con descripciones
- [ ] Verificar que la imagen de perfil se muestra correctamente
- [ ] Revisar y personalizar todos los textos
- [ ] Probar en diferentes dispositivos (responsive)
- [ ] Construir y probar la versión de producción (`npm run build`)
- [ ] Verificar que no hay errores en la consola

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 👤 Autor

**Milagros Belén Pedrasa**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
