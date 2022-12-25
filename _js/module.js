//Duração  1 instantânea, 2 concentração, 3 Sustentada, 4*continuo, 5 permanente
const _Skills = [
    // Acrobacias
    {
        id: 3001,
        name: "Acrobacias",
        rank: 0,
        description: `<p><small>Agilidade - Apenas Treinado</small></p>`
            + `<p>Use Acrobacia para virar, rolar, mergulhar, cair e realizar outras manobras acrobáticas, assim como manter seu equilíbrio sobre circunstâncias difíceis.</p>`
            + "<p><b>Cair</b>: Você pode fazer um teste de Acrobacias (CD 5) para reduzir o dano de uma queda, reduzindo o dano por 1 por grau de sucesso. Uma queda reduzida a dano 0 não causa dano e você rapidamente fica de pé como ação livre. Do contrário, você está caído até o final da queda.</p>"
            + "<p><b>Equilibrando-se</b>: Você pode manter seu equilíbrio e se mover em uma superfície com sua velocidade terra menos 1 com um teste bem-sucedido de Acrobacias contra a CD da superfície. Um grau de falha indica que você gasta sua ação de movimento apenas mantendo seu equilíbrio e não se move, enquanto dois graus ou mais de falha significa que você perde seu equilíbrio e cai.</p>"
            + "<p>Você é vulnerável enquanto se equilibrando. Aceitando um aumento de +5 na CD de Acrobacias, você não fica vulnerável. Se você falhar um teste de salvamento enquanto se equilibra, faça um teste de Acrobacias adicional contra a CD original para evitar cair.</p>"
            + `<p><b>Ficar em Pé</b>: Você pode fazer um teste de Acrobacias CD 20 para ir de caído para em pé como ação livre em vez de uma ação de movimento. Falha no teste significa que você continua caído.</p>`
            + `<p><b>Manobras</b>: Você pode fazer testes de Acrobacias para várias façanhas ou manobras acrobáticas, desde back-flips para pular sobre um oponente (e ficar atrás deles), saltar para cima de uma borda, rolar através de obstáculos e assim em diante. O Mestre define a CD. Sucesso significa que você realiza a manobra enquanto falha significa que você não consegue e a falha por dois ou mais graus geralmente resulta se escorrega e cai deitado (e pode sofrer efeitos adicionais, dependendo da façanha). Uma manobra com sucesso pode conceder um bônus circunstancial para as ações que seguirem, se o Mestre achar adequado.</p>`
    },
    // Atletismo
    {
        id: 3002,
        name: "Atletismo",
        rank: 0,
        description: `<p><small>Força</small></p>`
            + `<p>Use Atletismo para façanhas físicas como escalar, pular, cavalgar em montarias e nadar.</p>`
            + `<p><b>Correr</b>: Você pode fazer um teste de CD 15 de Atletismo como ação livre para correr mais rápido: um ou mais graus de sucesso aumentam sua velocidade terrestre em +1 por uma rodada.</p>`
            + `<p><b>Escalar</b>: Com sucesso no teste de Atletismo, você pode subir um declive, parece ou outra superfície inclinada com sua velocidade terrestre menos 2 como uma ação de movimento. Uma superfície totalmente suave, plana e vertical não pode ser escalada sem o <i>Escalar Paredes</i> do efeito Movimento. Uma falha num teste de Atletismo indica que não obteve progresso, enquanto uma falha de dois ou mais graus significa que você cai da altura que alcançou (a não ser se tiver com algum equipamento de segurança que previna queda). Faça um teste de Atletismo para se segurar (CD igual ao teste inicial +10). Você é vulnerável enquanto escala a não ser se aceitar um aumento de +5 na classe de dificuldade.</p>`
            + `<p><b>Caindo</b>: Dano de queda inflige causa dano 4 mais duas vezes a distância caída, até um máximo de dano 16. Uma queda com dano 0 ou menor, como uma queda de 2 metros ou menos, não causa dano. Você fica caído no chão no fim da queda. Você pode usar Acrobacias para reduzir o dano da queda.</p>`
            + `<p><b>Nadar</b>: Um teste com sucesso de Atletismo contra CD 10 permite que você nade com sua velocidade terrestre menos 2 como ação de movimento. Se o teste falhar, você não faz progresso através da água durante a ação. Com mais de um grau de falha, você vai para debaixo d'água. Se estiver debaixo d'água, você deve segurar sua respiração para evitar afogamento.</p>`
            + `<p><b>Saltar</b>: O resultado de um teste de Atletismo é a distância (em pés) você pode fazer em um salto à distância correndo. Se fizer o teste parado, divida a distância pela metade. Se fizer o teste verticalmente (reto para cima) divida a distância por 5, se fizer o salto parado, divida a distância por 10.</p>`
            + `<p>Seu bônus de Atletismo + 10 é a distância base que você pode saltar em circunstâncias rotineiras. Então, se o herói com bônus de +10 em Atletismo pode fazer um salto à distância de 20 pés (6 metros), um salto à distância parado de 10 pés (3 metros), um salto vertical de 4 pés (1,2 metros) e um salto vertical parado de 2 pés (0,6 metros) como rotina.</p>`
            + `<p><b>Super-Salto</b>: Se desejar que seu herói salte dezenas, centenas ou até milhares de metros, veja o efeito Saltar.</p>`
    },
    // Enganação
    {
        id: 3003,
        name: 'Enganação',
        rank: 0,
        description: '<p><small>Presença - Interação</small></p>'
            + `<p>Enganação é a perícia de fazer outros acreditarem no que você quer que eles acreditem. Cobre coisas como atuação, blefar, conversa rápida , trapaças e subterfúgio.</p>`
            + `<p><b>Blefar</b>: Faça um teste de Enganação para contar uma mentira crível ou conseguir convencer alguém a lhe ajudar em algo. Um blefe geralmente é oposto contra o teste de Enganação ou Intuição de alguém. Circunstâncias favoráveis e não favoráveis pesam muito no resultado. Há dois tipos de situações para enfrentar: ou o que você fala é difícil de acreditar ou vai contra o interesse pessoal, natureza ou personalidade do alvo.</p>`
            + `<p><b>Disfarce</b>: Você pode usar maquiagem, trajes e outros apetrechos para mudar sua aparência. Seu teste de Enganação determina a eficácia do disfarce oposto ao resultado do teste de percepção dos outros. O Mestre faz um teste de Enganação secretamente para você não ter certeza quão bem o disfarce aguenta sob vigilância.</p>`
            + `<p><b>Fintar</b>: Você pode usar Enganação como ação padrão para induzir o alvo ao erro em combate. Faça um teste de Enganação como uma ação padrão contra o melhor entre a Enganação ou Intuição do alvo. Se seu resultado tiver sucesso, o alvo fica vulnerável contra seu próximo ataque, até o fim da próxima rodada (veja condição Vulnerável).</p>`
            + `<p><b>Alusão</b>: Você pode usar Enganação para enviar mensagens encobertas usando jogo de palavras e duplo sentido enquanto, aparentemente, fala outras coisas. A CD para mensagens básicas é 10. Mensagens complexas ou tentando comunicar informações novas tem CD 15 ou 20 respectivamente. O recipiente da mensagem deve fazer um teste de Intuição contra a mesma CD para entender.</p>`
    },
    // Furtividade
    {
        id: 3004,
        name: "Furtividade",
        rank: 0,
        description: `<p><small>Agilidade</small>`
            + `<p>Você é habilidoso em andar despercebido. Enquanto usando Furtividade, você se move igual ao seu valor de velocidade menos 1 sem penalidades. Mais rápido que isso, até sua velocidade total, você recebe uma penalidade de -5 para seus testes de Furtividade.</p>`
            + `<p><b>Escondendo-se</b>: Se tiver que se cobrir ou se esconder, faça um teste de Furtividade oposto pelo teste de Percepção do observador, para se esconder e andar sem ser notado. Se outros estiverem cientes de sua presença, você não pode usar Furtividade para ficar se manter despercebido. Você pode correr para ao redor de uma esquina para sair de seu campo de visão e então usar Furtividade, mas os outros vão saber para o caminho que foi.</p>`
            + `<p><b>Perseguir</b>: Você pode usar Furtividade para seguir alguém na sua velocidade normal. Isso assume que você tem alguma cobertura ou camuflagem (uma multidão de pessoas, sombras, névoa, etc.). Se o sujeito está preocupado em ser seguido, ele pode fazer um teste de Percepção (oposto por seu teste de Furtividade) toda vez que ele muda de curso (entrar numa esquina, sair de um prédio, assim em diante). Se seu alvo não tiver suspeitas, ele recebe apenas um teste de Percepção por cena. Se o alvo lhe nota, faça um teste de Enganação, oposto pela Intuição. Se tiver sucesso, você consegue passar sua presença como coincidência e continuar seguindo enquanto uma falha, ou ser notado uma segunda vez, significa que o alvo sabe que tem algo estranho acontecendo e reage de acordo.</p>`
    },
    // Intimidação
    {
        id: 3005,
        name: "Intimidação",
        rank: 0,
        description: '<p><small>Presença - Interação</small></p>'
            + '<p>Você pode usar ameaças (tanto reais e implícitas) para fazer os outros fazer o que você quer.</p>'
            + '<p><b>Coagir</b>: Faça um teste de Intimidação oposto pela Intuição ou Vontade do personagem (qual for a maior). Se o teste obtiver sucesso, você pode tratar o alvo como amigável, mas apenas para ações realizadas dentro de sua presença. Isso é, o alvo mantém sua atitude normal, mas conversará, dará sugestões, oferecerá ajuda limitada ou até falará em sua defesa enquanto intimidado. O alvo coopera, mas não significa necessariamente que vai obedecer todas suas vontades ou fazer algo que o colocará em perigo diretamente.</p>'
            + '<p><b>Desmoralizar</b>: Você pode usar Intimidação em combate como ação padrão para enfraquecer a confiança do seu oponente. Faça um teste de Intimidação como ação padrão. Se tiver sucesso, o alvo fica prejudicado (penalidade circunstancial de -2 em testes) até o fim do próximo turno. Com quatro ou mais graus de sucesso, o alvo fica desabilitado (uma penalidade de -5) até o fim do próximo turno.</p>'
            + '<p><b>Intimidar Capangas</b>: Você pode intimidar um grupo inteiro de capangas – todos que podem vê-lo e ouvi-lo – com apenas um teste. Se o grupo tiver em vantagem sobre você, você sofre a penalidade normal em seu teste. Compare seu resultado com apenas um teste de resistência feito pelo Mestre para o grupo inteiro. Seu teste de Intimidação deve ter o mesmo efeito em todos membros do grupo (isso é, não poderá desmoralizar alguns e coagir outros, por exemplo).</p>'
    },
    // Intuição
    {
        id: 3006,
        name: 'Intuição',
        rank: 0,
        description: '<p><small>Prontidão</small>'
            + '<p>Você pode dizer as intenções verdadeiras de alguém e seus sentimentos prestando atenção em coisas como linguagem corporal, entonação e sua própria intuição.</p>'
            + '<p>Um sucesso em testes de Intuição pode permiti-lo resistir a efeitos de perícias de interação, se tornando ciente da intenção verdadeira da outra pessoa. Você pode usar essa perícia para dizer se alguém está agindo estranhamente ou avaliar confiabilidade.</p>'
            + '<p><b>Alusão</b>: Você pode usar Intuição para captar mensagens escondidas enviadas pela perícia Enganação.</p>'
            + '<p><b>Avaliar</b>: Com um teste de Intuição, oposto pela Enganação, você pode dizer se alguém é confiável e honrável (ou se não é) assim que o conhece. Você pode fazer um teste de Intuição (CD 20) para avaliar uma situação social, entendendo o clima geral e as atitudes prevalecentes . Dois ou mais graus de falha no teste significa que você interpreta mal os sinais, então o Mestre pode querer fazer esse teste em segredo para você.</p>'
            + '<p><b>Detectar Ilusão</b>: O Mestre pode fazer um teste secreto de Intuição para determinar se seu herói sente a natureza verdadeira de uma ilusão (CD 10 + graduação de Ilusão). Sucesso significa que você fica atento as falhas da ilusão, sentindo que não é real. Veja efeito Ilusão.</p>'
            + '<p><b>Detectar Influência</b>: Você pode fazer um teste de Intuição para notar alguém agindo por influência externa. A CD é 10 + graduação do efeito ou perícia afetando o alvo. Se você tiver sucesso, você nota que o sujeito não está agindo completamente sob sua própria vontade. Três ou mais graus de sucesso pode dar uma ideia geral do que estiver lhe influenciando (ou talvez até quem, dependendo da situação e da opinião do Mestre).</p>'
            + '<p><b>Resistir Influência</b>: Faça um teste de Intuição quando solicitado para resistir ou superar os efeitos de certas perícias de interação como Enganação ou Intimidação. Se o resultado do seu teste exceder do seu oponente, você não é afetado pela tentativa de lhe influenciar.</p>'
    },
    // Investigação
    {
        id: 3007,
        name: 'Investigação',
        rank: 0,
        description: '<p><small>Intelecto - Apenas Treinado</small></p>'
            + '<p>Você sabe como procurar e estudar pistas, obter informações através de entrevistas e vigilância, e analisar evidência para ajudar resolver crimes. O Mestre pode fazer testes de Investigação por você em segredo, para que não saiba exatamente o que achou ou se perdeu alguma coisa.</p>'
            + '<p><b>Procurar</b>: Você pode buscar uma área por pistas, itens escondidos, armadilhas e outros detalhes. Percepção permite que você note imediatamente coisas, enquanto um teste de Investigação permite captar os detalhes com algum esforço.'
            + `<p>A CD do teste de Investigação para encontrar um objeto escondido geralmente é oposto pelo teste de Furtividade ou Prestidigitação de quem o escondeu.</p>`
            + `<p><b>Mais Utilidades</b>: Ver em "Descrições Extendidas" no Painel de Perícias.</p>`
    },
    // Percepção
    {
        id: 3008,
        name: 'Percepção',
        rank: 0,
        description: '<p><small>Prontidão</small></p>'
            + '<p>Use essa perícia para notar e captar coisas. Discernir detalhes – como ouvir claramente uma conversa ou ler um texto à distância – requer ao menos três graus de sucesso no teste de Percepção.</p>'
            + '<p>Geralmente, você tem uma penalidade circunstancial de -1 em teste de Percepção a cada 3 metros entre você e o que você está tentando perceber. Então, ouvir um barulho a 15 metros é um modificador de -5 para seu teste de Percepção, por exemplo.</p>'
            + '<p>O Mestre geralmente faz os testes de Percepção secretamente para que não saiba se há nada lá fora ou simplesmente falhou de em notar. Os usos comuns de Percepção são:</p>'
            + '<p><b>Ouvir</b>: Faça um teste contra a CD baseada em quão alto é o barulho ou contra o teste oposto de Furtividade. Conversações normais são CD 10, barulho suave é CD 10. Ouvir através de uma porta é CD +5, +15 para uma parede sólida. Enquanto estiver dormindo, ouvir algo bem suficiente para acordar é +10 na CD.</p>'
            + '<p><b>Ver</b>: Faça um teste contra a CD baseada em quão visível é o objeto ou contra um teste oposto de Furtividade. Algo à vista é CD 0, enquanto algo sutil ou fácil de deixar passar pode ser uma CD 5, 10 ou mais. Percepção visual também é usado para detectar alguém disfarçado (veja perícia Enganação) ou notar objetos escondidos (veja perícia Prestidigitação).</p>'
            + '<p><b>Outros Sentidos</b>: Você pode fazer testes de Percepção envolvendo outros sentidos também (veja Poderes para mais em sentidos). Notando algo óbvio para aquele sentido é uma CD 0. Coisas menos óbvias são CD 10 ou mais, coisas escondidas são CD 20 ou mais e discernir detalhes requer ao menos três graus de sucesso, como de costume.</p>'
            + '<p>Você pode fazer um teste de Percepção toda vez que tiver a oportunidade de notar algo novo. Como uma ação de movimento, você pode tentar notar algo que falhou de notar previamente (ou acreditou que perdeu de ver).</p>'
            + '<p>Vários efeitos sensoriais provêm modificadores em testes de Percepção, com Poderes.</p>'
    },
    // Persuasão
    {
        id: 3009,
        name: 'Persuasão',
        rank: 0,
        description: '<p><small>Presença - Interação</small></p>'
            + '<p>Você é habilidoso em lidar com pessoas, desde etiqueta e reuniões sociais para um jeitinho com as palavras e conversar publicamente, todas que ajudam você passar suas opiniões, fazer uma boa impressão, negociações e conseguir fazer pessoas verem as coisas de sua maneira.</p>'
            + '<p>Em negociações, todos os participantes rolam testes de Persuasão para ver quem ganha a vantagem. Testes opostos também resolvem casos onde dois defensores alegam casos opostos perante um terceiro.</p>'
            + '<p>Você pode melhorar a atitude de outros com teste de Persuasão CD 15. Sucesso melhora a atitude em um grau, enquanto a cada dois graus adicionais melhora por ainda mais um passo. Falha significa nenhuma alteração enquanto mais de um grau de falha piora em um grau! Em caso de um alvo hostil ele pode até mesmo atacar o personagem ou interferir nas suas ações se piorar.</p>'
            + '<p>Se o teste de Persuasão falhar, tentar novamente é fútil; o alvo está com a cabeça feita contra seus argumentos. Ao critério do Mestre, você pode tentar novamente quando a situação mudar de alguma maneira: você encontrar uma nova aproximação de seu argumento, novas evidências surgirem, e assim em diante. O Mestre pode considerá-lo em desvantagem diante de negociações futuras, impondo uma penalidade circunstancial também.</p>'
            + `<p>Veja mais em "Descrições Extendidas" no Painel de Perícias.</p>`
    },
    // Prestidigitação
    {
        id: 3010,
        name: 'Prestidigitação',
        rank: 0,
        description: '<p><small>Destreza - Manipulação</small></p>'
            + '<p>Você pode realizar feitos habilidosos como um ilusionista como fazer objetos pequenos desaparecer, surrupiar bolsos, escapar de amarras e assim e diante. Mágicos de palco usam Prestidigitação legitimamente como perícia de performance, mas é mais reconhecida por suas aplicações criminosas.</p>'
            + '<p><b>Escondendo Itens</b>: Você pode usar Prestidigitação para esconder itens pequenos em você, fazendo o resultado do teste ser a CD de um teste de Investigação ou Percepção para encontrar.</p>'
            + '<p><b>Contorcionista</b>: Você pode usar Prestidigitação para contorcer seu corpo. Faça um teste de CD 30 de Prestidigitação para se encaixar em um espaço apertado demais para seus ombros, mas amplo suficiente para sua cabeça, ou passar braço por uma abertura ampla suficiente para sua mão, mas apertada demais para o restante do seu braço.</p>'
            + '<p><b>Escapando</b>: Faça um teste de Prestidigitação para escapar de vários tipos de amarras. Isso leva um minuto por teste.</p>'
            + '<p><b>Mais utilidades</b>: Ver em "Descrições Extendidas" no Painel de Perícias.</p>'
    },
    // Tecnologia
    {
        id: 3011,
        name: 'Tecnologia',
        rank: 0,
        description: '<p><small>Intelecto – Apenas Treinado – Requer Ferramentas</small></p>'
            + '<p>Tecnologia cobre operar, construir, reparar e atividades em geral com dispositivos e equipamentos eletrônicos. Sem as ferramentas apropriadas, você recebe uma penalidade de -5 em testes de Tecnologia para circunstâncias bem desfavoráveis.</p>'
            + '<p><b>Operando</b>: Maioria das operações com equipamento tecnológico não requer um teste de perícia e pode ser feito destreinado. Usando um dispositivo que não é familiar requer um teste, com a CD determinada por quão exótico ou incomum o dispositivo, de simples (CD 10) a altamente avançado (CD 25 ou mais).</p>'
            + '<p><b>Construindo</b>: A dificuldade e o tempo necessário para fazer o item depende da complexidade, como mostrado na tabela Construindo Itens. Se seu teste de Tecnologia obtiver sucesso, você tem o item feito depois do tempo necessário. Se o teste falhar, você não produz um item usável no final do período e todo tempo e material foi gasto. Mais de um grau de falha no teste pode resultar num acidente ou outro efeito colateral, ao critério do Mestre.</p>'
            + '<p><b>Reparos</b>: Você pode usar tecnologia para reparar itens danificados, com uma CD -5 para a CD de construir o item e -2 a graduação de Tempo. Então, você pode reparar um item complexo em oito horas (graduação de Tempo de 12) com CD de 20. Falha significa que gastou o tempo, mas não teve progresso, enquanto falha por dois ou mais graus pode danificar mais o item ou causar um acidente iguais aos propensos da criação do item.</p>'
            + '<p><b>Mais utilidades</b>: Ver em "Descrições Extendidas" no Painel de Perícias.</p>'
    },
    // Tratamento
    {
        id: 3012,
        name: 'Tratamento',
        rank: 0,
        description: '<p><small>Intelecto – Apenas Treinado – Manipulação – Requer Ferramentas</small></p>'
            + '<p>Você é treinado em tratar ferimentos e doenças. A CD do teste e a eficácia do Tratamento depende da tarefa:</p>'
            + '<p>Se não tiver o equipamento médico e suprimentos apropriados, você recebe uma penalidade de -5 no seu teste. Se o alvo tiver alguma biologia incomum (um alienígena, por exemplo), você também sofre uma penalidade circunstancial.</p>'
            + '<p>Você pode usar a perícia de Tratamento, mas apenas para diagnóstico, prover cuidado ou tratar doenças e venenos. Você recebe uma penalidade de -5 em testes quando tratando de si mesmo.</p>'
            + '<p><b>Estabilizar</b>: Como uma ação padrão, um teste com sucesso de Tratamento estabiliza um personagem moribundo.</p>'
            + '<p><b>Diagnóstico</b>: Você pode diagnosticar doenças e ferimentos com um olhar para tratar depois. Isso leva ao menos um minuto. Ao critério do Mestre, um teste com sucesso provê um bônus de +2 em testes futuros de Tratamento.</p>'
            + '<p><b>Mais utilidades</b>: Ver em "Descrições Extendidas" no Painel de Perícias.</p>'
    },
    // Veículos
    {
        id: 3013,
        name: 'Veículos',
        rank: 0,
        description: '<p><small>Destreza – Apenas Treinado – Manipulação</small></p>'
            + '<p>Use essa perícia para operar veículos, desde terrestres como carros até barcos, aviões ou então naves-espaciais!</p>'
            + '<p>As tarefas de rotina, como a operação normal de veículos conhecidos, não requerem testes e podem até ser feitas sem treinamentos para alguns veículos, particularmente os comuns, como carros. Faça um teste somente ao operar o veículo em uma situação estressante ou dramática, como ser perseguido ou atacado, ou tentar chegar a um destino em um período limitado de tempo.</p>'
            + '<p>Você pode fazer teste de Veículos para realizar várias manobras com um veículo:</p>'
            + '<p>Note que a perícia Veículos não cobre cavalgar animais de montaria. Para isso use a Especialidade: Cavalgar, com base em Agilidade usando as mesmas diretrizes dadas para os testes de Veículos. Ao critério do Mestre, habilidades como Atletismo podem servir para cavalgar em montarias (talvez com penalidade circunstancial), especialmente se cavalgar for uma habilidade incomum, como no mundo moderno.</p>'
    },
];

var _EffectsList = [
    {
        5001: {
          name: "Aflição",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "1",
          range: "1",
          action: "1",
          duration: "1",
          resistedBy: "",
          affectedTrait: ""
        },
        5002: {
          name: "Alongamento",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5003: {
          name: "Ambiente ",
          baseCostbaseCost: "0",
          rank: "1",
          maxRank: "30",
          type: "2",
          range: "4",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5004: {
          name: "Camuflagem",
          baseCostbaseCost: "2",
          rank: "0",
          maxRank: "-1",
          type: "5",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5005: {
          name: "Característica",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5006: {
          name: "Característica Aumentada",
          baseCostbaseCost: "1",
          rank: "0",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5007: {
          name: "Compreender",
          baseCostbaseCost: "2",
          rank: "0",
          maxRank: "-1",
          type: "5",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5008: {
          name: "Comunicação",
          baseCostbaseCost: "4",
          rank: "1",
          maxRank: "5",
          type: "5",
          range: "4",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5009: {
          name: "Controle de Sorte",
          baseCostbaseCost: "3",
          rank: "1",
          maxRank: "-1",
          type: "2",
          range: "3",
          action: "4",
          duration: "1",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5010: {
          name: "Crescimento",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5011: {
          name: "Criar",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "2",
          range: "2",
          action: "1",
          duration: "3",
          resistedBy: "Esquiva",
          affectedTrait: "Nenhum"
        },
        5012: {
          name: "Cura",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "1",
          action: "1",
          duration: "1",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5013: {
          name: "Dano",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "1",
          range: "1",
          action: "1",
          duration: "1",
          resistedBy: "Resistência",
          affectedTrait: "Nenhum"
        },
        5014: {
          name: "Deflexão",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "3",
          range: "2",
          action: "1",
          duration: "1",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5015: {
          name: "Encolhimento",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5016: {
          name: "Enfraquecer",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "1",
          range: "1",
          action: "1",
          duration: "1",
          resistedBy: "",
          affectedTrait: ""
        },
        5017: {
          name: "Escavação",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "4",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5018: {
          name: "Ilusão",
          baseCostbaseCost: "0",
          rank: "1",
          maxRank: "-1",
          type: "5",
          range: "3",
          action: "1",
          duration: "3",
          resistedBy: "Vontade",
          affectedTrait: ""
        },
        5019: {
          name: "Imortalidade",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "20",
          type: "3",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5020: {
          name: "Imunidade",
          baseCostbaseCost: "1",
          rank: "0",
          maxRank: "-1",
          type: "3",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5021: {
          name: "Intangibilidade",
          baseCostbaseCost: "5",
          rank: "1",
          maxRank: "4",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5022: {
          name: "Invocar",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "2",
          range: "1",
          action: "1",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5023: {
          name: "Leitura Mental",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "5",
          range: "3",
          action: "1",
          duration: "3",
          resistedBy: "Vontade",
          affectedTrait: ""
        },
        5024: {
          name: "Membros Extras",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5025: {
          name: "Morfar",
          baseCostbaseCost: "5",
          rank: "1",
          maxRank: "4",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5026: {
          name: "Mover Objetos",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "2",
          range: "2",
          action: "1",
          duration: "3",
          resistedBy: "Esquiva ou Força/Acrobacias ou Atletismo",
          affectedTrait: ""
        },
        5027: {
          name: "Movimento",
          baseCostbaseCost: "2",
          rank: "0",
          maxRank: "-1",
          type: "4",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5028: {
          name: "Natação",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "4",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5029: {
          name: "Nulificar",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "2",
          range: "2",
          action: "1",
          duration: "1",
          resistedBy: "",
          affectedTrait: ""
        },
        5030: {
          name: "Proteção",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "3",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5031: {
          name: "Rapidez",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5032: {
          name: "Regeneração",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "3",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5033: {
          name: "Salto",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "4",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5034: {
          name: "Sentido Remoto",
          baseCostbaseCost: "0",
          rank: "1",
          maxRank: "-1",
          type: "5",
          range: "4",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5035: {
          name: "Sentidos",
          baseCostbaseCost: "1",
          rank: "0",
          maxRank: "-1",
          type: "5",
          range: "0",
          action: "0",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5036: {
          name: "Teleporte",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "4",
          range: "4",
          action: "2",
          duration: "1",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5037: {
          name: "Transformar",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "2",
          range: "1",
          action: "1",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5038: {
          name: "Variável",
          baseCostbaseCost: "7",
          rank: "1",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "1",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5039: {
          name: "Velocidade",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "4",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5040: {
          name: "Voo",
          baseCostbaseCost: "2",
          rank: "1",
          maxRank: "-1",
          type: "4",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5042: {
          name: "Arranjo",
          baseCostbaseCost: "0",
          rank: "0",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5043: {
          name: "Dispositivo",
          baseCostbaseCost: "0",
          rank: "0",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "5",
          resistedBy: "Nenhum",
          affectedTrait: "Nenhum"
        },
        5044: {
          name: "Defesa Impenetrável",
          baseCostbaseCost: "1",
          rank: "1",
          maxRank: "-1",
          type: "3",
          range: "0",
          action: "3",
          duration: "4",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5045: {
          name: "Efeitos Ligados",
          baseCostbaseCost: "0",
          rank: "0",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5046: {
          name: "Múltiplos Efeitos",
          baseCostbaseCost: "0",
          rank: "0",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "3",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        },
        5047: {
          name: "Feitos de Força",
          baseCostbaseCost: "0",
          rank: "0",
          maxRank: "-1",
          type: "0",
          range: "1",
          action: "3",
          duration: "3",
          resistedBy: "Resistência",
          affectedTrait: ""
        },
        5049: {
          name: "Extra Aumentado",
          baseCostbaseCost: "0",
          rank: "0",
          maxRank: "-1",
          type: "0",
          range: "0",
          action: "1",
          duration: "3",
          resistedBy: "Nenhum",
          affectedTrait: ""
        }
      }
];

var _Defenses = [
    {
        id: 2001,
        name: "Esquiva",
        rank: 0,
        description: "Defesa Esquiva é baseada no valor de Agilidade. Isso inclui tempo de reação, rapidez e coordenação em geral, usada para desviar de ataques à distância e outros perigos onde reflexos e velocidade são importantes."
    },
    {
        id: 2002,
        name: "Aparar",
        rank: 0,
        description: "Defesa Aparar é baseada no valor de Luta. É a habilidade de se abaixar, contra-atacar e desviar das tentativas de um oponente lhe acertar em combate corpo-a-corpo através de uma habilidade de luta superior."
    },
    {
        id: 2003,
        name: "Resistência",
        rank: 0,
        description: "Defesa Resistência é baseada no valor de Vigor e é a resistência direta contra danos ou ferimentos, e é a durabilidade em geral."
    },
    {
        id: 2004,
        name: "Fortitude",
        rank: 0,
        description: "Defesa Fortitude é baseada no valor de Vigor e mede a saúde e resistência do personagem contra ameaças como venenos e doenças. Incorpora a constituição, metabolismo e imunidade."
    },
    {
        id: 2005,
        name: "Vontade",
        rank: 0,
        description: "Defesa Vontade é baseada no valor de Prontidão. Mede a estabilidade mental, a paciência, determinação, autoconfiança, autoconsciência e força de vontade, usadas para resistir ataques mentais ou espirituais."
    },
];

var modifyHabilidade = [[], //Abildiade aumentada
                        []] //quanto
