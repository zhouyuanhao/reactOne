##Introduction

This is a demo project to build an appliction that works on Browser/Desktop(Electron)/Android/IOS

##Requirement

This project is build on node so need to install node.js and npm. 
Below are the dependency for the application to run(global dependency).

###npm install -g

react-native-cli<br/>
jest<br/>
electron<br/>
electron-packer<br/>
webpack-dev-server

##Init Project

after clone the project you need to init the project by
```
npm install
```
##compile

webpack --watch

##Run

###browser(express also service the backend logic,i.e. ajax service)

node express.js

###android

react-native run-android

###desktop

electron .

###desktop package

electron-packager .

##How it works

browser--this is simple, we use react to build the project and express is the server to provide service

desktop--this is using the electon to provide a middle layer, electron embeded a chrome browser so it can work like a native application for desktop, and electron can work on most [OS](https://github.com/electron/electron-api-demos/releases)

android/IOS--using react-native to build android and IOS application.

Since react-native and react doesn't share same components, so in the project we create an additional components layer, and they can provide almost same ux for each platform.browser and destop use browser, so they can share the same logic, while you can also detect the platform with Util.isXXX to act differently.

This application also integrated with React-Router and Redux for all platform. Besides in each platform, Ajax call is available using redux actions.fetchAjax(*AJAX_URL*), and also provides a mongo like database for all platform(nedb/react-native-local-mongodb) 