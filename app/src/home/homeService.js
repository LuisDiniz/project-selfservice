
function homeService($q) {
  var campanhas = [
    {
      id: 0,
      name: 'Doação de Brinquedos',
      avatar: '../assets/img/brinquedo.jpg',
      dateInicio: '19/09/2017',
      dateFim: '19/01/2018'
      phone: '(61) 3327 – 6390',
      site: ' www.febrac.org.br',
      email: ' febrac@febrac.org.br',
      content: 'Iniciou, no último dia 19, a Campanha de doação de brinquedos novos ou usados do setor de limpeza e conservação. Organizado pela Federação Nacional das Empresas Prestadoras de Serviços de Limpeza e Conservação, em parceria com os Sindicatos Filiados, a ação tem por objetivo arrecadar uma quantidade significativa de brinquedos para fazer, o Dia das Crianças, um dia mais feliz. Os Sindicatos filiados à Febrac do Distrito Federal e de mais onze Estados (Ceará, Goiás, Mato Grosso do Sul, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro, Santa Catarina, São Paulo e Sergipe) estão fazendo a arrecadação entre as empresas associadas. A Campanha de Doação de Brinquedos faz parte Ação Nacional Febrac, que é formada por ações sociais, de sustentabilidade e inclusão social promovida com o objetivo de ampliar a visibilidade do setor, da entidade, mas, principalmente, tornar o mundo melhor.',
      participantes: ''
    },
    {
      id: 1,
      name: 'Doação de Leite',
      avatar: '../assets/img/leite.jpg',
      dateInicio: '19/09/2017',
      dateFim: '19/01/2018'
      phone: '(61) 3327 – 6390',
      site: ' www.febrac.org.br',
      email: ' febrac@febrac.org.br',
      content: 'Iniciou, no último dia 19, a Campanha de doação de brinquedos novos ou usados do setor de limpeza e conservação. Organizado pela Federação Nacional das Empresas Prestadoras de Serviços de Limpeza e Conservação, em parceria com os Sindicatos Filiados, a ação tem por objetivo arrecadar uma quantidade significativa de brinquedos para fazer, o Dia das Crianças, um dia mais feliz. Os Sindicatos filiados à Febrac do Distrito Federal e de mais onze Estados (Ceará, Goiás, Mato Grosso do Sul, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro, Santa Catarina, São Paulo e Sergipe) estão fazendo a arrecadação entre as empresas associadas. A Campanha de Doação de Brinquedos faz parte Ação Nacional Febrac, que é formada por ações sociais, de sustentabilidade e inclusão social promovida com o objetivo de ampliar a visibilidade do setor, da entidade, mas, principalmente, tornar o mundo melhor.',
      participantes: ''
    },
    {
      id: 2,
      name: 'Doação de Roupa',
      avatar: '../assets/img/roupa.jpg',
      dateInicio: '19/09/2017',
      dateFim: '19/01/2018'
      phone: '(61) 3327 – 6390',
      site: ' www.febrac.org.br',
      email: ' febrac@febrac.org.br',
      content: 'Iniciou, no último dia 19, a Campanha de doação de brinquedos novos ou usados do setor de limpeza e conservação. Organizado pela Federação Nacional das Empresas Prestadoras de Serviços de Limpeza e Conservação, em parceria com os Sindicatos Filiados, a ação tem por objetivo arrecadar uma quantidade significativa de brinquedos para fazer, o Dia das Crianças, um dia mais feliz. Os Sindicatos filiados à Febrac do Distrito Federal e de mais onze Estados (Ceará, Goiás, Mato Grosso do Sul, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro, Santa Catarina, São Paulo e Sergipe) estão fazendo a arrecadação entre as empresas associadas. A Campanha de Doação de Brinquedos faz parte Ação Nacional Febrac, que é formada por ações sociais, de sustentabilidade e inclusão social promovida com o objetivo de ampliar a visibilidade do setor, da entidade, mas, principalmente, tornar o mundo melhor.',
      participantes: ''
    },
    {
      id: 3,
      name: 'Doação de Sangue',
      avatar: '../assets/img/sangue.jpg',
      dateInicio: '19/09/2017',
      dateFim: '19/01/2018'
      phone: '(61) 3327 – 6390',
      site: ' www.febrac.org.br',
      email: ' febrac@febrac.org.br',
      content: 'Iniciou, no último dia 19, a Campanha de doação de brinquedos novos ou usados do setor de limpeza e conservação. Organizado pela Federação Nacional das Empresas Prestadoras de Serviços de Limpeza e Conservação, em parceria com os Sindicatos Filiados, a ação tem por objetivo arrecadar uma quantidade significativa de brinquedos para fazer, o Dia das Crianças, um dia mais feliz. Os Sindicatos filiados à Febrac do Distrito Federal e de mais onze Estados (Ceará, Goiás, Mato Grosso do Sul, Minas Gerais, Paraná, Pernambuco, Rio de Janeiro, Santa Catarina, São Paulo e Sergipe) estão fazendo a arrecadação entre as empresas associadas. A Campanha de Doação de Brinquedos faz parte Ação Nacional Febrac, que é formada por ações sociais, de sustentabilidade e inclusão social promovida com o objetivo de ampliar a visibilidade do setor, da entidade, mas, principalmente, tornar o mundo melhor.',
      participantes: ''
    }
  ];

  return {
    loadCampanhas: function() {
      return $q.when(campanhas);
    }
  };
}

export default ['$q', homeService];
