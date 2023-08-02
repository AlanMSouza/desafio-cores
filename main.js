const cores = document.querySelectorAll(".item");
const botao = document.querySelectorAll("[botao]");
var corOriginal = document.querySelector(".item").innerHTML;

botao.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaBotao(evento.target.textContent);
    })
})

function manipulaBotao(operacao) {
    if(operacao === "+") {
        document.querySelector(".lista").style.display = "block";
    }else{
        document.querySelector(".lista").style.display = "none";
    }
}