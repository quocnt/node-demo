angular.module('manages').config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider
			.state('manager', {
				url: "/manager",
				templateUrl: "public/manage/view/manager.html",
				controller: "ManagerCtr"
			});
	}
]);