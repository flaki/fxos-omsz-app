var apiURL = 'http://dev01.nik.uni-obuda.hu';
var actionPart = '/omsz/alarms';
function getAlerts(location) {
    var promise = new Promise(function(resolve, reject){
	var xhr = new XMLHttpRequest(
	    {
		mozSystem: true,
	    }
	);
	xhr.onreadystatechange = function() {
	    if(xhr.readyState == 4 && xhr.status == 200) {
		console.log("Resolve");
		resolve(JSON.parse(xhr.responseText));
	    }
	    if(xhr.readyState == 4 && xhr.status != 200){
		console.log("Reject 15");
		reject(new Error(xhr.readyState));
	    }
	}
	xhr.ontimeout = function(){
	    //Timeout
	    console.log("Reject 21");
	    reject(new Error(408));
	}
	/**
	* @TODO Validation of location. 
	*/
	xhr.open('GET', apiURL + actionPart + '?k=' + encodeURI(location) , true);
	xhr.timeout = 3 * 1000
	
	;
	xhr.send();
	
    });
    return promise;
}

/* Test case #1 */
window.onload = function(e){ 
    var alerts = getAlerts("Miskolci");
    alerts.then(
	function(){
	    alert("OK");
	},
	function(){
	    alert("ERR");
	}
    );
}
