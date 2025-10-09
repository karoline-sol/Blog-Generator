module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'docs/css/styles.css': 'src/assets/css/styles.scss'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'docs/js/scripts.min.js': ['src/assets/js/*.js']
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'docs/css/styles.min.css': 'src/assets/css/style.css'
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'docs/images'
        }]
      }
    },
    clean: ['docs'],
    watch: {
      css: {
        files: 'src/assets/css/**/*.scss',
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: 'src/assets/js/**/*.js',
        tasks: ['uglify']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['docs/**/*']
        },
        options: {
          watchTask: true,
          server: './docs'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'sass', 'cssmin', 'uglify', 'imagemin']);
  grunt.registerTask('dev', ['default', 'browserSync', 'watch']);
};