
self.addEventListener('fetch', (requests)=>{
    if(requests.request.url.includes('style2.css')){
        const resp = fetch('./css/style.css');
        requests.respondWith(resp);
        /*requests.respondWith(fetch('./css/style.css').then(res=> {
            if(res.ok){
                return res;
            }else{
                throw new Error('No existe archivo de reemplazo')
            }
        }).catch(error=>{console.warn(error)}));*/
    }
    
})