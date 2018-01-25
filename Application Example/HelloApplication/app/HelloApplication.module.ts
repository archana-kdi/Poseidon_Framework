module HelloApplication {
    angular.module('HelloApplication', ['Poseidon'])
        .config(function ($stateProvider: ng.ui.IStateProvider) {
            $stateProvider.state('3af762bf-db0a-4ab7-a288-ef13e4691328', {
                url: '/HelloApplication',
                templateUrl: '/HelloApplication/mainView.html'
            });
        })
        .run(function (navigationService: Poseidon.INavigationService) {
            var appMenu = new Poseidon.NavigationItem('3af762bf-db0a-4ab7-a288-ef13e4691328', '3af762bf-db0a-4ab7-a288-ef13e4691328', null, 'HelloApplication.Title');

            // add subitems to the application menu item
            //appMenu.add(new Poseidon.NavigationItem(<menu item id>, <menu item state>, <menu item icon>, <menu item label>));

            // register the application menu item with the navigation service
            navigationService.registerApplication(appMenu);
        });
}