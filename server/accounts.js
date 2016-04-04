Accounts.onCreateUser(function(options, user) {


  if (user.services.facebook) {
    options.profile.picture = 'http://graph.facebook.com/' + user.services.facebook.id + "/picture/?type=large";
    user.profile = options.profile;
  }
  else {
    options.profile.picture = "/img/user_default.png";
    user.profile = options.profile;
  }

  return user;
});

Accounts.validateNewUser(function (user){
  return true;
});
