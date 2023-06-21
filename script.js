const mensaje_inicial = document.querySelector(".texto-input");
const mensaje_encriptado = document.querySelector(".texto-output");

function encriptar (cadenaDesencriptada){
      cadenaDesencriptada = cadenaDesencriptada.toLowerCase();
      const e = String(cadenaDesencriptada).replaceAll('e', 'enter');
      const i = String(e).replaceAll("i", "imes");
      const a = String(i).replaceAll("a", "ai"); 
      const o = String(a).replaceAll("o", "ober");
      const u = String(o).replaceAll("u", "ufat");
      return u;
}

function desencriptar (cadenaEncriptada){
      cadenaEncriptada = cadenaEncriptada.toLowerCase();
      const e = String(cadenaEncriptada).replaceAll('enter',"e");
      const i = String(e).replaceAll("imes","i");
      const a = String(i).replaceAll("ai", "a"); 
      const o = String(a).replaceAll("ober","o");
      const u = String(o).replaceAll("ufat","u");
     return u;
}

function encriptar_boton(){
      const textoEncriptado = encriptar(mensaje_inicial.value)
      mensaje_encriptado.value = textoEncriptado;
      document.getElementById("imagen-muñeco").style.display = "none";
      document.getElementById("texto-final").style.bottom = "400px";
}

function desencriptar_boton(){
      const textoDesencriptado = desencriptar(mensaje_inicial.value)
      mensaje_encriptado.value = textoDesencriptado;
      document.getElementById("imagen-muñeco").style.display = "none";
      document.getElementById("texto-final").style.bottom = "400px";
}

function copiar_boton(){
   let textoCopiado = mensaje_encriptado.value;
   navigator.clipboard.writeText(textoCopiado);
}

