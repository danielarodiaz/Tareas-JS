//-------------------------------Arreglos - CRUD-------------------------------------------------------------------

/*Practica lo visto en la última clase de arreglos armando un CRUD. Debes crear funciones que realicen las siguientes tareas:

◘Agregar títulos de películas en un arreglo llamado peliculas

◘Listar las películas en consola en orden alfabético

◘Filtrar películas por una palabra o término

◘Eliminar una película

◘Modificar el título de una película */

let peliculas = [];

let valor;
const agregarTitulos = (
  pelicula = prompt("Ingrese el nombre de una pelicula")
) => {
  peliculas.push(pelicula.toUpperCase());
  valor = confirm("¿Desea agregar otra pelicula?");
  while (valor) {
    pelicula = prompt("Ingrese el nombre de una pelicula");
    peliculas.push(pelicula.toUpperCase());
    valor = confirm("¿Desea agregar otra pelicula?");
  }
  alert("Termino de agregar peliculas. Gracias 😁");
  menu();
};
const listarPeliculas = () => {
  peliculas.sort();
  console.log("=======PELICULAS========");
  for (i = 0; i < peliculas.length; i++) {
    console.log(`${[i + 1]}. ${peliculas[i]}`);
  }
  menu();
};
const filtrarPeliculas = (
  termino = prompt("Ingrese la pelicula que desea buscar")
) => {
  if (termino) {
    let resultado = peliculas.filter((item) => {
      return item.includes(termino.toUpperCase());
    });
    if (resultado.length > 0) {
      console.log("=======PELICULAS ENCONTRADAS========");
      for (i = 0; i < resultado.length; i++) {
        console.log(`${[i + 1]}. ${resultado[i]}`);
      }
    } else {
      alert("No se encontraron coincidencias");
    }
  }
  menu();
};
const eliminarPeliculas = (
  pelicula = prompt("Ingrese la pelicula que desea borrar")
) => {
  if (pelicula) {
    let indice = peliculas.indexOf(pelicula.toUpperCase());
    if (indice > -1) {
      let validar = confirm(
        `Estas seguro que deseas eliminar la pelicula ${peliculas[indice]}?`
      );
      if (validar) {
        peliculas.splice(indice, 1);
        alert("Se elimino la pelicula correctamente.");
      }
    } else {
      alert("No se encontro la pelicula que desea eliminar.");
    }
  } else {
    alert("Se cancelo la operación.");
  }
  menu();
};
const modificarTitulo = (
  pelicula = prompt("Ingrese la pelicula que desea modificar")
) => {
  if (pelicula) {
    let indice = peliculas.indexOf(pelicula.toUpperCase());
    if (indice > -1) {
      let nuevoValor = prompt("Ingrese el nuevo nombre de la pelicula");
      if (nuevoValor) {
        peliculas.splice(indice, 1, nuevoValor.toUpperCase());
        alert("Su modificacion fue realizada con exito");
      } else {
        alert("Se cancelo la operación.");
      }
    } else {
      alert("No se encontro la pelicula que desea modificar.");
    }
  } else {
    alert("Se cancelo la operación.");
  }
  menu();
};

let opcion2;
const menu = () => {
  if (opcion1) {
    opcion2 = Number(
      prompt(
        "Coloque el nº de la opción que desea realizar:\n 1: Agregar peliculas \n 2: Listar Peliculas \n 3: Filtrar peliculas \n 4: Eliminar peliculas \n 5: Modificar nombre de una pelicula"
      )
    );
    if (isNaN(opcion2)) {
      alert("No ingreso un numero. Por favor ingrese la opcion correctamente.");
    } else {
      switch (opcion2) {
        case 1:
          agregarTitulos();
          break;
        case 2:
          listarPeliculas();
          break;
        case 3:
          filtrarPeliculas();
          break;
        case 4:
          eliminarPeliculas();
          break;
        case 5:
          modificarTitulo();
          break;
        default:
          if(!opcion2){
            alert("Muchas gracias. Hasta pronto!");
          }else{
            alert("La opcion elegida no es válida");
            menu();
          }
          break;
      }
    }
  } else {
    alert("Muchas gracias. Hasta pronto!");
  }
};

let opcion1 = confirm(
  "¡Hola Bienvenid@ a este programa de peliculas!. Si desea continuar haga click en Aceptar."
);
menu();
