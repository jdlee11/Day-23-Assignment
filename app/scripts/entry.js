import $ from "jquery";
import Router from "./router";
import Backbone from "backbone";


let $main = $("main");
let router = new Router();
Backbone.history.start();
