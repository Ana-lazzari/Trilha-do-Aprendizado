var cont
cont=0

while(cont<10)
{
    alert("Enlouquecendo o usuário com while " +cont)
    cont++
}

for(cont=0; cont<10; cont++)
{
    alert("Enlouquecendo o usuário com while " +cont)
}



var resposta
do
{
    resposta=confirm("Deseja continuar? ")
}
while(resposta==true)