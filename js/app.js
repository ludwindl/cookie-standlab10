'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm',
  '2pm','3pm','4pm','5pm','6pm','7pm','8pm','total'];
 
var pikeUl = document.getElementById ('1pike');

var pikeLocation = {
  name: 'firstPike',
  cookiesAvg: 6.3,
  hourCust: function randFunction () {
    var x = Math.floor((Math.random()*42)+23);
    return x;
  },
  
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i]+':' + (this.hourCust()*this.cookiesAvg).toFixed(0) +' cookies.';
      pikeUl.appendChild(liEl);
    } 
  }

};
pikeLocation.render();
