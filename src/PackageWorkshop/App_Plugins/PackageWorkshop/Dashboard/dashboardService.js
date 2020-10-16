/**
 * @ngdoc
 * 
 * @name: dashboardService
 * @description: provides an interface between the javascript dashboard and our 
 *               backoffice api.
 */
(function () {
    'use strict';

    function dashboardService($http) {

        var serviceRoot = Umbraco.Sys.ServerVariables.packageworkshop.dashboardController;

        return {
            getServerInfo: getServerInfo
        }

        /////

        function getServerInfo() {
            return $http.get(serviceRoot + "GetServerInfo");
        }
    };

    angular.module('umbraco')
        .factory('packageworkshopDashboardService', dashboardService);
})();