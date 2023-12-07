// https://teachablemachine.withgoogle.com/models/pVSVDY3y6/

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img src='" + data_uri + "'/>";
    });
}

console.log('ml5 version: ' + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nPCUw8oGf/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model loaded!");
}

prediction_1 = "none";
prediction_2 = "none";

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The first prediction is " + prediction_1 + " And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}