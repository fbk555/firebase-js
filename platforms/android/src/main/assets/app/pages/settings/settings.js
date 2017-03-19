var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");

var SettingsPage = function() {
  this.viewModel.set("blackBackground", false);
};
SettingsPage.prototype = new BasePage();
SettingsPage.prototype.constructor = SettingsPage;

SettingsPage.prototype.onReg = function(){
  console.log("Samjh to ap gaye hon ge:firebase in");
    firebase.login({
    type: firebase.LoginType.ANONYMOUS
  }).then(
      function (result) {
        console.log(JSON.stringify(result));
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
};

module.exports = new SettingsPage();
