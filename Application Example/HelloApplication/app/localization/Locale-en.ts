module HelloApplication {
    angular
        .module('HelloApplication')
        .config(function ($translateProvider: ng.translate.ITranslateProvider) {
            $translateProvider.translations('en', {
                'HelloApplication': {
                    Title: 'HelloApplication'
                }
            });
        });        
}