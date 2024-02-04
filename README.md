# porfolio-json

Este proyecto es una página web que facilita la creacion de un cv atraves de un json,
ademas de que se puede imprimir, una forma facil de hacer tu cv.

## Recursos 📖

Esquema del cv: [jsonresume](https://jsonresume.org/schema/)

Iconos: [matetrial desing icons](https://pictogrammers.com/docs/library/mdi/getting-started/)

Vue3: [vue](https://vuejs.org/)

Ninja Keys: [ninja keys](https://github.com/ssleptsov/ninja-keys)

## Requerimientos 👌

- Node.js 12.0.0 o superior
- npm 6.0.0 o superior

## Uso 🚀

si desea solo editar el cv puede editar el archivo `cv.json`

## Instalación 🔧

```bash
npm install
```

## Ejecución 📦

```bash
npm run dev
```

## Compilación 🛠️

```bash
npm run build
```

## Entorno de desarrollo 🛠️

Remombra el archivo `.env.example` por `.env.local`

puedes especificar la ruta del archivo json que contiene el cv en español o ingles

```env
PATH_CV_ES=./.curriculum/yours-cv-es.json
```

*por defecto el archivo  en español se carga de `./cv.json`*

```env
PATH_CV_EN=./.curriculum/yours-cv-es.json
```

*por defecto el archivo  en ingles se carga de `./cv-en.json`*

## Features 📋

- [x] Crear un cv a partir de un json
- [x] Imprimir el cv
- [x] Multilenguaje (español, ingles)
- [ ] Editar el cv
- [ ] Responsive

## Previsualización 📷

![image](./porfolio-json.gif)
