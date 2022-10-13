cascarHuevo  = (huevo, cuandoTermines) => {
    console.log(huevo);
    setTimeout(() => cuandoTermines('toma un huevo abierto'),1000);
}

batir = (huevosAbiertos, cuandoTermines) => {
    console.log(huevosAbiertos);
    setTimeout(() => cuandoTermines('toma huevos batidos'),5000);
}

freir = (huevosBatidos, sarten, cuandoTermines) => {
    console.log(huevosBatidos, sarten);
    setTimeout(() => cuandoTermines('toma una tortilla calentita'),10000);
}


cascarHuevo('huevo 1',(huevoAbierto1) => {
    cascarHuevo('huevo 2', (huevoAbierto2) => {
        cascarHuevo('huevo 3', (huevoAbierto3) => {
            cascarHuevo('huevo 4', (huevoAbierto4) =>{
                batir([huevoAbierto1,huevoAbierto2,huevoAbierto3,huevoAbierto4], (huevosBatidos) => {
                    freir(huevosBatidos,'sarten',(tortillaCalentita) => {
                        console.log('ñam ñam', tortillaCalentita);
                    })
                })
            })
        })
    })
});