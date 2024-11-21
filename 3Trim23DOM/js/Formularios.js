function somar()
{
    var n1, n2, r
    n1=parseFloat(document.getElementById("primeirovalor").value) //pegar(get) valor de dentro da caixa "primeirovalor"
    n2=parseFloat(document.getElementById("segundovalor").value) //pegar(get) valor de dentro da caixa "segundovalor"
    r=n1+n2
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${r}` //colocar valor dentro 
}