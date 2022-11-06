"use strict"
//Recuperar los datos de las cajas de texto y la caja de selección
const txtCuenta = document.querySelector("#no_cuenta");
const txtNombre = document.querySelector("#nombre");
const optCarrera = document.querySelector("#carrera");
const txtPromedio = document.querySelector("#promedio");
const btnGuardar = document.querySelector("#btn_guardar");
//Recuperar el cuerpo de la tabla
const listaAlumnos = document.querySelector("#lista_alumnos tbody");

btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    //Generar un objeto de tipo alumno
    const alumno = {
        nocuenta: txtCuenta.value,
        nombre: txtNombre.value.toUpperCase(),
        carrera: optCarrera.value.toUpperCase(),
        promedio: Number(txtPromedio.value)
    }
    //insertar dicho alumno a la tabla
    insertarAlumnoATabla(alumno);
});

function insertarAlumnoATabla(alumno) {
    const row = document.createElement("tr");
    row.innerHTML =`
    <td><img src="img/${alumno.nocuenta}.png" alt="" width="100" height="100"></td>
    <td>${alumno.nocuenta}</td>
    <td>${alumno.nombre}</td>
    <td>${alumno.carrera}</td>
    <td>${alumno.promedio}</td>
    `;
    listaAlumnos.appendChild(row);
}