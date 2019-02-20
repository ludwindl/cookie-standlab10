'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm',
  '2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
 
var pikeUl = document.getElementById ('1pike');
var seatacUl = document.getElementById ('airport');
var seattleCenterUl = document.getElementById ('seacenter');
var capitolHillUl = document.getElementById ('capitolhill');
var alkiUl = document.getElementById ('alkibeach');
//object for 1st and pike location
var pikeLocation = {
  //name: 'firstPike',
  cookiesAvg: 6.3,
  cookiesHour: [],
  minCust: 23,
  maxCust: 65,

  hourCust: function randFunction () {
    var x = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    return x;
  },
    
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var math = ((this.hourCust()*this.cookiesAvg).toFixed(0));
      var msg = (hours[i] + ': ' + math + ' cookies.');
      var liEl = document.createElement('li');
      liEl.textContent = msg;
      this.cookiesHour.push(math);
      pikeUl.appendChild(liEl);
     
    } 
    console.log(this.cookiesHour);

  }
};
//object for seatac location
  

var seaTacLocation = {
  Name: 'SeaTacAiport',
  cookiesAvg: 1.2,
  cookiesHour: [],
  minCust: 3,
  maxCust: 24,
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    return x;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var math = ((this.hourCust()*this.cookiesAvg).toFixed(0));
      var msg = (hours[i] + ': ' + math + ' cookies.');
      var liEl = document.createElement ('li');
      liEl.textContent = msg;
      this.cookiesHour.push(math);
      seatacUl.appendChild(liEl);
    }
    console.log(this.cookiesHour);
  } 
};
//object for seattle center location
var seaCenterLocation = {
  Name: 'seattleCenter',
  cookiesAvg: 3.7,
  cookiesHour: [],
  minCust: 11,
  maxCust: 38,
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random()*(this.maxCust - this.minCust))+this.minCust);
    return x;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var math = ((this.hourCust()*this.cookiesAvg).toFixed(0));
      var msg = (hours[i] + ': ' + math + ' cookies.');
      var liEl = document.createElement ('li');
      liEl.textContent = msg;
      this.cookiesHour.push(math);
      seattleCenterUl.appendChild(liEl);
    }
    console.log(this.cookiesHour);
  } 
};
//objecto for capitol hill location
var capitolHillLocation = {
  Name: 'capitolHill',
  cookiesAvg: 2.3,
  cookiesHour: [],
  minCust: 20,
  maxCust: 38,
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random()*(this.maxCust - this.minCust)) + this.minCust);
    return x;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var math = ((this.hourCust()*this.cookiesAvg).toFixed(0));
      var msg = (hours[i] + ': ' + math + ' cookies.');
      var liEl = document.createElement ('li');
      liEl.textContent = msg;
      this.cookiesHour.push(math);
      capitolHillUl.appendChild(liEl);
    }
    console.log(this.cookiesHour);
  } 
};
//object for alki location
var alkiLocation = {
  Name: 'capitolHill',
  cookiesAvg: 4.6,
  cookiesHour: [],
  minCust: 2,
  maxCust: 16,
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    return x;
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var math = ((this.hourCust()*this.cookiesAvg).toFixed(0));
      var msg = (hours[i] + ': ' + math + ' cookies.');
      var liEl = document.createElement ('li');
      liEl.textContent = msg;
      this.cookiesHour.push(math);
      alkiUl.appendChild(liEl);
    }
    console.log (this.cookiesHour);
  }
};
pikeLocation.render();
seaTacLocation.render();
seaCenterLocation.render();
capitolHillLocation.render();
alkiLocation.render();

