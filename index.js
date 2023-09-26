function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function functionName(){

    }
    return functionName;
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}