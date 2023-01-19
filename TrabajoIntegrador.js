function mostrar(modulo){
 var display = document.getElementById(modulo).style.display
 if( display === "none"){
    document.getElementById(modulo).style.display = "block";
 } else {
    document.getElementById(modulo).style.display = "none";
 }
}