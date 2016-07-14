import $ from "jquery";

let blogBodyString = $(`
<div class="read-blog-body">
  <h1></h1>
  <p></p>
</div>
`);

function renderReadPost(blog){
  console.log("clicked on a title");
  // $("main").children().detach();
  let $newDiv = $(blogBodyString);
  $newDiv.children("h1").text(blog.title);
  $newDiv.children("p").text(blog.body);
  $("main").append($newDiv);
}

export default renderReadPost;
