//Duração  1 instantânea, 2 concentração, 3 Sustentada, 4*continuo, 5 permanente
const _Skills = [
  {
    3001: {
      name: Acrobacias
    },
    3002: {
      name: Atletismo
    },
    3003: {
      name: Enganação
    },
    3004: {
      name: Furtividade
    },
    3005: {
      name: Intimidação
    },
    3006: {
      name: Intuição
    },
    3007: {
      name: Investigação
    },
    3008: {
      name: Percepção
    },
    3009: {
      name: Persuasão
    },
    3010: {
      name: Prestidigitação
    },
    3011: {
      name: Tecnologia
    },
    3012: {
      name: Tratamento
    },
    3013: {
      name: Veículos
    }
  }
]

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
    2001:{
      name: "Esquiva"
    },
    2002:{
      name: "Aparar"
    },
    2003:{
      name: "Resistência"
    },
    2003:{
      name: "Fortitude"
    },
    2005:{
      name: "Vontade"
    }
  }
]

var _Abilities = [
  {
    1001:{
      name: "Força",
      abrev: "FOR",
    },
    1002:{
      name: "Vigor",
      abrev: "VIG",
    },
    1003:{
      name: "Agilidade",
      abrev: "AGI",
    },
    1004:{
      id: 1004,
      name: "Destreza",
    },
    1005:{
      name: "Luta",
      abrev: "LUT",
    },
    1006:{
      name: "Intelecto",
      abrev: "INT",
    },
    1007:{
      name: "Prontidão",
      abrev: "PRO",
    },
    1008:{
      name: "Presença",
      abrev: "PRE",
    }

  }
] 