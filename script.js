const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const matCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar(){
    const texEncriptado = encriptar(textArea.value)
    mensaje.value= texEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
}

function btnDesencriptar(){
    const texEncriptado = desencriptar(textArea.value)
    mensaje.value= texEncriptado
    textArea.value="";
    
}

function btncopiar(){
    mensaje.select();
    document.execCommand("copy");
}
/* primer codigo
function encriptar(stringEncriptado) {
    let matCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matCodigo.length; i++) {
        if (stringEncriptado.includes(matCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matCodigo[i][0], matCodigo[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado) {
    let matCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matCodigo.length; i++) {
        if (stringDesencriptado.includes(matCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matCodigo[i][1], matCodigo[i][0])
        }
    }
    return stringDesencriptado
}
Segundo Condigo */ 
function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase();

    matCodigo.forEach(([original, codigo]) => {
        if (stringEncriptado.includes(original)) {
            stringEncriptado = stringEncriptado.split(original).join(codigo);
        }
    });

    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    stringDesencriptado = stringDesencriptado.toLowerCase();

    matCodigo.forEach(([original, codigo]) => {
        if (stringDesencriptado.includes(codigo)) {
            stringDesencriptado = stringDesencriptado.split(codigo).join(original);
        }
    });

    return stringDesencriptado;
}
