var app = new Vue({
    el: '#app',
    data: {
        introductions: [
            '3 years of work experience in web development.',
            'Familiar with Laravel development.',
            'Familiar with wordpress develop. Can customized theme and code with wp formal method.',
            'Front-End and Back-End skills.',
            'Good communication skills and patience',
        ],
        skills: [
            'PHP',
            'Laravel/Lumen',
            'Node JS',
            'HTML',
            'CSS',
            'SASS/SCSS',
            'Javascript',
            'jQuery',
            'Vue',
            'Underscore/Lodash',
            'Bootstrap/Semantic UI/Materialize',
            'Git',
            'Wordpress',
        ],
        works: [
            {
                name: 'dcplus',
                url: 'https://www.dcplus.com.tw/',
                image: 'assets/img/works_1.png',
                content: 'Participate in Front-End and Back-End development. Node js, jQuery, Handlebars, Semantic UI are used. Integration with Wordpress web site.',
            },
            {
                name: 'justwealth',
                url: 'https://justwealth.com.tw/',
                image: 'assets/img/works_2.png',
                content: 'Wordpress and Woocommerce ecommerce are used.',
            },
            {
                name: 'ohyanlaw',
                url: 'http://www.ohyanlawgroup.com/home/',
                image: 'assets/img/works_3.png',
                content: 'Wordpress web site.',
            },
        ]
    }
})