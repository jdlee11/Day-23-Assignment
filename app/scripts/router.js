import $ from "jquery";
import Backbone from "backbone";
import Blogpost from "../models/blogpost";
import Person from "../models/person";
import renderMakePost from "../views/blogPostRender";
import renderMakePerson from "../views/personRender";
import renderBlogList from "../views/blogListRender";

const Router = Backbone.Router.extend({
  routes: {
    makepost: "renderMakePost",
    makeperson: "renderMakePerson",
    listblogs: "renderBlogList",
    makebookmark: "renderMakeBookmark"
  },
  renderMakePost: function(){
    renderMakePost();
  },
  renderMakePerson: function(){
    renderMakePerson();
  },
  renderBlogList: function(){
    renderBlogList();
  }
});

export default Router;
