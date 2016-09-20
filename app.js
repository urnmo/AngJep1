let app = angular.module("AngJep", []);

app.controller("gmainController", function ($scope){

$scope.Uguess = 0;
$scope.result = "";
$scope.score = "0";
$scope.answers = [];
$displayButt = 0;

$scope.questions = [{Q: "Name the largest freshwater lake in the world?", A:"Lake Superior", score: 50}, {Q: "Where would you find the Sea of Tranquility?", A:"the Moon", score: 50}, {Q: "What kind of weapon is a falchion?", A:"a sword", score: 50}, {Q: "Name the seventh planet from the sun.", A:"Uranus", score: 50}, {Q: "Who invented the rabies vaccination?", A:"Louis Pasteur", score: 50},];

$scope.currQ = $scope.questions[$displayButt].Q;
$scope.upDate = function(){
    console.log('working?')

    $scope.answers.push({
       question: $scope.questions.Q,
       correct: 'true',
    });
};
});