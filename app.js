var estadoLicuadora = "apagado";
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        
        estadoLicuadora = "endendido";
        console.log("prendi2");
    } else{
        estadoLicuadora = "apagada";
        console.log("apaga3");
    }
}
// para asignar es un solo = y para preguntar son dos ==