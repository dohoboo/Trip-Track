
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
var ps = new kakao.maps.services.Places();
var markers = [];
var box = document.getElementById("latlngbox");
var newP = document.getElementById("ptag");

var lat = new Array();
var lng = new Array();
var search = new Array();

function callSearch(){
	var search = document.getElementById('search').value;
	ps.keywordSearch(search, placeSearchCB)
	
	 if(markers.length > 0){
			 for(var i = 0; i < markers.length; i++){
				 markers[i].setMap(null);
			 }
			 markers = [];
			 markers.length = 0;
		 }

}
function placeSearchCB (data, status, pagination){
	
	
	if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}


function displayMarker(place) {
   
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });
    markers.push(marker);
    

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
		
		newP.innerHTML += "<input name='lat' type='text'>"+"<input name='lng' type='text'>"+"<input name='placeName' type='text'>";
   		box.appendChild(newP);
		
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
        lat.push(place.y);
		lng.push(place.x);
		search.push(place.place_name);
   		var latlngsize = document.getElementsByName('lat').length;
   		for(var i = 0; i < latlngsize; i++){
				if(document.getElementsByName('lat')[i].value === "" || document.getElementsByName[i]('lng').value === "" || document.getElementsByName[i]('placeName').value === ""){
					 document.getElementsByName('lat')[i].value = lat[i];
					 document.getElementsByName('lng')[i].value = lng[i];
					 document.getElementsByName('placeName')[i].value = search[i];
						
				 }
			 }
});
}