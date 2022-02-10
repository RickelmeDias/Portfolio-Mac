/* About-me */
const experiencias_profissionais = `\nFlash Courier
Empresa de logística e transporte.
Assistente de Projetos.
- Teste de sistemas Web e APIs, Postman.
- Diariamente busca por bugs, melhorias e novas implementações para melhorar a experiência do usuário;
`
const experiencias_academicas = `\nManufatura Avançada
Fatec Sorocaba
- Participação no Núcleo de Pesquisas 4.0 da Faculdade com iniciação no
desenvolvimento de um AGV.
- Desenvolvimento de software para robos em C e supervisório com JS/Node.js.
`

/* Vue Componenets */
Vue.component('folder', {
    template: '#folder-template',
    props: ['fname', 'ficon', 'flink']
});

Vue.component('projects', {
    template: '#projects-template',
    props: ['fname', 'ficon', 'fsrc', 'flink']
});

Vue.component('file', {
    template: '#file-template',
    props: ['fname', 'ftext', 'fcolor', 'fdescription']
});

Vue.component('text-modal', {
    template: `
<div class="text-modal">
    <div class="header-workspace">
        <div class="circles" onclick="changeModalState()">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="write-workspace">
        <p class="title-workspace">
            {{ ftitle }}
        </p>
        <p class="description-workspace">
            {{ fdescription }}
        </p>
            <div class="colored-line">
            </div>
   
            <div class="colored-line">
            </div>

            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
            <div class="colored-line">
            </div>
    </div>
</div>
    `,
    props: ['ftitle', 'fdescription']
});

let Home = Vue.component('home', {
    template: `
    <section id="explorer">
        <folder     fname="Sobre-mim"   ficon="/assets/folders/icons/about-me.svg"      flink="sobremim"></folder>
        <folder     fname="Projetos"    ficon="/assets/folders/icons/projects.svg"      flink="projetos"></folder>
        <folder     fname="Habilidades" ficon="/assets/folders/icons/abilities.svg"     flink="habilidades"></folder>
    </section>
    `
});

let Sobre = Vue.component('sobre', {
    data: function () {
        return {
            infos: [
                {  
                tech: 'TXT',   name: 'Experiências Acadêmicas',                                    color: '#FEF',
                title: 'Experiências Acadêmicas',
                description: experiencias_academicas 
                },
                {
                tech: 'TXT',    name: 'Experiências Profissionais',             color: '#FEF',
                title: 'Experiências Profissionais',
                description: experiencias_profissionais 
                }
            ]
        }
    },
    methods:{
        openDetails: function (title, description) {
            
            const elementTitle = document.querySelector('.title-workspace');
            const elementDescription = document.querySelector('.description-workspace');
            
            changeModalState();

            elementTitle.innerHTML = `
            ${title}
            `;
            elementDescription.innerHTML = `
            ${description}
            `;
        }
    },
    template: `
    <section id="explorer">
        <folder     fname="Voltar"   ficon="/assets/folders/icons/back.svg"     flink="#"></folder>
        <div v-for="(info, i) in infos" :key="i">
            <file 
            :fname="info.name" 
            :ftext="info.tech" 
            :fcolor="info.color"
            @click.native="openDetails(info.title, info.description);"
            ></file>
        </div>
    </section>`
});

let Projetos = Vue.component('projetos', {
    template: `
    <section id="explorer">
        <folder     fname="Voltar"      ficon="/assets/folders/icons/back.svg"      flink="#"></folder>
        <projects   fname="AdoCao"      ficon="/assets/folders/icons/web-mob.svg"   fsrc="/assets/folders/projects/adocao.png"
                    onclick="window.open('https://adocao.rickelmedias.dev/', '_blank')"></projects>
        <projects   fname="Snake Game"  ficon="/assets/folders/icons/web-mob.svg"   fsrc="/assets/folders/projects/snakegame.png"
                    onclick="window.open('https://snake-game.rickelmedias.dev/', '_blank')"></projects>
        <projects   fname="Hogwarts Flix"  ficon="/assets/folders/icons/web-mob.svg"   fsrc="/assets/folders/projects/hogwartflix.png"
                    onclick="window.open('https://hogwartsflix.rickelmedias.dev/', '_blank')"></projects>
    </section>`
});

let Habilidades = Vue.component('habilidades', {
    data: function () {
        return {
            skills: [
                {  
                tech: 'HTML',   name: 'HTML',           color: '#FF9F9F',
                title: 'Conhecimentos em HTML',
                description: '\nEstruturação semântica do HTML, elementos, eventos, formulários e outros.' 
                },
                {
                tech: 'CSS',    name: 'CSS',            color: '#9FDDFF',
                title: 'Conhecimentos em CSS',
                description: '\nHerança, Box Model, Alinhamentos, Grid, Responsividade e estilização.' 
                },
                {
                tech: 'JS',     name: 'Javascript',     color: '#FFF59F',
                title: 'Conhecimentos em Javascript',
                description: '\nES6, Async/Await, Fetch/XMLHTTPResquest, Consumo de APIs, Programação Funcional, POO, Manipulação de Arrays, Manipulação de DOM.' 
                },
                {
                tech: 'NODE',   name: 'Node.js',        color: '#69CC6D',
                title: 'Conhecimentos em Node.js',
                description: '\nGerenciar pacotes (npm), montagem de CRUD e API com a utilização de Express.js, Autenticação de login utilizando JWT, Utilização de Banco de Dados (SQL).'
                },
                {
                tech: 'SQL',    name: 'BDD',            color: '#FFFFFF',
                title: 'Conhecimentos em Banco de dados',
                description: '\nConhecimento em SQL para criação, edição, adição, remoção de dados nos bancos MySQL, PostgreSQL.' 
                },
                {
                tech: 'GIT',    name: 'Git/GitHub',         color: '#858585',
                title: 'Conhecimentos em Git',
                description: '\nVersionamento de códigos em trabalhos colaborativos, utilizando pull request, merge, commit, push, ssh e outros conceitos e comandos do GIT.' 
                },
                {
                tech: 'XD',     name: 'XD & Figma',       color: '#705271',
                title: 'Conheciemntos em Adobe XD',
                description: '\nCriação de telas, UX/UI: User Flow, Wireframes, Style Guide, Psicologia das cores.' 
                },
                {
                tech: 'ILU',  name: 'Illustrator & Corel',          color: '#9D6D53',
                title: 'Conheciemntos em FIGMA',
                description: '\nRedesenho de imagens, criação de vetores, design de mockup para sacolas personalizadas e cartões com logos.' 
                },
                {
                tech: 'EXP.',   name: 'Express.js',     color: '#525971',
                title: 'Conheciemntos em Express.js',
                description: '\nCriação de CRUD com métodos de POST/PATCH/GET/DELETE e endpoint de acesso.' 
                },
                {
                tech: 'VUE', name: 'Vue.js',            color: '#329D84',
                title: 'Conheciemntos em Vue.js',
                description: '\nConceitos de vue, Criação de componentes, SPA, Rotas.' 
                },
                {
                tech: 'C/C++', name: 'c_cpp_ino',       color: '#495CA0',
                title: 'Conheciemntos em C/C++ e Arduino',
                description: '\nBastante conhecimento da plataforma Arduino e as funcionalidades de sua biblioteca, conhecimento em C, tipagem de variaveis, armazenamentos/ocupação de memória em bytes, structures, enums, lista encadeada.' 
                },
                {
                tech: 'NUVEM', name: 'Nuvem',           color: '#EAEAEA',
                title: 'Conheciementos em Nuvem',
                description: '\nConhecimento em alguns serviços da Azure para deploy e utilização, como: WebApp, IotHub e Functions.' 
                },
                {
                tech: 'ENG', name: 'Ingles',           color: '#308BBF',
                title: 'Conheciementos em Inglês',
                description: '\nConversação e entendimento intermediário, leitura e escrita intermediário/avançado.' 
                }
            ]
        }
    },
    methods:{
        openDetails: function (title, description) {
            
            const elementTitle = document.querySelector('.title-workspace');
            const elementDescription = document.querySelector('.description-workspace');
            
            changeModalState();

            elementTitle.innerHTML = `
            ${title}
            `;
            elementDescription.innerHTML = `
            ${description}
            `;
        }
    },
    template: `
    <section id="explorer">
    <folder     fname="Voltar"   ficon="/assets/folders/icons/back.svg"     flink="#"></folder>
        <div v-for="(skill, s) in skills" :key="s">
            <file 
            :fname="skill.name" 
            :ftext="skill.tech" 
            :fcolor="skill.color"
            @click.native="openDetails(skill.title, skill.description);"
            ></file>
        </div>
    </section>`
});

/* Functions to modal */

function changeModalState() {
    const element = document.querySelector('.modal-details');
    const elementOverlay = document.querySelector('#overlay');
    
    if (element.className.includes('not-view')) {
        element.classList.remove('not-view');
        elementOverlay.classList.remove('not-view');
    }else{
        element.classList.add('not-view');
        elementOverlay.classList.add('not-view');
    }
}

/* Control Vue App and Routes */

let router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/projetos', component: Projetos },
        { path: '/habilidades', component: Habilidades },
        { path: '/sobremim', component: Sobre }
    ]
});

new Vue ({
    el: "#app",
    router,
    data: {
        author: "Rickelme Dias"
    }
});

