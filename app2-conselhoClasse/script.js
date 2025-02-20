// Get the HTML elements
const perfil = document.getElementById('perfil');
const bimestres = document.getElementById('bimestres');
const botaoEditarPerfil = document.getElementById('editar-perfil');
const inputEscola = document.getElementById('escola');
const inputNome = document.getElementById('nome');
const inputTurma = document.getElementById('turma');
const inputSerie = document.getElementById('serie');
const fotoAluno = document.getElementById('foto-aluno');

// Create a student object for Ensino Médio
const aluno = {
    escola: 'Escola Estadual José Aparecido',
    nome: 'Mariana Costa',
    turma: 'Turma B',
    serie: '1º Ano - Ensino Médio',
    foto: '', // Sem URL para evitar erros de carregamento
    bimestres: [
        {
            numero: 1,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { name: 'Língua Portuguesa', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Língua Inglesa', grade: 6.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': true,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa trazer o livro'
                    } },
                    { name: 'Arte', grade: 8.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Educação Física', grade: 9.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Excelente participação'
                    } }
                ],
                'Matemática e suas Tecnologias': [
                    { name: 'Matemática', grade: 6.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': true,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa melhorar o foco'
                    } }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { name: 'Biologia', grade: 7.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Física', grade: 6.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Dificuldade em cálculos'
                    } },
                    { name: 'Química', grade: 7.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { name: 'História', grade: 8.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Geografia', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Filosofia', grade: 8.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Boa participação nas discussões'
                    } },
                    { name: 'Sociologia', grade: 7.9, checklist: {
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
        },
        {
            numero: 2,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { name: 'Língua Portuguesa', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Língua Inglesa', grade: 6.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': true,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa trazer o livro'
                    } },
                    { name: 'Arte', grade: 8.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Educação Física', grade: 9.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Excelente participação'
                    } }
                ],
                'Matemática e suas Tecnologias': [
                    { name: 'Matemática', grade: 6.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': true,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa melhorar o foco'
                    } }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { name: 'Biologia', grade: 7.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Física', grade: 6.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Dificuldade em cálculos'
                    } },
                    { name: 'Química', grade: 7.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { name: 'História', grade: 8.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Geografia', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Filosofia', grade: 8.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Boa participação nas discussões'
                    } },
                    { name: 'Sociologia', grade: 7.9, checklist: {
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
        },
        {
            numero: 3,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { name: 'Língua Portuguesa', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Língua Inglesa', grade: 6.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': true,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa trazer o livro'
                    } },
                    { name: 'Arte', grade: 8.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Educação Física', grade: 9.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Excelente participação'
                    } }
                ],
                'Matemática e suas Tecnologias': [
                    { name: 'Matemática', grade: 6.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': true,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa melhorar o foco'
                    } }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { name: 'Biologia', grade: 7.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Física', grade: 6.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Dificuldade em cálculos'
                    } },
                    { name: 'Química', grade: 7.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { name: 'História', grade: 8.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Geografia', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Filosofia', grade: 8.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Boa participação nas discussões'
                    } },
                    { name: 'Sociologia', grade: 7.9, checklist: {
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
        },
        {
            numero: 4,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { name: 'Língua Portuguesa', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Língua Inglesa', grade: 6.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': true,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa trazer o livro'
                    } },
                    { name: 'Arte', grade: 8.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Educação Física', grade: 9.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Excelente participação'
                    } }
                ],
                'Matemática e suas Tecnologias': [
                    { name: 'Matemática', grade: 6.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': true,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Precisa melhorar o foco'
                    } }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { name: 'Biologia', grade: 7.8, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Física', grade: 6.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Dificuldade em cálculos'
                    } },
                    { name: 'Química', grade: 7.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { name: 'História', grade: 8.0, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Geografia', grade: 7.5, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': ''
                    } },
                    { name: 'Filosofia', grade: 8.2, checklist: {
                        'Não produz em sala': false,
                        'Desrespeitoso com professor e colegas': false,
                        'Dorme na aula': false,
                        'Não traz material escolar': false,
                        'Sai da aula sem autorização': false,
                        'Tumultua a aula': false,
                        'Outros': 'Boa participação nas discussões'
                    } },
                    { name: 'Sociologia', grade: 7.9, checklist: {
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
        }
    ]
};

// Populate profile fields initially
fotoAluno.src = aluno.foto;
inputEscola.value = aluno.escola;
inputNome.value = aluno.nome;
inputTurma.value = aluno.turma;
inputSerie.value = aluno.serie;

// Toggle edit mode for profile only
let isEditingPerfil = false;
botaoEditarPerfil.addEventListener('click', () => {
    console.log(`Botão perfil clicado: ${isEditingPerfil ? 'Salvar' : 'Editar'}`);
    if (!isEditingPerfil) {
        console.log('Habilitando edição do perfil...');
        inputEscola.removeAttribute('readonly');
        inputNome.removeAttribute('readonly');
        inputTurma.removeAttribute('readonly');
        inputSerie.removeAttribute('readonly');
        botaoEditarPerfil.textContent = 'Salvar';
        botaoEditarPerfil.style.backgroundColor = '#008CBA';
    } else {
        console.log('Salvando mudanças do perfil...');
        aluno.escola = inputEscola.value;
        aluno.nome = inputNome.value;
        aluno.turma = inputTurma.value;
        aluno.serie = inputSerie.value;
        inputEscola.setAttribute('readonly', 'true');
        inputNome.setAttribute('readonly', 'true');
        inputTurma.setAttribute('readonly', 'true');
        inputSerie.setAttribute('readonly', 'true');
        botaoEditarPerfil.textContent = 'Editar';
        botaoEditarPerfil.style.backgroundColor = '#4CAF50';
    }
    isEditingPerfil = !isEditingPerfil;
});

// Function to calculate the average grade for an area
function calculateAreaAverage(disciplinas) {
    const total = disciplinas.reduce((sum, disciplina) => sum + parseFloat(disciplina.grade), 0);
    const average = total / disciplinas.length;
    console.log(`Média para ${disciplinas.map(d => d.name).join(', ')}: ${total} / ${disciplinas.length} = ${average.toFixed(2)}`);
    return average.toFixed(2);
}

// Function to create and populate bimestres
function populateBimestres() {
    console.log('Iniciando populateBimestres...');
    bimestres.innerHTML = ''; // Limpar bimestres existentes
    aluno.bimestres.forEach((bimestre, bimestreIndex) => {
        console.log(`Processando ${bimestre.numero}° Bimestre`);
        const divBimestre = document.createElement('div');
        divBimestre.classList.add('bimestre');

        const h2 = document.createElement('h2');
        h2.textContent = `${bimestre.numero}° Bimestre`;
        divBimestre.appendChild(h2);

        // Botão Editar no início do bimestre
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.classList.add('editar-bimestre');
        botaoEditar.dataset.bimestreIndex = bimestreIndex;
        botaoEditar.style.backgroundColor = '#4CAF50';
        divBimestre.appendChild(botaoEditar);

        // Botão Salvar no final do bimestre (inicialmente escondido)
        const botaoSalvar = document.createElement('button');
        botaoSalvar.textContent = 'Salvar';
        botaoSalvar.classList.add('salvar-bimestre');
        botaoSalvar.dataset.bimestreIndex = bimestreIndex;
        botaoSalvar.style.backgroundColor = '#008CBA';
        botaoSalvar.style.display = 'none';

        let isEditingBimestre = false;

        botaoEditar.addEventListener('click', () => {
            console.log(`Editar clicado para ${bimestre.numero}° Bimestre`);
            isEditingBimestre = true;
            const gradeInputs = divBimestre.querySelectorAll('.grade-input');
            gradeInputs.forEach(input => {
                input.disabled = false;
                console.log(`Campo ${input.dataset.bimestreIndex}-${input.dataset.areaKey}-${input.dataset.disciplineIndex} habilitado`);
            });
            botaoEditar.style.display = 'none';
            botaoSalvar.style.display = 'block'; // Alterado para 'block' para garantir visibilidade
        });

        botaoSalvar.addEventListener('click', () => {
            console.log(`Salvar clicado para ${bimestre.numero}° Bimestre`);
            isEditingBimestre = false;
            const gradeInputs = divBimestre.querySelectorAll('.grade-input');
            gradeInputs.forEach(input => {
                const newGrade = parseFloat(input.value);
                if (!isNaN(newGrade)) {
                    const bimestreIdx = parseInt(input.dataset.bimestreIndex);
                    const areaKey = input.dataset.areaKey;
                    const disciplineIndex = parseInt(input.dataset.disciplineIndex);
                    aluno.bimestres[bimestreIdx].disciplinas[areaKey][disciplineIndex].grade = newGrade;
                    console.log(`Nota salva: ${areaKey} - ${aluno.bimestres[bimestreIdx].disciplinas[areaKey][disciplineIndex].name} = ${newGrade}`);
                }
                input.disabled = true;
            });
            botaoSalvar.style.display = 'none';
            botaoEditar.style.display = 'block'; // Alterado para 'block' para consistência
            // Re-renderizar todos os bimestres
            while (bimestres.firstChild) {
                bimestres.firstChild.remove();
            }
            populateBimestres();
        });

        for (const [areaKey, disciplinas] of Object.entries(bimestre.disciplinas)) {
            console.log(`Renderizando ${areaKey}`);
            const divArea = document.createElement('div');
            divArea.classList.add('area-conhecimento');

            const h3 = document.createElement('h3');
            h3.classList.add('area-titulo');
            h3.textContent = areaKey;
            divArea.appendChild(h3);

            disciplinas.forEach((disciplina, disciplineIndex) => {
                const divDisciplina = document.createElement('div');
                divDisciplina.classList.add('disciplina-com-checklist');

                const divNomeNota = document.createElement('div');
                divNomeNota.classList.add('disciplina');

                const labelNome = document.createElement('label');
                labelNome.textContent = disciplina.name;
                divNomeNota.appendChild(labelNome);

                const labelNota = document.createElement('label');
                labelNota.textContent = 'Nota: ';
                divNomeNota.appendChild(labelNota);

                const inputNota = document.createElement('input');
                inputNota.type = 'number';
                inputNota.min = '0';
                inputNota.max = '10';
                inputNota.step = '0.01';
                inputNota.value = disciplina.grade;
                inputNota.classList.add('grade-input');
                inputNota.dataset.bimestreIndex = bimestreIndex;
                inputNota.dataset.areaKey = areaKey;
                inputNota.dataset.disciplineIndex = disciplineIndex;
                inputNota.disabled = true; // Inicialmente desabilitado
                divNomeNota.appendChild(inputNota);

                divDisciplina.appendChild(divNomeNota);

                const divChecklist = document.createElement('div');
                divChecklist.classList.add('checklist');

                for (const [item, value] of Object.entries(disciplina.checklist)) {
                    if (item === 'Outros') {
                        const labelOutros = document.createElement('label');
                        labelOutros.textContent = 'Outros: ';
                        const textarea = document.createElement('textarea');
                        textarea.value = value || '';
                        labelOutros.appendChild(textarea);
                        divChecklist.appendChild(labelOutros);
                    } else {
                        const labelItem = document.createElement('label');
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.checked = value;
                        labelItem.appendChild(checkbox);
                        labelItem.appendChild(document.createTextNode(` ${item}`));
                        divChecklist.appendChild(labelItem);
                    }
                }

                divDisciplina.appendChild(divChecklist);
                divArea.appendChild(divDisciplina);
            });

            const media = calculateAreaAverage(disciplinas);
            const pMedia = document.createElement('p');
            pMedia.classList.add('media-area');
            pMedia.textContent = `Média da Área: ${media}`;
            divArea.appendChild(pMedia);

            divBimestre.appendChild(divArea);
        }

        // Adicionar o botão Salvar no final do bimestre
        divBimestre.appendChild(botaoSalvar);

        bimestres.appendChild(divBimestre);
    });
    console.log('populateBimestres concluído.');
}

// Initialize the page
populateBimestres();