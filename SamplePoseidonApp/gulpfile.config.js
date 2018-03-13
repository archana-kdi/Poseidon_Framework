module.exports = function () {
    var applicationName = 'SamplePoseidonApp';
    var basePaths = {
        build: './build',
        app: './app',
        styles: './styles',
        test: './tests',
        root: './'
    };
    var config = {
        paths: {
            build: {
                root: basePaths.build,
                js: basePaths.build + '/js/',
                styles: basePaths.build + '/styles/',
                libraries: basePaths.build + '/libs/',
                scripts: basePaths.build + '/scripts/'
            },
            bundle: {
                async: [
                ]
            },
            sass: [
                basePaths.styles + '/**/*.scss'
            ],
            typescript: [
                basePaths.app + '/**/*.ts',
                basePaths.root + "/typings/tsd.d.ts"
            ],
            temp: basePaths.build + '/temp/'
        },
        tests: {
            src: basePaths.test + '/**/*.tests.ts',
            compiledFiles: basePaths.test + '/**/*.tests.js',
            output: basePaths.test + "/",
            references: [
                basePaths.baseDir + "/typings/**/*.d.ts",
                basePaths.baseDir + "/node_modules/kongsberg-poseidon/**/*.d.ts",
                basePaths.build + "/**/*.d.ts"
            ],
            karma: "./karma.conf.js",
        },
        templates: {
            src: basePaths.app + '/**/*.html',
            file: 'templates.js',
            options: {
                module: applicationName,
                standAlone: false,
                root: '/' + applicationName + '/'
            }
        },
        manifest: basePaths.root + 'Application.manifest.json'
    };

    return config;
};