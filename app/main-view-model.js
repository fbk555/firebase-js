var Observable = require("data/observable").Observable;
var topmost = require("ui/frame").topmost;
var firebase = require("nativescript-plugin-firebase");


function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }
    viewModel.onReg = function() {
          firebase.login({
                type: firebase.LoginType.ANONYMOUS
            }).then(
                function (result) {
                    console.log(JSON.stringify(result));
                    alert("Udsaldldsaldjsalkdjsadlkjasjdsakjdlskajd");
                },
                function (errorMessage) {
                    console.log(errorMessage);
                }
            );
    }

    viewModel.onDrw = function()
    {
        console.log("opening drawer");

        topmost().navigate("pages/" + "home" + "/" + "home");

    }
    return viewModel;
}

exports.createViewModel = createViewModel;