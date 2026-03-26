function multipleGreet(func, n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let Greet = function(){
    alert("Assalamu Alaikum!");
}
multipleGreet(Greet,5);