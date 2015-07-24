
(function(){
	angular
		.module( 'persons', [ 'ngRoute' ])

		.config( ["$routeProvider", function( provider ){
			provider
				.when('/', {
					templateUrl: "listar.html"
				});
		}])

		.controller( 'personsController', [ "$scope", function( s ){
			s.persons = [
				{name:"Maria", city: "São Paulo" },
				{name:"Pedro", city: "Rio de Janeiro" },
				{name:"João", city: "Capivari" },
				{name:"Marco", city: "Paraiba" }
			];

		}]);
})();