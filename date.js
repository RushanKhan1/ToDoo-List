//jshint esversion:6

module.exports = getDate;

function getDate(){ 
    let today = new Date();
    let currentDay = today.getDay();
    console.log(currentDay);
    let day = "";
     
    let options = {
	weekday: "long",
	day: "numeric",
	month: "long"
 };
    
    let date = today.toLocaleDateString("en-IN", options);
    return date;
}
