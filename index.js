function introduction(firstName) {
  return "Hi, my name is " + firstName + ".";
}
console.log(introduction("Aki"));

function introductionWithLanguage(name, language) {
  return (
    "Hi, my name is " +
    name +
    " and I am learning to program in " +
    language +
    "."
  );
}
console.log(introductionWithLanguage("Aki", "Ember.js"));

function introductionWithLanguageOptional(name, language) {
  if (language)
    "Hi, my name is " +
      name +
      " and I am learning to program in " +
      language +
      ".";
  let language = "JavaScript";
}
console.log(introductionWithLanguageOptional("Gracie"));

function introductionWithLanguageOptional(name = "user", language) {
  return (
    "Hi, my name is " +
    name +
    " and I am learning to program in " +
    language +
    "."
  );
}
console.log(introductionWithLanguageOptional("Gracie", "Python"));

introduction("Aki");
introductionWithLanguage("Aki", "Ember.js");
introductionWithLanguageOptional("Gracie");
introductionWithLanguageOptional("Gracie", "Python");
