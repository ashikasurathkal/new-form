let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
let inp4 = document.getElementById('inp4')
let ok = document.getElementById('ok')
let display = document.getElementById('display')
function clic(){

inp3 = inp3.value.length;
inp4 = inp4.value.length;



    if(inp3 == inp4)
    {
        document.getElementById('display').innerText= 'success'
        document.getElementById('display').style.color= "darkgreen"
    }
    else
    {
        document.getElementById('display').innerText= 'Enter password'
        document.getElementById('display').style.color= "red"
    }

if(inp3&&inp4 < 8){
document.getElementById('display').innerText='error! char should be less than 8'
document.getElementById('display').style.color= "red"


}
if(inp3&&inp4 > 8){
    document.getElementById('display').innerText='error! char should be greater  than be 8'
    document.getElementById('display').style.color= "red"

    
    }

}


