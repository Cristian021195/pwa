self.addEventListener('fetch', req=>{
    /*const offlineResponse = new Response(`
        Bienvenido a mi website, necesitas internet!
    `);*/
    /*const offlineResponse = new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title> 
        </head>
        <body>
            <h1>OFFLINE MODE!</h1>
        </body>
        </html>
    `, {headers:{'Content-Type':'text/html'}});*/

    const offlineResponse = fetch('pages/offline.html'); 


    const resp = fetch(req.request.url).catch(err=>{
        return offlineResponse
    })
    req.respondWith(resp);
})