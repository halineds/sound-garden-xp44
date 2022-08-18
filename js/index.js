const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");
//JS DOM

const API_URL = "https://brasilapi.com.br/api";

inputCep.onkeyup = async (evento) => {
    //Testar se o cep é válido
    if (inputCep.value.length < 8) {
        return;
    }
    //Colocar popups que vão sugerir o valor correto e formato do cep
    //Buscar informações do cep === Requisição a API do BRASILAPI
    const resposta = await fetch ( `${API_URL}cep/v1/${inputCep.value}`,{

    });
    //extrair e imprimir 
    const conteudoResposta = await resposta.json();

    //atribuir pro html as respostas
    inputRua.value = conteudoResposta.street;
    inputBairro.value = conteudoResposta.neighborhood; 
    inputUF.value = conteudoResposta.state; 
    inputComplemento.value = conteudoResposta.city; 

    console.log(conteudoResposta);
    // alert (CEP Completo é X)
};