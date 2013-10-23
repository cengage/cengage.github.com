var controllers = {};

controllers.mainController = function($scope,$http) {
  $scope.projects = {}

    $http({
        method: 'GET',
        url: 'https://api.github.com/users/cengage/repos'
    }).success(function(data) {
        data.splice(0,1);
        $scope.projects = data;
    }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
    });
}

app.controller(controllers);