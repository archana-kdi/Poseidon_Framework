module SamplePoseidonApp {
    angular.module('SamplePoseidonApp', ['Poseidon'])
        .config(function ($stateProvider: ng.ui.IStateProvider) {
            $stateProvider.state('657da9d1-82f3-4a9e-bd17-c0f2df6c15ca', {
                url: '/SamplePoseidonApp',
                templateUrl: '/SamplePoseidonApp/mainView.html'
            });
        })
        .run(function (navigationService: Poseidon.INavigationService) {
            var appMenu = new Poseidon.NavigationItem('657da9d1-82f3-4a9e-bd17-c0f2df6c15ca', '657da9d1-82f3-4a9e-bd17-c0f2df6c15ca', null, 'SamplePoseidonApp.Title');

            // add subitems to the application menu item
            //appMenu.add(new Poseidon.NavigationItem(<menu item id>, <menu item state>, <menu item icon>, <menu item label>));

            // register the application menu item with the navigation service
            navigationService.registerApplication(appMenu);
        });
}