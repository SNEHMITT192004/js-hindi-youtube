// function changeText(event){
//     console.log(event)
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Hello Babbar";
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

// fpara.removeEventListener('click',changeText);

//writing function outside is best practice as removeEventListener
//want exactly same reference
//even if we write same function but it is not same 
//as it is different object

//CHANGING DEFAULT ACTION
// function changeDefault(event){
//     event.preventDefault();
//     anchorEle.textContent="Click Done";
// }

// let anchorEle=document.getElementById('fanchor');
// anchorEle.addEventListener('click',changeDefault);

//Adding event listeners to many
// console.log("hi");
// let paras=document.querySelectorAll('p');

// function alertPara(event){
//     alert("You clicked on:"+event.target.textContent);

// }
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     console.log("eventLis");
    
//     para.addEventListener('click',alertPara);
// }

// let mydiv=document.getElementById('wrapper');
// mydiv.addEventListener('click',alertPara);

//if added span and want specific alert when clicked on span
// function alertPara(event){
//     if(event.target.nodeName=='SPAN'){
//         alert("You clicked on para"+event.target.textContent);
//     }
// }