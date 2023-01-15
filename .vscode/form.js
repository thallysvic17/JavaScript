const form= document.getElementById('valid-form');
let varA =parseFloat(document.getElementById('n1').value);
let varB =parseFloat(document.getElementById('n2').value);

formvalid = false;

function numbervalid (varA, varB){
    return varB > varA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const messagesucess =`formulario enviado com sucesso! Verificando: <b> Valor A menor que valor B!</b>` 

    formvalid = numbervalid(n1,n2);
    if (formvalid){
        const centermessagesucess = document.querySelector('.sucess-message')
        centermessagesucess.innerHTML = messagesucess;
        centermessagesucess.getElementsByClassName.display ='block';

        varA.value ='';
        varB.value ='';
    }
    else{
        document.querySelector('.error-message').style.display = 'block';
    }
});