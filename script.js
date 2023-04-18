
let nu1, nu2;
let activador;

window.nuevaSuma=function(){
  localStorage.removeItem('nu1');
  localStorage.removeItem('nu2');
  localStorage.removeItem('activador');
  activador=1;
  nu1=parseInt(Math.random()*10);
  nu2=parseInt(Math.random()*10);
  localStorage.setItem("numer1",nu1);
  localStorage.setItem("numer2",nu2);
  localStorage.setItem("activador",activador);
}

window.nuevaResta=function(){
  localStorage.removeItem('nu1');
  localStorage.removeItem('nu2');
  localStorage.removeItem('activador');
  activador=2;
  nu1=parseInt(Math.random()*5+5);
  nu2=parseInt(Math.random()*5);
  localStorage.setItem("numero1",nu1);
  localStorage.setItem("numero2",nu2);
  localStorage.setItem("activador",activador);
}

window.nuevoProducto=function(){
  localStorage.removeItem('nu1');
  localStorage.removeItem('nu2');
  localStorage.removeItem('activador');
  activador=3;
  nu1=parseInt(Math.random()*10);
  nu2=parseInt(Math.random()*10);
  localStorage.setItem("numerr1",nu1);
  localStorage.setItem("numerr2",nu2);
  localStorage.setItem("activador",activador);
}

/*function opcionDivision(){
  msj_correccion.innerHTML="";
  activarBoton("division");
  operacion_actual="/";
  operacion.innerHTML=" / ";
  nuevaDivision();
}*/

window.nuevaDivision=function(){
  localStorage.removeItem('nu1');
  localStorage.removeItem('nu2');
  localStorage.removeItem('activador');
  activador=4;
  let divisor=[];

  nu1=parseInt(Math.random()*9+1);

  //buscar divisores del número generado
  for (var i = 1; i <= nu1; i++) {
    if (nu1%i === 0) {// es divisor
      divisor.push(i);
    }
  }
  //seleccionamos un posi aleatoria de los números que son divisores
  let posi = parseInt(Math.random()*(divisor.length));
  nu2=divisor[posi];
  localStorage.setItem("numb1",nu1);
  localStorage.setItem("numb2",nu2);
  localStorage.setItem("activador",activador);
}

/*respuestaUser.onkeydown = function(e){
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13) {
        validar();
    }
}*/

/*function activarBoton(idBoton){
  document.getElementById("suma").ClassName="";
  document.getElementById("resta").ClassName="";
  document.getElementById("producto").ClassName="";
  document.getElementById("division").ClassName="";
  document.getElementById(idBoton).ClassName="activado";
}*/
