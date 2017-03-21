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

SettingsPage.prototype.addData = function(){
  console.log("Adding data to firebase");
  firebase.setValue(
      '/companies',
      {foo:'bar'}
  );
};

SettingsPage.prototype.remoteConf = function(){
  console.log("fetching changes");
  firebase.getRemoteConfig({
    developerMode: true, // play with this boolean to get more frequent updates during development
    cacheExpirationSeconds: 1, // 10 minutes, default is 12 hours.. set to a lower value during dev
    properties: [{
      key: "mangoPriceSindhri",
      default: 5
    },
    {
      key: "mangoPriceChounsa",
      default: 5
    }]
  }).then(
      function (result) {
        console.log("Remote Config last fetched at " + result.lastFetch);
        console.log("Remote Config: " + JSON.stringify(result.properties));
        //console.log("Remote Config property 'coupons_left': " + result.properties.coupons_left);
      }
  );
  console.log("Finished Remote config");
};

module.exports = new SettingsPage();
