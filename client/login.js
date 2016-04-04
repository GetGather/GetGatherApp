Template.login.events({
  "click .btn-facebook": function (event){
    Meteor.loginWithFacebook({}, function(error){
      if (error){
        console.log(error);
      }
      else {
        Router.go('profile');
      }
    });
  }
});
