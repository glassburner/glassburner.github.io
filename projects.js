const canvas = document.getElementById("background");

const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

window.addEventListener("resize",resize);

resize();

const fireflies=[];

for(let i=0;i<18;i++){

    fireflies.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*2+1.5,

        dx:(Math.random()-.5)*.15,

        dy:(Math.random()-.5)*.15,

        phase:Math.random()*Math.PI*2

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(const f of fireflies){

        f.x+=f.dx;

        f.y+=f.dy;

        f.phase+=0.015;

        if(f.x<0)f.x=canvas.width;
        if(f.x>canvas.width)f.x=0;

        if(f.y<0)f.y=canvas.height;
        if(f.y>canvas.height)f.y=0;

        const alpha=.15+.2*Math.sin(f.phase);

        ctx.beginPath();

        ctx.fillStyle=`rgba(245,203,92,${alpha})`;

        ctx.shadowBlur=15;

        ctx.shadowColor="rgba(245,203,92,.7)";

        ctx.arc(f.x,f.y,f.r,0,Math.PI*2);

        ctx.fill();

    }

    requestAnimationFrame(animate);

}

animate();

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.classList.add("show");

    }

    else{

        navbar.classList.remove("show");

    }

});

document.getElementById("learnMore").addEventListener("click",()=>{

    document.getElementById("about").scrollIntoView({

        behavior:"smooth"

    });

});

const copyButton = document.getElementById("copyEmail");

copyButton.addEventListener("click", async () => {

    try{

        await navigator.clipboard.writeText(
            document.getElementById("email").textContent.trim()
        );

        copyButton.textContent = "Copied!";

        setTimeout(() => {

            copyButton.textContent = "Copy";

        },1500);

    }

    catch{

        alert("Unable to copy email.");

    }

});
