
let app = angular.module("tasks-list-app", []);

 app.controller("tasks-list-controller", ["$scope", "$filter", function ($scope, $filter) {

    $scope.newTask = "";

    $scope.count = 3;

   $scope.taskList = [
    {description: "Buying airplane tickets", done: false},
    {description: "Buying train tickets", done: false},
    {description: "Buying bus tickets", done: false},
];

   $scope.addTodo = function () {

       if($scope.newTask !== "") {


           $scope.taskList.push({description: $scope.newTask, done: false});

           $scope.newTask = "";  // reset the value from input


       } else {

           $(".alert-primary").show();

           }


   };

  $scope.deleteTodo = function (index) {

           $scope.taskList.splice(index, 1);
       };


   $scope.$watch("taskList", function () {

       $scope.count = $filter("filter")($scope.taskList, {done: false}).length;

   }, true)

 }]);