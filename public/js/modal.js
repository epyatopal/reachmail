var ModalLoginCtrl = function ($scope, $modalInstance) {
    $scope.showLogin = true
    $scope.showDetails = true
    $scope.heading = 'Login'
    $scope.accountID = ""
    $scope.username = ""
    $scope.password = ""
    $scope.phone = ""
    Login($scope, $modalInstance);
    $scope.changeUsername = function(name){
        $scope.username = name
    }
    $scope.changeAccount = function(account){
        $scope.accountID = account
    }
    $scope.changePassword = function(password){
        $scope.password = password
    }
    $scope.changePhone = function(phone){
        $scope.phone = phone
    }
};


var Login = function ($scope, $modalInstance) {
    $scope.ok = function (formLogin) {
        if(formLogin.$valid)
            $modalInstance.close({accountID:$scope.accountID, username:$scope.username, password: $scope.password, phone: $scope.phone});
    };
};
