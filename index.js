var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 32.730, lng: -117.15},
    zoom: 12
  });
}

$(function() {
  $.getJSON("topspots.json", function(data) {
    var tbody = $("#topspotsTable > tbody");

    $.each(data, function() {
      var tr = "<tr>"
      tr += "<td>" + this.name + "</td><td>" + this.description + "</td>";
      var link = "https://www.google.com/maps?q=" + this.location[0] + "," + this.location[1];
      tr += '<td><a href="' + link + '" role="button" class="btn btn-primary">Open in Google Maps</a></td></tr>';
      tbody.append(tr);
    });

  });
});
