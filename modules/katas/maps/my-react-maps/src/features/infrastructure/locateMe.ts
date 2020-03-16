export async function locateMe (){
    function success(position:any) {
      const positionObj:{}  = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      return positionObj
    }
    function error() {
        alert('Hubo un error')
    }
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
    } else {
       navigator.geolocation.getCurrentPosition(success, error);
    }
}


