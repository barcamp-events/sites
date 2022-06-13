module.exports = function (grunt) {
  const sass = require("node-sass");

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    postcss: {
      options: {
        map: true,
        processors: [require("autoprefixer")(), require("cssnano")(), require("postcss-custom-media")()],
      },
      dist: {
        src: "<%= pkg.base_dir %>/_site/assets/css/main.min.css",
      },
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          "<%= pkg.base_dir %>/_site/assets/css/main.min.css": "<%= pkg.base_dir %>/assets/scss/main.scss",
        },
      },
    },
    svg_sprite: {
      dist: {
        cwd: "<%= pkg.base_dir %>/assets/images",
        src: ["**/*.svg"],
        dest: "<%= pkg.base_dir %>/_site/assets/images",
        options: {
          mode: {
            symbol: {
              dest: "",
              sprite: "sprite.svg",
            },
          },
          shape: {
            meta: "<%= pkg.base_dir %>/assets/images/svg-sprite/meta.yaml",
          },
          svg: {
            namespaceIDs: false,
          },
        },
      },
    },
    watch: {
      css: {
        files: ["<%= pkg.base_dir %>/assets/scss/**/*.scss"],
        tasks: ["sass", "postcss"],
      },
      svg_sprite: {
        files: ["<%= pkg.base_dir %>/assets/images/**/*.svg"],
        tasks: ["svg_sprite"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-svg-sprite");

  grunt.registerTask("default", ["sass", "postcss", "svg_sprite"]);
};
