/*jshint browser:true */
/*global $ */
(function()
{
'use strict';
/*
 * http://cordova.apache.org/docs/en/2.5.0/cordova_camera_camera.md.html
 *
 * This file controls the camera widget. In order to use the camera your project must an HTML5+Cordova project.
 * You must also include the camera plugin in order to access the hardware camera.
 *
 * If you want to capture a photo and use it inside your app, call 'capturePhoto()' and use the imageData variable
 * to control the image after it's been captured. If you wish to capture an image AND save it to your camera roll you'll
 * want to call 'captureAndSavePhoto()'. You'll get the same imageData variable but the resulting photo will also be saved
 * on device.
 */
var pictureSource;   // picture source
var destinationType; // sets the format of returned value
var imageID;



// Cordova is ready to be used!
function onDeviceReady() {
    if (!navigator.camera) {
      throw new Error('Cordova camera plugin required to access hardware camera.');
    }
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}
// Wait for Cordova to connect with the device
document.addEventListener("app.Ready", onDeviceReady, false);

// Called when a photo is successfully retrieved (photo taken)
function onPhotoDataSuccess(imageData) {
  // Uncomment to view the base64 encoded image data
  // console.log(imageData);

  // Give your image widget an ID and set it here
  // Get image handle
  var imageNode = $(imageID);

  //create photo
  var photo = 'data:image/jpeg;base64,' + imageData;

  // Show the captured photo
  imageNode.attr('src', photo);
}

// Called when a photo is successfully retrieved (photo retrieved)
function onPhotoURISuccess(imageURI) {
  // Uncomment to view the image file URI
  // console.log(imageURI);

  // Get image handle
  var imageDOM = $(imageID);

  // Show the captured photo
  imageDOM.attr('src', imageURI);
}

// A button will call this function
function capturePhoto(uib_id) {
  imageID = uib_id || '#IMAGE';
  // Take picture using device camera and retrieve image as base64-encoded string
  if(!navigator.camera) {
    onFail('Missing the Cordova camera plugin');
  }
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });
}
window.capturePhoto = capturePhoto;

// A button will call this function
function captureAndSavePhoto(uib_id) {
  if(!navigator.camera) {
    onFail('Missing the Cordova camera plugin');
  }
  imageID = uib_id || '#IMAGE';
  //desinationType and saveToPhotoAlbum must be set correctly to save the photo to the camera roll
  var cameraOptions = {
    quality: 50,
    destinationType: destinationType.FILE_URI,
    saveToPhotoAlbum: true
  };
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, cameraOptions);
}
window.captureAndSavePhoto = captureAndSavePhoto;

// A button will call this function
function capturePhotoEdit(uib_id) {
  imageID = uib_id || '#IMAGE';
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
    destinationType: destinationType.DATA_URL });
}
window.capturePhotoEdit = capturePhotoEdit;

// A button will call this function
function getPhoto(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
    destinationType: destinationType.FILE_URI,
    sourceType: source });
}
window.getPhoto = getPhoto;

// Called if something bad happens.
function onFail(message) {
  throw new Error('Camera failed: ' + message);
//  alert('Failed because: ' + message);
}
})();
