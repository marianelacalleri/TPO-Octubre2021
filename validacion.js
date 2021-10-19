window.onload = iniciar; 

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
  var elemento = document.getElementById('nombre');
  if (elemento.value ==''){
    alert('El campo nombre está vacío');
    return false
  }
  return true;
}

function valida_apellido() {
  var elemento = document.getElementById('apellido');
  if (elemento.value ==''){
    alert('El campo apellido está vacío');
    return false
  }
  return true;
}

function valida_mail() {
var elemento = document.getElementById('floatingInput');
if (elemento.value ==''){
  alert('El campo apellido está vacío');
  return false
}
return true;
}


function validate(e){
  if(valida_nombre() && valida_apellido() && valida_mail() && confirm('¿Desea enviar el formulario?')){
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}