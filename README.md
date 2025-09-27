# Time Cup - Liga de CrossFit

Una liga online y presencial de CrossFit en formato competitivo, con seasons de 3-6 meses, categorías por nivel y equipos de 4 personas. Los equipos compiten semanalmente enviando sus resultados en vídeo, con revisiones oficiales y un sistema de ascensos/descensos entre divisiones.

## 🎯 Propuesta de Valor

- **Liga continua y estructurada** (seasons de 3 meses)
- **Formato accesible** (competiciones online + eventos presenciales opcionales)
- **Gamificación** (badges, logros, niveles, enfrentamientos directos)
- **Transparencia y validación** (vídeos revisados por jueces oficiales o boxes afiliados)
- **Comunidad** (equipos, suplentes, ascensos/descensos)

## 🏗️ Estructura de la Liga

### Temporadas

- **Seasons:** 3 meses (con opción de 6 meses)
- **Categorías:** RX, Intermedio, Escalado
- **Equipos:** 3 personas (2 hombres + 1 mujer) + 1 suplente opcional

### Formato de Competición

- Cada 2 semanas se publica un WOD en domingo
- Los equipos tienen dos semanas para grabar y enviar el vídeo
- Ranking semanal: 1º → 1 punto, 10º → 10 puntos
- Al final de la season, el mejor equipo asciende y el peor equipo desciende
- Enfrentamientos directos ocasionales (ganador +1 punto, perdedor +3 puntos)

### Premios

- Ganar la liga o quedar en última posición hace que subas o bajes de categoría
- El premio por subir es cuota gratis el siguiente trimestre

## 🚀 Tecnologías

Este proyecto está construido con:

- **[Astro](https://astro.build/)** - Framework web moderno para sitios estáticos
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[SCSS](https://sass-lang.com/)** - Preprocesador de CSS
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formateador de código

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd time-cup-landing
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno (si es necesario)

Crea un archivo `.env` en la raíz del proyecto si necesitas configurar variables de entorno:

```bash
cp .env.example .env
```

## 🚀 Comandos de Desarrollo

### Servidor de desarrollo

Inicia el servidor de desarrollo con recarga automática:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Construcción para producción

Genera la versión optimizada del sitio:

```bash
npm run build
```

### Vista previa de producción

Sirve la versión construida localmente:

```bash
npm run preview
```

### Formateo de código

Formatea todo el código del proyecto:

```bash
npm run format
```

Verifica el formato sin aplicar cambios:

```bash
npm run format:check
```

### Linting

Ejecuta el linter para verificar la calidad del código:

```bash
npm run lint
```

Corrige automáticamente los errores de linting:

```bash
npm run lint:fix
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Componentes de layout (Header, Footer)
│   ├── sections/       # Secciones de la página principal
│   └── ui/             # Componentes de interfaz básicos
├── content/            # Contenido y datos
├── layouts/            # Layouts de página
├── pages/              # Páginas del sitio
├── styles/             # Estilos SCSS organizados
│   ├── abstracts/      # Variables, mixins, funciones
│   ├── base/           # Estilos base y reset
│   └── components/     # Estilos de componentes
├── types/              # Definiciones de tipos TypeScript
└── utils/              # Utilidades y helpers
```

## 🎨 Estilos

El proyecto utiliza una combinación de **Tailwind CSS** y **SCSS**:

- **Tailwind CSS**: Para utilidades rápidas y componentes
- **SCSS**: Para estilos más complejos y organización modular

Los estilos SCSS están organizados siguiendo la metodología **7-1 pattern**:

- `abstracts/`: Variables, mixins y funciones
- `base/`: Reset, tipografía y estilos base
- `components/`: Estilos específicos de componentes

## 📝 Convenciones de Código

### TypeScript/JavaScript

- Usa TypeScript para todos los archivos `.ts` y `.astro`
- Sigue las reglas de ESLint configuradas
- Usa Prettier para el formateo automático

### Astro

- Usa componentes `.astro` para páginas y componentes
- Separa la lógica en el frontmatter (---)
- Mantén los componentes pequeños y reutilizables

### Estilos

- Usa SCSS para estilos complejos y organización
- Usa Tailwind para utilidades rápidas
- Sigue la convención de nombres BEM para clases CSS

## 🚀 Despliegue

El proyecto está configurado para desplegarse en:

- **Sitio de producción**: `https://timecupleague.com`

### Comandos de despliegue

```bash
# Construir para producción
npm run build

# Los archivos generados estarán en la carpeta dist/
```

## 🤝 Contribución

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios y commits: `git commit -m 'Agrega nueva funcionalidad'`
3. Push a la rama: `git push origin feature/nueva-funcionalidad`
4. Abre un Pull Request

## 📞 Contacto

Para más información sobre la liga o el proyecto, contacta con el equipo de desarrollo.

---

**¡Únete a la competencia y forma parte de la comunidad Time Cup!** 🏆
