

export const getCityStateFromCoords = (latitude, longitude) => {
    return new Promise((resolve, reject) =>{
        
        const geocoder = new window.google.maps.Geocoder();
        const latlng = new window.google.maps.LatLng(latitude, longitude);
        // Uncaugt (in promise) ReferenceError: google is not defined 
        geocoder.geocode({ 'latLng': latlng}, (results, status )=>{
            
            if (status === window.google.maps.GeocoderStatus.OK){
                if(results[0]){
                    const addressComponents = results[0].address_components;
                    let city, state;
                    for(let i = 0; i < addressComponents.length; i++){
                        const types = addressComponents[i].types;
                        if(types.includes('locality')){
                            city = addressComponents[i].long_name;
                        }
                        if(types.includes('administrative_area_level_1')){
                            state = addressComponents[i].long_name;
                        }
                    }
                    if (city && state){
                        resolve({city, state});
                    } else {
                        reject(new Error('No results found.'));
                    }
                } else {
                    reject(new Error(`Geocoder failed due to: ${status}`));
                }
            }
        });
    });
}

export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( position => resolve({latitude: position.coords.latitude, longitude: position.coords.longitude}), error => reject(error));
        } else {
            reject(new Error('Geolocation is not supported by this browser'));
        }
    });
}
