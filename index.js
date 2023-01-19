const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./Img/aprovado.png" alt ="Emoji celebrando" />';
const imgReporovado = '<img src="./Img/reprovado.png" alt ="Emoji trsite" />';
const atividades = [];
const notes = [];
const spanAprovado = '<span class="resultado aprovado">aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('digite a nota minima:'));
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizaMediaFinal();
});

function adicionalinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notes.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}<td>`;
        linha += `<td>${inputNotaAtividade.value}<td>`;
        linha += `<td>${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReporovado}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }

    
    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
}

function atualizatabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediaFinal(){

    const mediafinal = calculamediafinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;

    
}

function calculamediafinal(){
    let somadasnotas =0;

    for (let i = 0; i < notes.length; i++){
        somadasnotas += notes[i];
    }

    return somadasnotas / notes.length;
}
