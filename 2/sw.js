//Ciclo de vida de SW

//INSTALL

self.addEventListener('install', install=>{//cada que haya cambios o cerremos y abramos tab
    console.log('Instalando...')
    //descargar assets / public
    //creamos cache
    const caching = new Promise((res, rej)=>{
        setTimeout(() => {
            console.log('¡Instalado!')
            self.skipWaiting();
            res();
        }, 1000);
    })


    install.waitUntil(caching);
})


//Cuando SW toma el control de la app

self.addEventListener('activate', activa=>{
    //borra caché viejo

    console.log('Sw activo')
})


self.addEventListener('fetch', req=>{

    //APLICAR LAS ESTRATEGIAS DEL CACHÉ
    /*console.log(req.request.url);

    if(req.request.url.includes('https://reqres.in/')){
        const resp = new Response(`{ok:false, mensaje:'desde sw..'}`)
        req.respondWith(resp)
    }*/
})



self.addEventListener('sync', sync=>{
    console.log('tenemos conexion!');
    console.log(sync.tag);
})


self.addEventListener('push', (push)=>{
    console.log('notificacion recibida!');
})