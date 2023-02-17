var len;
var results = '';
var date = new Date();
var hours = date.getHours()
var mins = date.getMinutes()
if (hours > 12) {
    hours = '0' + (hours - 12)
}
if (mins < 10) {
    mins = '0' + mins
}
var time = hours + ':' + mins;


function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "37fb1779ae8842aa8c8f457bb20ab011");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function search() {
    //calls api search method
    let searchVal = $('#query').value;
    $('#searchResults').css("visibility", "visible");
    apiSearch(searchVal);
}

function backgroundChange() {
    //changes backround onclick
    //let bckImg = document.body.style.backgroundImage;
    //if (bckImg == "url('mythbustersPic.jpg')") {
    //    bckImg = "url('DennisRodmanFuturistic.jpg')";
    //} else {
    //    bckImg = "url('mythbustersPic.jpg.jpg')";
    document.body.style.backgroundImage = "url('DennisRodmanFuturistic.jpg')";

}

function showTime() {
    // gets the current time (formatted HH:MM)
    //loads the result into your 'time' div

    document.body.style.backgroundImage = "url('mythbustersPic.jpg')";


    //appending to the div
    $('#time').html('<p class = "text">' + time + '</p>');

    //making div visible
    $('#time').css("visibility", "visible");
}

function timeShift() {
    //displays the div as a JQuery UI dialog window

    //document.body.style.backgroundImage = "url('DennisRodmanFuturistic.jpg')";

    $('#time').dialog();

}

function getLucky() {
    $('#searchResults').css("visibility", "visible");
    apiSearch();
}