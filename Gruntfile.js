module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            src: {
                files: ['sass/**/*.scss'],
                tasks: ['build-css']
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        }
    });

    // load task dependencies
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('build-css', ['sass']);
};
