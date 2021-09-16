var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =new SpeechRecognition();
function start(){
    document.getElementById("textarea").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textarea").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    } 
}
function speak(){
    var synth =  window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis =new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        pic();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
function pic(){
    Webcam.snap(function(anythingyouwant){
        document.getElementById("result").innerHTML="<img id='bob' src='"+anythingyouwant+"'>";
    });
}
function save(){
    links=document.getElementById("Link");
    image=document.getElementById("bob").src;
    links.href=image;
    links.click();
}