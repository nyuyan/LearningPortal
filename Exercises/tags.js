var search = document.getElementById("search_input");
$(function(){
var languages = [
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    "Python",
    "Java",
    "iOS",
    "Swift",
    "React",
    "Web Design",
    "Web Development"
]

$(search).autocomplete({
    source: languages
});
});