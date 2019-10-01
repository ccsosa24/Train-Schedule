function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
     
     vid.pause();
	
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "Pause";
	} else {
        vid.pause();
       pauseButton.innerHTML = "Paused";
	}
})

var firebaseConfig = {
    apiKey: "AIzaSyBtYvrU7oNYMIz9FQC4LXR9Od_DZsYIXng",
    authDomain: "train-schedule-e2b0c.firebaseapp.com",
    databaseURL: "https://train-schedule-e2b0c.firebaseio.com",
    projectId: "train-schedule-e2b0c",
    storageBucket: "",
    messagingSenderId: "983619289638",
    appId: "1:983619289638:web:752bfb1f3aa8d6caf61ce7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var database = firebase.database();
var currentTime = moment();

database.ref().on("child_added", function(childSnap){
    var name = childSnap.val().name;
    var destination = childSnap.val().destination;
    var firstTrain = childSnap.val().firstTrain;
    var frequency = childSnap.val().frequency;
    var min = childSnap.val().min;
    var next = childSnap.val().next;

    $("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + next + "</td><td>" + min + "</td></tr" );
});

database.ref().on("value", function(snapshot) {

});

$("#addTrainBtn").on("click", funciton() {

    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = $("#firstInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();

    if(trainName == "") {
        alert('Enter a train name.');
        return false;
    }
    if(destination == "") {
        alert('Enter a destination.');
        return false;
    }
    if(firstTrain == "") {
        alert('Enter a first train name.');
        return false;
    }
    if(frequency == "") {
        alert('Enter a frequency.');
        return false;
    }


    var fistTrainConverted = moment(firstTrain, "hh:mm").subtract("1, years");
    var difference = currentTime.diff(moment(fistTrainConverted), "minutes");
    var remainder = difference % frequency;
    var minUntilTrain = frequency - remainder;
    var nextTrain = moment().add(minUntilTrain, "minutes").format("hh:mm a");

    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: fristTrain,
        frequency: frequency,
        min: minUntilTrain,
        next: nextTrain
    }

    console.log(newTrain);
    database.ref().push(newTrain);

    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#fistInput").val("");
    $("#frequencyInput").val("");


return false;



});







var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}








