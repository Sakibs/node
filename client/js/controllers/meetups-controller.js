app.controller('meetupsController', ['$scope', '$resource', 
	function ($scope, $resource) {
		var Meetup = $resource('/api/meetups');

		$scope.meetups = []

		Meetup.query(function (results) {
			$scope.meetups = results;
		});

		$scope.createMeetup = function() {
			var meetup = new Meetup();
			meetup.name = $scope.meetupName;
			meetup.$save(function (result) {
				$scope.meetups.push(result);
				$scope.meetupName = '';
			});

			/*
			// dont take args because we can access variable meetupName from form
			$scope.meetups.push({ name: $scope.meetupName });
			// clean up web form input text so placeholder is used
			$scope.meetupName = '';
			*/
		}

		$scope.deleteMeetup = function() {
			item = $scope.meetups[0];
			console.log("deleting meetup: " + item["name"]);
			Meetups.delete(item);
		}
		
	}
]);
