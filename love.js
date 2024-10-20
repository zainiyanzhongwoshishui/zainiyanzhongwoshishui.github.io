function lock(){
    var txt;
    var date = prompt("我们在现在这个时间在一起多久了呀");
    if(date != '999')
    {
        alert("不对在想想！");
        document.getElementById("lock").innerHTML = "加密ing";
    }
    else{
        alert("没错哦。我们已经在一起999天了");
    }
 }
 function say(){
    document.getElementById("say").innerHTML= "虽然孙孙总是不让我说，但是那时候的我们就是前两年最好的时候了，我们一起爬山，一起出去玩，一起踩小兔子"
 }
 function fight(){
    document.getElementById("fight").innerHTML="最初的我们认为吵架代表着不合适,也正因为如此，我们在朋友那段时间的吵架才没有去挽回 但是她在和我在一块前又说：一定要和你十分契合的嘛？"
 }
 function laodeng(){
    document.getElementById("laodeng").innerHTML="什么是老登？就是我们在高一的时候的共同的班主任，他曾经说过：“我们班曾经有一对情侣，他们在高中只是朋友但是到了大学开始聊天，后来在一起了，他们都上了个很不错的大学”，现在的我们，是不是也算是老登口中的人了呢？（虽然我们在高中就处对象（反面教材））"
 }
 function oct(){
    document.getElementById("oct").innerHTML="我们的国庆节去了好多地方，第一次见到大唐不夜城，第一次去超级偏的地方住，第一次去秦岭欢乐世界,还带着一把破的雨伞在雨中飞驰，丢伞，去阴森的何家营住，一直在找厕所的路上......"
 }
 function end(){
    document.getElementById("end").innerHTML="'故事会有开始，但我们不会结束,旅行因为你而感到美好，生命的意义又何尝不是'"
 }