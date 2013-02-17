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
        bootstrap: {
          src: [
            'node_modules/bootstrap/js/bootstrap-alert.js',
            'node_modules/bootstrap/js/bootstrap-tooltip.js'
          ],
          dest: 'components/bootstrap/bootstrap.js'
        }
    },
    min: {
      requirejs: {
        src: 'node_modules/requirejs/require.js',
        dest: 'build/radufu/js/lib/require.js'
      }
    },
    watch: {
    },
    less: {
      style: {
        files: {
          'src/css/style.css': 'src/less/style.less'
        }
      },
      compress: {
        options: {
          yuicompress: true
        },
        files: {
          'build/radufu/css/style.css': 'src/less/style.less'
        }
      }
    },
    copy: {
      page: {
        files: [
          { src: 'deploy.html', dest: 'build/radufu/index.html'}
        ]
      },
      font: {
        files: [
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
      ['less:style', 'concat:bootstrap']
    );
  });

  grunt.registerTask('build', 'preparar o projeto para deploy', function () {
    grunt.task.run([
      'requirejs:build',
      'min:requirejs',
      'less:compress',
      'copy:page',
      'copy:font',
      'clean:build'
    ]);
  })

};
