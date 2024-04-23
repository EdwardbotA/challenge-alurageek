<h1 align="center"> Alura Geek </h1>

![Logo de Alura Geek](https://github.com/EdwardbotA/challenge-alurageek/blob/main/assets/logo.png?raw=true)


<p align="center">
<img src="https://img.shields.io/badge/STATUS-TERMINADO-purple?style=for-the-badge&logo=github&logoColor=red">
</p>

Pagina desplegada: [Pagina desplegada aqui](https://edwardbota.github.io/challenge-alurageek/)

## Índice

* [Título e imagen de portada](#Título-e-imagen-de-portada)

* [Insignias](#insignias)

* [Índice](#índice)

* [Descripción del proyecto](#descripción-del-proyecto)

* [Estado del proyecto](#Estado-del-proyecto)

* [Características de la aplicación y demostración](#Características-de-la-aplicación-y-demostración)

* [Acceso al proyecto](#acceso-proyecto)

* [Tecnologías utilizadas](#tecnologías-utilizadas)

* [Personas-Desarrolladores del Proyecto](#personas-desarrolladores)

* [Conclusión](#conclusión)

## Descripción del proyecto

Es una aplicación para la practica del uso de JavaScript, HTML y CSS con el uso de la dependencia JSON server la cual sirve como servidor local para almacenar productos con un nombre, precio, una id única y una URLde la imagen del producto.


## Estado del proyecto

📚 Proyecto terminado pero puede ser mejorado 📚

## Características de la aplicación y demostración

- `Funcionalidad 1`: Cuenta con un formulario el cual sirve para enviar los datos de los productos a la base de datos.

![formulario](https://github.com/EdwardbotA/challenge-alurageek/blob/main/assets/form.png?raw=true)

- `Funcionalidad 1a`: Ejecuta una verificación de los campos para que puedas ver los productos correctamente una vez renderizados.

![verificacion de formulario](https://github.com/EdwardbotA/challenge-alurageek/blob/main/assets/form-veriftication.png?raw=true)

- `Funcionalidad 2`: Renderiza los productos enviados con los datos enviado desde el formulario trayéndolos desde el server local.

![renderizado de productos](https://github.com/EdwardbotA/challenge-alurageek/blob/main/assets/render.png?raw=true)

- `Funcionalidad 3`: Te permite eliminar cualquier productos con hacer click en la caneca de basura.

![eliminar productos](https://github.com/EdwardbotA/challenge-alurageek/blob/main/assets/delete.png?raw=true)

## 📋 Acceso al proyecto

Para poder hacer uso del proyecto tienes que simular un servidor local y puedes hacer uso de [json-Server](https://www.npmjs.com/package/json-server) para ello es necesario de [Node.js](https://nodejs.org/en) así que descárgalos.

Crea una carpeta donde vas a crear un archivo .json 

`db.json`

Luego ejecuta el siguientes comandos en la terminal en la misma ruta donde esta el archivo anterior.

`npm init -y`

`npm install json-server`

`npx json-server --watch db.json --port 3001`

Ya hecho estos pasos puedes ver en funcionamiento la aplicación si no quieres clonar el proyecto.

De lo contrario lo puedes clonar.

`git clone https://github.com/EdwardbotA/challenge-alurageek.git`

`npm install`

`npm run serve`

## Tecnologías utilizadas

- JavaScript
- HTML
- CSS
- json-server

## Personas-Desarrolladores del Proyecto

[<img src="https://avatars.githubusercontent.com/u/118316144?v=4" width=100><br><sub>Edward Botello</sub>](https://github.com/EdwardbotA)

## Conclusión

Este proyecto fue desarrollado siguiendo los estilos propuestos por [Alura Latam](https://www.aluracursos.com/) como parte del programa [ONE - Oracle Next Education](https://www.oracle.com/co/education/oracle-next-education/) para la ruta de Front-end Colombia 2024
