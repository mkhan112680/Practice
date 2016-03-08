
angular.module('AssesmentSurvey', ['ngRoute'])
.config(["$routeProvider",

            function ($routeProvider) {

                $routeProvider
                    .when('/Root', { templateUrl: '/App/AssesmentSurvey/Partials/Root.html', controller: 'RootCntrl' })
                    .when('/Screen1', { templateUrl: '/App/AssesmentSurvey/Partials/Screen1.html', controller: 'Screen1Controller' })
                    .when('/Screen2', { templateUrl: '/App/AssesmentSurvey/Partials/Screen2.html', controller: 'Screen2Controller' })
                    .when('/Screen3', { templateUrl: '/App/AssesmentSurvey/Partials/Screen3.html', controller: 'Screen3Controller' })
                    .when('/Screen4', { templateUrl: '/App/AssesmentSurvey/Partials/Screen4.html', controller: 'Screen4Controller' })
                    .otherwise({ redirctTo: '/Root' });

            }
]);


 