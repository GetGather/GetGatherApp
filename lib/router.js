Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/config',{
  name: 'config',
  template: 'config'
});

Router.route('/chats',{
  name: 'chats',
  template: 'chats'
});
