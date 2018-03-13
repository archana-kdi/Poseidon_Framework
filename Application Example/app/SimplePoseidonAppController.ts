module SimplePoseidonApp {
    "use strict";

    export interface ISimpleAppUserSettings {
        name?: string;
        age?: number;
    }

    export interface ISimpleAppUserScope {
        isLabelShown: boolean;
        isSuccessAlertShown: boolean;
        isSettingTypeExisting: boolean;
        settingValue: ISimpleAppUserSettings;
    }

    export class SimplePoseidonAppController {
        private readonly MODULE_ID: string = '6cebe3af-27de-4304-9a66-7cfa105f278d';
        private readonly SETTING_NAME: string = 'PersonSetting';

        static $inject = ['$scope', 'userSettings'];

        constructor(private $scope: ISimpleAppUserScope, private userSettings: Poseidon.IUserSettings) {
            $scope.settingValue = {};
            this.get();
            this.$scope.isSuccessAlertShown = false;
        }

        public insertValue() {
            if (this.$scope.settingValue.name != null) {
                this.set().then(x => {
                    this.$scope.isSuccessAlertShown = true;
                    this.$scope.isLabelShown = false;
                });
            }
        }

        public get(): void {
            this.userSettings.get(this.MODULE_ID, this.SETTING_NAME).then((res: ISimpleAppUserSettings) => {
                this.$scope.settingValue.name = res.name;
                this.$scope.settingValue.age = res.age;
                this.$scope.isLabelShown = false;
            }).catch(reason => {
                this.$scope.isLabelShown = true;
            });
        }

        public set(): ng.IPromise<void> {
            return this.userSettings.set(this.MODULE_ID, this.SETTING_NAME, this.$scope.settingValue);
        }
    }
    angular.module('SimplePoseidonApp').controller('SimplePoseidonAppController', SimplePoseidonAppController);
}