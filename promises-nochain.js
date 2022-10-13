cascarHuevo  = (huevo) => {
    return new Promise((resolve, reject) => {
        if( huevo == 'huevo podrido') {
            reject('el huevo esta podrido')
        } else {
            console.log(huevo);
            setTimeout(() => resolve('toma un huevo abierto'),1000);   
        }
    });
}

batir = (huevosAbiertos) => {
    return new Promise((res) => {
        console.log(huevosAbiertos);
        setTimeout(() => res('toma huevos batidos'),5000);
    });
}


freir = (huevosBatidos, sarten) => {
    return new Promise((res) => {
            console.log(huevosBatidos, sarten);
            setTimeout(() => res('toma una tortilla calentita'),10000);
    });
}



let huevoAbiertoPromise1 = cascarHuevo('huevo 1');
let huevoAbiertoPromise2 = cascarHuevo('huevo 2');
let huevoAbiertoPromise3 = cascarHuevo('huevo 3');
let huevoAbiertoPromise4 = cascarHuevo('huevo 4');

let todosLosHuevosAbiertosPromise = Promise.all([huevoAbiertoPromise1, huevoAbiertoPromise2, huevoAbiertoPromise3, huevoAbiertoPromise4])


todosLosHuevosAbiertosPromise
.then((huevoAbiertos) => {
    let huevosBatidosPromise = batir(huevoAbiertos);
    huevosBatidosPromise.then((huevosBatidos) => {
        let tortillaPromise = freir(huevosBatidos, 'sarten');
        tortillaPromise.then((tortillaCalentita) => {
            console.log('ñám ñam', tortillaCalentita);
        })
    })
})
.catch((error)=>{
    /* manejamos el error */
})