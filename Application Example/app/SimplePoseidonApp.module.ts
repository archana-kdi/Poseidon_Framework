module SimplePoseidonApp {
    angular.module('SimplePoseidonApp', ['Poseidon'])
        .config(function ($stateProvider: ng.ui.IStateProvider) {
            $stateProvider.state('6cebe3af-27de-4304-9a66-7cfa105f278d', {
                url: '/SimplePoseidonApp',
                templateUrl: '/SimplePoseidonApp/mainView.html'
            });
        })
        .run(function (navigationService: Poseidon.INavigationService) {
            var appMenu = new Poseidon.NavigationItem('6cebe3af-27de-4304-9a66-7cfa105f278d', '6cebe3af-27de-4304-9a66-7cfa105f278d', null, 'SimplePoseidonApp.Title');

            // add subitems to the application menu item
            //appMenu.add(new Poseidon.NavigationItem(<menu item id>, <menu item state>, <menu item icon>, <menu item label>));

            // register the application menu item with the navigation service
            navigationService.registerApplication(appMenu);
        })
}