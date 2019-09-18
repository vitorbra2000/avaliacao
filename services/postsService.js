
var getPosts = function() {
    var posts = [
        {
            id: 1,
            title: 'Crescimento Pessoal',
            image: 'avaliacao-crescimento.jpg',
            description: 'Quer crescer em sua empresa?',
            body:'Aqui ensinamos passo a passo, degrau por degrau como ter um crescimento em qualquer empresa'
        },
        {
            id: 2,
            title: 'Franquias e negocios',
            image: 'cozinhapaper2.jpg',
            description: 'Franquias Rendendo',
            body:'comprar franquias de uma rede é um bom negocio para alguem sem experiencia ? ',
        },
        {
            id: 3,
            title: 'E-sports',
            image: 'full_b59f0901c028a1b613c37fbe2254f569.jpg',
            description: 'Como ser um Gamer e ganhar dinheiro com isso?',
            body:'Esporte eletrônico, ciberesporte ou Esports,[1] são alguns dos termos usados para as competições organizadas de jogos eletrônicos, especialmente entre os profissionais. Os gêneros de jogos mais comuns associados com esportes eletrônicos são os de RTS, luta, FPS, e MOBA. Eventos como o Intel Extreme Masters e o WCG fornecem tanto transmissões ao vivo de competições, como prêmios em dinheiro para os concorrentes.',
        },
        {
            id: 4,
            title: 'Comunicação entre empresas',
            image: 'noticia_100563.jpg',
            description: 'como criar confiança entre empresas',
            body:'Aqui ensinamos como criar parcerias entre empresas distintas',
        },
        {
            id: 5,
            title: 'Companheiros de trabalho',
            image: 'empresa.jpg',
            description: 'Comunicação entre colegas de trabalho',
            body:'Não importa qual o ramo ou segmento de uma empresa, uma boa comunicação no ambiente de trabalho deve ser necessária para uma corporação se manter e prosperar no mercado competitivo atual. Segundo uma pesquisa realizada pelo Project Management Institute Brasil (PMI), 76% de 300 grandes empresas, definem a comunicação no ambiente de trabalho como o principal motivo de fracasso de diversas atividades propostas.',
        },
        
    ];

    return posts;
}
    
module.exports = {
    getPosts: getPosts
}