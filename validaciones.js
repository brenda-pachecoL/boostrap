function validarCorreo(email){
    var exReg=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValida= exReg.test(email);
    if(esValida==true){
        alert("El corre elctronico es valido");
    }
    else{
        alert("El corre elctronico no es valido");
    }
}