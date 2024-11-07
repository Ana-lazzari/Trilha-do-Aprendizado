var cafe=[]
var almoco=[]
var jantar=[]
var c, a, j

do 
{
    c=prompt("Insira os elementos no cardapio do café da manhã: ")
    cafe.push(c)
}
while (c!=null)
cafe.pop()
alert(cafe)


do
{
    a=prompt("Insira os elementos no cardapio do almoço:")
    almoco.push(a)
}
while(a!=null)
almoco.pop()
alert(almoco)


do
{
    j=prompt("Insira os elementos no cardapio do jantar:")
    jantar.push(j)
}
while(j!=null)
jantar.pop()
alert(jantar)


document.write("<h1>" + "Cardápio " + "</h1>")
document.write("<h2>" + "Café da manhã: " +cafe+ "</h2>") 
document.write("<h2>" + "Almoço: " +almoco+ "</h2>") 
document.write("<h2>" + "Jantar: " +jantar+ "</h2>") 



/*Resolução do Giovani

var alim_cafe
var lista_cafe=[]

do
{
    alim_cafe=prompt("Diigte um prato para o café a manhã: ")
    lista_cafe.push(alim_cafe)
}
while(alim_cafe!=null)
lista_cafe.pop()

document.write("<h1>Cardápio</h1>")
document.write("<h2>Café da manhã</h2>")
for(var i=0; i<lista_cafe.length; i++)
{
    document.write("<ul><li>"+lista_cafe[i]+"</li></ul>")
}

var alim_alm
var lista_alm=[]

do
{
    alim_alm=prompt("Diigte um prato para o almoço: ")
    lista_alm.push(alim_alm)
}
while(alim_alm!=null)
lista_alm.pop()

document.write("<h2>Almoço</h2>")
for(var i=0; i<lista_alm.length; i++)
{
    document.write("<ul><li>"+lista_alm[i]+"</li></ul>")
}

var alim_ja
var lista_ja=[]

do
{
    alim_ja=prompt("Diigte um prato para o jantar: ")
    lista_ja.push(alim_ja)
}
while(alim_ja!=null)
lista_ja.pop()

document.write("<h2>Jantar</h2>")
for(var i=0; i<lista_ja.length; i++)
{
    document.write("<ul><li>"+alim_ja[i]+"</li></ul>")
}
*/