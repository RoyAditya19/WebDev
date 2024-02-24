burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>
{
    navList.classList.toggle('v-clas'); 
    navbar.classList.toggle('h-nav');
})

// animation thing
firstsec = document.querySelector(".first-section");

//welcome-animation
content1 = document.querySelector(".content1-container");
content2 = document.querySelector(".content2-container");

signup = document.querySelector('.signup')
login = document.querySelector('.login')
signup1 = document.getElementById('signup1')
login1 = document.getElementById('login1')

login1.addEventListener('click', ()=>
{
        // if(signup.style.display != 'none')
        // {

        //     login.classList.remove("login-hidden");
        //     signup.style.display = 'none';
        // }
        // else
        // {
        //     signup.style.display != 'none';
        // }
        firstsec.classList.add("signup-mode");
        login.classList.add("slide-left");
        content1.classList.add("hidden3");
        content2.classList.remove("hidden3");


        if(login.classList.contains("login-hidden"))
        {
            login.classList.add("login-visible");
            login.classList.remove("login-hidden");
            signup.classList.add("signup-hidden");
            signup.classList.remove("signup-visible");

        }
})

signup1.addEventListener('click', ()=>
{   
    firstsec.classList.remove("signup-mode");
    content1.classList.remove("hidden3");
    content2.classList.add("hidden3");

    if(signup.classList.contains("signup-hidden"))
    {
        signup.classList.add("signup-visible");
        signup.classList.remove("signup-hidden");
        login.classList.remove("login-visible");
        login.classList.add("login-hidden");
    }
})



