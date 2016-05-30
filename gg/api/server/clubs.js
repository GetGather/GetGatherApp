import { Mongo } from 'meteor/mongo';

export const Clubs = new Mongo.Collection('clubs');

class Club {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = new Date();
  }
}

Club.prototype = new JoinPrototype();
