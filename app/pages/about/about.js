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

module.exports = new AboutPage();
