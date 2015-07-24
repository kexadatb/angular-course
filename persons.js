angular
	.module( 'persons', [])
	.controller( 'personsController', [ "$scope", function( s ){
		s.persons = [
			{name:"Maria", city: "São Paulo" },
			{name:"Pedro", city: "Rio de Janeiro" },
			{name:"João", city: "Capivari" },
			{name:"Marco", city: "Paraiba" }
		];

	}]);