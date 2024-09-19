//Declaración de arreglos para almacenamiento de gastos e items
let listaNombreGastos = [];
let listaValoresGastos = [];


function Agregar(){
    //obteniendo los campos del formulario
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = parseInt(document.getElementById('valorGasto').value);

    //validando que no esten los campos vacios, si la condicion se cumple, se almacenan los valores en el arreglo
    if (valorGasto>0&&nombreGasto!=""){
        listaNombreGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        limpiar();
    }else{
        alert('No deben quedar campos vacios');
    }

    //Llamado de función con la lista de gastos
    actualizarListaGastos();

}

//función para mostrar la lista de gastos en pantalla
function actualizarListaGastos(){
    //constante con la que se enlaza el html con el javascript.
    const listaElementos = document.getElementById('listaDeGastos');
    const totalGastos = document.getElementById('totalGastos');
    
    // Variable a la que se van agregando los elementos a mostrar en el html
    let htmlLista = '';
    let totalGastado = 0;

    //bucle recorriendo los arreglos y agregandolos a las variables htmlLista y totalGastado
    listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = listaValoresGastos[posicion]
        htmlLista+= `<li>${elemento} - COP ${valorGasto}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`
        totalGastado += valorGasto
    });

    //modificando el DOM
    listaElementos.innerHTML = htmlLista;
    totalGastos.innerHTML = totalGastado;
}

//Limpiando los campos en el formulario
function limpiar(){
    document.getElementById ('nombreGasto').value="";
    document.getElementById ('valorGasto').value="";
}


/*Programando el botón eliminar de cada elemento de la lista, la función recibe como para
metro el indice que se desea eliminar de los arreglos*/
function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}