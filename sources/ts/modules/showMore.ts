export function showMore(){

    try{
        
        let getContainerForElements : any = document.getElementById('listData');
        let getButtonShowMore : any = document.getElementById('showMore');

        function conectToApi(url: string, page : any){
            fetch(url + page)
            .then(res => res.json())
            .then(data =>{
                
                let dataResults = data.results;
                dataResults.forEach((data : any)=>{
                    let createElementDiv : any = document.createElement('div');
                    let template = `
                        <div class="list">
                            <img classc="list__image" src="${data.image}">
                            <h5 class="list__name">${data.name}</h5>
                            <a class="list__cta" href="${data.url}">Ver más</a>
                        </div>
                    `;
    
                    createElementDiv.innerHTML = template;
                    getContainerForElements.append(createElementDiv);
                });

            }).catch(err => console.log(err));
        }

        function showMoreApi(){
            let getDataCount = parseInt(getButtonShowMore.dataset.count);
            let suma = getDataCount + 1;
            getButtonShowMore.dataset.count = suma;

            return conectToApi("https://rickandmortyapi.com/api/character?page=", suma);
        }

        getButtonShowMore.addEventListener('click', showMoreApi);

        conectToApi("https://rickandmortyapi.com/api/character?page=", 1);

        

    }catch(error){console.log(error)}

}