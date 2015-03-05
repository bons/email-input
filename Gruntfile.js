module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        srcFiles: [
            'src/*.js'
        ],
        concat: {
            prod: {
                src: ['<%= srcFiles %>'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['<%= srcFiles %>'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        karma: {
          continuous: {
            configFile: 'karma.conf.js',
            singleRun: true
          },
          unit: {
            configFile: "karma.conf.js"
          }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat:prod', 'karma:continuous']);

    grunt.loadNpmTasks('grunt-contrib-concat');

};
