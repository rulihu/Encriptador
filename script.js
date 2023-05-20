const textArea = document.querySelector(".text-area");/*es del primer valor de entrada*/
const mensaje = document.querySelector(".mensaje");
/*crear elementos para adicionar a la div*/
const text_Area = document.createElement("textarea");
const btncopi = document.createElement("button");
/*obtener los elementos de la 2da div mensaje*/
const img = document.querySelector(".imgconlupa");
const text1 = document.querySelector(".texto_1");
const text2 = document.querySelector(".texto_2");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    console.log("el texto encriptado --> : ",textoEncriptado);
    remover();
    textArea.value = ""
    text_Area.value = textoEncriptado;
    text_Area.spellcheck = false;
    text_Area.className = "textoSalida";
    mensaje.append(text_Area);
    btncopi.className = "copiar";
    btncopi.innerText = "Copiar";
    mensaje.append(btncopi);

    btncopi.onclick = function (){
        let txtcopiado = textoEncriptado;
        console.log("clicl en copiar --> : ",txtcopiado);
        navigator.clipboard.writeText (txtcopiado);
        btncopi.innerText = "Texto copiado!";
    }
    /*mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";*/
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    console.log("el texto encriptado --> : ",textoEncriptado);
    remover();
    textArea.value = ""
    text_Area.value = textoEncriptado;
    text_Area.spellcheck = false;
    text_Area.className = "textoSalida";
    mensaje.append(text_Area);
    btncopi.className = "copiar";
    btncopi.innerText = "Copiar";
    mensaje.append(btncopi);

    btncopi.onclick = function (){
        let txtcopiado = textoEncriptado;
        console.log("clicl en copiar --> : ",txtcopiado);
        navigator.clipboard.writeText (txtcopiado);
        btncopi.innerText = "Texto copiado!";
    }
    /*mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";*/
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function remover(){
    img.remove();
    text1.remove();
    text2.remove();
}


