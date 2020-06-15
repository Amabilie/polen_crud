

var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoOng = {};
   $scope.ongSelecionado = {};

   $scope.ongs = [
       {nome: "Abrinq", slogan: "Fazendo um mundo melhor", site: "www.abrinq.org.br"},
       {nome: "APAE", slogan: "Crianças especiais", site: "www.apae.org.br"},
       {nome: "ASID", slogan: "Melhorando a gestão das Ongs", site: "www.asid.org.br"},
   ];
   
   $scope.salvar = function () {
       $scope.ongs.push($scope.novoOng);
       $scope.novoOng = {};
   };
   
   $scope.selecionaOng = function (ong) {
        $scope.ongSelecionado = ong;
   };

   $scope.editarOng = function () {
       
   };

   $scope.deletarOng = function(){
        $scope.ongs.splice($scope.ongs.indexOf($scope.OngSelecionado), 1);
   };
   
});