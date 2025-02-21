import { aluno, saveAlunoData } from './data.js';

// Função para criar o perfil no DOM
function renderPerfil() {
    const perfilDiv = document.getElementById('perfil');
    perfilDiv.innerHTML = `
        <img id="foto-aluno" src="${aluno.foto}" alt="Foto do Aluno">
        <label>Escola: <input type="text" id="escola" value="${aluno.escola}" readonly></label>
        <label>Nome: <input type="text" id="nome" value="${aluno.nome}" readonly></label>
        <label>Turma: <input type="text" id="turma" value="${aluno.turma}" readonly></label>
        <label>Série: <input type="text" id="serie" value="${aluno.serie}" readonly></label>
        <button id="editar-perfil">Editar</button>
    `;
}

// Função para calcular a média de uma área
function calculateAreaAverage(disciplinas) {
    const total = disciplinas.reduce((sum, disciplina) => sum + parseFloat(disciplina.grade), 0);
    return (total / disciplinas.length).toFixed(2);
}

// Função para criar todos os bimestres no DOM
function renderBimestres() {
    const bimestresDiv = document.getElementById('bimestres');
    bimestresDiv.innerHTML = '';
    aluno.bimestres.forEach((bimestre, bimestreIndex) => {
        renderBimestre(bimestreIndex);
    });
}

// Função para renderizar um bimestre específico
function renderBimestre(bimestreIndex) {
    const bimestresDiv = document.getElementById('bimestres');
    bimestresDiv.innerHTML = '';
    const bimestre = aluno.bimestres[bimestreIndex];

    const divBimestre = document.createElement('div');
    divBimestre.classList.add('bimestre');
    divBimestre.innerHTML = `<h2>${bimestre.numero}° Bimestre</h2>`;
    
    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.classList.add('editar-bimestre');
    botaoEditar.dataset.bimestreIndex = bimestreIndex;
    divBimestre.appendChild(botaoEditar);

    const botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = 'Salvar';
    botaoSalvar.classList.add('salvar-bimestre');
    botaoSalvar.dataset.bimestreIndex = bimestreIndex;
    botaoSalvar.style.display = 'none';

    for (const [areaKey, disciplinas] of Object.entries(bimestre.disciplinas)) {
        const divArea = document.createElement('div');
        divArea.classList.add('area-conhecimento');
        divArea.innerHTML = `<h3 class="area-titulo">${areaKey}</h3>`;

        disciplinas.forEach((disciplina, disciplineIndex) => {
            const divDisciplina = document.createElement('div');
            divDisciplina.classList.add('disciplina-com-checklist');
            divDisciplina.innerHTML = `
                <div class="disciplina">
                    <label>${disciplina.name}</label>
                    <label>Nota: <input type="number" class="grade-input" min="0" max="10" step="0.01" value="${disciplina.grade}" disabled
                        data-bimestre-index="${bimestreIndex}" data-area-key="${areaKey}" data-discipline-index="${disciplineIndex}"></label>
                </div>
            `;

            const divChecklist = document.createElement('div');
            divChecklist.classList.add('checklist');
            for (const [item, value] of Object.entries(disciplina.checklist)) {
                if (item === 'Outros') {
                    divChecklist.innerHTML += `
                        <label>Outros: <textarea disabled>${value || ''}</textarea></label>
                    `;
                } else {
                    divChecklist.innerHTML += `
                        <label><input type="checkbox" class="checklist-input" disabled ${value ? 'checked' : ''} 
                            data-bimestre-index="${bimestreIndex}" data-area-key="${areaKey}" data-discipline-index="${disciplineIndex}" 
                            data-checklist-key="${item}"> ${item}</label>
                    `;
                }
            }
            divDisciplina.appendChild(divChecklist);
            divArea.appendChild(divDisciplina);
        });

        const media = calculateAreaAverage(disciplinas);
        divArea.innerHTML += `<p class="media-area">Média da Área: ${media}</p>`;
        divBimestre.appendChild(divArea);
    }

    divBimestre.appendChild(botaoSalvar);
    bimestresDiv.appendChild(divBimestre);
}

export { renderPerfil, renderBimestres, renderBimestre, saveAlunoData };