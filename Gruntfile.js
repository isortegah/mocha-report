/**
 * Created by ISORTEGAH on 23/03/2017.
 */
"use strict";
module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.initConfig({
        mochacli : {
            options : {
                reporter : 'report.js' 
                //reporter : 'spec' 
                            },
            all :  ['test/*.js']
        },
        watch : {
            mochaTest : {
                files : [
                    'Gruntfile.js',
                    'test/*.js',
                    '*.js'
                ],
                tasks : ['test']
            }
        }
    });

    grunt.registerTask( 'test' , [
        'mochacli'
    ]);

    grunt.registerTask( 'testLive' , [ 'test' , 'watch:mochaTest']);


}