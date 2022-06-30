function incluir(valor){
    let valor1 = document.getElementById("campo1").value    
    let valor2 = document.getElementById("campo2").value
    
    if(valor1 == ""){
        document.getElementById("campo1").value = valor        
    } else if(valor2 == ""){
        document.getElementById("campo2").value = valor        
    }

}

function branco(){
    console.log('VOTO EM BRANCO')
}

function corrige(){
    let valor1 = document.getElementById("campo1").value
    let valor2 = document.getElementById("campo2").value
    
    if(valor1 != ""){
        document.getElementById("campo1").value = ""        
    } else if (valor2 != ""){
        document.getElementById("campo1").value = ""
        document.getElementById("campo2").value = ""        
    }
}






