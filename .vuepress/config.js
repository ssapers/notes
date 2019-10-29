module.exports = {
    title: 'Learning',
    description: '',
    base: '/notes/',
    themeConfig: {
        sidebar: [{
                title: 'jQuery',
                collapsable: true,
                children: [
                    '/jquery/jQuery'
                ]
            },
            {
                title: 'Php',
                collapsable: true,
                children: [
                    '/php/php'
                ]
            },
            {
                title: 'Письма',
                collapsable: true,
                children: [
                    '/email/notes-email',
                    '/email/designers-guide'
                ]
            },
            {
                title: 'Javascript',
                collapsable: true,
                children: [
                    '/javascript/common-tasks.md',
                    '/javascript/interest-tasks.md'
                ]
            },
            {
                title: 'Books',
                collapsable: true,
                children: [
                    '/books/main.md',
                    '/books/grokking-algorithms.md',
                    '/books/designer-maniac.md'
                ]
            },
        ]
    }
};
