module.exports = function(grunt){

    //Config main project settings
    grunt.initConfig({

        //Basic settings and info about our plugin
        pkg: grunt.file.readJSON('package.json'),

        //plugin settings
        cssmin:{

        },

        uglify:{

        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask("default", "[]", function(){
        grunt.log.write("Abhi default task");
    });
}