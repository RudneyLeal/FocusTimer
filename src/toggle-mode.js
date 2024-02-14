let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
    document.documentElement.classList.toggle("light");
    /*aqui o document.documentElement está pegando a tag
    HTML principal ou seja a tag HTML mesmo e o
    .classList.toggle("light") está adicionando uma classe de
    nome light quando não tiver esta classe na tag HTML e
    também está removendo esta classe se ela já tiver lá.*/

    const mode = darkMode ? "light" : "dark";
    /*aqui a variável mode está recebendo um operador ternário que
    diz: se darkMode é verdadeiro então mode recebe "light" senão
    mode recebe "dark"*/

    event.currentTarget.
    querySelector("span").textContent = `${mode} mode ativado!`;
    /*este event.currentTarget serve para pegar o alvo atual que no
    caso é a variável buttonTogle, este .querySelector("span") está
    pegando a tag span que tá dentro da tag button cuja classe é
    toggle-mode que tá lá no HTML, e este .textContent = que vem
    logo em seguida serve para atribuir um novo valor ao texto
    da tag span, e o novo valor é o texo que está entre crase,
    `${mode} mode ativado!`*/

    darkMode = !darkMode;
})