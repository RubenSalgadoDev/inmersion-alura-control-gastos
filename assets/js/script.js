//Declaración de arreglos para almacenamiento de gastos e items
let listaNombreGastos = [];
let listaValoresGastos = [];
let descripcionDeGastos = [];
let campoModificar = null;
const boton2 = document.getElementById("botonModificar");
const boton1 = document.getElementById("botonFormulario");
boton2.style.display = "none";

function Agregar(){
    //obteniendo los campos del formulario
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = parseInt(document.getElementById('valorGasto').value);
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    //validando que no esten los campos vacios, si la condicion se cumple, se almacenan los valores en el arreglo
    if (valorGasto>0&&nombreGasto!=""){
        if(valorGasto>600000){
            window.alert('Precaución, El valor del gasto es un poco alto');
        }
        listaNombreGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        descripcionDeGastos.push(descripcionGasto);
        limpiar();
        sumaGastos();
    }else{
        alert('los campos valor y nombre no pueden quedar vacios');
    }

    //Llamado de función con la lista de gastos
    actualizarListaGastos();

}

//función para mostrar la lista de gastos en pantalla
function actualizarListaGastos(){
    //constante con la que se enlaza el html con el javascript.
    const listaElementos = document.getElementById('listaDeGastos');
    // Variable a la que se van agregando los elementos a mostrar en el html
    let htmlLista = '';
    //    let totalGastado = 0;
    //bucle recorriendo los arreglos y agregandolos a las variables htmlLista y totalGastado
    listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = listaValoresGastos[posicion];
        const descGasto = descripcionDeGastos[posicion];
        htmlLista+= `<li>${elemento} - COP ${valorGasto} - ${descGasto}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <button onclick="mostrarGasto(${posicion});">Modificar</button>
        </li>`
    });
    //modificando el DOM
    //sumaGastos();
    listaElementos.innerHTML = htmlLista;
}

//Limpiando los campos en el formulario
function limpiar(){
    document.getElementById ('nombreGasto').value="";
    document.getElementById ('valorGasto').value="";
    document.getElementById ('descripcionGasto').value="";
}


/*Programando el botón eliminar de cada elemento de la lista, la función recibe como para
metro el indice que se desea eliminar de los arreglos*/
function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
    sumaGastos();
}

function mostrarGasto(posicion){
    //mostrando campos a modificar
    document.getElementById ('valorGasto').value=listaValoresGastos[posicion];
    document.getElementById ('nombreGasto').value=listaNombreGastos[posicion];
    document.getElementById ('descripcionGasto').value=descripcionDeGastos[posicion];
    boton2.style.display = "block";
    boton1.style.display = "none";
    campoModificar = posicion;
}

function modificar(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = parseInt(document.getElementById('valorGasto').value);
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    listaNombreGastos[campoModificar]=nombreGasto;
    listaValoresGastos[campoModificar]=valorGasto;
    descripcionDeGastos[campoModificar]=descripcionGasto;
    boton2.style.display = "none";
    boton1.style.display = "block";
    actualizarListaGastos();
    sumaGastos();
    limpiar();
}

function sumaGastos(){
    const totalMensual = document.getElementById('totalGastos');
    let totalGastado = 0;
    for (let i = 0; i < listaValoresGastos.length; i++){
        totalGastado += listaValoresGastos[i];
        totalMensual.innerHTML = totalGastado;
    }
    totalMensual.innerHTML = totalGastado;
}
