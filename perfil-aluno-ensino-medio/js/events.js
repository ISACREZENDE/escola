import { aluno, saveAlunoData } from './data.js';
import { renderPerfil, renderBimestres } from './dom.js';

function setupEvents() {
    // Evento do perfil
    document.getElementById('editar-perfil').addEventListener('click', () => {
        const isEditing = document.getElementById('editar-perfil').textContent === 'Salvar';
        if (!isEditing) {
            document.getElementById('escola').removeAttribute('readonly');
            document.getElementById('nome').removeAttribute('readonly');
            document.getElementById('turma').removeAttribute('readonly');
            document.getElementById('serie').removeAttribute('readonly');
            document.getElementById('editar-perfil').textContent = 'Salvar';
            document.getElementById('editar-perfil').style.backgroundColor = '#008CBA';
        } else {
            aluno.escola = document.getElementById('escola').value;
            aluno.nome = document.getElementById('nome').value;
            aluno.turma = document.getElementById('turma').value;
            aluno.serie = document.getElementById('serie').value;
            document.getElementById('escola').setAttribute('readonly', 'true');
            document.getElementById('nome').setAttribute('readonly', 'true');
            document.getElementById('turma').setAttribute('readonly', 'true');
            document.getElementById('serie').setAttribute('readonly', 'true');
            document.getElementById('editar-perfil').textContent = 'Editar';
            document.getElementById('editar-perfil').style.backgroundColor = '#4CAF50';
            saveAlunoData(aluno);
            renderPerfil();
        }
    });

    setupBimestreEvents();
}

// Função específica para reaplicar eventos dos bimestres após re-renderização
function setupBimestreEvents() {
    document.querySelectorAll('.editar-bimestre').forEach(botao => {
        botao.addEventListener('click', () => {
            const bimestreIndex = botao.dataset.bimestreIndex;
            const bimestreDiv = botao.parentElement;
            const gradeInputs = bimestreDiv.querySelectorAll('.grade-input');
            const checklistInputs = bimestreDiv.querySelectorAll('.checklist-input');
            
            // Habilitar notas e checkboxes
            gradeInputs.forEach(input => input.disabled = false);
            checklistInputs.forEach(input => input.disabled = false);
            
            botao.style.display = 'none';
            const botaoSalvar = bimestreDiv.querySelector('.salvar-bimestre');
            botaoSalvar.style.display = 'block';
            botaoSalvar.classList.add('active');
        });
    });

    document.querySelectorAll('.salvar-bimestre').forEach(botao => {
        botao.addEventListener('click', () => {
            const bimestreIndex = parseInt(botao.dataset.bimestreIndex);
            const bimestreDiv = botao.parentElement;
            const gradeInputs = bimestreDiv.querySelectorAll('.grade-input');
            const checklistInputs = bimestreDiv.querySelectorAll('.checklist-input');

            // Salvar notas
            gradeInputs.forEach(input => {
                const newGrade = parseFloat(input.value);
                if (!isNaN(newGrade)) {
                    const areaKey = input.dataset.areaKey;
                    const disciplineIndex = parseInt(input.dataset.disciplineIndex);
                    aluno.bimestres[bimestreIndex].disciplinas[areaKey][disciplineIndex].grade = newGrade;
                }
                input.disabled = true;
            });

            // Salvar checkboxes
            checklistInputs.forEach(input => {
                const areaKey = input.dataset.areaKey;
                const disciplineIndex = parseInt(input.dataset.disciplineIndex);
                const checklistKey = input.dataset.checklistKey;
                aluno.bimestres[bimestreIndex].disciplinas[areaKey][disciplineIndex].checklist[checklistKey] = input.checked;
                input.disabled = true;
            });

            botao.style.display = 'none';
            botao.classList.remove('active');
            const botaoEditar = bimestreDiv.querySelector('.editar-bimestre');
            botaoEditar.style.display = 'block';
            saveAlunoData(aluno);
            renderBimestres();
            setupBimestreEvents(); // Reaplicar eventos após re-renderização
        });
    });
}

export { setupEvents, setupBimestreEvents };