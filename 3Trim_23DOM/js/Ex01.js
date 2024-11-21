function enviar()
{
    var nome, email, ok

    nome=document.getElementById("nome")
    email=document.getElementById("email")
    ok=false

    //verifiar se é diferente de vazio e se tem espaço 
    if(nome.value!="" && nome.value.indexOf(" ")!=-1) //espaço OBRIGATORIAMENTE no (" ") do indexOf
    {
        //se tiver @, o email é valido
        if(email.value.indexOf("@")!=-1)
        {
            alert(nome.value + " Agradecemos o seu contato!" )
            ok=true //sinalizar que deu tudo certo
        }
        //se não tiver @, é invalido
        else
        {
            alert("Digite um email válido!")
        }
    }
    else
    {
        alert("O campo nome não pode ficar vazio!")
    }
    return ok
}