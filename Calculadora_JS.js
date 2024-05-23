/*Variables */
var label = document.getElementById('lblDatos');
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
    AgregarAlLabel('+');
});

btnBorrarTodo.addEventListener('click',BorrarTodo);


btnDelete.addEventListener('click',function(){

    borrarUltimoCaracter();
});
btnIgual.addEventListener('click',function(){
    let label = document.getElementById('lblDatos');
    leerLabel(label);

});
/*Funciones */
function AgregarAlLabel( ValorAAgregar){
   
    label.innerText+=ValorAAgregar;
}
function BorrarTodo( ){
   
    label.innerText="";
}
function borrarUltimoCaracter() {
    let label = document.getElementById('lblDatos');
    let TextoLabel = label.innerText;

    if (TextoLabel.length > 0) {
        label.innerText = TextoLabel.slice(0, -1); // Eliminar el último carácter
    }else{ alert("No hay Numeros para Borrar")}
}
function leerLabel(LabelALeer)
{
    var TextoLabel= LabelALeer.innerText;
    var PrimerBloque="";
    var SegundoBloque="";
    var Simbolo;
    var Bandera=false;
    for(var i=0;i<TextoLabel.length;i++){
           if(TextoLabel[0]=='%'||TextoLabel[0]=='÷'||TextoLabel[0]=='+'||TextoLabel[0]=='x'||TextoLabel[0]=='-'){
            alert("Operacion Invalida")
            BorrarTodo();
            
        }else{
            if(TextoLabel[i]=='%'||TextoLabel[i]=='÷'||TextoLabel[i]=='+'||TextoLabel[i]=='x'||TextoLabel[i]=='-'&& Banderaandera==true ){
                
                Simbolo=TextoLabel[i];
                
                Bandera=Flase;
                SegundoBloque+=TextoLabel[i];
                
            } else
            {
                PrimerBloque+=TextoLabel[i];

            }
            
        }
    } 
  
    
    if(esSuma(Simbolo))
        {
            let resultado =PrimerBloque +SegundoBloque;
            BorrarTodo();
            AgregarAlLabel(resultado);
        }
 
    
}
function esSuma(simbolo){
    if(simbolo=='+'){return true}else{return false;}
}