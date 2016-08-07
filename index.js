var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 32.770, lng: -117.156},
    zoom: 10
  });
  addLocations();
}

function addLocations() {
  var tbody = $("#topspotsTable > tbody");

  $.getJSON("topspots.json", function(data){
    $.each(data, function(index) {
      //construct row and append to table
      var button = $('<button type="button" class="btn btn-primary">Show on Map</button>');
      var tr = $("<tr><td>" + this.name + "</td><td>" + this.description + "</td><td></td></tr>");
      tr.children().last().append(button);
      tbody.append(tr);

      var location = {lat: this.location[0], lng: this.location[1]};

      //add marker to map
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: this.name
      });

      //bind button click event to map zoom
      button.click(function(){
        map.panTo(location);
        map.setZoom(14);
        document.getElementById("map").scrollIntoView();
      });
    });
  });
}
