function generate_map(lat_val = 44.434203, lng_val = 26.105455, desc_val= 'BitAcademy') {

    let map_el = document.getElementById('harta');

    let map_options_obj = {
        center: {lat: lat_val , lng: lng_val},
        zoom: 15,
        controlSize: 32,
        //mapTypeId: google.maps.MapTypeId.HYBRID,

    };

    let map_obj = new google.maps.Map(map_el, map_options_obj);

    let marker_options_obj = {

        position: map_options_obj.center,
        map: map_obj,
    };

    let marker_obj = new google.maps.Marker(marker_options_obj);

    let infowindow_options_obj = {

        content: '<h3>' + desc_val + '</h3>',
        maxWidth: 600,

    };

    let infowindow_obj = new google.maps.InfoWindow(infowindow_options_obj);

    infowindow_obj.open(map_obj, marker_obj);

    marker_obj.addListener('click', function(ev) {

        infowindow_obj.open(map_obj, marker_obj);
      //  console.log(ev);

    });

}




generate_map();

document.getElementById('search').onkeypress = function(ev) {

   // console.log(ev);

    if(ev.key == 'Enter' || ev.keyCode == 13) {

        let search_str = this.value ;

        let geocoder_obj = new google.maps.Geocoder();

        geocoder_obj.geocode({address: search_str}, function(results, status) {

            if (!results || status == 'ZERO_RESULTS') {

                alert('Adresa nu a putut fi gasita');

            } else {

                //console.log(results);

                let new_lat = results[0].geometry.location.lat();
                let new_lng = results[0].geometry.location.lng();
                let new_desc = results[0].formatted_address;

                generate_map(new_lat, new_lng, new_desc);

            }

        });

    }

};


//----------HERE IS THE CLUB TO MAP LINK FUNCTION------------//

//am incercat sa iau un aproach diferit fata de ce am invatat la curs asa ca am incercat sa fac ceva ce sa nu mai depinde de Lat si Lng pentru a nu memora asa multe variabile
//am facut o funcntie care sa caute direct folosind api-ul de geocoding

document.getElementById('silver').addEventListener('click', function (ev) {

    ev.preventDefault;
    var text = document.getElementById('search');
    text.value = 'Silver Church';
    
    let search_str = text.value;
          
    let geocoder_obj = new google.maps.Geocoder();
    
    geocoder_obj.geocode({address: search_str}, function(results, status) {
               
        let new_lat_val = results[0].geometry.location.lat();
        let new_lng_val = results[0].geometry.location.lng();
        let new_desc_val = results[0].formatted_address;
        generate_map(new_lat_val, new_lng_val, new_desc_val);
           
    });
  
  });



  document.getElementById('freddo').addEventListener('click', function (ev) {

    ev.preventDefault;
    var text = document.getElementById('search');
    text.value = 'Freddo Bar & Lounge';
    
    let search_str = text.value;
          
    let geocoder_obj = new google.maps.Geocoder();
    
    geocoder_obj.geocode({address: search_str}, function(results, status) {
               
        let new_lat_val = results[0].geometry.location.lat();
        let new_lng_val = results[0].geometry.location.lng();
        let new_desc_val = results[0].formatted_address;
        generate_map(new_lat_val, new_lng_val, new_desc_val);
           
    });
  
  });

  document.getElementById('beluga').addEventListener('click', function (ev) {

    ev.preventDefault;
    var text = document.getElementById('search');
    text.value = 'Beluga Music & Cocktails';
    
    let search_str = text.value;
          
    let geocoder_obj = new google.maps.Geocoder();
    
    geocoder_obj.geocode({address: search_str}, function(results, status) {
               
        let new_lat_val = results[0].geometry.location.lat();
        let new_lng_val = results[0].geometry.location.lng();
        let new_desc_val = results[0].formatted_address;
        generate_map(new_lat_val, new_lng_val, new_desc_val);
           
    });
  
  });

  document.getElementById('berariah').addEventListener('click', function (ev) {

    ev.preventDefault;
    var text = document.getElementById('search');
    text.value = 'Beraria H';
    
    let search_str = text.value;
          
    let geocoder_obj = new google.maps.Geocoder();
    
    geocoder_obj.geocode({address: search_str}, function(results, status) {
               
        let new_lat_val = results[0].geometry.location.lat();
        let new_lng_val = results[0].geometry.location.lng();
        let new_desc_val = results[0].formatted_address;
        generate_map(new_lat_val, new_lng_val, new_desc_val);
           
    });
  
  });

  document.getElementById('control').addEventListener('click', function (ev) {

    ev.preventDefault;
    var text = document.getElementById('search');
    text.value = 'Control Club Bucuresti';
    
    let search_str = text.value;
          
    let geocoder_obj = new google.maps.Geocoder();
    
    geocoder_obj.geocode({address: search_str}, function(results, status) {
               
        let new_lat_val = results[0].geometry.location.lat();
        let new_lng_val = results[0].geometry.location.lng();
        let new_desc_val = results[0].formatted_address;
        generate_map(new_lat_val, new_lng_val, new_desc_val);
           
    });
  
  });

