let innerContainer=document.querySelector("#innerContainer")
innerContainer.style.width="80%";
innerContainer.style.margin="Auto"
innerContainer.style.border="solid";




let nav=document.getElementById("navbar");



// Nav Bar left side

let lef=document.createElement("div");
lef.setAttribute("id","leftNav");
lef.style.width="500px"
lef.style.textAlign="center"
lef.style.border="solid white"

let lefImg=document.createElement("div");
lefImg.setAttribute("id","icon")
let img=document.createElement("img");
img.style.width="100%";
img.style.height="100%";
img.style.backgroundColor="white";
img.src="https://img.icons8.com/ios/452/epic-games.png";
lefImg.append(img);


let lefWord1=document.createElement("div");
let h1=document.createElement("h3");
h1.innerText="STORE";
lefWord1.append(h1);
lefWord1.style.padding="10px"


let lefWord2=document.createElement("div");
let h2=document.createElement("h3");
h2.innerText="FAQ";
lefWord2.append(h2);
lefWord2.style.padding="10px"

let lefWord3=document.createElement("div");
let h3=document.createElement("h3");
h3.innerText="HELP";
lefWord3.append(h3);
lefWord3.style.padding="10px"

let lefWord4=document.createElement("div");
let h4=document.createElement("h3");
h4.innerText="UNREAL ENGINE";
lefWord4.append(h4);
lefWord4.style.padding="10px"


lef.append(lefImg,lefWord1,lefWord2,lefWord3,lefWord4)
nav.append(lef)


// Nav Bar Right side

let rig=document.createElement("div")
rig.setAttribute("id","rignavv")
rig.style.display="flex";
rig.style.border="solid white"
rig.style.width="400px"

let rigWord1=document.createElement("div");
let rigImg=document.createElement("img");
rigImg.src="https://www.svgrepo.com/show/157840/network.svg";
rigImg.style.height="100%";
rigImg.style.width="100%";
rigWord1.append(rigImg)

let rigWord2=document.createElement("div")
let righ1=document.createElement("h4")
righ1.innerText="USER";  
righ1.style.padding="15px"
rigWord2.append (righ1)                        //Userr Name

let rigWord3=document.createElement("div")
let righ2=document.createElement("h4")
righ2.innerText="DOWNLOAD";  
righ2.style.backgroundColor="Skyblue";
righ2.style.padding="15px"

rigWord3.append (righ2) 

rig.append(rigWord1,rigWord2,rigWord3)

nav.append(rig)

// ----------------------------------------------------------------------------------------

// Small nav 

let smallNav=document.querySelector("#smallNav")
smallNav.style.display="flex";
smallNav.style.height="50px"
smallNav.style.padding="20px"

smallNav.style.justifyContent="space-between"
smallNav.style.backgroundColor="#121212"

// ----------------------------------------------------------------------------------------
let smallL=document.createElement("div") ;  // Small navbar left part;
smallL.style.display="flex";
smallL.style.width="350px"
smallL.style.justifyContent="space-between"
smallNav.append(smallL)

let serach=document.createElement("input")
serach.style.borderRadius="20px";
serach.style.backgroundColor="#2a2a2a"
serach.style.color="white"
serach.style.width="150px"
serach.style.fontSize="18px"
serach.placeholder="Search Games"
serach.style.padding="20px"
smallL.append(serach)

let selet=document.createElement("Select")
selet.style.color="white"
selet.style.lineHeight="0px"
selet.style.fontSize="18px"
selet.style.padding="0px 5px"
selet.style.backgroundColor="transparent"
let op1=document.createElement("option")
let op2=document.createElement("option")
let op3=document.createElement("option")

op1.innerText="Discover";

op2.innerText="Browse";
op3.innerText="News"

selet.append(op1,op2,op3)
smallL.append(selet)

// --------------------------------------------------------------------------------------
let smallR=document.createElement("div")  //Small navbar right part
smallR.style.display="flex"
smallR.style.width="300px"
smallR.style.justifyContent="space-evenly"
smallNav.append(smallR)


let wish=document.createElement("div")  // wish list secrion
wish.style.border="solid"

let wishh1=document.createElement("h3")
wishh1.style.color="grey"
wishh1.innerText="Wishlist"
wish.append(wishh1)



let cart=document.createElement("div")  // Cart section
cart.style.display="flex"
cart.style.width="100px"
cart.style.justifyContent="space-between"
let carth1=document.createElement("h3")
carth1.innerText="Cart"
carth1.style.color="grey"
cart.append(carth1)
cart.style.textAlign="center";
cart.style.border="solid";


let count=document.createElement("div")
count.style.backgroundColor="white"
count.style.borderRadius="20px"
count.style.padding="0px 20px"

let counth1=document.createElement("h3")
counth1.innerText="1"
counth1.style.borderRadius="20px"

count.append(counth1)
cart.append(count)


smallR.append(wish,cart)

// ......................Automatic sliding poster


let slideBase=[{img:"https://cdn2.unrealengine.com/egs-fifa23ultimateeditionlimitedtimebonus-eacanada-editions-s1-2560x1440-c6f883262ed6.jpg?h=480&amp;resize=1&amp;w=854" ,
name:"FIFA 23 Ultimate Edition",
},
{
img:"https://cdn2.unrealengine.com/egs-railgrade-carousel-desktop-1280x702-35df53cf42ca.jpg?h=1080&resize=1&w=1920" ,
name:"RAILGRADE" ,
},
{img:"https://cdn2.unrealengine.com/egs-slime-rancher-2-carousel-desktop-1248x702-03a65cfb74df.jpg?h=1080&resize=1&w=1920",
name:"Slime Rancher 2"
},
{img:"https://cdn2.unrealengine.com/egs-fn-sypher-pk-carousel-desktop-1248x702-47058e4c9f1b.jpg?h=1080&resize=1&w=1920" ,
name:"Fortnite"

},

]

let Trend_sliding=document.querySelector("#Trend_sliding");

let slidepost=document.createElement("img")

let imgposter=0;

setTimeout(function(){
    slidepost.innerHTML="";
    slidepost.src=slideBase[imgposter].img;
    slidepost.style.width="100%"
    slidepost.style.height="100%"
Trend_sliding.append(slidepost);
imgposter++;
// if(imgposter==5){imgposter=0}


},2000);

 





