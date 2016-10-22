signzy.controller("signzyCtrl",['$scope','storageFactory',function($scope,storage){

	$scope.calculations = [];
	$scope.clearScreen = function(){
		   document.calc.result.value="";
	}
	$scope.mark_key_stroke = function(id) {
 		document.calc.result.value+=id;
	}

	$scope.see_previous_calculation = function(){
		$scope.calculations = storage.getCalc();
	}
	$scope.calculate = function() {
		var calc_obj = {'input' : '','output' : ''};
		calc_obj.input = document.calc.result.value;
		var output = eval(calc_obj.input);
		document.calc.result.value = output;
		calc_obj.output = output;
		storage.saveCalc(calc_obj);
		$scope.see_previous_calculation();
	}

	$scope.see_previous_calculation();
}]);
