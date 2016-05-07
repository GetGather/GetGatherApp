Template.chats.helpers({
  liked: function(){
    return Events.find({like: true});
  }
});
