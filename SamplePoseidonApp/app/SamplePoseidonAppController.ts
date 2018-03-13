module SamplePoseidonApp {
    "use strict";

    export interface ISampleAppUserSettings {
        name?: string;
        age?: number;
    }

    export interface ISampleAppUserScope {
        isLabelShown: boolean;
        isSuccessAlertShown: boolean;
        isSettingTypeExisting: boolean;
        settingValue: ISampleAppUserSettings;
    }

    export class SamplePoseidonAppController {
        private readonly MODULE_ID: string = '6cebe3af-27de-4304-9a66-7cfa105f278d';
        private readonly SETTING_NAME: string = 'PersonSetting';

        static $inject = ['$scope', 'userSettings'];

        constructor(private $scope: ISampleAppUserScope, private userSettings: Poseidon.IUserSettings) {
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
            this.userSettings.get(this.MODULE_ID, this.SETTING_NAME).then((res: ISampleAppUserSettings) => {
                if (res == null)
                {
                    this.$scope.isLabelShown = true;
                }
                else
                {
                    this.$scope.settingValue.name = res.name;
                    this.$scope.settingValue.age = res.age;
                    this.$scope.isLabelShown = false;
                }
            });
        }

        public set(): ng.IPromise<void> {
            return this.userSettings.set(this.MODULE_ID, this.SETTING_NAME, this.$scope.settingValue);
        }
    }
    angular.module('SamplePoseidonApp').controller('SamplePoseidonAppController', SamplePoseidonAppController);
}