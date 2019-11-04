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

const headerNavMobile = document.querySelector('.header-nav .header-nav-mobile');
        const btnMobile = document.querySelector('.header-nav .header-nav-mobile button');
        const nav = document.querySelector('nav')
        const navUlLanguage = document.querySelector('nav ul li ul');
        //navigacja !!
        var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        x=w.innerWidth||e.clientWidth||g.clientWidth,
        y=w.innerHeight||e.clientHeight||g.clientHeight;
        console.log('width: ',x,' height: ',y);
        if(x <= 768)
        {
            //console.log('mobile verion');
            headerNavMobile.setAttribute('id','fix-nav-mobile');
            btnMobile.addEventListener('click',(e)=>{
                //console.log('click mobile btn');
                e.stopPropagation();
                if(nav.getAttribute('id')=='active-nav')
                {
                    nav.setAttribute('id','');
                }
                else
                {
                    nav.setAttribute('id','active-nav');
                }
                
            });
            window.addEventListener('click',()=>{
                nav.setAttribute('id','');
            });
            /*document.querySelector('nav ul li:nth-of-type(6)').addEventListener('click',(e)=>{
                e.stopPropagation();
            });*/
        }
        //end navigacja !!

        //fix nav while scroll//
        let navToTop ,imgInNavToTop;

        window.onload = function()
        {
            navToTop = document.querySelector('nav').offsetTop;
            imgInNavToTop = document.querySelector('nav img').offsetTop;
            console.log('nav to top: ',navToTop);
        }
        
        function fixNav() {            
            
            if(x > 768) //more then mobile 
            {
                if(localStorage.getItem('cookie')=='true')
                {
                    //nie ma cookies info 
                    //console.log('YOU ARE IN TRUE COOKIE');
                    if(window.scrollY > 0)
                    {
                        nav.setAttribute('id','fix-nav');
                    }
                    else
                    {
                        nav.setAttribute('id','');
                    }
                }
                else
                {
                    if (window.scrollY >= navToTop) {
                        //fix
                        //nav.classList.add('fix-nav');
                        //ul.style.paddingTop = 0;
                        nav.setAttribute('id','fix-nav');
                        //console.log('fixed');
                    } else {
                        //nav.classList.remove('fix-nav');
                        nav.setAttribute('id','');
                        //ul.style.paddingTop = '2vh';
                        //console.log('NOOO fixed');
                    }
                }
            }
        }

        window.addEventListener('scroll', fixNav);
        //end fix nav while scroll//
