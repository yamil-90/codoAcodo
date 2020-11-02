
function chequearInput() {
    let usuario = document.getElementById('usuario');
    let contraseña = document.getElementById('contraseña');

    if(!usuario.value){
        alert('Usuario no debe estar vacio');
    }
    else if(!contraseña.value){
        alert('Por favor ingrese una contraseña');
    }else if (usuario.value.indexOf('@')<0){
        alert('usuario debe contener una @')
    }

}