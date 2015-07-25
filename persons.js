
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
				})
				.when('/person/edit/:index', {
					templateUrl: "edit.html",
					controller: "editController"
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
		.controller( 'editController', [ "$scope", "$routeParams", function( s, p ){
			s.person = s.persons[ p.index ];

			//s.edit = function(){

			//}
		}])

///})();