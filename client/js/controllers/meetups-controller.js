app.controller('meetupsController', ['$scope', '$resource', 
	function ($scope, $resource) {
		var Meetup = $resource('/api/meetups');

		$scope.meetups = []

		Meetup.query(function (results) {
			$scope.meetups = results;
		});

		// function loadata(){
		// 	Meetup.get(function(results){
		// 		console.log(results);
		// 			$scope.meetups = results;
		// 	});
		// };

		$scope.createMeetup = function() {
			var meetup = new Meetup();
			meetup.name = $scope.meetupName;
			meetup.$save(function (result) {
				console.log(result);
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
			Meetup.delete(item, function () {
				console.log("in callback!");
				$scope.meetups.shift();
			});
			//$scope.meetups.shift();
			/*
			Meetup.delete(item, function () {
					console.log("In callback!!");
					console.log(returnValue);
					console.log(responseHeaders);
					$scope.meetups.splice(item);
				});
			*/
			/*Meetup.delete(item, 
				function (returnValue, responseHeaders) {
					console.log("In callback!!");
					console.log(returnValue);
					console.log(responseHeaders);
					$scope.meetups.splice(item);
				},
				function (httpResponse){
					// error handling here
					console.log("Need to handle errors");
				});
			*/
			//$scope.meetups.splice(item);
			//item.delete();
		}
		// loadata();
		
	}
]);
