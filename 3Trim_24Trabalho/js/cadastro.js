// Referência ao formulário
const form = document.getElementById("transaction-form");
const successMessage = document.getElementById("success-message");

// Recuperar ou criar a lista de transações no LocalStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Função para salvar transação no LocalStorage
form.addEventListener("submit", (e) => 
{
  e.preventDefault();
  const descricao = document.getElementById("descricao").value;
  const categoria = document.getElementById("categoria").value;
  const data = document.getElementById("data").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const newTransaction = { descricao, categoria, data, valor };

  // Adicionar a nova transação à lista
  transactions.push(newTransaction);

  // Salvar no LocalStorage
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Exibir mensagem de sucesso
  successMessage.style.display = "block";

  // Limpar o formulário após o cadastro
  form.reset();

  // Esconder a mensagem de sucesso após 3 segundos
  setTimeout(() =>
  {
    successMessage.style.display = "none";
  }, 3000);
  
});

/*
|| []: assegura que, se não houver transações previamente salvas no localStorage, 
o código sempre tenha um array vazio para trabalhar, permitindo que você adicione novas transações sem problemas.

(e): O parâmetro e geralmente representa o objeto de evento. 
    É usado para acessar detalhes do evento disparado, como e.preventDefault() ou e.target.

=>: Define uma função de seta (arrow function), que é uma forma mais curta e moderna de declarar funções em JavaScript.
*/