let tamanhoFonte = 100;

function toggleMenu(){

    const menu =
        document.getElementById(
            "opcoes-acessibilidade"
        );

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";
    }
}

function aumentarFonte(){

    tamanhoFonte += 10;

    document.body.style.fontSize =
        tamanhoFonte + "%";
}

function diminuirFonte(){

    if(tamanhoFonte > 70){

        tamanhoFonte -= 10;

        document.body.style.fontSize =
            tamanhoFonte + "%";
    }
}

function alternarContraste(){

    document.documentElement.classList.toggle(
        "alto-contraste"
    );
}