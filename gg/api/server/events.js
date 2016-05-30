import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

var JoinPrototype = function JoinPrototype() {

  this.participants = [];

  this.joinEvent = function(id) {

    let user = Meteor.Users.find({
      _id: id
    });

    if (!user) {
      throw new Meteor.Error(500, 'User not found');
    }

    if(user.profile) {
    this.participants.push(user.profile);
    }
  };

};

class Event {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;
  }
}

Event.prototype = new JoinPrototype();
