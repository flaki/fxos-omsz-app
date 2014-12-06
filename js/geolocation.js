function getLocation() {
	var promise = new Promise(function(resolve, reject) {

		/* No geolocation support */
		if (!("geolocation" in navigator)) {
			reject(new Error("Geolokációs API nem támogatott!"));
		}

		var geo = navigator.geolocation.getCurrentPosition(
			function (position) { /* Success */
				console.debug("GEO: ",position.coords.latitude+","+position.coords.longitude);

				resolve(position);
			}

			,function (error) { /* Failure */
				if (error.code === error.PERMISSION_DENIED) {
					reject(new Error("Kérjük engedélyezze a hozzáférést a geolokációhoz!"));
					
				} else {
					reject(new Error("Geolokáció lekérdezése sikertelen!"));

				}
			}
		);

	
	});

	return promise;
}