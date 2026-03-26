function oddOrEvenFactory(request){
    if(request === "odd"){
        return function(n){
            alert(n % 2 !== 0);
        }
    } else if(request === "even"){
        return function(n){
            alert(n % 2 === 0);
        }
    } else {
        alert("wrong request");
    }
}

let request = "odd";
let func = oddOrEvenFactory(request);

func(3);
func(4);