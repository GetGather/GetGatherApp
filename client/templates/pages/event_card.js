// Template.eventCard.helpers({
//   templateGestures: {
//     'swipeleft div': function (event, templateInstance) {

//       console.log("swipei");

//     }
//   }
// });
// Template.eventCard.events({
//   'swiperight .image-box': function(event){
//     event.preventDefault();
//     console.log("swiped");
//   }
// });

Template.eventCard.onRendered(function(){

   $(".card").on("swiperight",function(){
     console.log("swiped");
   });

});

Template.eventCard.events({
  'click .like': function(event, template){
    $('#'+this._id).addClass('rotate-left').delay(700).fadeOut(1);
      $('#'+this._id).find('.status').remove();


      if ( $('#'+this._id).is(':last-child') ) {
        // $('.card:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $('#'+this._id).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
       Events.update({_id: this._id}, {$set: {
         like: true
       }});
  },
  'click .dislike': function(event, template){
    $('#'+this._id).addClass('rotate-right').delay(700).fadeOut(1);
    $('#'+this._id).find('.status').remove();


    if ( $('#'+this._id).is(':last-child') ) {
    //  $('.card:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $('#'+this._id).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }

  }
});
