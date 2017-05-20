var globalApp = (function(){
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue World 2!',
            getAuthor: function(){
                this.author = "The Expert Husny";
                this.name = "M.G.Husny Ahamed";
                return this.author;
            },

        }
    });

    return app;    
}())