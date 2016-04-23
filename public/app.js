var app = angular.module('admin', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    	$locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: './index/index.tpl.html',
                controller: 'IndexController'
            })
            .when('/service', {
                templateUrl: './service/service.tpl.html',
                controller: 'SerciceController'
            })
            .when('/employee', {
            	templateUrl: './employee/employee.tpl.html',
            	controller: 'EmployeeController'
            })
            .when('/activity', {
            	templateUrl: './activity/activity.tpl.html',
            	controller: 'ActivityController'
            })
            .when('/news', {
            	templateUrl: './news/news.tpl.html',
            	controller: 'NewsController'
            })
            .when('/jobs', {
            	templateUrl: './jobs/jobs.tpl.html',
            	controller: 'JobsController'
            })
            .when('/pics', {
            	templateUrl: './pics/pics.tpl.html',
            	controler: 'PicsController'
            })
            .when('/setting', {
            	templateUrl: './setting/setting.tpl.html',
            	controller: 'SettingController'
            })
            .otherwise({
            	redirectTo: '/'
            });
    }])

	.controller('AdminController', ['$scope', function($scope) {

	}])

	.controller('IndexController', ['$scope', function($scope){
	}])

	.controller('ServiceController', ['$scope', function($scope){
		
	}])
	.controller('EmployeeController', ['$scope', function($scope){
		
	}])

	.controller('ActivityController', ['$scope', function($scope){
		
	}])

	.controller('NewsController', ['$scope', function($scope){

	}])

	.controller('JobsController', ['$scope', function($scope){
		
	}])
	.controller('PicsController', ['$scope', function($scope){
		
	}])
	.controller('SettingController', ['$scope', function($scope){
		
	}])