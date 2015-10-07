module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            compileTheme: {
                files: { "css/lsi-theme-bootstrap.css": "less/lsi-theme-bootstrap.less" },
                options: {
                    sourceMap: true,
                    sourceMapURL: 'lsi-theme-bootstrap.css.map',
                    sourceMapFilename: 'css/lsi-theme-bootstrap.css.map'
                }

            },
            compileAdditions: {
                files: { "css/lsi-theme-additions.css": "less/lsi-theme-additions.less" },
                options: {
                    sourceMap: true,
                    sourceMapURL: 'lsi-theme-additions.css.map',
                    sourceMapFilename: 'css/lsi-theme-additions.css.map'
                }
            }
        },
        watch: {
            options: {
                livereload: {
                    port: 35728
                }
            },
            less: {
                files: "less/*.less",
                tasks: ['less']
            },
            html: {
                files: "test/*.html"
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['less', 'connect', 'watch']);

};