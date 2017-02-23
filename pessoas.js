angular
	.module('pessoas', [])

	.config(function($routeProvider){

		$routeProvider
			.when('/', {
				templateUrl: 'listar.html'
			});
	})

	.controller('CtrlPessoas', function($scope) {

		$scope.pessoas = [
		{nome: "Maria", cidade: "São Paulo"},
		{nome: "João",  cidade: "Ivaipora"},
		{nome: "José",  cidade: "Lunardelli"},
		{nome: "Anita", cidade: "Cambé"},
		{nome: "Mara",  cidade: "Paulista"},
		{nome: "Luna",  cidade: "Londrina"}
		];
	});