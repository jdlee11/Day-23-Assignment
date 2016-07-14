import $ from "jquery";
import Backbone from "backbone";


const Person = Backbone.Model.extend({
  urlRoot: "https://tiny-za-server.herokuapp.com/collections/jlee-day-23-people"
});


export default Person;
