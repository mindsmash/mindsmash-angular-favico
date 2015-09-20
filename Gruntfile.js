/*global module:false*/
module.exports = function (grunt) {
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        banner: '/*! \n * <%= pkg.title || pkg.name %> v<%= pkg.version %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * License: <%= pkg.license %>\n' +
            ' */\n',
        
        jshint: {
            jshintrc: '.jshintrc',
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['src/*.js']
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            build: {
                expand: true,
                cwd: 'src',
                src: ['*.js'],
                dest: 'dist'
            }
        },
        
        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'gzip'
            },
            build: {
                src: ['dist/mindsmash-angular-favico.js'],
                dest: 'dist/mindsmash-angular-favico.min.js'
            }
        },
        
        watch: {
            build: {
                files: [ 'src/*.js' ],
                tasks: [ 'build' ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ng-annotate');
    
    grunt.registerTask('default', ['jshint', 'ngAnnotate', 'uglify']);
    grunt.registerTask('build', ['default']);
};