'use strict';

// app.controller('PostsCtrl', function ($scope, Post) {
//   $scope.posts = Post.get();
//   $scope.post = {url: 'http://', title: ''};
//
//   $scope.submitPost = function () {
//     $scope.posts.push($scope.post);
//     $scope.post = {url: 'http://', title: ''};
//   };
//
//   $scope.deletePost = function (postId) {
//     Post.delete({id: postId}, function () {
//       delete $scope.posts[postId];
//     });
//   };
//
//   $scope.submitPost = function () {
//     Post.save($scope.post, function (ref) {
//       $scope.posts[ref.name] = $scope.post;
//       $scope.post = {url: 'http://', title: ''};
//     });
//     $scope.post = {url: 'http://', title: ''};
//   };
// });
//

app.controller('PostsCtrl', function ($scope, $location, Post, Auth) {
  $scope.posts = Post.all;
  $scope.user = Auth.user;

  $scope.post = {url: 'http://', 'title': ''};

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
});

