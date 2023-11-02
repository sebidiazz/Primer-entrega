let nombreUsuario = prompt("Ingresa por favor tu nombre y apellido")

alert("Bienvenido " + nombreUsuario + " por favor siga las instrucciones para probar que no es un bot")



function pedirNumeros() {
    let numeros = [1, 2, 3]
    let intentos = 3
    let i = 0

    do {
      let numero = prompt("Ingrese el número " + numeros[i] + ":")
      if (numero != null && numero != "" && parseInt(numero) == numeros[i]) {
        i++
        if (i == numeros.length) {
          alert("¡Excelente! " + nombreUsuario + " ha ingresado los números en el orden correcto. Usted no es un bot.")
          break
        }

       }else{
        intentos--
        if (intentos == 0) {
          alert("Ha excedido el número máximo de intentos. Vuelva a intentarlo más tarde.")
          break
        } else {
          alert("Debe ingresar el número " + numeros[i] + ". Le quedan " + intentos + " intentos.")
        }
      }
    } while (true)
 }

  pedirNumeros()