module SamplePoseidonApp {
    angular
        .module('SamplePoseidonApp')
        .config(function ($translateProvider: ng.translate.ITranslateProvider) {
            $translateProvider.translations('en', {
                'SamplePoseidonApp': {
                    Title: 'SamplePoseidonApp'
                }
            });
        });        
}