Template.profile.helpers({
  picture: function() {
    if (Meteor.user().profile.picture){
      return Meteor.user().profile.picture;
    }
    return "";
  },
  name: function() {
    if (Meteor.user()) {
    return Meteor.user().profile.name;
  }
  else {
    return "";
  }
  }
});
