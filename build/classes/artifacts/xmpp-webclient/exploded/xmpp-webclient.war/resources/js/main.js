requirejs.config({
    baseUrl: "../../lib/",

    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },

    paths: {
        "jquery":"jquery-3.1.1.min",
        "bootstrap":"bootstrap.min",
        "strophe":"strophe.min"
    }
});

require(['jquery', 'bootstrap'], function($){

    // DOM ready
    $(function(){


    });
});