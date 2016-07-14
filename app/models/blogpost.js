import $ from "jquery";
import Backbone from "backbone";

const Blogpost = Backbone.Model.extend({
  urlRoot: "https://tiny-za-server.herokuapp.com/collections/jlee-day-23-blogs"
});

export default Blogpost;
