function greet(name) {
  var currentHour = new Date().getHours();
  var timeOfDay = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
  console.log("Good " + timeOfDay + ", " + name + "!");
  var greeting = "Hello";
  if (language === "es") {
      greeting = "Hola";
  } else if (language === "fr") {
      greeting = "Bonjour";
  }
  console.log(greeting + ", " + name + "!");
}

greet("World", "es");
