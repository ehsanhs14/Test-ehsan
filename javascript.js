document.querySelector(".btn").onclick = function () {
    var n=[1,2,10,2023,1000,2197];
    for (var i=0;i<n.length;i++){
        var f=false;
        if (n[i]==2){
            alert(`${n[i]} is prime`)
        }
        else if (n[i]<2){
            alert(`${n[i]} nothing`)
        }
        else
        {
            for (var p=0;p<n[i];p++){
                if (n[i]%p==0){
                    alert(`${n[i]} not prime`)
                    f=true;
                    break;
                }
            }
            if (f==false)
                alert(`${n[i]} is prime`)
        }
    }

}
