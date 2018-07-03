$(function(){

    var clock = $(".clock");

    var container = $("<div>").addClass("container").appendTo(clock);

    var time = $("<div>").addClass("time").appendTo(container);
    var hours = $("<div>").addClass("hours").appendTo(time);
    var seconds = $("<div>").addClass("seconds").appendTo(time);

    var date = $("<div>").addClass("date").appendTo(container);

    setInterval(function(){
       
        var d = new Date();
    
        var hourElement = moment(d).format('HH:mm');
        var secondElement = moment(d).format('ss');

        hours.html(hourElement);
        seconds.html(secondElement);

        var day = d.getDate();
        var year = d.getFullYear();

        var czechMonth = getCzechNameOfMonth(d.getMonth());
        var czechDayOfWeek = getCzechDayOfWeek(d.getDay()); 

        date.html(czechDayOfWeek + ", " + day + ". " + czechMonth + ". " + year);

    }, 1000);

 });

/** vrať český název měsíce */
 function getCzechNameOfMonth(numOfMonth){

    var czech = ["Ledna", "Února", "Března", "Dubna", "Května", "Června", 
    "Července", "Srpna", "Září", "Října", "Listopadu", "Prosince"];

    return czech[numOfMonth];

 };

/** vrať česky dny v týdnu */
 function getCzechDayOfWeek(numOfDay){
    var czech = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    return czech[numOfDay];
 }
