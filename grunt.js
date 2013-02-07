/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
    },
    min: {
      build: {
        src: 'node_modules/requirejs/require.js',
        dest: 'build/radufu/js/lib/require.js'
      }
    },
    watch: {
    },
    less: {
      setup: {
        files: {
          'src/css/style.css': 'src/less/style.less'
        }
      },
      build: {
        options: {
          yuicompress: true
        },
        files: {
          'build/radufu/css/style.css': 'src/less/style.less'
        }
      }
    },
    copy: {
      build: {
        files: [
          { src: 'deploy.html', dest: 'build/radufu/index.html'},
          { src: 'src/font/*', dest: 'build/radufu/font/'}
        ]
      }
    },
    clean: {
      build: [
        'build/radufu/js/collections',
        'build/radufu/js/models',
        'build/radufu/js/templates',
        'build/radufu/js/util',
        'build/radufu/js/views',
        'build/radufu/js/app.js',
        'build/radufu/js/router.js',
        'build/radufu/js/build.txt'
      ]
    },
    requirejs: {
      build: {
        options: {
          appDir: 'src/js/',
          baseUrl: '.',
          mainConfigFile: 'src/js/main.js',
          modules: [
            { name:'main' }
          ],
          inlineText: true,
          dir: 'build/radufu/js'
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

  grunt.registerTask('setup', 'configurar o projeto para desenvolvimento', function () {
    grunt.task.run(
      ['less:setup']
    );
  });

  grunt.registerTask('build', 'prepar o projeto para deploy', function () {
    grunt.task.run(
      ['requirejs:build', 'less:build', 'min:build', 'copy:build', 'clean:build']
    );
  })

};
