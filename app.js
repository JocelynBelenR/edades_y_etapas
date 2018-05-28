window.onload = function () { //INICIO
//SE USA LET PORQUE VARIA - PREGUNTA EN PROMPT
 let edad = prompt("¿Qué edad tienes? Ingresa tu respuesta en número"); 

//LO ACEPTADO PARA CADA CASO

//IF PARA TODAS LAS RESPUES ACEPTADAS CON SUS RESPECTIVOS ALERT EN CADA CASO
    if (edad >= 1 && edad <= 3){ //PRIMERA CATEGORIA CON LOS RANGOS DE EDAD
        alert("Estas en la categoría Toddler");
      }
      if (edad >= 4 && edad <= 5 ){ //SEGUNDA CATEGORIA CON LOS RANGOS DE EDAD
        alert("Estas en la categoría Preschooler");
      }
      if (edad >= 6 && edad <= 11 ){ //TERCERA CATEGORIA CON LOS RANGOS DE EDAD
        alert("Estas en la categoría Gradeschooler");
      }
      if (edad >= 12 && edad <= 18 ){ //CUARTA CATEGORIA CON LOS RANGOS DE EDAD
        alert("Estas en la categoría Teenager");
      }
      if (edad >= 19 && edad <= 30 ){ //QUINTA CATEGORIA CON LOS RANGOS DE EDAD
        alert("Estas en la categoría Young Adult");
      }
      if (edad >= 31){ //SEXTA CATEGORIA CON LOS RANGOS DE EDAD
        alert("Estas en la categoría Adult");
      }
//ELSE PARA TODAS LAS RESPUESTAS INCORRECTAS (un string, un número decimal, un cero, o un campo vacío)
 //LO NO ACEPTADO COMO RESPUESTA

      else (edad < 0 , edad === 0 , edad === toString , edad === isNaN , edad === null); {
        alert("Debes ingresar tu edad con un número");
      }
  
} //CIERRE


/* INSTRUCCIONES
 Crea una web que pida, por medio de un prompt(), la edad de una persona, en años.
 Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona 
 en: toddler, preschooler, gradeschooler, teenager, young adult and adult, 
 según el criterio de esta página.
 Si la persona ingresa un dato que no es un número entero 
 (por ejemplo: un string, un número decimal, un cero, o un campo vacío), 
 la web debe dar un mensaje de error. 
 Revisa este link que tiene un par de tips interesantes relacionados a este proyecto.*/