function sayHiToHeadphonedRoommate  (sentence) {
 if (sentence == "Let's have dinner together!") {
    return 'I would love to!'
}

if (sentence == sentence.toUpperCase()) {
    return "YES INDEED!"
}

if (sentence == sentence.toLowerCase()) {
    return "I can't hear you!"
}
else {
    return sentence
}
}

function logWhisper (sentence) {
    console.log(sentence.toLowerCase())

}

 function logShout (sentence) {
    console.log(sentence.toUpperCase())
 }

 function whisper (sentence) {
    return sentence.toLowerCase()
 }

 function shout (sentence) {
    return sentence.toUpperCase()
 }