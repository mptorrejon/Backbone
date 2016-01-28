SearchView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  el: '#search_container',
  render: function(){
    var label = { search_label: "My Search"};
    //need to place 'this' into a function-render scope so $.get can access to 'this' in 'that'
    var that = this; 
    $.get("templates/searchBox.html", function(data){
      var template = _.template(data, { label });
      that.$el.html(template);
    }, 'html');
  },
  events: {
    'click input[type=button]': 'doSearch'
  },
  doSearch: function(e){
    console.log( $("#search_input").val() );
  }
});
var search_view = new SearchView( /*{el: $("#search_container")}*/ );

/*=================MODEL===================*/
Person = Backbone.Model.extend({
  defaults: {
    name: "unnamed",
    age: 0,
    friends: []
  },
  initialize: function(){
    console.log("This is a person");
    this.bind("change:name", function(){
      var newname = this.get('name');
      console.log("New Name: "+newname);
    })
  },
  setFriends: function(myfriend){
    var friendsArr = this.get('friends');
    friendsArr.push(myfriend);
    this.set({friends: friendsArr})
  },
  changeName: function(myname){
    this.set({ name: myname });
  }
});

var person = new Person();
console.log(person.get('name'));
person.set({
  name: "Mauricio",
  age: 30
});
person.setFriends('Adriana');

console.log( person.get('name') );
console.log( person.get('friends') );
person.changeName('Paul');
//============COLLECTIONS=====================================
var People = Backbone.Collection.extend({
  model: Person
});
var newPerson = new Person({name: "Lezama", age: 27});
var people = new People(newPerson);
console.log(people.models);

//=============ROUTES=========================================
var Route = Backbone.Router.extend({
  routes:{
    ':route/:action': 'loadView',
    "*actions": "defaultRoute",
    "thisPerson/:id": 'getPost'
  },
  defaultRoute: function(actions){
    console.log("Default Route: "+actions);
  },
  getPost: function(id){
    console.log("New Person id: "+id)
  },
  loadView: function(myroute, myaction){
    console.log("Dynamic route: "+myroute+" - "+myaction)
  }
});

var route = new Route();
Backbone.history.start();