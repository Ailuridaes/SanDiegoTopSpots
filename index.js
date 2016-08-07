var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 32.770, lng: -117.156},
    zoom: 10
  });
}

$(function() {

  $.getJSON("topspots.json", function(data) {
    var tbody = $("#topspotsTable > tbody");

    $.each(data, function(index) {
      //construct row and append to table
      var tr = "<tr>"
      tr += "<td>" + this.name + "</td><td>" + this.description + "</td>";
      tr += '<td><button type="button" id="button' + index + '" class="btn btn-primary">Show on Map</button></td></tr>';
      tbody.append(tr);
    });

    //Google Map setup for each location
    //in separate loop so table construction can finish independent of map initialzation
    $.each(data, function(index) {
      var location = {lat: this.location[0], lng: this.location[1]};

      //add marker to map
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: this.name
      });

      //bind button click event to map zoom
      $("#button"+index).click(function(){
        map.panTo(location);
        map.setZoom(14);
      });
    });

  });
});
