// Dados iniciais do aluno
const initialAluno = {
    escola: 'Escola Estadual José Aparecido',
    nome: 'Mariana Costa',
    turma: 'Turma B',
    serie: '1º Ano - Ensino Médio',
    foto: '',
    bimestres: [
        {
            numero: 1,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { 
                        name: 'Língua Portuguesa', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Língua Inglesa', 
                        grade: 6.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': true,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa trazer o livro'
                        } 
                    },
                    { 
                        name: 'Arte', 
                        grade: 8.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Educação Física', 
                        grade: 9.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Excelente participação'
                        } 
                    }
                ],
                'Matemática e suas Tecnologias': [
                    { 
                        name: 'Matemática', 
                        grade: 6.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': true,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa melhorar o foco'
                        } 
                    }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { 
                        name: 'Biologia', 
                        grade: 7.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Física', 
                        grade: 6.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Dificuldade em cálculos'
                        } 
                    },
                    { 
                        name: 'Química', 
                        grade: 7.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { 
                        name: 'História', 
                        grade: 8.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Geografia', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Filosofia', 
                        grade: 8.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Boa participação nas discussões'
                        } 
                    },
                    { 
                        name: 'Sociologia', 
                        grade: 7.9, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ]
            }
        },
        {
            numero: 2,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { 
                        name: 'Língua Portuguesa', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Língua Inglesa', 
                        grade: 6.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': true,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa trazer o livro'
                        } 
                    },
                    { 
                        name: 'Arte', 
                        grade: 8.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Educação Física', 
                        grade: 9.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Excelente participação'
                        } 
                    }
                ],
                'Matemática e suas Tecnologias': [
                    { 
                        name: 'Matemática', 
                        grade: 6.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': true,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa melhorar o foco'
                        } 
                    }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { 
                        name: 'Biologia', 
                        grade: 7.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Física', 
                        grade: 6.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Dificuldade em cálculos'
                        } 
                    },
                    { 
                        name: 'Química', 
                        grade: 7.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { 
                        name: 'História', 
                        grade: 8.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Geografia', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Filosofia', 
                        grade: 8.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Boa participação nas discussões'
                        } 
                    },
                    { 
                        name: 'Sociologia', 
                        grade: 7.9, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ]
            }
        },
        {
            numero: 3,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { 
                        name: 'Língua Portuguesa', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Língua Inglesa', 
                        grade: 6.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': true,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa trazer o livro'
                        } 
                    },
                    { 
                        name: 'Arte', 
                        grade: 8.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Educação Física', 
                        grade: 9.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Excelente participação'
                        } 
                    }
                ],
                'Matemática e suas Tecnologias': [
                    { 
                        name: 'Matemática', 
                        grade: 6.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': true,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa melhorar o foco'
                        } 
                    }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { 
                        name: 'Biologia', 
                        grade: 7.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Física', 
                        grade: 6.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Dificuldade em cálculos'
                        } 
                    },
                    { 
                        name: 'Química', 
                        grade: 7.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { 
                        name: 'História', 
                        grade: 8.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Geografia', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Filosofia', 
                        grade: 8.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Boa participação nas discussões'
                        } 
                    },
                    { 
                        name: 'Sociologia', 
                        grade: 7.9, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ]
            }
        },
        {
            numero: 4,
            disciplinas: {
                'Linguagens e suas Tecnologias': [
                    { 
                        name: 'Língua Portuguesa', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Língua Inglesa', 
                        grade: 6.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': true,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa trazer o livro'
                        } 
                    },
                    { 
                        name: 'Arte', 
                        grade: 8.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Educação Física', 
                        grade: 9.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Excelente participação'
                        } 
                    }
                ],
                'Matemática e suas Tecnologias': [
                    { 
                        name: 'Matemática', 
                        grade: 6.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': true,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Precisa melhorar o foco'
                        } 
                    }
                ],
                'Ciências da Natureza e suas Tecnologias': [
                    { 
                        name: 'Biologia', 
                        grade: 7.8, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Física', 
                        grade: 6.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Dificuldade em cálculos'
                        } 
                    },
                    { 
                        name: 'Química', 
                        grade: 7.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ],
                'Ciências Humanas e Sociais Aplicadas': [
                    { 
                        name: 'História', 
                        grade: 8.0, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Geografia', 
                        grade: 7.5, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    },
                    { 
                        name: 'Filosofia', 
                        grade: 8.2, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': 'Boa participação nas discussões'
                        } 
                    },
                    { 
                        name: 'Sociologia', 
                        grade: 7.9, 
                        checklist: {
                            'Não produz em sala': false,
                            'Desrespeita professor(a) e colegas': false,
                            'Faltoso(a)': false,
                            'Dorme na aula': false,
                            'Não traz material escolar': false,
                            'Sai da aula sem autorização': false,
                            'Tumultua a aula': false,
                            'Chega na aula atrasado(a)': false,
                            'Outros': ''
                        } 
                    }
                ]
            }
        }
    ]
};

// Função para carregar ou inicializar os dados
function loadAlunoData() {
    const savedData = localStorage.getItem('alunoData');
    return savedData ? JSON.parse(savedData) : initialAluno;
}

// Função para salvar os dados
function saveAlunoData(data) {
    localStorage.setItem('alunoData', JSON.stringify(data));
}

// Exportar o objeto aluno e funções
let aluno = loadAlunoData();
export { aluno, saveAlunoData };