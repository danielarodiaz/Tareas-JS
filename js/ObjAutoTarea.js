let auto = {
  color: "",
  marca: "",
  encendido: function(){
    alert(`Su auto ${this.marca} ${this.color} esta encendido`);
  },
  apagado: function(){
    alert(`Su auto ${this.marca} ${this.color} esta apagado`)
  } 
}
let valor = confirm("Hola!! Desea ingresar datos de un auto?")
if(valor){
  auto.color = prompt("Ingrese el color del auto");
  auto.marca = prompt("Ingrese la marca del auto");
  let valor1 = prompt("Desea encender o apagar su auto?").toUpperCase();
  if(valor1 == "ENCENDER"){
    auto.encendido();
  }else{
    auto.apagado();
  }
}else{
  alert("Muchas gracias!");
}