var arrayOfHours=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM']


var place1standPike = {
  min:23,
  max:65,
  averagePerPerson: 6.3,
  location: '1st and Pike',
  cookiesSoldEveryHour:function(){
    var cookiesElement = document.getElementById('cookiesCalculatedFor1stAndPike');
    
    for(var i = 0; i < 15; i++){
      var randNum = Math.round(Math.random() * (this.max - this.min) + this.min);
      var cElement = document.createElement('ul');
      cElement.textContent = `${arrayOfHours[i]}: ${Math.round(randNum * this.averagePerPerson)} cookies.`
      cookiesElement.appendChild(cElement);
    }   
  } 
}
place1standPike.cookiesSoldEveryHour();

var placeSeaTacAirport = {
  min: 3,
  max: 24,
  averagePerPerson: 1.2,
  location: 'SeaTac Airport',
  cookiesSoldEveryHour:function(){
    var cookiesElement = document.getElementById('cookiesCalculatedForSeaTacAirport');
    for(var i = 0;i < 15; i++){
      var randNum = Math.round(Math.random() * (this.max=this.min)+ this.min);
      var cElement = document.createElement('ul');
      cElement.textContent = `${arrayOfHours[i]}: ${Math.round(randNum * this.averagePerPerson)} cookies.`
      cookiesElement.appendChild(cElement);
    }
  }
}
placeSeaTacAirport.cookiesSoldEveryHour();