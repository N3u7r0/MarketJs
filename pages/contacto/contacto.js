import { resetearFormulario } from "../../modules/DOM-resetForms.js";
let mensajes = [];

function mensaje() {
    class Mensaje {
        constructor(nombre, mail, msj) {
            this.nombre = nombre;
            this.mail = mail;
            this.msj = msj;
        }
    }

    let nombre = document.getElementById("inputNombreContacto").value;
    let mail = document.getElementById("inputMailContacto").value;
    let msj = document.getElementById("inputMsjContacto").value;
    //if para no dejar el form incompleto.
    if (nombre != "" && mail != "", msj != "") {
        mensajes.push(new Mensaje(nombre, mail, msj));
        resetearFormulario();//=====>aca llame la funcion para borrar el formulario.
        console.table(mensajes);
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "El mensaje se envio correctamente",
            showConfirmButton: false,
            timer: 2300
        });
    } else {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            text: "Por favor, complete todos los campos",
            showConfirmButton: false,
            timer: 2300
        });
    }
};
//btn enviar mensaje.
let btnEnviarMsj = document.getElementById("btnEnviarMsj");
btnEnviarMsj.addEventListener("click", mensaje);
