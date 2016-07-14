import $ from "jquery";
import renderReadPost from "../views/blogReadRender";

let sidebarString = $(`
<div class="read-blog-sidebar">
  <ul></ul>
</div>
`);

let sidebarItemString = `
<li class="blog-title">blog post</li>
`;

function renderBlogList() {
  $("main").children().detach();
  let $newDiv = $(sidebarString);
  $newDiv.children("ul").children().detach();
  $.ajax({
    type: "GET",
    contentType: "application/json",
    url: "https://tiny-za-server.herokuapp.com/collections/jlee-day-23-blogs",
    success: function(response) {
      response.forEach(function(blog){
        let $newItem = $(sidebarItemString);
        $newItem.text(blog.title);
        $newItem.on("click", function(){
          renderReadPost(blog);
        });
        $newDiv.children("ul").append($newItem);
      });
    }
  });
  $("main").append($newDiv);
}

export default renderBlogList;
