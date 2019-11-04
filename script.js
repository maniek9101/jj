//**behavior subject drop down list in section contact **
var ulDropDownList = document.querySelector('.form-left ul');
var lisDropDownList = document.querySelectorAll('.form-left ul li');

var inputForDropDownList = document.querySelector('.form-left input:nth-of-type(2)').addEventListener('click',(e)=>{
    //console.log('click in label - input');
    ulDropDownList.classList.toggle('drop-down-list');
    e.stopPropagation();
});

lisDropDownList.forEach(li => {
    li.addEventListener('click',()=>{
        ulDropDownList.classList.toggle('drop-down-list');
        var x = document.getElementById('subject');
        x.value = li.innerHTML;
        console.log(x);
    })
});


window.addEventListener('click',(event)=>{
    //ulDropDownList.classList.toggle('drop-down-list');
    console.log('click window');
    ulDropDownList.classList.remove('drop-down-list');
    //console.log('klikłem se: ', event.target);
    //if(event.target != inputForDropDownList)
    //{
    //    console.log('cos innego niz input');
    //}
    if(ulDropDownList.classList.contains('drop-down-list'))
    {
        console.log('zawiera!!');
        //ulDropDownList.classList.toggle('drop-down-list');
    }
    else{
        console.log('nie zawiera');
    }
});

//end
