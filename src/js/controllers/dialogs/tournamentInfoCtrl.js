import site from '../../app';

site.controller('tournamentInfoController', ($scope, $mdDialog, title, description) => {
  $scope.title = title;
  $scope.description = description || 'No description';
  $scope.cancel = $mdDialog.cancel;
});
