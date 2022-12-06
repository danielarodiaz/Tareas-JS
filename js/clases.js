class Persona {
  constructor(nombre, edad, dni="", sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGeneracion() {
    switch (
      true //Se coloca true para hacer comparaciones en cada case
    ) {
      case this.nacimiento <= 1948:
        console.log(
          "Perteneces a la generacion Silent Genertion y tu razgo caracteristico es la austeridad 😐"
        );
        break;
      case this.nacimiento <= 1968:
        console.log(
          "Perteneces a la generacion Baby Boom y tu razgo caracteristico es la ambicion 🤑"
        );
        break;
      case this.nacimiento <= 1980:
        console.log(
          "Perteneces a la generacion X y tu razgo caracteristico es la Obsecion por el exito 😎"
        );
        break;
      case this.nacimiento <= 1993:
        console.log(
          "Perteneces a la generacion Y millenials y tu razgo caracteristico es la Obsecion por el frustraccion 😣"
        );
        break;
      case this.nacimiento <= 2010:
        console.log(
          "Perteneces a la generacion Y millenials y tu razgo caracteristico es la irreverencia 😛"
        );
        break;
    }
  }
  mostrarDatos() {
    console.log("-----Informacion personal-------");
    for (const propiedad in this) {
      console.log(`${propiedad}: ${this[propiedad]}`);
    }
    // console.log(`Nombre: ${this.nombre}`)
    // console.log(`Edad: ${this.edad}`)
    // console.log(`DNI: ${this.dni}`)
    // console.log(`Sexo: ${this.sexo}`)
    // console.log(`Peso: ${this.peso}`)
    // console.log(`Altura: ${this.altura}`)
    // console.log(`Año de nacimiento: ${this.nacimiento}`)
  }
  generarDNI() {
    if (!this.dni) {
      for (let i = 0; i < 8; i++) {
        let numero = Math.round(Math.random() * 9); //Lo multiplico x 9 xq voy a redonder este numero, osea que no llegara a 9
        this.dni += String(numero);
      }
      console.log(`El DNI generado es: ${this.dni}`);
    } else {
      console.log("Ya tienes DNI");
    }
  }
  EsMayordeEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} eres mayor de edad`);
    }
  }
}

let jose = new Persona("Jose Gonzalez",60,"","Masculino",80,1.80,1974)

/*Crear una clase Libro que contenga al menos las siguientes propiedades:

ISBN

Título

Autor

Número de páginas

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/
class Libro{
  constructor(isbn, titulo, autor, paginas) {
    this.isbn = isbn;
    this.titulo =  titulo;
    this.autor = autor; 
    this.paginas = paginas;
  }
  mostrarLibro(){
    console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene paginas ${this.paginas}`)
  }
}
let libro1 = new Libro(9789872562021, "Saberse Amado, Saberse Capaz", "Ivan Pittaluga", 175)
let libro2 = new Libro(9789505864089, "Pensamientos y palabras de Carlo Acutis", "Francesco Popoli", 63)



if(libro1.paginas > libro2.paginas){
  console.log(`El libro ${libro1.titulo} tiene mas paginas.`);
}else{
  console.log(`El libro ${libro2.titulo} tiene mas paginas.`);
}

