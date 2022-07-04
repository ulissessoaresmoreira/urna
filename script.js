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
        document.getElementById("campo1").value = ""
        document.getElementById("campo2").value = ""
}

function confirma(){
    let valor1 = (document.getElementById('campo1').value)
    let valor2 = (document.getElementById('campo2').value)
    let voto = parseInt(`${valor1}${valor2}`)    
    let jogador
    switch(voto){
        case "":
            jogador = 'Voto em Branco'
            break;
        case 90:
            jogador = 'Pelé'
            break;
        case 89:
            jogador = 'Maradona'
            break;
        case 88:
            jogador = 'Garrincha'
            break;
        case 87:
            jogador = 'Romário'
            break;
        case 86:
            jogador = 'Ronaldinho Gaúcho'
            break; 
        case 85:
            jogador = 'Lionel Messi'
            break;
        case 84:
            jogador = 'Cristiano Ronaldo'
            break;
        case 83:
            jogador = 'Zico'
            break;
        case 82:
            jogador = 'Nenhum dos anteriores'
            break;
    }
    
    if(sessionStorage.getItem(jogador) !== null) {
        voto = parseInt(sessionStorage.getItem(jogador)) + 1;
        sessionStorage.setItem(jogador, voto);
    } else {
        sessionStorage.setItem(jogador, 1)
    }
    let data = sessionStorage.getItem(jogador)
    console.log(data)
}






// Salva os dados na sessionStorage
//sessionStorage.setItem('chave', 'valor');

// Obtém os dados da sessionStorage
//var data = sessionStorage.getItem('chave');

