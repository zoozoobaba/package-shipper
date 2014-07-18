var locations = {"US":1, "Canada":1, "Mexico":1,
                 "UK":2, "Ireland":2, "France":2,
                 "Egypt":3, "Nigeria":3, "Mozambique":3};
var weight = {"0 to 10 lbs":1.2, "11 to 20 lbs":1.8, "+21 lbs":2.5};
var volume = {"1 to 20 cu inch":1.2,"21 to 40 cu inch":1.6, "+41 cu inch":2.4};
var baseCost = 5;
var box = { costCalculator : function(){
              var zoneDifference = Math.abs(this.origin - this.destination) + 1;
              this.cost = (baseCost * this.weight * this.volume * zoneDifference).toFixed(2);
              console.log(this.weight)
            }
          };

$(document).ready(function() {
  $("form#package-details-form").submit(function(event){
    event.preventDefault();
    $("#cost-column").show();
    box.origin = (locations [$("#package-origin").val()] );
    box.destination = (locations [$("#package-destination").val()] );
    box.weight = (weight [$("#package-weight").val()] );
    box.volume = (volume [$("#package-volume").val()] );
    box.baseCost = baseCost;
    box.costCalculator();
    $("#from").text($("#package-origin").val());
    $("#to").text($("#package-destination").val());
    $("#cost").text("$" + box.cost);

  })
})
