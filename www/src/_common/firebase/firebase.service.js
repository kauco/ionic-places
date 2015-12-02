angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://ionic-places.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {

			//log with email and password
			var promise = auth.$authWithPassword({
				"email":email,
				"password":password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			console.log(promise)
			return promise;
		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		}
	}

});