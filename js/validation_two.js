function validarFormulario(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  let nombre = document.getElementById("name").value.trim();
  let apellido = document.getElementById("lastName").value.trim();
  let edad = document.getElementById("edad").value.trim();
  let dni = document.getElementById("dni").value.trim();
  let telefono = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let checkbox = document.getElementById('checkbox');
  
  

  // Validar que los campos no estén vacíos
  if (nombre === "" || apellido === "" || telefono === "" || dni === "" || email === "" || edad==="" || checkbox==="") {
    alert('Campos obligatorios');
    return false;
  }

  // Validar que el nombre y el apellido contengan solo caracteres alfabéticos
  let regexAlfabetico = /^[a-zA-Z\s]+$/;
  if (!(nombre.match(regexAlfabetico) && apellido.match(regexAlfabetico))) {
    alert('El nombre y el apellido solo pueden contener caracteres alfabéticos y espacios');
    return false;
  }

  //Validad la edad. Tiene que ser mayor de 18
  if (!(edad>=18) ){
    alert("Debe ser mayor de 18 años");
    return false;
  }

  // Validar que el DNI solo contenga caracteres numéricos y que sean 8
  let regexNumerico = /^[0-9]+$/;
  if (!dni.match(regexNumerico) || dni.length !== 8) {
    alert('El DNI solo puede contener caracteres numéricos y debe tener 8 caracteres');
    return false;
  }

  // Validar que el teléfono solo contenga caracteres numéricos
  if (!telefono.match(regexNumerico)) {
    alert('El teléfono solo puede contener caracteres numéricos');
    return false;
  }

 // Validar el formato del correo electrónico
 let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!email.match(regexMail)) {
   alert('Formato de correo electrónico inválido');
   return false;
 }
// validacion de la seleccion compañia y plan 
 let selectCompany = document.querySelector('select[name="company"]');
 let selectedCompany = selectCompany.options[selectCompany.selectedIndex].value;
 if (selectedCompany === "Compañia actual") {
  alert("seleccione una compañia")
  return false; 
} 

 let selectPlan = document.querySelector('select[name="plan"]');
 let selectedPlan = selectPlan.options[selectPlan.selectedIndex].value;
 if (selectedPlan === "Elija el plan de su interés") {
  alert("seleccione un plan")
  return false; 
} 


 //validar el checkbox
 if (!checkbox.checked) {
  alert('Debe aceptar términos y condiciones');
  return false
     
}
 
alert("El formulario se envió exitosamente!");
  // Resetear el formulario
  document.getElementById("form").reset();

  return true; // Si todas las validaciones pasan, se envia el formulario
}
