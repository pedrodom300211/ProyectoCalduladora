/*Variables */
var labelDatos = document.getElementById('lblDatos');
var btn1= document.getElementById('btn1');
var btn2= document.getElementById('btn2');
var btn3= document.getElementById('btn3');
var btn4= document.getElementById('btn4');
var btn5= document.getElementById('btn5');
var btn6= document.getElementById('btn6');
var btn7= document.getElementById('btn7');
var btn8= document.getElementById('btn8');
var btn9= document.getElementById('btn9');
var btn0= document.getElementById('btn0');
var btnParentesis= document.getElementById('btnParentesis');
var btnPorcentaje= document.getElementById('btnPorcentaje');
var btnDividir= document.getElementById('btnDividir');
var btnMultiplicar= document.getElementById('btnMultiplicar');
var btnMenos= document.getElementById('btnMenos');
var btnMas= document.getElementById('btnMas');
var btnIgual= document.getElementById('btnIgual');
var btnDelete= document.getElementById('btnDelete');
var btnBorrarTodo= document.getElementById('BorrarTodo');
var BtnComa= document.getElementById('btnComa');
var BanderaParentesis = true;
var PrimerBloque;
var SegundoBloque;
var simboloOperacion;
/* Evento Click Botones*/
btn1.addEventListener('click',function() {
    AgregarAlLabel(1); 
});
btn2.addEventListener('click',function() {
    AgregarAlLabel(2); 
});
btn3.addEventListener('click',function() {
    AgregarAlLabel(3); 
});
btn4.addEventListener('click',function() {
    AgregarAlLabel(4); 
});
btn5.addEventListener('click',function() {
    AgregarAlLabel(5); 
});
btn6.addEventListener('click',function() {
    AgregarAlLabel(6); 
});
btn7.addEventListener('click',function() {
    AgregarAlLabel(7); 
});
btn8.addEventListener('click',function() {
    AgregarAlLabel(8); 
});
btn9.addEventListener('click',function() {
    AgregarAlLabel(9); 
});
btn0.addEventListener('click',function() {
    AgregarAlLabel(0); 
});
BtnComa.addEventListener('click',function() {
    AgregarAlLabel(','); 
});
btnPorcentaje.addEventListener('click',function()
{
    AgregarAlLabel('%');
});
btnParentesis.addEventListener('click',function()
{   if(BanderaParentesis==true)
    { AgregarAlLabel('(');
        BanderaParentesis=false;
    }else{
        AgregarAlLabel(')');
        BanderaParentesis=true;
    }


});

btnDividir.addEventListener('click',function()
{/*cuando se haga logica usar / */
    AgregarAlLabel('÷');
});

btnMultiplicar.addEventListener('click',function()
{/*Cuando se haga logica usar * */
    AgregarAlLabel('x');
});

btnMenos.addEventListener('click',function()
{
    AgregarAlLabel('-');
});

btnMas.addEventListener('click',function()
{   
    var TextoLabelPrimeraParte = labelDatos.innerText;
    var ValorLblPrimeraParte= parseInt(TextoLabelPrimeraParte);
    PrimerBloque=ValorLblPrimeraParte;
   
    labelDatos.innerText="";
   
    AgregarAlLabel('+');
});

btnBorrarTodo.addEventListener('click',BorrarTodo);


btnDelete.addEventListener('click',function(){

    borrarUltimoCaracter();
});
btnIgual.addEventListener('click',function(){
   
    
    OperacionIgual(PrimerBloque);

});
/*Funciones */
function AgregarAlLabel( ValorAAgregar){
   
    labelDatos.innerText+=ValorAAgregar;
}
function BorrarTodo( ){
   
    labelDatos.innerText="";
}
function borrarUltimoCaracter() {
    let label = document.getElementById('lblDatos');
    let TextoLabel = label.innerText;

    if (TextoLabel.length > 0) {
        label.innerText = TextoLabel.slice(0, -1); // Eliminar el último carácter
    }else{ alert("No hay Numeros para Borrar")}
}
function OperacionIgual( valorPrimerBloque)
{   
    simboloOperacion=labelDatos.innerText[0];
    var nuevolabelDatos=labelDatos.innerText.slice(1);
    var TextoLabelSegundaParte = nuevolabelDatos;
    var ValorLblSegundaParte= parseInt(TextoLabelSegundaParte);
    SegundoBloque=ValorLblSegundaParte
   
    if(esSuma(simboloOperacion)){
        var resultado = valorPrimerBloque+SegundoBloque;
        labelDatos.innerText="";
        labelDatos.innerText=resultado;
    }
}
 
  
    
 

function esSuma(simbolo){
    if(simbolo=='+'){return true}else{return false;}
}