var arrayOfHours=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM']

//object to store all arrays that contain cookies sold per hour for each store
var locationObject = {
  place1standPike: [],
  placeSeaTacAirport: [],
  placeSeattleCenter: [],
  placeCapitolHill: [],
  placeAlki: [],
}

//prints the data to the site
function printData(id, arr, total){
  var cookiesElement = document.getElementById(id);
  for(var i =0; i < 15; i++){
    var cElement = document.createElement('li');
    cElement.textContent = arr[i];
    cookiesElement.appendChild(cElement);
  }
  cElement.textContent = `Total: ${total} cookies`;
  cookiesElement.appendChild(cElement);
}

//calculates cookies per hour
function calculateAverageCookiesPerHour(max, min, average, location, id){
  var sumOfCookies = 0;
  for(var i = 0; i < 15; i++){
    var randNum = Math.round(Math.random() * (max - min) + min);
    var cookiesForHour = Math.round(randNum * average);
    location.push((`${arrayOfHours[i]}: ${cookiesForHour} cookies.`));
    sumOfCookies += cookiesForHour;
  }
  printData(id, location, sumOfCookies);
}

var place1standPike = {
  min:23,
  max:65,
  averagePerPerson: 6.3,
  location: '1st and Pike',
  cookiesSoldEveryHour:function(){
    calculateAverageCookiesPerHour(this.max,this.min,this.averagePerPerson, locationObject.place1standPike, 'cookiesCalculatedFor1stAndPike');
  } 
}
place1standPike.cookiesSoldEveryHour();

var placeSeaTacAirport = {
  min: 3,
  max: 24,
  averagePerPerson: 1.2,
  location: 'SeaTac Airport',
  cookiesSoldEveryHour:function(){
    calculateAverageCookiesPerHour(this.max, this.min, this.averagePerPerson, locationObject.placeSeaTacAirport, 'cookiesCalculatedForSeaTacAirport');
  }
}
placeSeaTacAirport.cookiesSoldEveryHour();

var placeSeattleCenter = {
  min: 11,
  max: 38,
  averagePerPerson: 3.7,
  location: 'Seattle Center',
  cookiesSoldEveryHour:function(){
    calculateAverageCookiesPerHour(this.max, this.min, this.averagePerPerson,locationObject.placeSeattleCenter,'cookiesCalculatedForSeattleCenter');
  }
}
placeSeattleCenter.cookiesSoldEveryHour();

var placeCapitolHill ={
  min: 20,
  max: 38,
  averagePerPerson: 2.3,
  location: 'Capitol Hill',
  cookiesSoldEveryHour:function(){
calculateAverageCookiesPerHour(this.max, this.min, this.averagePerPerson, locationObject.placeCapitolHill, 'cookiesCalculatedForCapitolHill')
  }
}
placeCapitolHill.cookiesSoldEveryHour();

var placeAlki ={
  min: 2,
  max: 16,
  averagePerPerson: 4.6,
  location: 'Alki',
  cookiesSoldEveryHour: function(){
    calculateAverageCookiesPerHour(this.max, this.min, this.averagePerPerson, locationObject.placeAlki, 'cookiesCalculatedForAlki')
  }
}
placeAlki.cookiesSoldEveryHour();

function place(min,max,place,average,hoursOfOperation,id){
  this.min = min,
  this.max = max,
  this.id = id,
  this.average = average,
  this.place = place,
  this.hoursOfOperation = hoursOfOperation,
  this.arrayOfAverageNumberOfPeople = [],
  this.cookiesPerHour = [],

  this.calculateAverageNumberOfPeople = function (){
      for(var i = 0; i < this.hoursOfOperation; i++){
      var randNum = Math.round(Math.random() * (max - min) + min);
      this.arrayOfAverageNumberOfPeople.push(randNum);
    }
  };
  this.calculateCookiesPerHour = function (){
    for(var i = 0; i < this.hoursOfOperation;i++){
      var cookiesThisHour = Math.round(this.arrayOfAverageNumberOfPeople[i] * this.average);
      this.cookiesPerHour.push(cookiesThisHour);
    } 
  }
}
var place1stAndPike = new place1standPike(23,65,'1st and Pike', 6.3, 15,"calculatedCookiesFor1stAndPike")