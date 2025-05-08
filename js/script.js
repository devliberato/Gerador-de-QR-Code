//Seleções 
const qrBTN = document.querySelector("#qr-btn")
const qrCodeinput = document.querySelector("#qr-form input");
const qrImg = document.querySelector("#qr-img img");

const container = document.querySelector(".container");

//Funções
function qrCodeGenerator () {
    qrBTN.innerText = "Gerando código..."; //gera o codigo
     
    const qrCodeInputValue = qrCodeinput.value;

    if(!qrCodeInputValue) return;

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrImg.addEventListener("load", () => {

        container.classList.add("active");
        qrBTN.innerText = "Código criado";
        
    })


}



//Eventos
qrBTN.addEventListener("click", () => {

    qrCodeGenerator();
})

qrCodeinput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") { //Maisuclo 
        qrCodeGenerator();
    }
})

qrCodeinput.addEventListener("keyup", (e) => {
   if  (!qrCodeinput.value) {
        container.classList.remove("active")
        qrBTN.innerText = "Gerar QR Code";
        
    }
})