if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
//    global.registerModule("main-page", function () { return require("./main-page"); });
    global.registerModule("pages/home/home", function () { return require("./pages/home/home"); });

}
