'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm',
  '2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
 
var pikeUl = document.getElementById ('1pike');
var seatacUl = document.getElementById ('airport');
var seattleCenterUl = document.getElementById ('seacenter');
var capitolHillUl = document.getElementById ('capitolhill');
var alkiUl = document.getElementById ('alkibeach');
//
var pikeLocation = {
  name: 'firstPike',
  cookiesAvg: 6.3,
  cookiesHour: [],
  hourCust: function randFunction () {
    var x = Math.floor((Math.random()*42)+23);
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

var seaTacLocation = {
  Name: 'SeaTacAiport',
  cookiesAvg: 1.2,
  cookiesHour: [],
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random()*42)+23);
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

var seaCenterLocation = {
  Name: 'seattleCenter',
  cookiesAvg: 3.7,
  cookiesHour: [],
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random()*42)+23);
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

var capitolHillLocation = {
  Name: 'capitolHill',
  cookiesAvg: 2.3,
  cookiesHour: [],
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random()*42)+23);
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

var alkiLocation = {
  Name: 'capitolHill',
  cookiesAvg: 4.6,
  cookiesHour: [],
  hourCust: function randFunction () {
    var x = Math.floor ((Math.random()*42)+23);
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

