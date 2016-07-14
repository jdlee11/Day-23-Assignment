import $ from "jquery";
import Person from "../models/person";

let makePersonString = $(`
<div class="make-person-page">
  <input class="first-name" type="text" placeholder="First Name" />
  <input class="last-name" type="text" placeholder="Last Name" />
  <input class="address" type="text" placeholder="Address" />
  <input class="number" type="text" placeholder="Phone Number" />
  <button class="make-blog">Submit</button>
</div>
`);

function renderMakePerson() {
  $("main").children().detach();
  let $newDiv = $(makePersonString);
  $newDiv.children("button").on("click", function() {
    let person = new Person();
    person.set("firstName", $newDiv.children(".first-name").val());
    person.set("lastName", $newDiv.children(".last-name").val());
    person.set("address", $newDiv.children(".address").val());
    person.set("number", $newDiv.children(".number").val());
    person.save().done(console.log("person saved"));
  });
  $("main").append($newDiv);
}

export default renderMakePerson;
