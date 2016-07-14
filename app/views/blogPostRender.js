import $ from "jquery";
import Blogpost from "../models/blogpost";

let makeBlogString = $(`
<div class="make-blog-page">
  <input class="title" type="text" placeholder="Title" />
  <textarea class="body" placeholder="Text goes here..."></textarea>
  <button class="make-blog">Submit</button>
</div>
`);

function renderMakePost() {
  $("main").children().detach();
  let $newDiv = $(makeBlogString);
  $newDiv.children("button").on("click", function() {
    let blog = new Blogpost();
    blog.set("title", $newDiv.children("input").val());
    blog.set("body", $newDiv.children("textarea").val());
    blog.save().done(console.log("post saved"));
  });
  $("main").append($newDiv);
}

export default renderMakePost;
