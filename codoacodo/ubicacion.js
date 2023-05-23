function iniciarMap() {
    var coord = { lat: -37.5956145, lng: -35.4431949 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
  
  
  function cargarAPI() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
  window.onload = cargarAPI;