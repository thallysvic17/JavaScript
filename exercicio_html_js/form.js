const form= document.getElementById('valid-form');


formvalid = false;

function numbervalid (varA, varB){
    return varB > varA;
}

form.addEventListener('submit',function(e){
    let varA =parseFloat(document.getElementById('n1').value);
    let varB =parseFloat(document.getElementById('n2').value);
    e.preventDefault();
    const messagesucess =`formulario enviado com sucesso! Verificando:  Valor A menor que valor B!` 


    formvalid = numbervalid(varA,varB);
    
    if (formvalid){              
        alert(messagesucess);


        varA.value ='';
        varB.value ='';
    }
    else{
        alert(' O valor B precisa ser maior que o ValorA!');
    }
});

