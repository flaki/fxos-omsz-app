var apiURL = 'http://';
var actionPart = '/omsz/alert';

function getAlerts(location) {
    var promise = new Promise();
    
    var xhr = new XMLHttpRequest(
	{
	    mozSystem: true,
	}
    );
    xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) {
	    promise.resolve(JSON.parse(xhr.responseText));
	}else{
	    promise.reject(xhr.readyState);
	}
    }
    
    /**
     * @TODO Validation of location. 
     */
    
    xhr.open('GET', apiURL + actionPart + '?k=' + encodeURI(location) , true);
    xhr.send();
    return promise;
}