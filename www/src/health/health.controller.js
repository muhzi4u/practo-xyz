(function() {
	"use strict";
	angular
		.module("health")
		.controller("HealthCtrl", HealthCtrl);

	function HealthCtrl(illnessData, $log, $state, $window) {
		var vm = this;
		//vm.sendSMS = sendSMS;
		vm.recognizeSpeech = recognizeSpeech;
		vm.illness = illnessData.illness;
		vm.getHelp = getHelp;

		// function sendSMS() {
	 //        if(SMS) SMS.sendSMS("+9192423", "hello, raymond", function(){alert("fuck")}, function(){alert("bitch")});
  //   	}

  		function getHelp(data, validity) {
  			if(validity) {
  				var master = angular.copy(data);
  				try {
  					$state.go("suggestions", {'type':data.symptom});
  				} catch(e) {
  					console.log(e);
  				}
  			}
  		}


  		function recognizeSpeech() {
            var maxMatches = 5;
            var promptString = "Speak now"; // optional
            var language = "en-US";                     // optional
            $window.plugins.speechrecognizer.startRecognize(function(result){
                	console.log(result)
            }, function(errorMessage){
                console.log("Error message: " + errorMessage);
            }, maxMatches, promptString, language);
        }


	}

})();