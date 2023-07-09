
const form = document.getElementById('actividad-form');
const nombreInput = document.getElementById('nombre');
const descripcionInput = document.getElementById('descripcion');
const actividadesList = document.getElementById('actividades-list');

const actividades = [];

function agregarActividad(event) {
event.preventDefault();

const nombre = nombreInput.value;
const descripcion = descripcionInput.value;

    if (nombre && descripcion) {
        const actividad = { nombre, descripcion };
        actividades.push(actividad);
            actualizarLista();
            limpiarFormulario();
    }
}
function actualizarLista() {
    actividadesList.innerHTML = '';
    
        actividades.forEach((actividad, indice) => {
        const tr = document.createElement('tr');
    
        const nombreTd = document.createElement('td');
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = `Nombre: ${actividad.nombre}`;
        nombreTd.appendChild(nombreSpan);
    
        const descripcionTd = document.createElement('td');
        const descripcionSpan = document.createElement('span');
        descripcionSpan.textContent = `Descripción: ${actividad.descripcion}`;
        descripcionTd.appendChild(descripcionSpan);
    
        const modificarTd = document.createElement('td');
        const modificarBtn = document.createElement('button');
        modificarBtn.textContent = 'Modificar';
        modificarBtn.addEventListener('click', () => modificarActividad(indice));
        modificarTd.appendChild(modificarBtn);
    
        const eliminarTd = document.createElement('td');
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => eliminarActividad(indice));
        eliminarTd.appendChild(eliminarBtn);
    
        tr.appendChild(nombreTd);
        tr.appendChild(descripcionTd);
        tr.appendChild(modificarTd);
        tr.appendChild(eliminarTd);
    
        actividadesList.appendChild(tr);
        });
    }

function limpiarFormulario() {
    nombreInput.value = '';
    descripcionInput.value = '';
}

function modificarActividad(indice) {
    const actividad = actividades[indice];

    const nuevoNombre = prompt('Ingrese el nuevo nombre:', actividad.nombre);
    const nuevaDescripcion = prompt('Ingrese la nueva descripción:', actividad.descripcion);

    if (nuevoNombre !== null && nuevaDescripcion !== null) {
        actividad.nombre = nuevoNombre;
        actividad.descripcion = nuevaDescripcion;
            actualizarLista();
    }
}

// Función para eliminar una actividad
function eliminarActividad(indice) {
    actividades.splice(indice, 1);
    actualizarLista();
}


form.addEventListener('submit', agregarActividad);