var lat = new Array();
var lng = new Array();
var placeName = new Array();
var latlngsize = document.getElementsByName('lat').length;
var markers = [];
var bounds = new kakao.maps.LatLngBounds();
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var container = document.getElementById('map');
var options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
	};
var map = new kakao.maps.Map(container, options);

for(var i = 0; i < latlngsize; i++){			
			lat.push(document.getElementsByName('lat')[i].value);
			lng.push(document.getElementsByName('lng')[i].value);	
			placeName.push(document.getElementsByName('placeName')[i].value);
			 
    		displayMarker(lat[i], lng[i], placeName[i]);
		 	bounds.extend(new kakao.maps.LatLng(Number(lat[i]), Number(lng[i])));
}
		map.setBounds(bounds);
		
		
		
		
function displayMarker(lat, lng, placeName) {
	var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(Number(lat), Number(lng)) 
   	}); 
   	
   	marker.setMap(map);
   	
   	kakao.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent('<div style="padding:5px;font-size:12px;">' + placeName + '</div>');
        	infowindow.open(map, marker);
		});
}