(function () {

    var app = angular.module('myChartApp');
    app.controller('LineChartController', ['$scope', '$timeout', LineChartController]);
    function LineChartController($scope, $timeout) {
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.chartData = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

        $timeout(function () {
            $scope.chartData = [
              [28, 48, 40, 19, 86, 27, 90],
              [65, 59, 80, 81, 56, 55, 40]
            ];
        }, 3000);
    }

    app.controller('RadarChartController', ['$scope', '$timeout', RadarChartController]);
    function RadarChartController($scope, $timeout) {
        $scope.labels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding"];
       
        $scope.chartData = [
          [65, 59, 80, 81, 56],
          [28, 48, 40, 19, 86]
        ];

        $timeout(function () {
            $scope.chartData = [
              [28, 48, 40, 19, 86],
              [65, 59, 80, 81, 56]
            ];
        }, 3000);
    }


    app.controller('PieChartController', ['$scope', '$timeout', PieChartController]);
    function PieChartController($scope, $timeout) {
        $scope.labels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding"];

        $scope.chartData = [
          [65, 59, 80, 81, 56],
          [28, 48, 40, 19, 86]
        ];

        $timeout(function () {
            $scope.chartData = [
              [28, 48, 40, 19, 86],
              [65, 59, 80, 81, 56]
            ];
        }, 3000);
    }


})();