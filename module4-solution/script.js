(function (window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var firstname in names) {
    let firstletteruppercase = names[firstname].charAt(0)
    let firstletter = firstletteruppercase.toLowerCase()
  
    if (firstletter == "j") {
      byeSpeaker.speak(names[firstname]);
    } else {
      helloSpeaker.speak(names[firstname]);
    }
  };


})(window);