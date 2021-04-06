var i = 0;

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function read(){
    if(!i){
        document.getElementById("more").style.
        display ="inline";
        document.getElementById("dots").style.
        display ="none";
        document.getElementById("read").innerHTML="Read Less";
        i = 1;
    }
    else {
        document.getElementById("more").style.
        display ="none";
        document.getElementById("dots").style.
        display ="inline";
        document.getElementById("read").innerHTML="Read More";
        i = 0;
    }
}