function myFunction() {
    document.getElementById("treat").innerHTML = "宝宝不生病啦！";
 }
 function lock(){
    var txt;
    var date = prompt("知道我的生日是多少吗就来看日记？(形式为xxxx.xx.xx)");
    if(date != '2005.12.24')
    {
        alert("不对！滚蛋！");
        document.getElementById("lock").innerHTML = "加密ing";
    }
    else{
        alert("是的没错");
    }
 }
function like(){
    document.getElementById("like").innerHTML='you like this.'
}

    
