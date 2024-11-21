// Função de soma sem retorno 
function somar(n1,n2)
{
    var r
    r=n1+n2
    alert("Função soma sem retorno. Resultado: " +r)
}
somar(3,5)

// Função subtração com retorno 
function subtrair(n1,n2)
{

    var r 
    r=n1-n2
    return(r)
}
var resultado
resultado=subtrair(10,9)
alert("Função subtrair com retorno. Resultado: " +resultado)