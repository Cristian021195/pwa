if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js').then(reg=>{
        setTimeout(() => {
           reg.sync.register('posteo-nuevo');
           console.log('se enviaron fotos al server');
        }, 3000);


        Notification.requestPermission().then(res=>{
            console.log(res);
            reg.showNotification('Hola mundo!');            
        })

    })
}

//fetch('https://reqres.in/api/users/2').then(res=>res.text()).then(console.log)