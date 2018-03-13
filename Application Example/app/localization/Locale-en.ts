module SimplePoseidonApp {
    angular
        .module('SimplePoseidonApp')
        .config(function ($translateProvider: ng.translate.ITranslateProvider) {
            $translateProvider.translations('en', {
                'SimplePoseidonApp': {
                    Title: 'SimplePoseidonApp'
                }
            });
        });        
}