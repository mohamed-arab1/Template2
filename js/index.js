// do check on localStorage is not empty
let mainColor = localStorage.getItem("color-option");

if(mainColor !== null){

    //get main color by local storage
    document.documentElement.style.setProperty("--main-color", mainColor );

    // change active class on colors elements 
    document.querySelectorAll(".list-color li").forEach(el => {
        // remove all active class on all elments
        el.classList.remove("active");

        if(el.dataset.color === mainColor){
            // add class active on this elment
            el.classList.add("active");
        }

    })
}


// edit to setting-box

// access on elements
let selecetBox = document.querySelector(".toggle-setting "),
    selectIcon = document.querySelector(".toggle-setting .fa-cogs"),
    selectSttingBox = document.querySelector(".setting-box");

// function on  setting box to spin icon and open setting box
selecetBox.addEventListener (("click"),  _ =>{

    // add class to spin icon
    selectIcon.classList.toggle("fa-spin");

    // add class to open setting box
    selectSttingBox.classList.toggle("open");

});
// choose a color
let colorlist = document.querySelectorAll(".list-color li");
colorlist.forEach(li =>{
    li.addEventListener("click",(e) =>{

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        // set color in local storage
        localStorage.setItem("color-option", e.target.dataset.color);

        // remove the class active on all elements
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active");
        })
        
        // add class active in one elemrnt
        e.target.classList.add("active");

    })
})

// add active to random-background buttoms
let backgroundOption = true,
backgroundInrvel;

// set logalStorage for random background
let backgroundStorage = localStorage.getItem("background_option");

if(backgroundStorage !== null){

    if(backgroundStorage === "true"){

        backgroundOption = true;

    }else{
        backgroundOption =false;
    }
document.querySelectorAll(".random-background span").forEach(el =>{
    el.classList.remove("active");
})

    if(backgroundStorage === "true"){
        document.querySelector(".random-background .yes").classList.add("active");
    }else{
        document.querySelector(".random-background .no").classList.add("active");
    }

}

// access on the all elments
let randomBackground = document.querySelectorAll(".random-background span");

randomBackground.forEach(span => {

    span.addEventListener(("click"), (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach(el => {

            el.classList.remove("active");

        })

        e.target.classList.add("active");


        if(e.target.dataset.background === "yes"){

            backgroundOption = true;

            handelPhoto();

            localStorage.setItem("background_option",true);

        }else{

            backgroundOption = false;

            clearInterval(backgroundInrvel);

            localStorage.setItem("background_option",false);

        }

    })
});

//get landing page element
let  landingPage = document.querySelector('.landing-page');

// get all photo in array
let allPhoto = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg", "p7.jpg"];

// function to repet photo 
function handelPhoto(){

if(backgroundOption === true){

    backgroundInrvel = setInterval(() => {
        //get random number
        let randomNumber = Math.floor(Math.random() * allPhoto.length);

        // change photo about baground style
        landingPage.style.backgroundImage = `url(photo/${allPhoto[randomNumber]})`;

        },7000);
}

}

handelPhoto();

// handel skill section

// select the skill section

let ourskills = document.querySelector(".our-skills");

// // handel functionlty

window.onscroll = function(){

    // skills offset top
    let skilsoffset = ourskills.offsetTop;

    // skills outer height
    let skillsOuterHeight = ourskills.offsetHeight;

    //window height
    let windowHeight = this.innerHeight;

    //window scrollTop
    let windowScrolltop = this.pageYOffset;

    if(windowScrolltop > (skilsoffset + skillsOuterHeight - windowScrolltop)){

        let allskills = document.querySelectorAll(".skills-box .skill-progress span");

        allskills.forEach(skill =>{

            skill.style.width = skill.dataset.width;

        });
    }   
}

// select all img elemnts
let allimg = document.querySelectorAll(".img-box-gallery img");

// make loop on all images 

allimg.forEach(el => {

    el.addEventListener("click", () =>{

        // create overlay Element
        let overlay = document.createElement("div");

        //add className on overlay element
        overlay.className = "overlay-popup";

        // append overlay to the body
        document.body.appendChild(overlay);

        //create popup Element
        let popup_box = document.createElement("div");

        // add class on popup box
        popup_box.className = "popup-box";

        if(el.alt !== null){
                    //add text to popup box
        let text_popup_el = document.createElement("h3");

        text_popup_el.className = "text-popup";

        // create the text
        let text_popup = document.createTextNode(el.alt);

        text_popup_el.appendChild(text_popup),
        popup_box.appendChild(text_popup_el);
        }

        // create image Element
        let image_popup = document.createElement("img");

        // add src to image popup box
        image_popup.src = el.src;

        // add image_popup to overlay
        document.body.appendChild(popup_box)

        // add img to image_popup
        popup_box.appendChild(image_popup);

        //add close button
        let close_popup = document.createElement("span");

        close_popup.className = "close-popup";

        // add x to close popup
        let close_button = document.createTextNode("x");

        close_popup.appendChild(close_button);

        popup_box.appendChild(close_popup);

    });
});

document.addEventListener("click", (e) => {

    if(e.target.className === "close-popup"){

        e.target.parentNode.remove();

        document.querySelector(".overlay-popup").remove();
    }

});

// handel bullets 

// select all elements 
// let allbulltes = document.querySelectorAll(".nav-bullets .bullets");

// allbulltes.forEach(bullte => {

//     bullte.addEventListener("click", (e) =>{

//         let theSection = e.target.dataset.section;

//         let theQueryElment = document.querySelector(`.${theSection}`);

//         theQueryElment.scrollIntoView({

//             behavior : 'smooth'

//         })
//     })
// })

function handelBullets(allElements){
    let allbulltes = document.querySelectorAll(allElements);

allbulltes.forEach(bullte => {

    bullte.addEventListener("click", (e) =>{

        e.preventDefault();

        let theSection = e.target.dataset.section;

        let theQueryElment = document.querySelector(`.${theSection}`);

        theQueryElment.scrollIntoView({

            behavior : 'smooth'

        })
    })
})
}
handelBullets(".nav-bullets .bullets");
handelBullets(".links li a");

// remove all bulltes
let allbuttounsbul = document.querySelectorAll(".option-bulltes span");
let bulltesStorage = localStorage.getItem("bulltes");

if(bulltesStorage !== null){

    allbuttounsbul.forEach(e =>{
        e.classList.remove("active");
    })

    if(bulltesStorage === "yes"){

        document.querySelector(".nav-bullets").style.display = "none";

        document.querySelector(".option-bulltes .yes").classList.add("active");
    }else{

        document.querySelector(".nav-bullets").style.display = "block";

        document.querySelector(".option-bulltes .no").classList.add("active");
    }
}



allbuttounsbul.forEach(but =>{
    but.addEventListener("click", (e) =>{

        e.target.parentElement.querySelectorAll(".active").forEach(el => {

            el.classList.remove("active");

        })

        e.target.classList.add("active");

        if(e.target.dataset.bulltes == "yes"){

            document.querySelector(".nav-bullets").style.display = "none";

            localStorage.setItem("bulltes", e.target.dataset.bulltes);

        }else{

            document.querySelector(".nav-bullets").style.display = "block";

            localStorage.setItem("bulltes", e.target.dataset.bulltes);
        }
    })
})

// reset all option 

let resetButton = document.querySelector(".reset-options");

resetButton.addEventListener("click", () => {

    // use localstorage.clear becuse localstorage don`t have athor thing 
    localStorage.clear();

    window.location.reload();
});

// toggle menu
let toggleMenu = document.querySelector(".toggle-menu");
let theLinksToggle = document.querySelector(".header-area .links");

toggleMenu.addEventListener("click", (e) =>{

    e.stopPropagation();

    toggleMenu.classList.toggle("menu-active");

    theLinksToggle.classList.toggle("open");

});

document.addEventListener("click", (e)=> {

    if(e.target !== toggleMenu && e.target !== theLinksToggle){

        if(theLinksToggle.classList.contains("open")){

            theLinksToggle.classList.remove("open");

            toggleMenu.classList.remove("menu-active");

        }

    }
});

theLinksToggle.addEventListener("click", e => {

    e.stopPropagation();

})