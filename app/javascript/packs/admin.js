// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"



Rails.start()
Turbolinks.start()
ActiveStorage.start()

 import "css/admin"
import $ from 'jquery';
global.$ = jQuery
import "bootstrap";

import "./plugins/jquery.min.js"
import "./plugins/bootstrap.bundle.min.js"
import "./plugins/jquery.easing.min.js"
import "./plugins/sb-admin-2.min.js"
import "./plugins/Chart.min.js"
import "./plugins/chart-area-demo.js"
import "./plugins/chart-pie-demo.js"