module.exports = function(grunt){
    'use strict';
    grunt.initConfig({
        babel : {
            options : {
                sourceMap : true
            },
            dist : {
                files : {
                    'dist/es5.js' : 'js/es6.js',
										//'dist/es5-blockScope.js' : 'js/es6-blockScope.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('es6', ['babel']);
};
