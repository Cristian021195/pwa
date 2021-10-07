if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}


if(window.caches){
    caches.open('prueba-1');//si no existe este espacio, lo crea en disco

    caches.open('prueba-2');

    caches.has('prueba-3').then(console.log)//chequeamos si existe

    //caches.delete('prueba-1').then(console.log) //elimina un cache

    caches.open('cache-v1.1').then(cache=>{
        //cache.add('/index.html');
        cache.addAll(
            [
                '/index.html',
                '/img/stan-marsh.png',
                '/css/style.css'
            ]
        ).then(created=>{
            //cache.delete('/css/style.css'); //eliminacion
            cache.put('/index.html', new Response('Hola mundo'))
        })

        /*cache.match('/index.html').then(res=>{
            res.text().then(console.log)
        })*/
        
    })

    caches.keys().then(keys=>{
        console.log(keys)
    })
}

//fetch('https://reqres.in/api/users/2').then(res=>res.text()).then(console.log)