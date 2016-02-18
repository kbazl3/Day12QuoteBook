var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, quoteService) {

$scope.arrayOfQuotes = quoteService.getData();
//connect the scope to the quote getData function in service

$scope.addData = function(data) {//the data parameter is the user input
	var obj = { //create an object from the user input
		text: $scope.quoteInput, //text property will be set the value of user input
		author: "-Anonymous"
	};
	quoteService.addData(obj); //pass that newly created obj to addData in service
	$scope.quoteInput = ""; //clear the input field
}

$scope.removeData = function(data) { //ng-click invokes this function with the user input as argument
	quoteService.removeData(data); //pass user input to removeData method in service
	$scope.quoteInput = ""; //clears out the input field
}

$scope.changeFilter = function() {
	if ($scope.filterType === "") {
		$scope.filterType = $scope.quoteInput
	} else {
		$scope.filterType = ""
	}
}

});