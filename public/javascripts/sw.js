self.addEventListener('install', function(event) {  
  event.waitUntil(
    caches.create('lol').then(function(cache){
		return cache.add({
			'/users'
		});
	})
  );
});

this.addEventListener('fetch',function(event){
	console.log(event.request);
});

