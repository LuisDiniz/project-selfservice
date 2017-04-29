/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav, $scope, $mdDialog, homeController) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;

  // Load all registered users

  UsersDataService
        .loadAllUsers()
        .then( function( users ) {
          self.users    = [].concat(users);
          self.selected = users[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

 //  $scope.showAdvanced = function(ev) {
 //   $mdDialog.show({
 //     controller: DialogController,
 //     templateUrl: 'dialog1.tmpl.html',
 //     parent: angular.element(document.body),
 //     targetEvent: ev,
 //     clickOutsideToClose:true,
 //     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
 //   })
 //   .then(function(answer) {
 //     $scope.status = 'You said the information was "' + answer + '".';
 //   }, function() {
 //     $scope.status = 'You cancelled the dialog.';
 //   });
 // };

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default [ 'UsersDataService', '$mdSidenav', AppController ];
