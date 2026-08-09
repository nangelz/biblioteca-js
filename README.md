# Controle para Biblioteca em JS

## Sobre o projeto

Proyecto de consola en JavaScript que simula un sistema de gestión básica de biblioteca. Permite registrar libros, buscar por título o autor, listar libros disponibles, realizar préstamos y devoluciones, y mostrar estadísticas generales.

## Objetivo

Practicar conceptos y habilidades de programación en JavaScript:

- Variables y constantes
- Funciones
- Clases
- Módulos, importaciones y exportaciones
- Condicionales y control de flujo
- Manejo de datos en memoria
- Interacción por terminal

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/nangelz/biblioteca-js.git
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd biblioteca-js
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

Ejecuta el proyecto con Node.js:

```bash
node index.js
```

Sigue las indicaciones del menú para gestionar la biblioteca.

## Estructura del proyecto

```text
biblioteca-js/
├── README.md
├── package.json
├── package-lock.json
├── index.js
├── Livro.js
├── dadosLivros.js
├── buscarLivros.js
├── cadastrarLivro.js
├── listarLivros.js
├── listarDisponiveis.js
├── realizarEmprestimo.js
├── realizarDevolucao.js
├── exibirEstatisticas.js
└── node_modules/  # generado por npm install
```

## Descripción de archivos

- `index.js`: Punto de entrada y menú principal.
- `Livro.js`: Definición de la clase `Livro`.
- `dadosLivros.js`: Datos iniciales de libros.
- `cadastrarLivro.js`: Registro de nuevos libros.
- `buscarLivros.js`: Búsqueda de libros.
- `listarLivros.js`: Listado completo de libros.
- `listarDisponiveis.js`: Listado de libros disponibles.
- `realizarEmprestimo.js`: Préstamo de libros.
- `realizarDevolucao.js`: Devolución de libros.
- `exibirEstatisticas.js`: Estadísticas de la biblioteca.

