var stores = [];
var hours =['6:00 AM',	'7:00 AM',	'8:00 AM',	'9:00 AM',	'10:00 AM',	'11:00 AM',	'12:00 AM',	'1:00 AM',	'2:00 PM',	'3:00 PM',	'4:00 PM',	'5:00 PM',	'6:00 PM',	'7:00 PM',	'8:00 PM'];
function place(min,max,location,average,hoursOfOperation){
  this.min = min,
  this.max = max;
  this.average = average;
  this.location = location;
  this.hoursOfOperation = hoursOfOperation;
  this.arrayOfAverageNumberOfPeople = [];
  this.cookiesPerHour = [];
  this.hourOfTheDay = [];

  this.calculateAverageNumberOfPeople = function (){
      for(var i = 0; i < this.hoursOfOperation; i++){
        var randNum = Math.round(Math.random() * (max - min) + min);
        this.arrayOfAverageNumberOfPeople.push(randNum);
    }
    console.log(this.arrayOfAverageNumberOfPeople);
  };
  this.calculateCookiesPerHour = function (){
    for(var i = 0; i < this.hoursOfOperation;i++){
      var cookiesThisHour = Math.round(this.arrayOfAverageNumberOfPeople[i] * this.average);
      this.cookiesPerHour.push(cookiesThisHour);
    } 
    console.log(this.cookiesPerHour);
  };
  this.populateHoursOfTheDay = function(){
    for(var i = 0;i < this.hoursOfOperation;i++){
      var suffix = 'AM';
      if(i > 7){
        suffix ='PM'
      }
      this.hourOfTheDay.push(`${((i + 5) % 12) + 1 }:00 ${suffix}`);
    }
    console.log(this.hourOfTheDay);
  };
  this.render = function(){
    this.populateHoursOfTheDay();
    this.calculateAverageNumberOfPeople();
    this.calculateCookiesPerHour();
    var tableDataElement = document.getElementById('data');
    var trElement = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trElement.appendChild(tdEl);

    for(var i = 0; i < this.cookiesPerHour.length; i++){
      var tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesPerHour[i];
      trElement.appendChild(tdElement);
    }
    tableDataElement.appendChild(trElement);
  };
  this.render();
}
function createTableHead(){
  var tableHeadElement = document.getElementById('head');
  var trElement = document.createElement('tr');
  var thEl = document.createElement('th');
  trElement.appendChild(thEl);
  for(var i =0; i < hours.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  tableHeadElement.appendChild(trElement);
}

var place1stAndPike = new place(23,65,'1st and Pike', 6.3, 15);
var placeSeaTacAirport = new place(3,24,'SeaTac Airport', 1.2, 15);
var placeSeattleCenter = new place(11,38,'Seattle Center',3.7, 15);
var placeCapitolHill = new place(20,38,'Capitol Hill', 2.3,15);
var placeAlki = new place(2,16,'Alki', 4.6, 15);
createTableHead();