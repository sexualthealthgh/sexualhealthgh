var map;
$(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 5.644381,
        lng: -0.151555,
    });
    map.addMarker({
        lat: 5.644381,
        lng: -0.151555,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">Startup360</h5><p><span class="region">Address line goes here</span><br><span class="postal-code">Postcode</span><br><span class="country-name">Country</span></p>'
        }
        
    });

});
