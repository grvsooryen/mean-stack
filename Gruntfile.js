'use strict';

var ngTemplatesOptions = {
    collapseBooleanAttributes: false,
    collapseWhitespace: false,
    removeAttributeQuotes: false,
    removeComments: false,
    removeEmptyAttributes: false,
    removeRedundantAttributes: false,
    removeScriptTypeAttributes: false,
    removeStyleLinkTypeAttributes: false
};

module.exports = function (grunt) {


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        banner: '/* Any Words Here! */',

        library: 'main.lib',

        application: 'main.app',

        template: 'main.template',

        clean: {
            build: [
                'public',
                '<%= ngtemplates.app.dest %>',
                'dist',
                '*.build.html'
            ]
        },

        /* AngularJS HTML Template to JS
        ============================== */
        ngtemplates: {
            app: {
                src: 'src/app/**/*.html',
                dest: 'public/assets/js/app.template.js',
                options: {
                    htmlmin: ngTemplatesOptions
                }
            }
        },

        jshint: {
            files: ['src/app/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        concat: {
            node: {
                src: [
                    'src/server/*.js',
                    'src/server/**/*controller.js',
                    'src/server/**/*route.js'
                ],
                dest: 'app.js'
            },
            lib: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/bootstrap-essentials/dist/js/bootstrap-essentials.min.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-cookies/angular-cookies.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                ],
                dest: 'public/assets/js/<%= library %>.js'
            },
            angular: {
                src: [
                    'src/app/app.js',
                    'src/app/app.route.js',
                    'src/app/app.directive.js',
                    'src/app/**/*.module.js',
                    'src/app/**/*.service.js',
                    'src/app/**/*.route.js',
                    'src/app/**/*.controller.js',
                    '<%= ngtemplates.app.dest %>'
                ],
                dest: 'public/assets/js/<%= application %>.js'
            },
            libcss: {
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'bower_components/bootstrap-essentials/dist/css/bootstrap-essentials.min.css',
                    'bower_components/animate.css/animate.min.css',
                ],
                dest: 'public/assets/css/<%= library %>.css'
            }
        },

        /* Copying
        ======= */
        copy: {
            files: {
                cwd: 'src/app/fonts',
                src: '**/*',
                dest: 'public/assets/fonts',
                expand: true
            },
            bootstrap: {
                cwd: 'bower_components/bootstrap/dist/fonts',
                src: '**/*',
                dest: 'public/assets/fonts',
                expand: true
            },
            svg: {
                cwd: 'src/app/img',
                src: '**/*.svg',
                dest: 'public/assets/img',
                expand: true
            },
            ico: {
                cwd: 'src/app/img',
                src: '**/*.ico',
                dest: 'public/assets/img',
                expand: true
            },
            layout: {
                cwd: 'src/app/include',
                src: '**/*.html',
                dest: 'public/include',
                expand: true
            },
            html: {
                cwd: 'src/app',
                src: 'index.html',
                dest: 'public',
                expand: true
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'src/**/*.html'],
                tasks: ['clean', 'ngtemplates', 'concat', 'copy', 'jshint'],
                options: {
                    reload: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['clean', 'ngtemplates', 'concat', 'copy', 'jshint']);
    grunt.registerTask('server', ['concat:node', 'copy', 'jshint']);
    grunt.registerTask('ui', ['ngtemplates', 'concat', 'copy', 'jshint']);
};