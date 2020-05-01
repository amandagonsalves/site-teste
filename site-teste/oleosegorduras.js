var usuario = window.document.querySelector('input#usuario')
var senha = window.document.querySelector('input#senha')
var res = window.document.querySelector('div#res')

//------------------------------------------------------------------------------------------


//alerta para registro
function registrar(){
    if(usuario.value.length==0||senha.value.length==0||senha.value.length<8) {
        alert('Insira seus dados para o registro. A senha deve ter no mínimo 8 dígitos.')
    } else {
        res.innerHTML=`O usuário ${usuario.value} foi registrado. Sua senha é ${senha.value}`
    } 
    usuario.value=''
    usuario.focus()
    senha.value=''
    senha.focus()
}


//------------------------------------------------------------------------------------------

//usa-se isso para mudar a foto no mouseenter e mouseout e é completa no html
function mudaFoto(foto) {
    document.querySelector('img#imagemoleo').src=foto
}


//------------------------------------------------------------------------------------------
