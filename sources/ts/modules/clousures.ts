let clousures = (function(){

    function _tester(){
        alert('hola');
    }

    return {
        exportElement : function(){
            _tester()
        }
    }

})()

console.log(clousures);


let loadElementsGanlder = ()=>{
    clousures.exportElement()
}

export {
    loadElementsGanlder
}
