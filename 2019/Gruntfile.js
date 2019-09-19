module.exports = function(grunt) {
  const sass = require('node-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')(),
          require('cssnano')()
        ]
      },
      dist: {
        src: '<%= pkg.base_dir %>/_site/assets/css/main.min.css'
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          '<%= pkg.base_dir %>/_site/assets/css/main.min.css' : '<%= pkg.base_dir %>/assets/scss/main.scss'
        }
      }
    },
    shell: {
      eleventy: {
        command: 'npx eleventy'
      }
    },
    watch: {
      css: {
        files: ['<%= pkg.base_dir %>/assets/scss/**/*.scss'],
        tasks: ['sass', 'postcss']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', [
    'sass',
    'postcss',
    'shell'
  ]);
};
