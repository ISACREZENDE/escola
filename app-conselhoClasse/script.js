// Get the HTML elements
const perfil = document.getElementById('perfil');
const bimestres = document.getElementById('bimestres');
const botaoEditar = document.getElementById('editar-perfil');
const inputEscola = document.getElementById('escola');
const inputNome = document.getElementById('nome');
const inputTurma = document.getElementById('turma');
const inputSerie = document.getElementById('serie');
const fotoAluno = document.getElementById('foto-aluno');

// Create a student object with all BNCC disciplines
const aluno = {
    escola: 'Escola Estadual Maria da Silva',
    nome: 'João da Silva',
    turma: 'Turma A',
    serie: '3ª Série',
    foto: 'joao.jpg', // Substitua por um caminho real se tiver a imagem
    bimestres: [
        {
            numero: 1,
            disciplinas: [
                { name: 'Língua Portuguesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Matemática', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': true,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa se esforçar mais'
                } },
                { name: 'Ciências Naturais', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'História', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Geografia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Arte', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Educação Física', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Ensino Religioso', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Língua Inglesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Filosofia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Sociologia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Biologia', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Física', grade: 6, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa melhorar o foco'
                } },
                { name: 'Química', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } }
            ]
        },
        {
            numero: 2,
            disciplinas: [
                { name: 'Língua Portuguesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Matemática', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': true,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa se esforçar mais'
                } },
                { name: 'Ciências Naturais', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'História', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Geografia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Arte', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Educação Física', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Ensino Religioso', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Língua Inglesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Filosofia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Sociologia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Biologia', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Física', grade: 6, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa melhorar o foco'
                } },
                { name: 'Química', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } }
            ]
        },
        {
            numero: 3,
            disciplinas: [
                { name: 'Língua Portuguesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Matemática', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': true,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa se esforçar mais'
                } },
                { name: 'Ciências Naturais', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'História', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Geografia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Arte', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Educação Física', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Ensino Religioso', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Língua Inglesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Filosofia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Sociologia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Biologia', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Física', grade: 6, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa melhorar o foco'
                } },
                { name: 'Química', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } }
            ]
        },
        {
            numero: 4,
            disciplinas: [
                { name: 'Língua Portuguesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Matemática', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': true,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa se esforçar mais'
                } },
                { name: 'Ciências Naturais', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'História', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Geografia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Arte', grade: 9, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Educação Física', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Ensino Religioso', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Língua Inglesa', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Filosofia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Sociologia', grade: 8, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Biologia', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } },
                { name: 'Física', grade: 6, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': 'Precisa melhorar o foco'
                } },
                { name: 'Química', grade: 7, checklist: {
                    'Não produz em sala': false,
                    'Desrespeitoso com professor e colegas': false,
                    'Dorme na aula': false,
                    'Não traz material escolar': false,
                    'Sai da aula sem autorização': false,
                    'Tumultua a aula': false,
                    'Outros': ''
                } }
            ]
        }
    ]
};

// Populate profile fields initially
fotoAluno.src = aluno.foto; // Carrega a foto do aluno
inputEscola.value = aluno.escola;
inputNome.value = aluno.nome;
inputTurma.value = aluno.turma;
inputSerie.value = aluno.serie;

// Toggle edit mode for profile
let isEditing = false;
botaoEditar.addEventListener('click', () => {
    if (!isEditing) {
        // Enter edit mode
        inputEscola.removeAttribute('readonly');
        inputNome.removeAttribute('readonly');
        inputTurma.removeAttribute('readonly');
        inputSerie.removeAttribute('readonly');
        botaoEditar.textContent = 'Salvar';
        botaoEditar.style.backgroundColor = '#008CBA'; // Blue color for "Save"
    } else {
        // Save changes and exit edit mode
        aluno.escola = inputEscola.value;
        aluno.nome = inputNome.value;
        aluno.turma = inputTurma.value;
        aluno.serie = inputSerie.value;
        inputEscola.setAttribute('readonly', 'true');
        inputNome.setAttribute('readonly', 'true');
        inputTurma.setAttribute('readonly', 'true');
        inputSerie.setAttribute('readonly', 'true');
        botaoEditar.textContent = 'Editar';
        botaoEditar.style.backgroundColor = '#4CAF50'; // Back to green for "Edit"
    }
    isEditing = !isEditing;
});

// Function to create and populate bimestres
function populateBimestres() {
    aluno.bimestres.forEach(bimestre => {
        const divBimestre = document.createElement('div');
        divBimestre.classList.add('bimestre');

        const h2Bimestre = document.createElement('h2');
        h2Bimestre.textContent = `${bimestre.numero}° Bimestre`;
        divBimestre.appendChild(h2Bimestre);

        bimestre.disciplinas.forEach(disciplina => {
            const divDisciplinaComChecklist = document.createElement('div');
            divDisciplinaComChecklist.classList.add('disciplina-com-checklist');

            // Disciplina section
            const divDisciplina = document.createElement('div');
            divDisciplina.classList.add('disciplina');

            const labelDisciplina = document.createElement('label');
            labelDisciplina.textContent = disciplina.name;
            divDisciplina.appendChild(labelDisciplina);

            const labelNota = document.createElement('label');
            labelNota.textContent = 'Nota: ';
            divDisciplina.appendChild(labelNota);

            const inputNota = document.createElement('input');
            inputNota.type = 'number';
            inputNota.min = '0';
            inputNota.max = '10';
            inputNota.step = '0.01';
            inputNota.value = disciplina.grade;
            divDisciplina.appendChild(inputNota);

            divDisciplinaComChecklist.appendChild(divDisciplina);

            // Checklist section
            const divChecklist = document.createElement('div');
            divChecklist.classList.add('checklist');

            // Add checklist items
            for (const [item, value] of Object.entries(disciplina.checklist)) {
                if (item === 'Outros') {
                    const labelOutros = document.createElement('label');
                    labelOutros.textContent = 'Outros: ';
                    
                    const textareaOutros = document.createElement('textarea');
                    textareaOutros.value = value || '';
                    labelOutros.appendChild(textareaOutros);
                    divChecklist.appendChild(labelOutros);
                } else {
                    const labelItem = document.createElement('label');
                    
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = value === true;
                    
                    labelItem.appendChild(checkbox);
                    labelItem.appendChild(document.createTextNode(` ${item}`));
                    divChecklist.appendChild(labelItem);
                }
            }

            divDisciplinaComChecklist.appendChild(divChecklist);
            divBimestre.appendChild(divDisciplinaComChecklist);
        });

        bimestres.appendChild(divBimestre);
    });
}

// Initialize the page
populateBimestres();