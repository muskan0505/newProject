// document.getElementById("Totaltip").style.display="none";
// document.getElementById("each").style.display="none";
// function calculatetip(event){
//     event.preventDefault();
//     var billAmount= document.getElementById("billAmount").value;
//     var serviceQuality = document.getElementById("serviceQuality").value;
//     var numPeople = document.getElementById("numPeople").value;
      

//     if(billAmount.trim()===" "|| serviceQuality==0){
//        return window.alert("Please enter some value");
//     }
//     if(numPeople===" "|| numPeople<=1){
//         numPeople=1;
//         document.getElementById("each").style.display="none";
//     }
//     else{
//         document.getElementById("each").style.display="block";
//     }
//     //  var total = (billAmount * serviceQuality)/numPeople;
//     //  total=Math.round(total*100)/100;
//     //  total = total.toFixed(2);
//     var total = (billAmount * serviceQuality) / numPeople;
//     total = Math.round(total * 100) / 100;
//     total = total.toFixed(2);

//      document.getElementById("Totaltip").style.display="block";
//      document.getElementById("tip").innerHTML=total;
//     return false;
// }

//  document.getElementById("calculate").onclick = function(){calculatetip();};
// Hide the tip amount and "each" label initially
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Totaltip").style.display = "none";
    document.getElementById("each").style.display = "none";
  
    function calculateTip(event) {
      event.preventDefault();
  
      var billAmount = document.getElementById("billAmount").value;
      var serviceQuality = document.getElementById("serviceQuality").value;
      var numPeople = document.getElementById("numPeople").value.trim();
  
      if (billAmount.trim() === "" || serviceQuality == 0 || numPeople === "") {
        return window.alert("Please enter some value");
      }
  
      if (numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
      } else {
        document.getElementById("each").style.display = "block";
      }
  
      var total = (billAmount * serviceQuality) / numPeople;
      total = Math.round(total * 100) / 100;
      total = total.toFixed(2);
  
      document.getElementById("Totaltip").style.display = "block";
      document.getElementById("tipAmount").innerHTML = total;
    }
  
    document.getElementById("calculate").addEventListener("click", calculateTip);
  });