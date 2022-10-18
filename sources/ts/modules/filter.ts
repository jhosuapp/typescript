export function filter(){

    let getInputSearch : any = document.getElementById('filter');

    
    function conectToData(url: string){

        fetch(url)
        .then(res => res.json())
        .then(data =>{
            
            
            let getDataResults : any = data.results; 
            let getValueOfInput : any = getInputSearch.value;
            let valuesToExpresion : any = new RegExp(getValueOfInput);
            let getFilterList : any = document.getElementById('filter_list'); 

            const filterDataName = ()=>{
                
                let dataName = getDataResults.filter((item : any) =>{
    
                    return (valuesToExpresion).test(item.name);

                });

                console.log(dataName.length);

                dataName.forEach((data : any)=>{

                    let createPforList = document.createElement('p');
                    createPforList.textContent = data.name;

                    getFilterList.append(createPforList);

                });

            }

            getValueOfInput.length > 2 ? filterDataName() : getValueOfInput = false;




        });

    }

    getInputSearch.addEventListener('keyup', ()=>{
        conectToData("https://rickandmortyapi.com/api/character");
    });


}