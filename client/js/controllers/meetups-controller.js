app.controller('meetupsController', ['$scope', '$resource', 
	function ($scope, $resource) {
		$scope.meetupsCount = 10;

		$scope.meetups = [
			{ name:"spontaneous" },
			{ name:"meeting 2" }
		]

		$scope.createMeetup = function() {
			// dont take args because we can access variable meetupName from form
			$scope.meetups.push({ name: $scope.meetupName });
			// clean up web form input text so placeholder is used
			$scope.meetupName = '';
		}
	}
]);
