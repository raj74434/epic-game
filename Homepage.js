let innerContainer=document.querySelector("#innerContainer")
innerContainer.style.width="1200px";
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
smallL.style.width="550px"
smallL.style.justifyContent="space-between"
smallNav.append(smallL)

let serach=document.createElement("input")
serach.style.borderRadius="20px";
serach.style.backgroundColor="#2a2a2a"
serach.style.color="white"
serach.style.width="250px"
serach.style.fontSize="18px"
serach.placeholder="Search Games"
serach.style.padding="20px"
smallL.append(serach)

let selet=document.createElement("Select")
selet.style.width="200px"
selet.style.color="white"
selet.style.lineHeight="0px"
selet.style.fontSize="18px"
selet.style.padding="0px 5px"
selet.style.backgroundColor="transparent"
let op1=document.createElement("option")
let op2=document.createElement("option")
let op3=document.createElement("option")

op1.innerText="Discover";
op1.style.backgroundColor="#2a2a2a"
op1.style.padding="20px"

op2.innerText="Browse";
op2.style.backgroundColor="#2a2a2a"
// op2.style.width="100px"

op3.innerText="News"
op3.style.backgroundColor="#2a2a2a"
// op3.style.width="100px"

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

//  ---------------------------------Trend games list----------------------

let Trend_list=document.querySelector("#Trend_list")



let slid1div=document.querySelector("#post1")
let slid2div=document.querySelector("#post2")
let slid3div=document.querySelector("#post3")
let slid4div=document.querySelector("#post4")

slider();
function slider(){

let slid1=document.querySelector("#post1>h4")
let slid2=document.querySelector("#post2>h4")
let slid3=document.querySelector("#post3>h4")
let slid4=document.querySelector("#post4>h4")

let slid1Img=document.querySelector("#post1>img")
let slid2Img=document.querySelector("#post2>img")
let slid3Img=document.querySelector("#post3>img")
let slid4Img=document.querySelector("#post4>img")

slid1.innerText=slideBase[0].name;
slid1Img.src=slideBase[0].img;

slid2.innerText=slideBase[1].name;
slid2Img.src=slideBase[1].img;

slid3.innerText=slideBase[2].name;
slid3Img.src=slideBase[2].img;

slid4.innerText=slideBase[3].name;
slid4Img.src=slideBase[3].img;

slid1div.append(slid1);

}


// ---------------------------Sliding games automatic------------------------------

let Trend_sliding=document.querySelector("#Trend_sliding");

let slidepost=document.createElement("img")

let imgposter=0;

let Anim=document.querySelector("#Anim")

// ===================================Sliding main part=========================
setInterval(function(){
    slidepost.innerHTML="";
    slidepost.src=slideBase[imgposter].img;

    if(imgposter==0){
        slid1div.style.backgroundColor="grey";
        slid2div.style.backgroundColor="transparent";
        slid3div.style.backgroundColor="transparent";
        slid4div.style.backgroundColor="transparent";
    }
    if(imgposter==1){
        slid1div.style.backgroundColor="transparent";
        slid2div.style.backgroundColor="grey";
        slid3div.style.backgroundColor="transparent";
        slid4div.style.backgroundColor="transparent";
    }
    if(imgposter==2){
        slid1div.style.backgroundColor="transparent";
        slid2div.style.backgroundColor="transparent";
        slid3div.style.backgroundColor="grey";
        slid4div.style.backgroundColor="transparent";
    }
    if(imgposter==3){
        slid1div.style.backgroundColor="transparent";
        slid2div.style.backgroundColor="transparent";
        slid3div.style.backgroundColor="transparent";
        slid4div.style.backgroundColor="grey";
    }

    slidepost.style.width="100%"
    slidepost.style.height="100%"
    slidepost.style.borderRadius="20px"
    imgposter++;
    if(imgposter==slideBase.length){imgposter=0}
Trend_sliding.append(slidepost);

if(imgposter==5){imgposter=0}


},3000);


let salesGameData=[
{
    img:"https://cdn1.epicgames.com/offer/975d251af0384c88a898a996bda4881d/EGS_PathfinderWrathoftheRighteousEnhancedEdition_OwlcatGames_S2_1200x1600-fc0129430d25f46c7faa5b4167488ca1?h=854&resize=1&w=640",
    name:"Pathfinder: Wrath of the Righteous - Enhanced",
    type:"BASE GAME",
    discount:"-60%",
    oldPrice:"2,449",
    newPrice:"979.60",

},
{
    img:"https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640",
    name:"Grand Theft Auto V: Premium Edition",
    type:"BASE GAME",
    discount:"-50%",
    oldPrice:"2,321",
    newPrice:"1160",
},
{
    img:"https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640",
    name:"Shadow of the Tomb Raider: Definitive Edition",
    type:"BASE GAME",
    discount:"-50%",
    oldPrice:"2,195",
    newPrice:"1,097.50",
},
{
    img:"https://cdn1.epicgames.com/catnip/offer/BL3Tall_1200x1440-1200x1440-c1200ae70b5e054025e296746d1987a8.jpg?h=854&resize=1&w=640",
    name:"Borderlands 3",
    type:"BASE GAME",
    discount:"-75%",
    oldPrice:"₹2,990",
    newPrice:"₹747.50",
},
{
    img:"https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InsurgencySandstormbasegame_NewWorldInteractive_Editions_S2_1200x1600-68b46ff62079d0f55889b09ced95e5f1?h=854&resize=1&w=640",
    name:"Insurgency: Sandstorm",
    type:"BASE GAME",
    discount:"-50%",
    oldPrice:"999",
    newPrice:"499.50",
},
// {
//     img:,
//     name:,
//     type:"BASE GAME",
//     discount:,
//     oldPrice:,
//     newPrice:,
// },
// {
//     img:,
//     name:,
//     type:"BASE GAME",
//     discount:,
//     oldPrice:,
//     newPrice:,
// },

];

let sale_list=document.querySelector("#sale_list")

salesGameData.forEach(function(el){

 let div= document.createElement("div")
 div.style.width="200px";
 div.style.height="500px";
 div.style.display="block";
 
 div.style.alignItems="end";

//  div.style.border="solid red";

 div.style.marginLeft="20px";


 let imgDiv=document.createElement("div");
 imgDiv.style.width="100%"
 imgDiv.style.height="360px"
//  imgDiv.style.border="solid green"
 let type=document.createElement("h6")
 type.innerText=el.type

 let tag=document.createElement("h4")
 tag.innerText=el.name

 let img=document.createElement("img")
 img.src=el.img;
 img.style.width="100%"
 img.style.height="230px"
 imgDiv.append(img,type,tag);



 let priceDiv=document.createElement("div")
 priceDiv.style.display="flex";
 priceDiv.style.justifyContent="space-between";
 priceDiv.style.alignItems="center";
//  priceDiv.style.border="solid yellow";


 

 let dicPercent=document.createElement("div")
 dicPercent.innerText=el.discount;
 dicPercent.style.padding="10px 20px";
 dicPercent.style.backgroundColor="#007aff"
 dicPercent.style.borderRadius="10px"

 let finalPrice=document.createElement("div")
 let  old=document.createElement("h5");
 old.innerText=el.oldPrice
 let  newP=document.createElement("h4");
 newP.innerText=el.newPrice

 finalPrice.append(old,newP);
 priceDiv.append(dicPercent,finalPrice)
 div.append(imgDiv,priceDiv)

 sale_list.append(div)

})

// ---------------------------================================Freee games============

let freeGamesdata=[
{img:"https://cdn1.epicgames.com/spt-assets/c4dde13fcdea4aaa84dabb303006a870/download-runbow-offer-6amjn.png?h=854&resize=1&w=640",
avil:"yes",
details:"Runbow"
},
{img:"https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheDroneRacingLeagueSimulator_TheDroneRacingLeague_S2_1200x1600-36e93298383163f825fc934da9003fb5?h=854&resize=1&w=640",
avail:"yes",
details:"The Drone Racing League®"
},

{
    img:"https://cdn1.epicgames.com/spt-assets/8f7e0537b57d4a14bdd11a3e719973a1/download-rising-hell-offer-17mu8.jpg?h=854&resize=1&w=640",
    avail:"No",
    details:"Rising Hell"
},
{img:"https://cdn1.epicgames.com/spt-assets/c314efd052d048908cbd57ce7bf9e28a/download-slain-offer-1xiyd.jpg?h=854&resize=1&w=640",
avail:"No",
details:"Slain: Back From Hell"
}
]


let freeGames=document.querySelector("#freeGames")
free();
function free(){
    freeGamesdata.forEach(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img")
        let div2=document.createElement("div")
        div2.style.textAlign="center";
        div2.innerText=el.avail

        let h4=document.createElement("h3")
        h4.innerText=el.details;

img.src=el.img;
div.append(img,h4);
freeGames.append(div);
    })

}

// ===================================================== Most popular games Section =========


let mostPopularGamesData=[
    {
        img:"https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640",
        type:"BASE GAME",
        name:"Grand Theft Auto V: Premium Edition",
        discount:"50%",
        old:"2321",
        new:"1160"
    },
    {
        img:"https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/VALportrait_1200x1600-74261a10f40a6a5015f069ddb7aa910c?h=854&resize=1&w=640",
        type:"BASE GAME",
        name:"VALORANT",
        discount:"100",
        old:"",
        new:""
    },
    {
        img:"https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg?h=854&resize=1&w=640",
        type:"BASE GAME",
        name:"ARK: Survival Evolved",
        discount:"0",
        old:"469",
        new:""
    },
    {
        img:"https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-88f4e1f1ee1ffa8f7a85bf4e3a492e7e?h=854&resize=1&w=640",
        type:"BASE GAME",
        name:"NARAKA: BLADEPOINT",
        discount:"50%",
        old:"1199",
        new:"599"
    },
    {
        img:"https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640",
        type:"BASE GAME",
        name:"Shadow of the Tomb Raider: Definitive Edition",
        discount:"0",
        old:"2195",
        new:""
    }
    ]
    


let mostPopularGames=document.querySelector("#mostPopularGames");
popularGames();

function popularGames(){
    mostPopularGamesData.forEach(function(el){
        let div=document.createElement("div")
        div.style.padding="15px"
        let img=document.createElement("img")
        img.src=el.img;
        let h6=document.createElement("h6")
        h6.innerText=el.type
        let name=document.createElement("h4")
        name=el.name
        div.append(img,h6,name);

        let divPrice=document.createElement("div")
        divPrice.style.display="flex";
        divPrice.style.justifyContent="space-between";
        divPrice.style.alignItems="center";
       
        if(el.discount==100){
         let h3=document.createElement("h2")
         h3.innerText="Free"
         divPrice.append(h3) 
         div.append(divPrice)
        }
        else if(el.discount==0){
            let h3=document.createElement("h2")
            h3.innerText=el.old
            divPrice.append(h3)
            div.append(divPrice)
        }
        else{
            let discountDiv=document.createElement("div")
            discountDiv.style.backgroundColor="#007aff"
            discountDiv.style.fontSize="15px"
            discountDiv.style.height="20px"
            discountDiv.style.padding="5px 25px"
            discountDiv.style.borderRadius="10px"
           

            discountDiv.innerText=el.discount;
            let pric=document.createElement("div")
            
            let old=document.createElement("h4")
            old.innerText=el.old
            let newP=document.createElement("h2")
            newP.innerText=el.new
            pric.append(old,newP)
            divPrice.append(discountDiv,pric)
            div.append(divPrice)
        }

        mostPopularGames.append(div)
    })

}
