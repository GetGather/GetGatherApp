import { Meteor } from 'meteor/meteor';
import { Events } from './collections';

Meteor.startup(function() {
  if (Events.find().count() !== 0) return;

  Events.remove({});

  Events.insert({
    name: 'You on your way?',
    tagline: 'opaoapoapoa',
    img: 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiTopeJnoHNAhVIViYKHcZFDP4QjRwIBw&url=http%3A%2F%2Fwww.produzindoeventos.com.br%2Fdicas%2F10-dicas-para-producao-de-eventos-musicais%2F&psig=AFQjCNGae2BW69NiKKuug6j5DDOoY834xw&ust=1464678318732759'
  });

    Events.insert({
      name: 'ai karamba',
      tagline: 'k77',
      img: 'http://bilheteriafacil.com.br/uploads/evento.jpg'
    });

  });
