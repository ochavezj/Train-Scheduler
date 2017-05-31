$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOkq7GMx1HILo6pNHBgNvQreCQ6JdvfG4",
    authDomain: "train-scheduler-997a8.firebaseapp.com",
    databaseURL: "https://train-scheduler-997a8.firebaseio.com",
    //projectId: "train-scheduler-997a8",
    storageBucket: "train-scheduler-997a8.appspot.com",
   // messagingSenderId: "907342016822"
  };

  firebase.initializeApp(config);

var trainName   = " ";
var Destination = " ";
var firstTime   = " ";
var Frequency   = 0;


  //variable to set firebase database
  var database = firebase.database();


  //adding a train with Submit button
  $("#addTrain").on("click", function(event){

    event.preventDefault();

    //Get Value inputs
    trainName   = $("#trainName").val().trim();
    Destination = $("#destination").val().trim();
    firstTime   = $("#firstTime").val().trim();
    frequency   = $("#frequency").val().trim();


    var newTrain = {
      name: trainName,
      destination: Destination,
      start: firstTime,
      frequency: Frequency
    };

    //add info to database
    database.ref().push(newTrain);

}); 
})





