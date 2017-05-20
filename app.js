var globalApp = (function () {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue World 2!',
            getAuthor: function () {
                this.author = "The Expert Husny";
                this.name = "M.G.Husny Ahamed";
                return this.author;
            },
            intro: 'Welcome to the vue world. <small>It is all about <b>Vue.js</b></small>',
            isViewed: false            
        },
        methods: {
            toggleView: function () {
                this.isViewed = !this.isViewed
            }
        }
    });

    return app;
}())