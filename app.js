//var stores = [];
var hours =['6:00 AM',	'7:00 AM',	'8:00 AM',	'9:00 AM',	'10:00 AM',	'11:00 AM',	'12:00 AM',	'1:00 AM',	'2:00 PM',	'3:00 PM',	'4:00 PM',	'5:00 PM',	'6:00 PM',	'7:00 PM'];
var totalOfTheHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalCookies = [];

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
      totalOfTheHour[i] += cookiesThisHour;
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
    var tdEl = document.createElement('th');
    tdEl.textContent = this.location;
    trElement.appendChild(tdEl);
    var totalCookiesOfTheDay = 0;

    for(var i = 0; i < this.cookiesPerHour.length; i++){
      var tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesPerHour[i];
      trElement.appendChild(tdElement);
      totalCookiesOfTheDay +=this.cookiesPerHour[i];
    }
    tableDataElement.appendChild(trElement);
    var tdCookies = document.createElement('td');
    tdCookies.textContent = totalCookiesOfTheDay;
    trElement.appendChild(tdCookies);
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
  var thTotal = document.createElement('th');
  thTotal.textContent = 'Total';
  trElement.appendChild(thTotal);
  tableHeadElement.appendChild(trElement);
}
function createTableFooter(){
  var tableFooterElement = document.getElementById('footer');
  var trElement = document.createElement('tr');
  var tdEl = document.createElement('th');
  tdEl.textContent = 'Total';
  trElement.appendChild(tdEl);
  for(var i =0; i < 14; i++){
    var tdElement = document.createElement('td');
    tdElement.textContent = totalOfTheHour[i];
    trElement.appendChild(tdElement);
  }
  tableFooterElement.appendChild(trElement);
}
var place1stAndPike = new place(23,65,'1st and Pike', 6.3, 14);
var placeSeaTacAirport = new place(3,24,'SeaTac Airport', 1.2, 14);
var placeSeattleCenter = new place(11,38,'Seattle Center',3.7, 14);
var placeCapitolHill = new place(20,38,'Capitol Hill', 2.3,14);
var placeAlki = new place(2,16,'Alki', 4.6, 14);
createTableHead();
createTableFooter();