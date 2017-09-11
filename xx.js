(function(global, $ ){
  var Greetr = function (firstName, lastName, language){
    return new xx.init(firstName, lastName, language);
  };

  Greetr.prototype = {};

  Greetr.init = function(firstName, lastName, language) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.XX = Greetr;

}(window, jQuery));
