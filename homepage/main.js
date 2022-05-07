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


// INPUT TO OUTPUT ------------------------------------------------------               ONLY FUNCTION YOU CAN EDIT (can add more but you dont need to touch the ones on top)
function checkForTranslation() {
    var input = document.getElementById("inputText").value;
    var output = document.getElementById("outputText");

    input = input.toLowerCase();

    if (input == "good morning") {
        output.innerHTML = "magandang umaga";
    }


    // IMPORTANT / do not erase / or you can change format but basically we should be able to erase content
    // erases output when input is erased
    else {
        output.innerHTML = "";
    }
}

/*
hello i will hopefully be awake soon hehehehe for the meantime,

notes:
    fromLanguage, toLanguage are the IDs of the languages
    to access them as TEXT or STRING, use fromLanguage.innerHTML or toLanguage.innerHTML

    inputText, outputText are the I/O text areas
    to access input, use inputText.value
    to access output, use outputText.innerHTML

    don't touch the other functions on top
    you can only touch CHECKFORTRANSLATION()
    but you can add more

    I think no editting needed for homepage.html file?
    not super sure but I think it's easily understandable

*/