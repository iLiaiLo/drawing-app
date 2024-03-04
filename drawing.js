    const cl=document.getElementById("clear");
    const color=document.getElementById("color");
    const range=document.getElementById("range");
    const fillcolor=document.getElementById("fill");
    const canvas=document.getElementById("canva");
    const eraser=document.getElementById("eraser");
    ctx=canvas.getContext("2d",{willReadFrequently:"true"});
    tools=document.querySelectorAll(".item");
    let isdrawing=false;
    let selectedtool="brush";
    let prevmouseX,prevmouseY,snapshot;
    range.value=1;
    
    var active=false;
    fillcolor.addEventListener("click",()=>{
        active=!active;
    })
    window.addEventListener("load",()=>{
        canvas.width=canvas.offsetWidth;
        canvas.height=canvas.offsetHeight;
    })//aq davayeneT kamvas offsetX da offsetHeigth mnishvnelobebi nacvlad mTliani fanjrisa.

    const drawrect=(e)=>{
        if(active==false){
            return ctx.strokeRect(e.offsetX,e.offsetY,prevmouseX-e.offsetX,prevmouseY-e.offsetY);

        }
        ctx.fillRect(e.offsetX,e.offsetY,prevmouseX-e.offsetX,prevmouseY-e.offsetY);

    }
    const drawtreeangle=(e)=>{
        ctx.beginPath();
        ctx.moveTo(prevmouseX,prevmouseY);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.lineTo(prevmouseX*2-e.offsetX,e.offsetY);
        ctx.closePath()
        active==true ? ctx.fill() : ctx.stroke();
    }
    

    const drawcircle=(e)=>{
        ctx.beginPath()
        const radius=Math.sqrt((prevmouseX-e.offsetX)**2 + (prevmouseY-e.offsetY)**2)
        ctx.arc(prevmouseX,prevmouseY,radius,0,Math.PI*2);
        active==true? ctx.fill() : ctx.stroke();
    }
    const drawline=(e)=>{
        ctx.beginPath();
        ctx.moveTo(prevmouseX,prevmouseY);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke()
    }
    const start_drawing=(e)=>{
        isdrawing=true;
        prevmouseX=e.offsetX;
        prevmouseY=e.offsetY;
        ctx.beginPath();
        
        ctx.lineWidth=range.value;
        ctx.strokeStyle=color.value;
        ctx.fillStyle=color.value;
        

        snapshot=ctx.getImageData(0,0,canvas.width,canvas.height)

    }
    const drawing=(e)=>{
        if(!isdrawing){
            return;
        }
        ctx.putImageData(snapshot,0,0);
        if(selectedtool=="brush" || selectedtool=="eraser"){
            ctx.strokeStyle=selectedtool =="eraser" ? "#fff":color.value ;
            ctx.lineTo(e.offsetX,e.offsetY);
            ctx.stroke();
        }
        else if(selectedtool=="rectangle"){
            drawrect(e)
        }
        else if(selectedtool=="circle"){
            drawcircle(e)
        }
        else if(selectedtool=="treeangle"){
            drawtreeangle(e)
        }
       else if(selectedtool=="line"){
            drawline(e)
       }
    
      
    }

    tools.forEach(btn => {
        btn.addEventListener("click",()=>{
            
            selectedtool=btn.id
            console.log(selectedtool)
            canvas.style.cursor="crosshair"

        })
    });
    eraser.addEventListener("click",()=>{
        selectedtool=eraser.id;
        console.log(selectedtool);
       canvas.style.cursor="url('eraser.png') 15 15"
    })
  
   

  


    cl.addEventListener("click",()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height)
    })
    canvas.addEventListener("mousedown",start_drawing)
    canvas.addEventListener("mousemove",drawing)
    window.addEventListener("mouseup",()=>isdrawing=false)