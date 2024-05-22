var label = document.getElementById('lblDatos');

var btn7= document.getElementById('btn7');

var btnBorrarTodo= document.getElementById('BorrarTodo');

btn7.addEventListener('click',function() {
    AgregarAlLabel(7); 
});

btnBorrarTodo.addEventListener('click',BorrarTodo);

function AgregarAlLabel( ValorAAgregar){
   
    label.innerText+=ValorAAgregar;
}

function BorrarTodo( ){
   
    label.innerText="";
}