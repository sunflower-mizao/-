window.onload = function(){
    var imgList = document.getElementById("img_list");
    var imgArr = document.getElementsByTagName("img");
    imgList.style.width = 300 * imgArr.length + "px";
    
    var contain = document.getElementById("contain");
    var point = document.getElementById("point");
    var top = document.getElementById("top");
    var pointArr = document.getElementsByTagName("a");
    point.style.top = top.offsetHeight + 20 + "px";
    point.style.left = (contain.clientWidth - point.clientWidth)/2 +"px";
    contain.style.height = top.offsetHeight + pointArr[0].offsetHeight + 20*2 +"px";

    var timer;
    var pindex = 0;
    imgList.style.left = 0;
    pointArr[0].style.backgroundColor = "black";
    autochange();
    for(var i = 0;i <= pointArr.length-1;i ++){
        pointArr[i].index = i;
        pointArr[i].onclick = function(){
            clearInterval(timer);
            var current = parseFloat(imgList.style.left);
            // console.log(this.index);
            pindex = this.index;
            current = 0 - 300 * pindex;
            // console.log(current);
            imgList.style.left = current + "px";
            pointChange(this.index);
            autochange();
        }
    }
    
    function autochange(){
        timer = setInterval(function(){
            var current = parseFloat(imgList.style.left);
            
            // pindex %= imgArr.length;
            if(pindex == 4){
                clearInterval(timer);
                transition(current-300,"1s");
                pointChange(0);
                setTimeout(function(){
                    pindex = 0;
                    transition(0,"0s");
                },1000);
                return autochange();
            }else{
                pindex ++;
                transition(current-300,"1s");
            }
            
            pointChange(pindex);
            
        },1500)
    }

    function pointChange(index){
        for(var i = 0;i <= pointArr.length-1;i ++){
            pointArr[i].style.backgroundColor = "red";
        }
            pointArr[index].style.backgroundColor = "black";
    }

    function transition(offset,time){
        current = offset;
        imgList.style.transition = time;
        imgList.style.left = current + "px";
    }
}
