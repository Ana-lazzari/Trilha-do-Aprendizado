var cont, num, tab

num=parseInt(prompt("Qual tabuada deseja? "))

for(cont=0; cont<11; cont++)
{
    tab=num*cont
    document.write("<h2> " +num+ " X " +cont+ " = " +tab+ "</h2>" ) /*Mostra no documento HTML o resultado do código */
}

