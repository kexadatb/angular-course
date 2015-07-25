
///(function(){
	angular
		.module( 'persons', [ 'ngRoute' ])

		.config( ["$routeProvider", function( provider ){
			provider
				.when('/', {
					templateUrl: "list.html"
				})
				.when('/person/add', {
					templateUrl: "add.html",
					controller: "addController"
				});
		}])

		.controller( 'personsController', [ "$scope", function( s ){
			s.persons = [
				{name:"Maria", city: "São Paulo" },
				{name:"Pedro", city: "Rio de Janeiro" },
				{name:"João", city: "Capivari" },
				{name:"Marco", city: "Paraiba" }
			];
		}])
		.controller( 'addController', [ "$scope", function( s ){
			s.add = function(){
				s.persons.push( s.person );

				s.person = "";

				console.log( s.persons );
			}
		}])

///})();