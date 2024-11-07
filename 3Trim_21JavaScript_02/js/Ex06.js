/*var a = [4, 8, 3, 5, 9]

// Exibindo todos os valores 
alert(a)

// Exibe o valor 9 que esta na posição 4 
alert(a[4]) 

// Substituindo o valor 4 que esta na posição 0 por 7 
a[0]=7
alert(a)

// Percorrendo o array com laço de repetição 
var i 
for(i=0; i<a.length;i++)
{
    // Mostra no documento HTML o resultado do código 
    document.write("<h2>" +a[i]+ "</h2>") 
}
*/


/*
// Arrays usados como lista 
lista=["Ana", " Estrada A", 2007, 80.5, true]
alert(lista)

for(var i=0; i<lista.length; i++)
{
    // Mostra no documento HTML o resultado do código 
    document.write("<h2>" +lista[i]+ "</h2>") 
}

// Adicionar elemento ao fim da lista 
lista.push("84500-000") 
alert(lista)

// Remover último elemento da lista 
lista.pop()
alert(lista)

// Remover primeiro elemento da lista 
lista.shift()
alert(lista)

// Adicionar primeiro elemento da lista 
lista.unshift("Ana")
alert(lista)
*/



/* Faça um elemento que seja possível um usuário inserir frutas a uma lista, item a item através de uma janela de diálogo. 
A inserção de itens deve encerrar-se quando o usuario digitar fim. 
A palavra fim nao deve ser colocada na lista. */ 

/*Versão 01 
var frutas=[] //lista
var f //armazena frutas na lista temporariamente

do //faça
{
    f=prompt("Qual fruta deseja adicionar à lista? ")

    if(f!="fim") //enquanto f for diferente de "fim", poderá adicionar itens na lista
    {
        frutas.push(f) //adicionar fruta ao final da lista
    }
}
while(f!="fim") //enquanto
alert(frutas) 
*/


/* Versão 02 
var frutas=[] //lista
var f //armazena frutas na lista temporariamente

do //faça
{
    f=prompt("Qual fruta deseja adicionar à lista? ")
    frutas.push(f) //adicionar fruta ao final da lista
}
while(f!="fim") //enquanto
frutas.pop() //remover ultimo elemento da lista (fim)
alert(frutas) 
*/


/*Versão 03 
var frutas=[] //lista
var f //armazena frutas na lista temporariamente

do //faça
{
    f=prompt("Qual fruta deseja adicionar à lista? ")
    frutas.push(f) //adicionar fruta ao final da lista
}
while(f!=null) //enquanto
frutas.pop() //remover ultimo elemento da lista (fim)
alert(frutas) 
*/