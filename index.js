var div = document.getElementById('xx');

var lineWidth = 10

xxxxx()
window.oversize = function(){
    xxxxx()
}

function xxxxx(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    div.width = pageWidth
    div.height = pageHeight
}


var content = div.getContext('2d');

var painting = false
var lastPoint = {x:undefined,y:undefined}
div.onmousedown = function(aa){
    var x = aa.clientX
    var y = aa.clientY
    if(usingEraser){
        painting = true    
        content.clearRect(x,y,10,10)
    }else{
        painting = true
        lastPoint = {"x":x,"y":y}
        console.log(lastPoint);
        
        
    }
}

div.onmousemove = function(aa){
    var x = aa.clientX
    var y = aa.clientY
    if(usingEraser){
        if(painting){
        content.clearRect(x-5,y-5,10,10)
        }
    }else{
        if(painting){
        
        var newPoint = {"x":x,"y":y}
        console.log(newPoint)
        
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint
        console.log(lastPoint)
        
        }
    }
}

div.onmouseup = function(aa){
    painting = false
   
}

function drawCircle(x,y,radius){
    content.beginPath()
    content.arc(x,y,radius,0,Math.PI*2);
    content.fill()
   
}

function drawLine(x1,y1,x2,y2){
    content.beginPath();
   
    content.moveTo(x1,y1)
    content.lineWidth = lineWidth
    content.lineTo(x2,y2)
    content.stroke()
    content.closePath()

}

var usingEraser = false
eraser.onclick = function(){
    usingEraser = true
    eraser.classList.add('active')
    brush.classList.remove('active')
}
brush.onclick = function(){
    usingEraser = false
    brush.classList.add('active')
    eraser.classList.remove('active')
}
red.onclick = function(){
    content.fillStyle = "red"
    content.strokeStyle = "red"
    red.classList.add('active')
    blue.classList.remove('active')
    yellow.classList.remove('active')
}
yellow.onclick = function(){
    content.fillStyle = "yellow"
    content.strokeStyle = "yellow"
    yellow.classList.add('active')
    blue.classList.remove('active')
    red.classList.remove('active')
}
blue.onclick = function(){
    content.fillStyle = "blue"
    content.strokeStyle = "blue"
    blue.classList.add('active')
    red.classList.remove('active')
    yellow.classList.remove('active')
}

thin.onclick = function(){
    lineWidth = 5
}
thick.onclick = function(){
    lineWidth = 15
}

clear.onclick = function(){
    content.clearRect(0,0,div.width,div.height);
}

download.onclick = function(){
    
    var url = div.toDataURL("imgage/png")
    console.log(url)
    var a  =document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = "世界名著"
    a.click()
    
}

if(document.body.ontouchstart !== undefined){

div.ontouchstart = function(aa){
    console.log('开始')
    var x = aa.touches[0].clientX
    var y = aa.touches[0].clientY
    if(usingEraser){
        painting = true    
        content.clearRect(x,y,10,10)
    }else{
        painting = true
        lastPoint = {"x":x,"y":y}
        console.log(lastPoint)
    }
}
   div.ontouchmove = function(aa){
    console.log('别摸我')
    var x = aa.touches[0].clientX
    var y = aa.touches[0].clientY
    if(usingEraser){
        if(painting){
        content.clearRect(x-5,y-5,10,10)
        }
    }else{
        if(painting){
        
        var newPoint = {"x":x,"y":y}
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint
        }
    }
}

div.ontouchend = function(aa){
    console.log('结束')
     painting = false
    } 
}

