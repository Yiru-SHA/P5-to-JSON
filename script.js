window.addEventListener('load',function(){

    let dataURL = "http://api.open-notify.org/astros.json";
    fetch(dataURL)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            console.log("I found it");
            Astdata=data;
        })
});

/*-------------p5-----------*/
let Astdata;

function setup(){
        createCanvas(400, 400);
        background('blue');
    }

function draw(){
    if(Astdata){
        for(let i=0; i<Astdata.number;i++){
            ellipse(100+(i*100),300,30);
            
        }
    }else{
    console.log("Not Ready");
    }
}