let nume1=document.querySelector("#num1");
let nume2=document.querySelector("#num2");
let operacion=document.querySelector("#operacion");
let respuestaUser=document.querySelector("#respuesta-user");
let nuevoIntento=document.querySelector("#nuevo-intento");
let msj_correccion = document.querySelector("#msjAciertos");

let operacion_actual;

let num1, num2;
let contador=0;
let correctas=0;

nuevoIntento.disabled=true;

let activadorr=localStorage.getItem("activador");

if (activadorr==1) {
  sumaGenerada();
  console.log("valgo 1");
}else if (activadorr==2) {
  restaGenerada();
  console.log("valgo 2");
}else if (activadorr==3) {
  multiplyGenerada();
  console.log("valgo 3");
}else if (activadorr==4) {
  divisionGenerada();
  console.log("valgo 4");
}else{
  //alert("Operación inexistente.")
}

function sumaGenerada(){
  operacion_actual="+";
  operacion.innerHTML=" + ";
  num1=localStorage.getItem("numer1");
  num2=localStorage.getItem("numer2");
  nume1.innerHTML=num1;
  nume2.innerHTML=num2;
  respuestaUser.focus();
  //sumaGenerada();
}

function restaGenerada(){
  operacion_actual="-";
  operacion.innerHTML=" - ";
  num1=localStorage.getItem("numero1");
  num2=localStorage.getItem("numero2");
  nume1.innerHTML=num1;
  nume2.innerHTML=num2;
  respuestaUser.focus();
  //restaGenerada();
}

function multiplyGenerada(){
  operacion_actual="*";
  operacion.innerHTML=" x ";
  num1=localStorage.getItem("numerr1");
  num2=localStorage.getItem("numerr2");
  nume1.innerHTML=num1;
  nume2.innerHTML=num2;
  respuestaUser.focus();
  //multiplyGenerada();
}

function divisionGenerada(){
  operacion_actual="/";
  operacion.innerHTML=" / ";
  num1=localStorage.getItem("numb1");
  num2=localStorage.getItem("numb2");
  nume1.innerHTML=num1;
  nume2.innerHTML=num2;
  respuestaUser.focus();
  //divisionGenerada();
}

function validar(){
  if (respuestaUser.value=="") {
    return;
  }

  let solucion;
  let operacion = num1 + operacion_actual + num2;
  solucion=eval(operacion);

  //probar el crear contador que lleve cuenta del número de operaciones y al llegar al límite crear puntuación que se muestre en pantalla y dependiendo del resultado agregar carita verde o roja. Al llegar al limite inicializar nuevamente el contador a 0 y no permitir que digite más respuestas y hacer aparecer botón de intentar otra vez.
  if (contador<=10) {
    if (respuestaUser.value==solucion) {
      correctas++;
    }

    if (operacion_actual=="+") {
      window.nuevaSuma();
      sumaGenerada();
    }else if (operacion_actual=="-") {
      window.nuevaResta();
      restaGenerada();
    }else if (operacion_actual=="*") {
      window.nuevoProducto();
      multiplyGenerada();
    }else if (operacion_actual=="/") {
      window.nuevaDivision();
      divisionGenerada();
    }
    respuestaUser.value="";
  }else {
    //alert("Acierto "+correctas+"/10");
    msjAciertos.innerHTML="Acierto "+correctas+"/10";
    respuestaUser.value="";
    //respuestaUser.readOnly = true;
    respuestaUser.disabled=true;
    nuevoIntento.disabled=false;
  }
  contador++;
}

function intentarDeNuevo(){
  contador=0;
  respuestaUser.disabled=false;
  nuevoIntento.disabled=true;
  msjAciertos.innerHTML="";
}

respuestaUser.onkeydown = function(e){
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13) {
        validar();
    }
}
