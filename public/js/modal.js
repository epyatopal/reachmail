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


var Login = function ($scope, $modalInstance, $http) {
    $scope.ok = function (formLogin) {
        if(formLogin.$valid){
            $http.get('',null)
            Server.post('http://localhost:3000/reachmail/', function (err, response) {
                if (response.success) {
                    Server.post('http://localhost:3000/twilio/', function (err, response) {
                        var result = ""
                        console.log('response = ', response)

                        switch (response.status) {
                            case "completed":
                            {
                                result = "confirm"
                                break;
                            }
                            case "failed":
                            {
                                result = "invalid number"
                                break;
                            }
                            default:
                            {
                                result = "no answer"
                                break;
                            }

                        }
                        Server.post('/db', function (err, res) {
                            if(!err){
                                $modalInstance.close({accountID:$scope.accountID, username:$scope.username, password: $scope.password, phone: $scope.phone});
                            }

                        }, {username: response.username, accountID: response.accountID, password: response.password, phone: response.phone, status: result}, null)
                    }, {username: $scope.username, accountID: $scope.accountID, password: $scope.password, phone: $scope.phone}, null)

                }
                else
                {


                }
            }, {username: $scope.username, accountID: $scope.accountID, password: $scope.password, phone: $scope.phone}, null)


        }
    };
};
