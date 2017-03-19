# How To #

1. Add android platform<br>
    `tns platform add android`
2. Add the google-services.json file from the firebase console to **./platforms/android/**
3. Add the corresponding 2 lines in **./platforms/android/build.gradle**<br>
    `classpath "com.google.gms:google-services:3.0.0"`<br>
    `apply plugin: "com.google.gms.google-services"`
4. Run on the device:<br>
    `tns run android`
