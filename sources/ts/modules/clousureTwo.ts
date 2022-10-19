function createUser(){

    function alerts(n : string){
        alert(n);
    }
  
    return {
        callback : function(dato : string){
            alerts(dato);
        },
    }

}
  
let exportFunction = createUser();

let exportCallbackFunction = ()=>{
    exportFunction.callback("probando");
}

export {
    exportCallbackFunction
}

  