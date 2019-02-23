'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm',
  '2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var salesTable = document.getElementById('salespage');

function CookieStand(name, cookiesAvg, minCust, maxCust, id){
  this.name = name;
  this.cookiesAvg = cookiesAvg;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesHour = [];
  this.id = id;
  this.totalCookies = 0;
  this.hourCust = function randFunction() {
    var x = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    return x;
  };
  this.cookiesHourTotal = function (){
    for (var i = 0; i < hours.length; i++){
      var math = ((this.hourCust()*this.cookiesAvg).toFixed(0));
      this.cookiesHour.push(math);
      this.totalCookies += parseInt(math);
      
    }
    console.log(this.cookiesHour);
  };
  
  this.render = function(){
    this.cookiesHourTotal();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = name;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesHour[i];
      trEl.appendChild(tdEl);
    }
    var thEl = document.createElement('th');
    thEl.textContent = this.totalCookies;
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);
  };
  
}
 
function createTable (){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl); 
  }
  
  thEl = document.createElement('th');
  thEl.textContent = 'Location totals:';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);

}

function createFooter(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals:';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);

  var totalTotalCookies = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++){
    hourlyTotal = 0;
    for (var j = 0; j < allShops.length; j++) {
      hourlyTotal += parseInt(allShops[j].cookiesHour[i]);
      totalTotalCookies += parseInt(allShops[j].cookiesHour[i]);
      console.log(typeof (hourlyTotal));
    }
    thEl = document.createElement('th');
    thEl.textContent = parseInt(hourlyTotal);
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = totalTotalCookies;
  trEl.appendChild(thEl);

}
var firstPike = new CookieStand ('1st and Pike', 6.3, 23, 65, '1pike');
var seaTac = new CookieStand ('SeaTac', 1.2, 3, 22, 'airport');
var seattleCenter = new CookieStand ('Seattle Center', 3.7, 11, 38, 'seacenter');
var capitolHill = new CookieStand ('Capitol Hill', 2.3, 30, 38, 'capitolhill');
var alkiBeach = new CookieStand ('Alki', 2.6, 2, 16, 'alkibeach');

var allShops = [firstPike, seaTac, seattleCenter, capitolHill, alkiBeach];

(function renderTable() {
  createTable();
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();

(function renderTable(){
  createFooter();
})();

