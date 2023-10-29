const cursos = {
    curso1: {
        nome: "Análise e Desenvolvimento de Sistemas",
        informacao: "O que o profissional faz:",
        descricao: "O profissional cria, projeta, desenvolve e configura programas, softwares e sistemas para inúmeras empresas. Faz auditoria de sistemas para avaliar possíveis erros e falhas. Além disso, o tecnólogo em Análise e Desenvolvimento de Sistemas está apto a prestar consultoria e desenvolver pesquisas.",
        ondeTrabalhar: "Onde trabalhar:",
        trabalho: "Como a informática está presente em praticamente todos os setores da sociedade, o tecnólogo em Análise e Desenvolvimento de Sistemas pode atuar em empresas públicas ou privadas, instituições financeiras, consultorias, terceiro setor, empresas especializadas em Tecnologia da Informação (TI), indústrias etc."
    },
    curso2: {
        nome: "Gestão da Qualidade",
        informacao: "O que o profissional faz:",
        descricao: "O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade. Elabora ferramentas para minimizar a incidência de falhas. Elabora e gerencia estratégias para obtenção de certificações. Desenvolve programa de avaliação de performance produtiva organizacional considerando aspectos quantitativos e qualitativos. Avalia e emite parecer técnico em sua área de formação.",
        ondeTrabalhar: "Onde trabalhar:",
        trabalho: "Empresas de planejamento, desenvolvimento de projetos, assessoramento técnico e consultoria. Empresas em geral (indústria, comércio e serviços). Órgãos públicos. Institutos e Centros de Pesquisa. Instituições de Ensino, mediante formação requerida pela legislação vigente."
    },
    curso3: {
        nome: "Fabricação Mecânica",
        informacao: "O que o profissional faz:",
        descricao: " O profissional atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia diversos processos, como desenvolvimento e melhoria de produtos. Na gestão de projetos, alia competências das áreas de gestão como qualidade e controle ambiental. A multidisciplinaridade é o principal atrativo do curso, o que torna o tecnólogo em Fabricação Mecânica um profissional de fácil adaptação e boa empregabilidade. É capaz de atuar em empresas de diversos segmentos da indústria.",
        ondeTrabalhar: "Onde trabalhar:",
        trabalho: "Empresas do ramo metalomecânico, incluindo indústrias manufatureiras e ferramentarias. Na indústria em geral, serralheria, mobiliário, autopeças e em serviços como assistência técnica especializada em diversos equipamentos.  Pode também dedicar-se ao setor público, ao ensino e à pesquisa. Como empreendedor, tem opção de abrir sua própria fábrica, comércio, assistência técnica ou consultoria."
    },
    curso4: {
        nome: "Eletrônica Automotiva",
        informacao: "O que o profissional faz:",
        descricao: "O profissional desenvolve módulos eletrônicos para, por exemplo, o controle de motores. Monitora o desempenho dos conjuntos de componentes eletrônicos durante um teste de rodagem. Projeta e programa os equipamentos eletrônicos de um veículo e os sistemas de conforto e conveniência (como sensores que auxiliam o motorista a estacionar). Também pode atuar como consultor técnico e em treinamento para equipes de concessionárias e oficinas, estando apto a coordenar equipes nas áreas de produção, manutenção e testes de veículos de passeio, de carga e de transporte coletivo. Nos últimos anos, o mercado de trabalho em manutenção de veículos aumentou devido ao crescimento da frota no País.",
        ondeTrabalhar: "Onde trabalhar:",
        trabalho: "Montadoras, empresas fornecedoras de componentes eletrônicos ou serviços para montadoras, empresas de inspeção veicular, fabricantes de produtos que fazem o diagnóstico do funcionamento de veículos, oficinas e centros automotivos, seguradoras, consultorias e oficinas de concessionárias. O tecnólogo pode também abrir seu próprio negócio."
    },
    curso5: {
        nome: "Logística",
        informacao: "O que o profissional faz:",
        descricao: "Gerencia o fluxo de produtos ou pessoas em uma empresa. Cuida da aquisição, do recebimento, da armazenagem, da distribuição e do transporte de produtos, bem como do controle e processamento de pedidos. Determina, por exemplo, a quantidade e o tipo de veículos necessários para uma entrega. Planeja a organização e a ordem dos produtos dentro de caminhões ou contêineres. Monta o roteiro de entrega dos produtos. Define o melhor local para se fazer um estoque. Pode atuar ainda na ordenação do fluxo de atendimento ao público em hospitais e postos de serviço. Em indústrias e fábricas, determina a disposição de equipamentos e setores de produção, de modo a melhorar a produtividade e evitar desperdício e retrabalho. Precisa saber trabalhar em equipe e ter alguma familiaridade com informática, pois no dia a dia do trabalho terá de usar programas específicos da área. Em geral, inicia a carreira em funções de armazenagem, estocagem e inventário de produtos. Todas as empresas, grandes e pequenas, precisam ter um profissional de Logística, uma vez que essa área é fundamental para redução de custos.",
        ondeTrabalhar: "Onde trabalhar:",
        trabalho: "Existe um extenso campo de trabalho na área, como indústrias, supermercados, lojas, hospitais, órgãos públicos de mobilidade urbana, empresas especializadas (operadores logísticos), empresas da área de transportes e empresas de comércio eletrônico. Cada vez mais os serviços de logística têm sido terceirizados, o que abre espaço para as empresas especializadas no setor."
    }
};

const cursoSelect = document.getElementById("cursoSelect");

cursoSelect.onchange = function () {
    const selectedCurso = cursoSelect.value;
    const confirmOpen = confirm("Deseja abrir a janela para " + cursos[selectedCurso].nome + "?");

    if (confirmOpen) {

        const newWindow = window.open("", "Curso", "width=600, height=300");

        newWindow.document.write("<link rel='stylesheet' type='text/css' href='popup-style.css'>");

        newWindow.document.write("<h1>" + cursos[selectedCurso].nome + "</h1>");
        newWindow.document.write("<br><p><strong>" + cursos[selectedCurso].informacao + "</strong></p>");
        newWindow.document.write("<p>" + cursos[selectedCurso].descricao + "</p>");
        newWindow.document.write("<br><p><strong>" + cursos[selectedCurso].ondeTrabalhar + "</strong></p>");
        newWindow.document.write("<p>" + cursos[selectedCurso].trabalho + "</p>");
    } else {
    }
};


