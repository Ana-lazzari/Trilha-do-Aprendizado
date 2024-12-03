// Recuperar as transações do LocalStorage
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Variáveis para receitas, despesas e saldo
let totalReceitas = 0;
let totalDespesas = 0;

// Calcular receitas e despesas
transactions.forEach(transaction => 
{
  if (transaction.categoria === "receita") 
  {
    totalReceitas += transaction.valor;
  } 
  else if (transaction.categoria === "despesa") 
  {
    totalDespesas += transaction.valor;
  }
});

// Calcular saldo final
const saldoFinal = totalReceitas - totalDespesas;

// Atualizar o resumo no HTML
document.getElementById("total-receitas").textContent = totalReceitas.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
document.getElementById("total-despesas").textContent = totalDespesas.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
document.getElementById("saldo-final").textContent = saldoFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Criar gráficos com Chart.js
const ctxPie = document.getElementById("pieChart").getContext("2d");
const ctxBar = document.getElementById("barChart").getContext("2d");

// Gráfico de Pizza
new Chart(ctxPie, 
{
  type: "pie",
  data: 
  {
    labels: ["Receitas", "Despesas"],
    datasets: [
    {
      data: [totalReceitas, totalDespesas],
      backgroundColor: ["rgb(34, 174, 97)", "red"],
      borderColor: ["#ffffff", "#ffffff"],
      borderWidth: 1
    }]
  },
  options: 
  {
    plugins: 
    {
      legend: 
      {
        position: "top"
      }
    }
  }
});

