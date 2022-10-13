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


let promesaDe4HuevosAbiertos = Promise.all([
    cascarHuevo('huevo1'),
    cascarHuevo('huevo2'),
    cascarHuevo('huevo3'),
    cascarHuevo('huevo4'),
]) 

promesaDe4HuevosAbiertos
    .then(batir)
    .then((huevosBatidos)  => freir(huevosBatidos, 'sarten'))
    .then((tortillaCalentita) => console.log('ñam ñam', tortillaCalentita))
    .catch((error) => console.log('ooooooooooooh al mc Donalds porque ', error));

