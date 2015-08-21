'use strict';


angularToDoApp.controller('DashboardCtrl', function ($scope,  $location, $firebaseArray) {

  //firebase Constant URL
  var url ="https://anotherthingtodo.firebaseio.com/todos";
  var fireRef = new Firebase(url);

  // Bind the todos to the firebase provider.
  $scope.todos = $firebaseArray(fireRef);
  $scope.newTodo = '';
  $scope.editedTodo = null;





  $scope.$watch('todos', function () {
    var total = 0;
    var remaining = 0;
    $scope.todos.forEach(function (todo) {
      // Skip invalid entries so they don't break the entire app.
      if (!todo || !todo.title) {
        return;
      }

      total++;
      if (todo.completed === false) {
        remaining++;
      }
    });
    $scope.totalCount = total;
    $scope.remainingCount = remaining;
    $scope.completedCount = total - remaining;
    $scope.allChecked = remaining === 0;
  }, true);

  $scope.addTodo = function () {
    var newTodo = $scope.newTodo.trim();
    if (!newTodo.length) {
      return;
    }
    $scope.todos.$add({
      title: newTodo,
      completed: false
    });
    $scope.newTodo = '';
  };

  $scope.editTodo = function (todo) {
    $scope.editedTodo = todo;
    $scope.originalTodo = angular.extend({}, $scope.editedTodo);
  };

  $scope.doneEditing = function (todo) {
    $scope.editedTodo = null;
    var title = todo.title.trim();
    if (title) {
      $scope.todos.$save(todo);
    } else {
      $scope.removeTodo(todo);
    }
  };

  $scope.revertEditing = function (todo) {
    todo.title = $scope.originalTodo.title;
    $scope.doneEditing(todo);
  };

  $scope.removeTodo = function (todo) {
    $scope.todos.$remove(todo);
  };

  $scope.clearCompletedTodos = function () {
    $scope.todos.forEach(function (todo) {
      if (todo.completed) {
        $scope.removeTodo(todo);
      }
    });
  };

  $scope.markAll = function (allCompleted) {
    $scope.todos.forEach(function (todo) {
      todo.completed = allCompleted;
      $scope.todos.$save(todo);
    });
  };

  if ($location.path() === '') {
    $location.path('/');
  }
  $scope.location = $location;
});

/*$scope.todos = [];

 //this adds new todo to the todos array and then clears the input field
 $scope.addTodo = function () {
 $scope.todos.push($scope.todo);
 $scope.todo = '';
 };

 $scope.removeTodo = function(index) {
 $scope.todos.splice(index, 1);

 };
 */

