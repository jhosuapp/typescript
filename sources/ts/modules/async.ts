export function conect(){

    const dataAbogados = [
        {
            nombre: 'maria',
            apellido: 'becerro',
            idCargo: 123,
            cargo: 'socia'
        },
        {
            nombre: 'jose',
            apellido: 'penagos',
            idCargo: 123,
            cargo: 'socio'
        }
    ]
    
    
    function promiseAbogados(){

        return new Promise((resolve, reject) => {
            console.log('cargando abogados...');

            setTimeout(()=>{
                resolve(dataAbogados);
                reject(Error("a ocurrido un error"));
            }, 1500);

        })
    }


    async function getAllAbogados() {
         let  getPromiseAbogados = await promiseAbogados();

        // console.log(getPromiseAbogados);
    }   

    getAllAbogados();




    let getApiCaracteres = fetch('https://rickandmortyapi.com/api/episode/15')
    .then(res => res.json())


    async function getCaracteresPromise() {
        let getAllDataCaracteres = await getApiCaracteres;

        console.log(getAllDataCaracteres);
    }


    getCaracteresPromise();

    
    
}