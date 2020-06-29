
var red = 0,
    green = 0,
    blue = 0;

var lineWeigth = 5;

var figure = 1;


window.onload = function(){

    var canvas = document.getElementById("canvas"), 
    context = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;
        
    var mouse = { x:0, y:0};
    var draw = false;

    
    
    // Event MouseDown    
    canvas.addEventListener("mousedown", function(e){
        context.lineWidth = lineWeigth;
        context.strokeStyle = "rgb(" + red + "," + green + "," + blue + ")";
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(figure == 1) // curve
        {

            draw = true;
            context.beginPath();
            context.moveTo(mouse.x, mouse.y);
        }   
        else if(figure == 2)
        {
           
        } 
        else if(figure == 3) // circle
        {
            
        }   
    });

    // Event MouseMove  
    canvas.addEventListener("mousemove", function(e){
        if(figure == 1) // curve
        {
            if(draw==true)
            {
                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
                context.lineTo(mouse.x, mouse.y);
                context.stroke();      
            }
        }
    });


    // Event MouseUp  
    canvas.addEventListener("mouseup", function(e){ 
        if(figure == 1) // curve
        {  
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
            context.closePath();
            draw = false;
        
        }
        else if(figure == 2)
        {
            context.beginPath();
            context.moveTo(mouse.x, mouse.y);
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            context.stroke();
            context.closePath();
        } 
        else if(figure == 3) // circle
        {
            context.beginPath();
            context.arc((e.pageX - this.offsetLeft), (e.pageY - this.offsetTop), (e.pageX - this.offsetLeft)-mouse.x, 0, (Math.PI / 180) * 360);
            context.stroke();
            context.closePath();
        } 
        else if(figure == 4) // rectangle
        {
            context.beginPath();
            context.rect(mouse.x, mouse.y, (e.pageX - this.offsetLeft)-mouse.x, (e.pageY - this.offsetTop)-mouse.y);
            context.stroke();
            context.closePath();
        }
        else if(figure == 5) // triangle
        {
            context.beginPath();

            context.moveTo(mouse.x, mouse.y);
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);

            context.moveTo(mouse.x, mouse.y);
            context.lineTo(mouse.x, e.pageY - this.offsetTop);

            context.moveTo(mouse.x, e.pageY - this.offsetTop);
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            
            context.stroke();
            context.closePath();
        }
        else if(figure == 6) // triangle #2
        {
            context.beginPath();

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, mouse.y);
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, mouse.y);
            context.lineTo(mouse.x, e.pageY - this.offsetTop);

            context.moveTo(mouse.x, e.pageY - this.offsetTop);
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            
            context.stroke();
            context.closePath();
        }
        else if(figure == 7) // triangle #2
        {
            context.beginPath();

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, mouse.y);
            context.lineTo((e.pageX - this.offsetLeft), (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, mouse.y);
            context.lineTo(mouse.x, (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, e.pageY - this.offsetTop);
            context.lineTo((e.pageX - this.offsetLeft), (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, e.pageY - this.offsetTop);
            context.lineTo(mouse.x, (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);

            context.stroke();
            context.closePath();
        }
        else if(figure == 8) // up-arrow
        {
            context.beginPath();

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, mouse.y);
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);

            context.moveTo(mouse.x +((e.pageX - this.offsetLeft)-mouse.x)/2, mouse.y);
            context.lineTo(mouse.x, e.pageY - this.offsetTop);

            context.stroke();
            context.closePath();
        }
        else if(figure == 9) // next arrow
        {
            context.beginPath();

            context.moveTo(mouse.x, mouse.y);
            context.lineTo((e.pageX - this.offsetLeft), (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);

            context.lineTo((e.pageX - this.offsetLeft), (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);
            context.lineTo(mouse.x, (e.pageY - this.offsetTop));

            context.stroke();
            context.closePath();
        }
        else if(figure == 10) // triangle #2
        {
            context.beginPath();

            context.moveTo(e.pageX - this.offsetLeft, mouse.y);
            context.lineTo(mouse.x, (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);

            context.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            context.lineTo(mouse.x, (e.pageY - this.offsetTop)-((e.pageY - this.offsetTop)-mouse.y)/2);

            context.stroke();
            context.closePath();
        }
        });
}

// Set current color
function SetColor(red, green, blue){   
    this.red = red;
    this.green = green;
    this.blue = blue;
    document.getElementById("current__color__block").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

// Set Weigth
function SetWeigth(weigth){
    lineWeigth = weigth;
    document.getElementById("thickness_size_custom").value = weigth;
}

// SetCustomWeigth
function SetCustomWeigth(){
    if(document.getElementById("thickness_size_custom").value <=5)
        lineWeigth = 1;
    else
        lineWeigth = document.getElementById("thickness_size_custom").value;
}

// Set Custom Pen
function SetFigure(number){
    figure = number;
}