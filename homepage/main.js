// SWAP LANGUAGE --------------------------------------------------------
//     to access languages, __Language.innerHTML (from or to)
function swapLanguages() {
    var fromLanguage = document.getElementById("fromLanguage");
    var toLanguage = document.getElementById("toLanguage");

    var holder = fromLanguage.innerHTML;

    fromLanguage.innerHTML = toLanguage.innerHTML;
    toLanguage.innerHTML = holder;
    
}


// CLEAR INPUT BUTTON ---------------------------------------------------
function clearInput() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").innerHTML = "";
}


// COPY OUTPUT BUTTON ---------------------------------------------------
function copyOutput() {
    var copyText = document.getElementById("outputText").innerHTML;
    navigator.clipboard.writeText(copyText);
}


// TEXT TO SPEECH -------------------------------------------------------
var text = document.getElementById("outputText");
var language = document.getElementById("toLanguage");

function textToSpeech() {
    if (!speechSynthesis.speaking || speechSynthesis.pause()){
        speechText = text.innerHTML;
        var speechVoice = new SpeechSynthesisUtterance();
        var voices = speechSynthesis.getVoices();
        speechVoice.voice = voices[2];
        speechVoice.text = speechText;

        if (language.innerHTML == "ENGLISH") {
            speechVoice.lang = 'en-US';
        }

        else {
            speechVoice.lang = 'fil-PH';
        }

        speechSynthesis.speak(speechVoice);
    }
}


// SPEECH TO TEXT -------------------------------------------------------
var textarea = document.getElementById('inputText');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function speechToText() {
    recognition.start();

    recognition.onresult = function (e) {
        var transcript = e.results[0][0].transcript;
        inputText.value = transcript;
        checkForTranslation();
    }
}


// OPEN FEEDBACK --------------------------------------------------------
function openFeedback() {
    window.open('https://www.tinyurl.com/SalamaThanksFeedbackForm1', '_blank').focus();
}


// INPUT TO OUTPUT ------------------------------------------------------               ONLY FUNCTION YOU CAN EDIT (can add more but you dont need to touch the ones on top)
function checkForTranslation() {
    var input = document.getElementById("inputText").value;
    var output = document.getElementById("outputText");
    var fromLanguage = document.getElementById("fromLanguage").innerHTML;

    let url = "https://49147.gradio.app/api/predict/";

    fromLanguage = fromLanguage.toLowerCase();

    
    if (fromLanguage == "filipino") {
        console.log(fromLanguage);
        fetch('url', { method: "POST", body: JSON.stringify({"data":[ "English-to-Filipino",  input]})
            , headers: { "Content-Type": "application/json" } }).then(function(response)
            { return response.json(); }).then(function(json_response){ output.innerHTML = JSON.stringify(data) });
    }

    else if (fromLanguage == "english") {
        console.log(fromLanguage);
        fetch('url', { method: "POST", body: JSON.stringify({"data":[ "Filipino-to-English",  input]})
            , headers: { "Content-Type": "application/json" } }).then(function(response)
            { return response.json(); }).then(function(json_response){ output.innerHTML = JSON.stringify(data) });
    }

    else {
        output.innerHTML = "";
    }
}
