var cross = document.querySelector('.cookies-info span');
var cookies = document.querySelector('.cookies-info');
var navigatione = document.querySelector('header .header-nav nav');

if(localStorage.getItem('cookie')=='true')
{
    cookies.style.display = 'none';
}
else
{
    cookies.style.visibility = 'visible';
}

document.addEventListener('DOMContentLoaded',()=>{
    cross.addEventListener('click',()=>{
        cookies.style.display = 'none';
        //cookies.style.transform = 'translateY(-100%)';
        //nav.style.transform = 'translateY(-100%)';
        //setTimeout(function(){
        //    cookies.style.display = 'none';
        //},500);
        //nav.setAttribute('id','');
        localStorage.setItem('cookie','true');
        //console.log('nav to top: ' ,navToTop);
        //console.log('window Y: ' ,window.scrollY);
        //console.log('local storage: ',localStorage.getItem('cookie'));
    });
});