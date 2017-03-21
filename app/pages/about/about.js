var BasePage = require("../../shared/BasePage");
var firebase = require("nativescript-plugin-firebase");

var AboutPage = function() {};
AboutPage.prototype = new BasePage();
AboutPage.prototype.constructor = AboutPage;

AboutPage.prototype.googleSignIn = function(){
  console.log("Testing Google Sign In");
  firebase.login({
    type: firebase.LoginType.GOOGLE
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
};

AboutPage.prototype.facebookSignIn = function(){
  console.log("Testing Facebook Sign In");

firebase.login({
    type: firebase.LoginType.FACEBOOK,
    scope: ['public_profile', 'email'] // optional: defaults to ['public_profile', 'email']
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );

};

module.exports = new AboutPage();
