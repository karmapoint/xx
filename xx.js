// everything is wrapped in an IFFE
(function(global, $ ){

  // this lets you use the tool similar to jquery
  // no need to use the new keyword when using the lib
  var Greetr = function (firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
  };

// these variables are hidden from the public
  var supportedLanguages = ["en", "es"];

  let greetings = {
    en: "Howdy",
    es: "Hola"
  };

  let formalGreetings = {
      en: "Greetings",
      es: "Saludos"
  };


  // all objects will have access to these methods
  Greetr.prototype = {
    fullName: function(){
      return this.firstName + " " + this.lastName;
    },

    validate: function() {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function() {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + " " + this.fullName() + ".";
    },

    greet: function(formal){
      let msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);
      }

      // this will allow the method to be chainable
      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;

    }
  };

  // setting up the object
  Greetr.init = function(firstName, lastName, language) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.language = language || "en";
  };

  // connect our objects to the main prototype (all the methods)
  Greetr.init.prototype = Greetr.prototype;

  // create an alias so users can just use XX
  global.Greetr = global.XX = Greetr;

}(window, jQuery));
