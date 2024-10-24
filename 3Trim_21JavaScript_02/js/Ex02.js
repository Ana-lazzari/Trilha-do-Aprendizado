var n1, n2, n3, media, freq

n1=parseInt(prompt("Indique a primeira nota: "))
n2=parseInt(prompt("indique a segunda nota: "))
n3=parseInt(prompt("indique a terceira nota: "))
freq=parseInt(prompt("Indique o percentual de frequencia do aluno: "))
media=(n1+n2+n3)/2

if(freq>=75 && media>=7)
{
    alert("A média é " +media+ " e a frequencia é " +freq+ ". Está aprovado!")
}
else
{
    if(media<7 && freq<75)
    {
        alert("A média é " +media+ " e a frequencia é " +freq+ ". Está reprovado!")
    }
    else
    {
        alert("A média é " +media+ " e a frequencia é " +freq+ ". Está em exame!")
    }
}

