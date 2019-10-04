





var firebaseConfig = {
    apiKey: "AIzaSyBtYvrU7oNYMIz9FQC4LXR9Od_DZsYIXng",
    authDomain: "train-schedule-e2b0c.firebaseapp.com",
    databaseURL: "https://train-schedule-e2b0c.firebaseio.com",
    projectId: "train-schedule-e2b0c",
    storageBucket: "train-schedule-e2boc.appspot.com",
    messagingSenderId: "983619289638",
    appId: "1:983619289638:web:c148ef46852d6103f61ce7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var database = firebase.database();

$("#submit-button").on("click", function(event){
    event.preventDefault();

    var input = $("input");
    var tName = $("#train-name").val().trim();
    var tDestination = $("#train-destination").val().trim();
    var tFirstTime = moment($("#train-first-time").val().trim(), "HH:mm");
    var tFrequency = $("#train-frequency").val().trim();
    
    if(tName.length === 0){
        tName = "";
        $("#train-name").val("");
        $("#train-name").attr("class", "form-control is-invalid");
        $("#invalid-name").text("Please enter a Train name");

    }
    else{
        $("#train-name").attr("class", "form-control");
        $("#invalid-name").text("");
    }
    if (tDestination.length === 0){
        tDestionation = "";
        $("#train-destination").val("");
        $("#train-destionation").attr("class", "form-control is-invalid");
        $("#invalid-destination").text("Please enter a destination");
    }
    else {
        $("#train-destination").attr("class", "form-control");
        $("#invalid-destination").text("");
    }
    if(Number.isInteger(tFrequency) === false) {
        $("#train-frequency").val("");
        $("#train-frequncy").attr("class", "form-control is-invalid");
        $("#invaild-frequency").text("Please enter a valid frequency");
    }
    else {
        $("#train-frequency").attr("class", "form-control");
        $("#invalif-frequency").text("");
    }
    if (moment(tFirstTime).isValid() === false) {
        tFirstTime = "";
        $("#train-first-time").val("");
        $("#train-first-time").attr("class", "form-control is invalid");
        $("#invalid-time").text("Please enter a valid time");

        return
    }


    $("#train-first-time").attr("class", "form-control");
    $("#invalid-time").text("");

    var newTrain = {
        name: tName,
        destination: tDestination,
        firstTime: tFristTime.format("HH:mm"),
        frequency: tFrequency
    };

    $("#train-first-Time").attr("class", "form-group");

    $("#helpBlock").text("");

    database.ref().push(newTrain);

    $("#train-name").val("");
    $("#train-destination").val("");
    $("#train-first-time").val("");
    $("#train-frequency").val("");

});

database.ref().on("child_added", function(childSnapshot) {
    var tName = (childSnapshot.val().destination);
    var tDestination = (childShapshot.val.destination);
    var tFirstTime = (childShapshot.val().firstTime);
    var tFrequency = (childSnapShot.val().frequency);

    var convertedTime = moment(tFirstTime, "HH:mm").subtract(1, "years");
    console.log(convertedTime);

    var currentTime = moment();

    var diffTime = moment().diff(moment(convertedTime), "minutes");
    console.log("Difference in time: " + diffTime);

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    var nextArrival = moment().add(minutesAway, "minutes");
    console.log("Arrival time: " + moment(nextArrival).format("HH:mm"));

    var newRow = $("<tr>").append(
        $("<td>").text(tName),
        $("<td>").text(tDestination),
        $("<td>").text(tFrequency),
        $("<td>").text(nextArrival.format("HH:mm")),
        $("<td>").text(minutesAway),

    );

    $("#full-table").append(newRow)




var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}



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
});

