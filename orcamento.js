var lat, long, key_do_google, total2, kmtotal, consumocarro, total1, tabelaidsaldo, latitude, longitude, porcentagem, polilinha, lucro, lat0, lat1, lat2, valorlitro, tabelaidgasto, saidaa, log0, log1, totalcombustivel, log2, hospedagemealimentacao, tabelaidgastodata, distanciatotal, distancia, tempo, litrostotal, tabelaidsaldodata, gastototal, tabelaidcorridavalor, porcetagem1, endereco_texto, lng, tabelaidlogin, distanciap, tabelaidloginnome, distanciap1, tabelaidcorridacliente, tabelaidcorridas;

// Descreva esta função...
function calculos() {
  total2 = (txt_to_number(distanciatotal)) * 3.4;
  porcentagem = (txt_to_number(((28 * (txt_to_number(total2))) / 100)));
  total2 = (txt_to_number(total2)) + (txt_to_number(porcentagem));
  total2 = (txt_to_number(total2)) + 4.4;
  total1 = (txt_to_number(distanciatotal)) * 2.9;
  porcetagem1 = (txt_to_number(((28 * (txt_to_number(total1))) / 100)));
  total1 = (txt_to_number(total1)) + (txt_to_number(porcetagem1));
  total1 = (txt_to_number(total1)) + 4.4;
  $("#distancia").html((String(txt_to_number(distanciatotal)) + ' KM'));
  $("#bandeira1").html(('B1=' + String(format_decimal_number((txt_to_number(total1)), 2, false))));
  $("#bandeira2").html(('B2=' + String(format_decimal_number((txt_to_number(total2)), 2, false))));
}

// Descreva esta função...
function linha() {
  if (saidaa == 1) {
    function getPolyline() {
    directionsService = new google.maps.DirectionsService();
    let request = {
    origin: new google.maps.LatLng(lat0, log0),
    destination: new google.maps.LatLng(lat1, log1),
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    durationInTraffic: true,
    };
    directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    polilinha = response.routes[0].overview_polyline;
      var polyline = new google.maps.Polyline({
      strokeColor: "#cc1650",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      map: map
      });
      polyline.polyline_id = 10;
      polyline.setPath(google.maps.geometry.encoding.decodePath(polilinha));
      Polylines.push(polyline);
      function calculateAndDisplayRoute() {
      distanceService = new google.maps.DistanceMatrixService();let origin = new google.maps.LatLng(lat0, log0);
      let destination = new google.maps.LatLng(lat1, log1);
      let request = {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      durationInTraffic: true,
      };
      distanceService.getDistanceMatrix(request, function(response, status) {
      if (status == google.maps.DistanceMatrixStatus.OK) {
      distancia = response.rows[0].elements[0].distance.text;
      tempo = response.rows[0].elements[0].duration.text;
        distanciatotal = (txt_to_number(distancia));
        calculos();
      } else {
      alert("Erro: " + status);
      }
      });
      }
      calculateAndDisplayRoute();
    } else {
    alert("Erro: " + status);
    }
    });
    }
    getPolyline();
  } else if (saidaa == 2) {
    for (var i = 0; i < Polylines.length; i++) {
    if (Polylines[i].polyline_id === 10) {
    Polylines[i].setMap(null);
    Polylines.splice(i, 1);
    }
    }
    function getPolyline() {
    directionsService = new google.maps.DirectionsService();
    let request = {
    origin: new google.maps.LatLng(lat0, log0),
    destination: new google.maps.LatLng(lat2, log2),
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    durationInTraffic: true,
    };
    directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    polilinha = response.routes[0].overview_polyline;
      var polyline = new google.maps.Polyline({
      strokeColor: "#333333",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      map: map
      });
      polyline.polyline_id = 10;
      polyline.setPath(google.maps.geometry.encoding.decodePath(polilinha));
      Polylines.push(polyline);
      function getPolyline() {
      directionsService = new google.maps.DirectionsService();
      let request = {
      origin: new google.maps.LatLng(lat2, log2),
      destination: new google.maps.LatLng(lat1, log1),
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      durationInTraffic: true,
      };
      directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
      polilinha = response.routes[0].overview_polyline;
        var polyline = new google.maps.Polyline({
        strokeColor: "#333333",
        strokeOpacity: 0.9,
        strokeWeight: 2,
        map: map
        });
        polyline.polyline_id = 20;
        polyline.setPath(google.maps.geometry.encoding.decodePath(polilinha));
        Polylines.push(polyline);
        function calculateAndDisplayRoute() {
        distanceService = new google.maps.DistanceMatrixService();let origin = new google.maps.LatLng(lat0, log0);
        let destination = new google.maps.LatLng(lat2, log2);
        let request = {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        durationInTraffic: true,
        };
        distanceService.getDistanceMatrix(request, function(response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK) {
        distanciap = response.rows[0].elements[0].distance.text;
        tempo = response.rows[0].elements[0].duration.text;
          function calculateAndDisplayRoute() {
          distanceService = new google.maps.DistanceMatrixService();let origin = new google.maps.LatLng(lat2, log2);
          let destination = new google.maps.LatLng(lat1, log1);
          let request = {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          durationInTraffic: true,
          };
          distanceService.getDistanceMatrix(request, function(response, status) {
          if (status == google.maps.DistanceMatrixStatus.OK) {
          distanciap1 = response.rows[0].elements[0].distance.text;
          tempo = response.rows[0].elements[0].duration.text;
            distanciatotal = (txt_to_number(distanciap)) + (txt_to_number(distanciap1));
            calculos();
          } else {
          alert("Erro: " + status);
          }
          });
          }
          calculateAndDisplayRoute();
        } else {
        alert("Erro: " + status);
        }
        });
        }
        calculateAndDisplayRoute();
      } else {
      alert("Erro: " + status);
      }
      });
      }
      getPolyline();
    } else {
    alert("Erro: " + status);
    }
    });
    }
    getPolyline();
  }
}

// Descreva esta função...
function calculos2() {
  total1 = (txt_to_number(distanciatotal)) * 3;
  total1 = (format_decimal_number((txt_to_number(total1)), 2, false));
  $("#tx1").html((['Distancia: ',txt_to_number(distanciatotal),'km'].join('')));
  $("#tx2").html(('' + String(tempo)));
  $("#tx3").html(('Cobrar R$ ' + String(total1)));
  if (distanciatotal > 500) {
    hospedagemealimentacao = '200.00';
    $("#tx4").html('Hosp+Alim : Sim');
  } else {
    $("#tx4").html('Hosp+Alim : Não');
  }
}


//feito com bootblocks.com.br
  key_do_google = 'AIzaSyAut0bHyEfU5ozP9Ww90AhF6UpYBylL6BA';
  tabelaidsaldo = '208538';
  tabelaidgasto = '208539';
  tabelaidgastodata = '1438289';
  tabelaidsaldodata = '1438286';
  tabelaidcorridavalor = '1438283';
  tabelaidlogin = '208536';
  tabelaidloginnome = '1438278';
  tabelaidcorridacliente = '1438281';
  tabelaidcorridas = '208537';
  saidaa = 0;
  $("#"+'tela_mapa').show();
  $("#"+'card_iniciar').show();
  document.getElementById('card_iniciar').style.position = "fixed";
  document.getElementById('card_iniciar').style.top = "0px";
  document.getElementById('card_iniciar').style.left = "0";
  document.getElementById('card_iniciar').style.right = "0";
  document.getElementById('card_iniciar').style.zIndex = "20";
  document.getElementById('cardavanced').style.position = "fixed";
  document.getElementById('cardavanced').style.top = "0px";
  document.getElementById('cardavanced').style.left = "0";
  document.getElementById('cardavanced').style.right = "0";
  document.getElementById('cardavanced').style.zIndex = "20";
  var map;
  var Circles = [];
  var Polylines = [];
  var Polygons = [];
  var Makers = [];
  function initMap() {
  map = new google.maps.Map(document.getElementById('tela_mapa'), {
  center: {lat: -14.851078, lng: -40.848206},
  zoom: 12.5
  });
  if (typeof onMapInitilize === "function") {
  onMapInitilize();
  }
  google.maps.event.addListener(map, 'click', function(event) {
  if (typeof onMapClick === "function") {
  onMapClick(event);
  }
  });
  }
  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key="+key_do_google+"&libraries=places,geometry&callback=initMap&loading=async";
  script.async = true;
  document.head.appendChild(script);

//feito com bootblocks.com.br
  $("#card_iniciar").css("background-color", "#ffffff");
  document.getElementById('card_iniciar').style.height = '' + "px";
  document.getElementById('card_iniciar').style.width = '95' + "%";
  document.getElementById('card_iniciar').style.height = "auto";
  $("#"+'card_iniciar').css("margin-left", 5+ "px");
  $("#"+'card_iniciar').css("margin-right", 5+ "px");
  $("#"+'card_iniciar').css("margin-top", 10+ "px");
  $("#"+'card_iniciar').css("margin-bottom", 10+ "px");
  $("#cardavanced").css("background-color", "#ffffff");
  document.getElementById('cardavanced').style.height = '' + "px";
  document.getElementById('cardavanced').style.width = '95' + "%";
  document.getElementById('cardavanced').style.height = "auto";
  $("#"+'cardavanced').css("margin-left", 5+ "px");
  $("#"+'cardavanced').css("margin-right", 5+ "px");
  $("#"+'cardavanced').css("margin-top", 10+ "px");
  $("#"+'cardavanced').css("margin-bottom", 10+ "px");


        function qclick() {
            let elementoClick = document.getElementById('btnresumo');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick();


        function qclick2() {
            let elementoClick = document.getElementById('location');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      if (saidaa == 0) {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
      lat0 = latitude;
      log0 = longitude;
      for (var i = 0; i < Makers.length; i++) {
      if (Makers[i].marker_id === 0) {
      Makers[i].setMap(null);
      Makers.splice(i, 1);
      }
      }
      var marker = new google.maps.Marker({
      position: {lat: lat0, lng: log0},
      map: map,
      marker_id: 0
      });
      Makers.push(marker);
    }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
    });
    } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
    }
  }

                });
            }
        }
        qclick2();


        function qclick3() {
            let elementoClick = document.getElementById('vai');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#endereco_destino").val('');
  if (saidaa == 0) {
    saidaa = 1;
    $("#extra").html('Fim :');
  } else if (saidaa == 1) {
    linha();
    saidaa = 2;
    $("#extra").html('Meio :');
  } else if (saidaa == 2) {
    linha();
  }

                });
            }
        }
        qclick3();


        function qclick4() {
            let elementoClick = document.getElementById('extra');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick4();

function onMapInitilize(){
  map.setOptions({streetViewControl: false});
  map.setOptions({zoomControl: false});
  map.setOptions({mapTypeControl: false});
  map.setOptions({scaleControl: false});
  map.setOptions({fullscreenControl: false});
  function addAutocomplete() {
  var input = document.getElementById('endereco_destino');
  let radius = 5000;
  let center = new google.maps.LatLng(-14.851078, -40.848206);
  let circle = new google.maps.Circle({
  center: center,
  radius: radius
  });
  let options = {
  bounds: circle.getBounds()
  };
  autocomplete_endereco_destino = new google.maps.places.Autocomplete(input, options);
  autocomplete_endereco_destino.addListener("place_changed", () => {
  let place = autocomplete_endereco_destino.getPlace();
  endereco_texto = place.formatted_address;
  lat = place.geometry.location.lat();
  lng = place.geometry.location.lng();
    if (saidaa == 0) {
      lat0 = lat;
      log0 = lng;
      for (var i = 0; i < Makers.length; i++) {
      if (Makers[i].marker_id === 0) {
      Makers[i].setMap(null);
      Makers.splice(i, 1);
      }
      }
      var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      marker_id: 0
      });
      Makers.push(marker);
    } else if (saidaa == 1) {
      lat1 = lat;
      log1 = lng;
      for (var i = 0; i < Makers.length; i++) {
      if (Makers[i].marker_id === 1) {
      Makers[i].setMap(null);
      Makers.splice(i, 1);
      }
      }
      var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      marker_id: 1
      });
      Makers.push(marker);
    } else if (saidaa == 2) {
      lat2 = lat;
      log2 = lng;
      for (var i = 0; i < Makers.length; i++) {
      if (Makers[i].marker_id === 2) {
      Makers[i].setMap(null);
      Makers.splice(i, 1);
      }
      }
      var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      marker_id: 2
      });
      Makers.push(marker);
    }
  });
  }
  addAutocomplete();
};

//feito com bootblocks.com.br
  kmtotal = 0;
  lucro = 0;
  totalcombustivel = 0;
  litrostotal = 0;
  gastototal = 0;
  valorlitro = 6.2;
  consumocarro = 12;
  hospedagemealimentacao = [];
  $("#"+'cardavanced').hide();
  $("#"+'telaresutado').hide();

function onMapClick(event) {
lat = event.latLng.lat();
long = event.latLng.lng();
  if (saidaa == 0) {
    lat0 = lat;
    log0 = long;
    for (var i = 0; i < Makers.length; i++) {
    if (Makers[i].marker_id === 0) {
    Makers[i].setMap(null);
    Makers.splice(i, 1);
    }
    }
    var marker = new google.maps.Marker({
    position: {lat: lat, lng: long},
    map: map,
    marker_id: 0
    });
    Makers.push(marker);
  } else if (saidaa == 1) {
    lat1 = lat;
    log1 = long;
    for (var i = 0; i < Makers.length; i++) {
    if (Makers[i].marker_id === 1) {
    Makers[i].setMap(null);
    Makers.splice(i, 1);
    }
    }
    var marker = new google.maps.Marker({
    position: {lat: lat, lng: long},
    map: map,
    marker_id: 1
    });
    Makers.push(marker);
  } else if (saidaa == 2) {
    lat2 = lat;
    log2 = long;
    for (var i = 0; i < Makers.length; i++) {
    if (Makers[i].marker_id === 2) {
    Makers[i].setMap(null);
    Makers.splice(i, 1);
    }
    }
    var marker = new google.maps.Marker({
    position: {lat: lat, lng: long},
    map: map,
    marker_id: 2
    });
    Makers.push(marker);
  }
}


        function qclick5() {
            let elementoClick = document.getElementById('btnavancado');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      calculos2();
  $("#"+'card_iniciar').hide();
  $("#"+'cardavanced').show();

                });
            }
        }
        qclick5();


        function qclick6() {
            let elementoClick = document.getElementById('callinform2');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      consumocarro = document.getElementById('txconsumo').value;
  valorlitro = document.getElementById('txlitro').value;
  hospedagemealimentacao = document.getElementById('txextra').value;
  if (document.getElementById('txconsumo').value == '') {
    consumocarro = 12;
  }
  if (document.getElementById('txlitro').value == '') {
    valorlitro = 6.2;
  }
  if (document.getElementById('txextra').value == '') {
    hospedagemealimentacao = 200;
  }
  kmtotal = (txt_to_number((distanciatotal * 2)));
  totalcombustivel = (txt_to_number(((kmtotal / consumocarro) * valorlitro)));
  litrostotal = (txt_to_number((kmtotal / consumocarro)));
  gastototal = totalcombustivel + (txt_to_number(hospedagemealimentacao));
  lucro = total1 - gastototal;
  $("#tx5").html(('KM total : ' + String(kmtotal)));
  $("#tx6").html((String(format_decimal_number(litrostotal, 2, false)) + ' Litros'));
  $("#tx7").html(('Total de combustivel R$ ' + String(format_decimal_number(totalcombustivel, 2, false))));
  $("#tx8").html(('comb+alim R$' + String(format_decimal_number(gastototal, 2, false))));
  $("#tx9").html(('Lucro R$ ' + String(format_decimal_number(lucro, 2, false))));
  $("#"+'telaresutado').show();

                });
            }
        }
        qclick6();
function txt_to_number(txt){
            txt = txt+"";
            if(txt.includes(",")){
                txt = txt.replace(",", ".");
            }
            if(txt.includes(".")){
                txt = parseFloat(txt);
            }else{
                txt = parseInt(txt);
            }
            return txt;
        }function format_decimal_number(number, places, virgula = false){
                number = number + "";
                if(number.includes(",")){
                    number = number.replace(",", ".");
                    number = parseFloat(number);
                }else{
                    number = parseFloat(number);
                }
                number = number.toFixed(places);
                if(virgula){
                    number = number.replace(".", ",");
                }
                return number;
            }
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });