
let name = document.querySelector('#stdname');
let email = document.querySelector('#stdmail');
let number = document.querySelector('#stdphone');
let image = document.querySelector('#stdimage');
let link = document.querySelector('#stdlink');
let html = document.querySelector('#skill');
let sex = document.querySelectorAll('.sex');
let lang = document.querySelectorAll('.lang');
let display_info = document.querySelector('.display-info');
let btn2 = document.querySelector('.btn2');
let input = document.querySelectorAll('input');
let ImageLink = document.querySelector('#imagelink');
let ImageFile = document.querySelector('#filelink');
var gender;
var techlang = "";

let enroll = document.querySelector('.btn1');


function show(){

    sex.forEach((e)=>{

        if(e.checked){
            gender = e.id
        }
    })

    lang.forEach((e)=>{

        if(e.checked){
            techlang+= e.id
            techlang+=" ";
        }
    })

let info_card = document.createElement('div');
info_card.classList.add('info-card');

info_card.innerHTML = `<div class="card-head">
<h3>Information</h3>
<h3>Image</h3>
</div>
<div class="card-bottom">
<div class="std-details">
    <h3>${name.value}</h3>
    <p>${gender}</p>
    <p>${email.value}</p>
    <p>${number.value}</p>
    <a href="${link.value}" target="_blank">Github Link</a>
    <p>${techlang}</p>
</div>
<div class="std-image">
    <img src="image/${ImageLink.value}" alt="">
</div>
</div>`
    
display_info.appendChild(info_card);

gender = "";
techlang = "";
}

console.log(input.length);
console.log(input);

enroll.addEventListener('click' , ()=>{
    
    let count = 0;
   
    for(let i = 0; i < input.length - 6 ; i++){

        if(input[i].value != ""){
           count++
        }
    }
    
    if((input[6].checked == true || input[7].checked == true || input[8].checked == true ) && (input[9].checked == true ||input[10].checked == true || input[11].checked == true)){
        count+=2;
       
    }

    console.log(count);
    if(count >= 7){

        show();
    }
    count = 0;
    clearData()
})



btn2.addEventListener('click' , ()=>{
   clearData();
})


function clearData(){
    input.forEach((e)=>{
        e.value = "";
        e.checked = false;
    })
}


ImageFile.addEventListener('change' , ()=>{

    let file = ImageFile.files[0];
    ImageLink.value = `${file.name}`;
})


ImageLink.addEventListener('click' , ()=>{

    ImageFile.click();
})