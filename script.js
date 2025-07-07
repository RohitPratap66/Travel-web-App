<<<<<<< HEAD
let card1 = document.getElementById("s2-card-box1");
let card2 = document.getElementById("s2-card-box2");
let card3 = document.getElementById("s2-card-box3");
let card4 = document.getElementById("s2-card-box4");


function cardDetails(element, callback1, callback2, callback3) {

    element.addEventListener("mouseenter", () => {
        if (element == card1) {
            card1.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card1-img").classList.add("new-styles-img-card1");
            document.querySelector(".sub-b1-head").classList.add("new-heding-styles-card1");
            document.querySelector(".content-b1").classList.add("new-content-styles-card1");
            document.querySelector(".sub-b1-head").innerHTML = "Precise Weather Report";
            callback1();
            document.querySelector(".weather").classList.add("cardsBtn", 'animateBtn');
            callback3();

        } else if (element == card2) {
            card2.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card2-img").classList.add("new-styles-img-card2");
            document.querySelector(".sub-b2-head").classList.add("new-heding-styles-card2");
            document.querySelector(".content-b2").classList.add("new-content-styles-card2");
            document.querySelector(".sub-b2-head").innerHTML = " Find the Best Flights for Your Budget"
            callback1();
            document.querySelector(".Flight").classList.add("cardsBtn", 'animateBtn');
            callback3();
        }
        else if (element == card3) {
            card3.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card3-img").classList.add("new-styles-img-card3");
            document.querySelector(".sub-b3-head").classList.add("new-heding-styles-card3");
            document.querySelector(".content-b3").classList.add("new-content-styles-card3");
            document.querySelector(".sub-b3-head").innerHTML = " Discover Exciting Local Events"
            callback1();
            document.querySelector(".events").classList.add("cardsBtn", 'animateBtn');
            callback3();
        }
        else if (element == card4) {
            card4.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card4-img").classList.add("new-styles-img-card4");
            document.querySelector(".sub-b4-head").classList.add("new-heding-styles-card4");
            document.querySelector(".content-b4").classList.add("new-content-styles-card4");
            document.querySelector(".sub-b4-head").innerHTML = "Create Your Dream Trip with Customization"
            callback1();
        }
    })

    element.addEventListener("mouseleave", () => {

        if (element == card1) {
            card1.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card1-img").classList.remove("new-styles-img-card1");
            document.querySelector(".sub-b1-head").classList.remove("new-heding-styles-card1");
            document.querySelector(".content-b1").classList.remove("new-content-styles-card1");
            document.querySelector(".sub-b1-head").innerHTML = "Calculated Weather"
            callback2();
        } else if (element == card2) {
            card2.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card2-img").classList.remove("new-styles-img-card2");
            document.querySelector(".sub-b2-head").classList.remove("new-heding-styles-card2");
            document.querySelector(".content-b2").classList.remove("new-content-styles-card2");
            document.querySelector(".sub-b2-head").innerHTML = "Best Flights"
            callback2();
        }
        else if (element == card3) {
            card3.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card3-img").classList.remove("new-styles-img-card3");
            document.querySelector(".sub-b3-head").classList.remove("new-heding-styles-card3");
            document.querySelector(".content-b3").classList.remove("new-content-styles-card3");
            document.querySelector(".sub-b3-head").innerHTML = "Local Events"
            callback2();
        }
        else if (element == card4) {
            card4.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card4-img").classList.remove("new-styles-img-card4");
            document.querySelector(".sub-b4-head").classList.remove("new-heding-styles-card4");
            document.querySelector(".content-b4").classList.remove("new-content-styles-card4");
            document.querySelector(".sub-b4-head").innerHTML = "Customization"
            callback2();
        }
    })
}

cardDetails(card1, () => addBtn(card1), () => removeBtn(card1), AniBtn);
cardDetails(card2, () => addBtn(card2), () => removeBtn(card2), AniBtn);
cardDetails(card3, () => addBtn(card3), () => removeBtn(card3), AniBtn);
cardDetails(card4, () => addBtn(card4), () => removeBtn(card4));

function addBtn(card) {
    if (card.classList.contains("box1")) {
        let card1Btn = document.createElement("button");
        card1Btn.setAttribute('class', 'weather');
        card1Btn.id = 'weatherID';
        card1Btn.innerText = "Check Weather";
        document.querySelector(".box1").insertAdjacentElement("beforeend", card1Btn);
        Wopener()
    }
    if (card.classList.contains("box2")) {
        let card2Btn = document.createElement("button");
        card2Btn.setAttribute('class', 'Flight');
        card2Btn.innerText = 'Find Flights';
        document.querySelector(".box2").insertAdjacentElement('beforeend', card2Btn);
    }
    if (card.classList.contains("box3")) {
        let card3Btn = document.createElement("button");
        card3Btn.setAttribute('class', 'events');
        card3Btn.innerText = 'Explore Events';
        document.querySelector(".box3").insertAdjacentElement('beforeend', card3Btn);
    }
    // if (card.classList.contains("box4")) {
    //     let card4Btn = document.createElement("button");
    //     card4Btn.setAttribute('class', 'custom');
    //     card4Btn.innerText = "Customize"
    //     document.querySelector(".box4").insertAdjacentElement('beforeend', card4Btn);
    // }
}

function removeBtn(cards) {
    if (cards.classList.contains("box1")) {
        let weatherBtn = cards.querySelector(".weather");
        if (weatherBtn) {
            weatherBtn.remove();
            console.log("Weather btn removed");
        }
    }
    if (cards.classList.contains("box2")) {
        let flightBtn = cards.querySelector(".Flight");
        if (flightBtn) {
            flightBtn.remove();
            console.log("flight btn removed");
        } else {
            console.log("something is wrong with card2")
        }
    }
    if (cards.classList.contains("box3")) {
        let eventBtn = cards.querySelector(".events");
        if (eventBtn) {
            eventBtn.remove();
            console.log("event btn removed");
        } else {
            console.log("something is wrong with card3")
        }
    }
    // if (cards.classList.contains("box4")) {
    //     let customBtn = cards.querySelector(".custom");
    //     if (customBtn) {
    //         customBtn.remove();
    //         console.log("custom btn removed");
    //     } else {
    //         console.log("something is wrong with card4")
    //     }
    // }
}

function AniBtn() {
    document.querySelectorAll(".cardsBtn").forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.add("animation");
        })

        element.addEventListener("mouseleave", () => {
            element.classList.remove("animation");
        })
    })
}

function playDemoAni() {
    let playBtn = document.querySelector(".btn2-CTA");
    playBtn.addEventListener("mouseenter", () => {
        playBtn.classList.add("demoBtn");
        console.log("added demoBtn")
    })

    playBtn.addEventListener("mouseleave", () => {
        playBtn.classList.remove("demoBtn");
    })

}

const Btnhtml = `
<iframe src="assets/Discovertheworldw.mp4" frameborder="0"></iframe>
<img class = "closeBtn" src="assets/icons8-close-50.svg" alt="">
`;

playDemoAni();

function playdemo() {
    let DemoBtn = document.querySelector(".btn2-CTA");
    DemoBtn.addEventListener("click", () => {
        let videoCont = document.createElement("div");
        videoCont.setAttribute('class', 'vidCont');
        document.querySelector(".nav-bar").insertAdjacentElement("afterbegin", videoCont);
        console.log("element has been added");
        videoCont.insertAdjacentHTML("afterbegin", Btnhtml);
        document.getElementById("body").style.background = "rgba(175, 171, 171, 0.58)";

        let closeBtn = document.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => {
            if (closeBtn) {
                videoCont.remove();
                document.getElementById("body").style.background = "";
            } else {
                setTimeout(() => {
                    videoCont.remove();
                }, 60000);
            }
        })


    })
}

playdemo();


function carousel() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const visibleArea = document.querySelector('.visible-area');

    visibleArea.style.left = 0;
    let currentPosition = 0;
    const cardWidth = 1000; // Example card width

    nextButton.addEventListener('click', () => {
        console.log("next clicked")
        if (visibleArea.style.left != `${-2000}px`) {
            currentPosition -= cardWidth;
            visibleArea.style.left = `${currentPosition}px`;
        } else {
            console.log("Click on view more");
        }
    });

    prevButton.addEventListener('click', () => {
        console.log("prev clicked")
        if (visibleArea.style.left != `${0}px`) {
            currentPosition += cardWidth;
            visibleArea.style.left = `${currentPosition}px`;
        }
        else {
            console.log("The right is 0");
        }

    });
    document.querySelectorAll(".LR-btn").forEach((Element) => {
        Element.addEventListener('mouseover', () => {
            Element.classList.add("LR-bg-color");
            Element.style.border = "none"
        })
    })

    document.querySelectorAll(".LR-btn").forEach((Element) => {
        Element.addEventListener('mouseout', () => {
            Element.classList.remove("LR-bg-color");
            Element.style.border = "1px solid grey"
        })
    })
}

carousel();



const moreHTML = `

      <div class="moreBtn">
         <img src="assets/right-arrow-svgrepo-com (3).svg" alt="">
         <p class="text">More</p>
      </div>

`;

async function fetchData() {

    try {
        let Response = await fetch("destinations.json");
        if (!Response.ok) {
            throw new error("Network error, try again later");
        }
        let destinations = await Response.json()
        console.log(destinations);

        destinations.forEach((destination) => {
            let card = document.createElement("div")
            card.setAttribute('class', 's3-card');
            card.setAttribute('Id', 's3-card-id1');
            card.innerHTML = `
        <img class = "c-img" src="${destination.image}" alt="${destination.image}">
        <div class="cont-card1">
                            <span class="text-card">
                                <p class="dest-name">${destination.name}</p>
                                <p class="price">${destination.price}</p>
                            </span>
                            <span class="c1-cont2">
                                <img src="assets/navigation 1.svg" alt="">
                                <p class="trip-time">${destination.duration}</p>
                            </span>
                        </div>
        `;
            document.querySelector(".s3-card-cont").insertAdjacentElement("beforeend", card);
        })

        let MoreBtn = document.querySelector(".s3-card-cont");
        MoreBtn.insertAdjacentHTML("beforeend", moreHTML);

        MoreDesti();



    } catch (error) {
        console.log("Sorry please re-check your code");
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
    }

}

fetchData();

function MoreDesti() {
    let moreBtn = document.querySelector(".moreBtn")
    moreBtn.addEventListener("click", () => {
        window.location.href = 'rough.html';
    })

}

// function cardHover(){
//    let cont = document.querySelector(".visible-area");
//    cont.addEventListener("mouseenter", (event) => {
//     let card1 = event.target.closest("s3-card1");
//     if(card1){
//         card1.classList.add("s3-card-details");
//     }
//     else{
//         console.log("error")
//     }
//    })
// }

// cardHover();

// <div id="weather">
//     <input id="cityinput" type="text" placeholder="Enter city name">
//     <button id="btn">Check Weather</button>
//     <p id="city"></p>
//     <p id="temp"></p>
//     <p id="desc"></p>
//   </div>

const WeatherHTMl = `

<div class="super-container">
<div class="main-container">
    <span class="WeatherData">
        <h2 class="temp"></h2>
        <p class="NameC"></p>
    </span>
    <p class="Desc"></p>
    <div class="container">
        <div class="sub-cont">
            <div class="s-main s1 Cbutton" id="S1">
                <div class="bars">
                    <span class="bar b1"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/sun-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s2 Cbutton" id="S2">
                <div class="bars">
                    <span class="bar b2"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/partialy-cloudy-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s3 Cbutton" id="S3">
                <div class="bars">
                    <span class="bar b3"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/cloudy-day-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s4 Cbutton" id="S4">
                <div class="bars">
                    <span class="bar b4"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/rain-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s5 Cbutton" id="S5">
                <div class="bars">
                    <span class="bar b5"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/thunderstorm-one-svgrepo-com.svg" alt="">
                </div>
            </div>
        </div>

        <div class="cont-W">
            <input class="input-W" id="Input" type="text" placeholder="Enter city name">
            <button class="button-W">Check weather </button>
        </div>

    </div>
</div>
</div>
<button class="main-cont-close">+</button>
    `;

function weatherPortion() {

    let container = document.getElementById("s2-card-box1");

    container.addEventListener("click", (event) => {
        if (event.target && event.target.id === "weatherID") {
            let section2 = document.querySelector(".section2");
            section2.insertAdjacentHTML("afterbegin", WeatherHTMl)
            getWeather();

            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            async function Wdata() {
                let W1 = document.querySelectorAll(".s-main");
                W1.forEach(async (Element) => {
                    Element.addEventListener("click", async () => {
                        Element.classList.add("trans-s1")

                        await delay(1300);
                        Element.classList.add("full-cast");

                        await delay();
                        if (Element.classList.contains("full-cast")) {
                            if (!Element.querySelector(".W-btn")) {
                                let closeBtn = document.createElement("button");
                                closeBtn.innerText = "+";
                                closeBtn.setAttribute("class", "W-btn");
                                Element.insertAdjacentElement("afterend", closeBtn);


                                closeBtn.addEventListener("click", () => {
                                    console.log("Removing classes...");
                                    Element.classList.remove("full-cast");
                                    Element.classList.remove("trans-s1");

                                    console.log("Classes after removal:", Element.classList);


                                    closeBtn.remove();
                                });
                            }

                        }
                    })

                })
            }

            Wdata();
        } else {
            console.log("something is wrong");
        }
    })



}

weatherPortion()

async function getWeather() {

    try {
        let BtnWeth = document.querySelector(".button-W");
        BtnWeth.addEventListener("click", async () => {
            let city = document.getElementById("Input").value.trim();
            if (!city) {
                console.log("Please Enter the city name!");
                return;
            }
            let Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b76a5a41cbf6b5def0fd54214a738f4c&units=metric`);
            if (!Response.ok) {
                throw new Error(`Something is wrong, Network Error! : ${Response.status}`);
            }
            let data = await Response.json();
            console.log(data);
            document.querySelector(".temp").textContent = `${data.main.temp} °C`;
            document.querySelector(".NameC").textContent = `${data.name}`;
            document.querySelector(".Desc").textContent = `${data.weather[0].description}`;
        })



    }

    catch (error) {
        console.log(`Please check your code!`)
        console.log(`Nmae of the error! ${error.name}`)
        console.log(`Mesage of the error! ${error.message}`)
        console.log(`Stack of the error! ${error.stack}`)
    }
}






async function weatherUpdate() {

    let container = document.getElementById("s2-card-box1");
    container.addEventListener("click", async function (event) {
        if (event.target && event.target.id === ('weatherID')) {
            console.log('dynamic button clicked');
            event.target.textContent = 'Clicked!';
            document.getElementById("body").style.background = "#afabab94";

            if (event.target.textContent = 'Clicked!') {
                // let box1 = document.querySelector(".box1");
                // box1.classList.remove("more-detail-card1", "new-styles-card")
                let cardConts = document.querySelectorAll(".s2-box");
                cardConts.forEach((element) => {
                    element.classList.remove("more-detail-card1", "new-styles-card");
                })
            }

            let WcloseBTN = document.querySelector(".main-cont-close");
            let mainCont = document.querySelector(".main-container");

            WcloseBTN.addEventListener("click", () => {
                mainCont.remove();
                document.getElementById("body").style.background = "#f7f7f775"
                WcloseBTN.remove();
            })
        }
    });
}
weatherUpdate();

function OppenerNew() {

    let loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", () => {
        window.location.href = 'login.html'
    })

    let signup = document.querySelector(".btn1");
    signup.addEventListener("click", () => {
        window.location.href = 'signup.html'
    })


}
OppenerNew()
////////////////////////////////////////////


// MI; Lets understand how its working. 

// NOTE: in this step we wrap all the testimonial into an array, to make it easy to access.

const testimonials = [
    {
        text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis."`,
        name: "Rohit Pratap Singh",
        location: "Uttar Pradesh, India",
        img: "assets/Image.png"
    },
    {
        text: `"This is another testimonial. Great experience and wonderful service!"`,
        name: "Alex Singh",
        location: "Tundla, Agra",
        img: "https://smartcitymohaliplots.realtynivesh.com/management.png"
    },
    {
        text: `"Amazing support and fast response. Highly recommend!"`,
        name: "Priya Sharma",
        location: "Delhi, India",
        img: "https://smartcitymohaliplots.realtynivesh.com/plot.png"
    }
];

//note: Here we declare the currentIndex of the testmonial, We have declared this because every time we click on the up or down button the index will increase accourding to the buttons clicked. okk I hope you understand this thing.

let currentIndex = 0;

// note: Here we access all the elements, and in these elements we are going to update the content, how its given below.

const testimonialText = document.querySelector(".testimon-content")
// console.log(testimonialText)
const authorName = document.querySelector(".testimon-name")
// console.log(authorName)
const authorLocation = document.querySelector(".testimon-place")
// console.log(authorLocation)
const profileImg = document.querySelector(".testi-img")
// console.log(profileImg)

// note: After getting all the elements, we add a event listner to the downBtn and in that event listner, we have done some thing, 
document.querySelector(".downBtn").addEventListener("click", () => {

    // note: when the button is being clicked this message wil printed to the console.
    console.log("next button clicked")

    // note: Here on every click we are updating the current index. as you can see the current index above we have declared 0, and here when the button is click the currentIndex increases by 1 and the % testmonial.length is used to access the array in the circular way, means if all testimonial finished then the first testmonial will appear.
    currentIndex = (currentIndex + 1) % testimonials.length; // Move forward

    // note: After the previous step we are call the function to update the content.
    updateTestimonial();
});

// note: here we are using the event listner for the prev btn.

document.querySelector(".upBtn").addEventListener("click", () => {

    // note: when the button is being clicked this message wil printed to the console.
    console.log("prev button clicked")

    //note: Here we are updating the current index, as we are clicking the prev button so we are subtracting 1 from the current index, but along with subtracting we are also add the length of the testimonials array's length to prevent the current index goes in minus, and again we are using the % testimonials.length to make access the testimonails in the circular way.
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Move backward
    // note: After the previous step we are call the function to update the content.
    updateTestimonial();
});

// note: In this function we are updating the content. As you can see "testimonials[currentIndex] as we are calling the function after the currentIndex is updated, After the current index is updated, the content is update for the currentIndex element only."

function updateTestimonial() {
    testimonialText.textContent = testimonials[currentIndex].text;
    authorName.textContent = testimonials[currentIndex].name;
    authorLocation.textContent = testimonials[currentIndex].location;
    profileImg.src = testimonials[currentIndex].img;
}

// const Menuhtml = `
// <div class="menuSec">
// <li class="menuItems"><a class="nav-link active" aria-current="page"
//         href="#Destination">Destinations</a></li>
// <li class="menuItems" id="hotel">Hotels</li>
// <li class="menuItems" id="flight">Flights</li>
// <li class="menuItems" id="booking">Bookings</li>
// <li class="menuItems" id="login">Login</li>
// </div>
// `;

function menuOpen() {
    let menu = document.querySelector(".menuBtn");

    let liElements = document.querySelectorAll(".nav-buttons")
    let storedLiElements = Array.from(liElements);  //NOTE: this is used to store the got elements. and further we can use themif needed.
    const menuBtnHTML = `<button class="menuBtn">☰ Menu</button>`;

    let mediaJs = window.matchMedia('(max-width: 830px)');

    if (mediaJs.matches) {
        let ItmesN = document.querySelector(".nav-items")
        console.log(ItmesN)
        ItmesN.insertAdjacentHTML("afterbegin", menuBtnHTML);
    } else {
        console.log("does not matches")
    }


    let navigationDock = document.querySelector(".navigation-bar")
    let MenuBtn = document.querySelector(".menuBtn")
    let MenuSection = document.querySelector(".menuSec")
    const navDock = document.getElementById("navDock");

    try {
        let mediaJsMin = window.matchMedia('(min-width: 830px)');
        if (mediaJsMin.matches) {
            // document.querySelector(".menuSec").remove()
            MenuSection.classList.add("menuSecDnone")
        }
        MenuBtn.addEventListener('click', () => {
navDock.classList.toggle("show")
        })


        MenuBtn.addEventListener("click", () => {
            
            if(!MenuSection.classList.contains("menuSecDnone")){
               MenuSection.classList.add('menuSecDnone') 
               
            }else{
                MenuSection.classList.remove("menuSecDnone")
            }
        })

    } catch (error) {
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
    }
}

menuOpen()

function carouselMobile() {
    let mediaMobile = window.matchMedia('(max-width: 830px)');
    if (mediaMobile.matches) {
        console.log("matches for the carouselMobile");
        document.querySelector(".s3-card-cont").style = "flex-direction: column;"

        let PrevNextBtns = document.querySelector(".LR-btn-Cont");
        PrevNextBtns.remove();
    }
}

// carouselMobile()

function Just() {

    const thought2 = `<h2 class="thoughts thought2">What People Think about Us</h2>`;
    let point1 = document.querySelector(".point1");
    let point2 = document.querySelector(".point2");
    let point3 = document.querySelector(".point3");
    const interval1 = setInterval(() => {
        point1.style.background = "lightgray";
        point2.style.background = "grey";
        document.querySelector(".T1span").classList.add("thoughtTrans");
        document.querySelector(".T2span").classList.add("thought2Trans");
    }, 3000);


    setTimeout(() => {
        clearInterval(interval1);
    }, 3000);

    const interval2 = setInterval(() => {
        point2.style.background = "lightgray";
        point3.style.background = "grey";
        document.querySelector(".T2span").classList.add("thought2TransOUT");
        document.querySelector(".T3span").classList.add("thought3Trans");
    }, 6000);

    setTimeout(() => {
        clearInterval(interval2);
    }, 6000);

    setTimeout(() => {
        point1.style.background = "grey";
        point3.style.background = "lightgray";
        document.querySelector(".T1span").classList.remove("thoughtTrans");
        document.querySelector(".T2span").classList.remove("thought2Trans");
        document.querySelector(".T2span").classList.remove("thought2TransOUT");
        document.querySelector(".T3span").classList.remove("thought3Trans");
    }, 7500);

}

setInterval(() => {
    Just()
}, 17000);

function Wopener() {
    let mediaWeather = window.matchMedia('(max-width: 800px)');
    let BtnWeather = document.getElementById("weatherID");
    console.log(BtnWeather)
    if (mediaWeather.matches) {
        console.log("media matched for weather portion")
        BtnWeather.addEventListener("click", () => {
            console.log(BtnWeather);
            window.location.href = "weather.html"
            console.log(document.querySelector(".main-container"));
        })
    }

}

Wopener()

const navBar = () => {

}





=======
let card1 = document.getElementById("s2-card-box1");
let card2 = document.getElementById("s2-card-box2");
let card3 = document.getElementById("s2-card-box3");
let card4 = document.getElementById("s2-card-box4");


function cardDetails(element, callback1, callback2, callback3) {

    element.addEventListener("mouseenter", () => {
        if (element == card1) {
            card1.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card1-img").classList.add("new-styles-img-card1");
            document.querySelector(".sub-b1-head").classList.add("new-heding-styles-card1");
            document.querySelector(".content-b1").classList.add("new-content-styles-card1");
            document.querySelector(".sub-b1-head").innerHTML = "Precise Weather Report";
            callback1();
            document.querySelector(".weather").classList.add("cardsBtn", 'animateBtn');
            callback3();

        } else if (element == card2) {
            card2.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card2-img").classList.add("new-styles-img-card2");
            document.querySelector(".sub-b2-head").classList.add("new-heding-styles-card2");
            document.querySelector(".content-b2").classList.add("new-content-styles-card2");
            document.querySelector(".sub-b2-head").innerHTML = " Find the Best Flights for Your Budget"
            callback1();
            document.querySelector(".Flight").classList.add("cardsBtn", 'animateBtn');
            callback3();
        }
        else if (element == card3) {
            card3.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card3-img").classList.add("new-styles-img-card3");
            document.querySelector(".sub-b3-head").classList.add("new-heding-styles-card3");
            document.querySelector(".content-b3").classList.add("new-content-styles-card3");
            document.querySelector(".sub-b3-head").innerHTML = " Discover Exciting Local Events"
            callback1();
            document.querySelector(".events").classList.add("cardsBtn", 'animateBtn');
            callback3();
        }
        else if (element == card4) {
            card4.classList.add("more-detail-card1", "new-styles-card");
            document.getElementById("card4-img").classList.add("new-styles-img-card4");
            document.querySelector(".sub-b4-head").classList.add("new-heding-styles-card4");
            document.querySelector(".content-b4").classList.add("new-content-styles-card4");
            document.querySelector(".sub-b4-head").innerHTML = "Create Your Dream Trip with Customization"
            callback1();
        }
    })

    element.addEventListener("mouseleave", () => {

        if (element == card1) {
            card1.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card1-img").classList.remove("new-styles-img-card1");
            document.querySelector(".sub-b1-head").classList.remove("new-heding-styles-card1");
            document.querySelector(".content-b1").classList.remove("new-content-styles-card1");
            document.querySelector(".sub-b1-head").innerHTML = "Calculated Weather"
            callback2();
        } else if (element == card2) {
            card2.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card2-img").classList.remove("new-styles-img-card2");
            document.querySelector(".sub-b2-head").classList.remove("new-heding-styles-card2");
            document.querySelector(".content-b2").classList.remove("new-content-styles-card2");
            document.querySelector(".sub-b2-head").innerHTML = "Best Flights"
            callback2();
        }
        else if (element == card3) {
            card3.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card3-img").classList.remove("new-styles-img-card3");
            document.querySelector(".sub-b3-head").classList.remove("new-heding-styles-card3");
            document.querySelector(".content-b3").classList.remove("new-content-styles-card3");
            document.querySelector(".sub-b3-head").innerHTML = "Local Events"
            callback2();
        }
        else if (element == card4) {
            card4.classList.remove("more-detail-card1", "new-styles-card");
            document.getElementById("card4-img").classList.remove("new-styles-img-card4");
            document.querySelector(".sub-b4-head").classList.remove("new-heding-styles-card4");
            document.querySelector(".content-b4").classList.remove("new-content-styles-card4");
            document.querySelector(".sub-b4-head").innerHTML = "Customization"
            callback2();
        }
    })
}

cardDetails(card1, () => addBtn(card1), () => removeBtn(card1), AniBtn);
cardDetails(card2, () => addBtn(card2), () => removeBtn(card2), AniBtn);
cardDetails(card3, () => addBtn(card3), () => removeBtn(card3), AniBtn);
cardDetails(card4, () => addBtn(card4), () => removeBtn(card4));

function addBtn(card) {
    if (card.classList.contains("box1")) {
        let card1Btn = document.createElement("button");
        card1Btn.setAttribute('class', 'weather');
        card1Btn.id = 'weatherID';
        card1Btn.innerText = "Check Weather";
        document.querySelector(".box1").insertAdjacentElement("beforeend", card1Btn);
        Wopener()
    }
    if (card.classList.contains("box2")) {
        let card2Btn = document.createElement("button");
        card2Btn.setAttribute('class', 'Flight');
        card2Btn.innerText = 'Find Flights';
        document.querySelector(".box2").insertAdjacentElement('beforeend', card2Btn);
    }
    if (card.classList.contains("box3")) {
        let card3Btn = document.createElement("button");
        card3Btn.setAttribute('class', 'events');
        card3Btn.innerText = 'Explore Events';
        document.querySelector(".box3").insertAdjacentElement('beforeend', card3Btn);
    }
    // if (card.classList.contains("box4")) {
    //     let card4Btn = document.createElement("button");
    //     card4Btn.setAttribute('class', 'custom');
    //     card4Btn.innerText = "Customize"
    //     document.querySelector(".box4").insertAdjacentElement('beforeend', card4Btn);
    // }
}

function removeBtn(cards) {
    if (cards.classList.contains("box1")) {
        let weatherBtn = cards.querySelector(".weather");
        if (weatherBtn) {
            weatherBtn.remove();
            console.log("Weather btn removed");
        }
    }
    if (cards.classList.contains("box2")) {
        let flightBtn = cards.querySelector(".Flight");
        if (flightBtn) {
            flightBtn.remove();
            console.log("flight btn removed");
        } else {
            console.log("something is wrong with card2")
        }
    }
    if (cards.classList.contains("box3")) {
        let eventBtn = cards.querySelector(".events");
        if (eventBtn) {
            eventBtn.remove();
            console.log("event btn removed");
        } else {
            console.log("something is wrong with card3")
        }
    }
    // if (cards.classList.contains("box4")) {
    //     let customBtn = cards.querySelector(".custom");
    //     if (customBtn) {
    //         customBtn.remove();
    //         console.log("custom btn removed");
    //     } else {
    //         console.log("something is wrong with card4")
    //     }
    // }
}

function AniBtn() {
    document.querySelectorAll(".cardsBtn").forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.add("animation");
        })

        element.addEventListener("mouseleave", () => {
            element.classList.remove("animation");
        })
    })
}

function playDemoAni() {
    let playBtn = document.querySelector(".btn2-CTA");
    playBtn.addEventListener("mouseenter", () => {
        playBtn.classList.add("demoBtn");
        console.log("added demoBtn")
    })

    playBtn.addEventListener("mouseleave", () => {
        playBtn.classList.remove("demoBtn");
    })

}

const Btnhtml = `
<iframe src="assets/Discovertheworldw.mp4" frameborder="0"></iframe>
<img class = "closeBtn" src="assets/icons8-close-50.svg" alt="">
`;

playDemoAni();

function playdemo() {
    let DemoBtn = document.querySelector(".btn2-CTA");
    DemoBtn.addEventListener("click", () => {
        let videoCont = document.createElement("div");
        videoCont.setAttribute('class', 'vidCont');
        document.querySelector(".nav-bar").insertAdjacentElement("afterbegin", videoCont);
        console.log("element has been added");
        videoCont.insertAdjacentHTML("afterbegin", Btnhtml);
        document.getElementById("body").style.background = "rgba(175, 171, 171, 0.58)";

        let closeBtn = document.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => {
            if (closeBtn) {
                videoCont.remove();
                document.getElementById("body").style.background = "";
            } else {
                setTimeout(() => {
                    videoCont.remove();
                }, 60000);
            }
        })


    })
}

playdemo();


function carousel() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const visibleArea = document.querySelector('.visible-area');

    visibleArea.style.left = 0;
    let currentPosition = 0;
    const cardWidth = 1000; // Example card width

    nextButton.addEventListener('click', () => {
        console.log("next clicked")
        if (visibleArea.style.left != `${-2000}px`) {
            currentPosition -= cardWidth;
            visibleArea.style.left = `${currentPosition}px`;
        } else {
            console.log("Click on view more");
        }
    });

    prevButton.addEventListener('click', () => {
        console.log("prev clicked")
        if (visibleArea.style.left != `${0}px`) {
            currentPosition += cardWidth;
            visibleArea.style.left = `${currentPosition}px`;
        }
        else {
            console.log("The right is 0");
        }

    });
    document.querySelectorAll(".LR-btn").forEach((Element) => {
        Element.addEventListener('mouseover', () => {
            Element.classList.add("LR-bg-color");
            Element.style.border = "none"
        })
    })

    document.querySelectorAll(".LR-btn").forEach((Element) => {
        Element.addEventListener('mouseout', () => {
            Element.classList.remove("LR-bg-color");
            Element.style.border = "1px solid grey"
        })
    })
}

carousel();



const moreHTML = `

      <div class="moreBtn">
         <img src="assets/right-arrow-svgrepo-com (3).svg" alt="">
         <p class="text">More</p>
      </div>

`;

async function fetchData() {

    try {
        let Response = await fetch("destinations.json");
        if (!Response.ok) {
            throw new error("Network error, try again later");
        }
        let destinations = await Response.json()
        console.log(destinations);

        destinations.forEach((destination) => {
            let card = document.createElement("div")
            card.setAttribute('class', 's3-card');
            card.setAttribute('Id', 's3-card-id1');
            card.innerHTML = `
        <img class = "c-img" src="${destination.image}" alt="${destination.image}">
        <div class="cont-card1">
                            <span class="text-card">
                                <p class="dest-name">${destination.name}</p>
                                <p class="price">${destination.price}</p>
                            </span>
                            <span class="c1-cont2">
                                <img src="assets/navigation 1.svg" alt="">
                                <p class="trip-time">${destination.duration}</p>
                            </span>
                        </div>
        `;
            document.querySelector(".s3-card-cont").insertAdjacentElement("beforeend", card);
        })

        let MoreBtn = document.querySelector(".s3-card-cont");
        MoreBtn.insertAdjacentHTML("beforeend", moreHTML);

        MoreDesti();



    } catch (error) {
        console.log("Sorry please re-check your code");
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
    }

}

fetchData();

function MoreDesti() {
    let moreBtn = document.querySelector(".moreBtn")
    moreBtn.addEventListener("click", () => {
        window.location.href = 'rough.html';
    })

}

// function cardHover(){
//    let cont = document.querySelector(".visible-area");
//    cont.addEventListener("mouseenter", (event) => {
//     let card1 = event.target.closest("s3-card1");
//     if(card1){
//         card1.classList.add("s3-card-details");
//     }
//     else{
//         console.log("error")
//     }
//    })
// }

// cardHover();

// <div id="weather">
//     <input id="cityinput" type="text" placeholder="Enter city name">
//     <button id="btn">Check Weather</button>
//     <p id="city"></p>
//     <p id="temp"></p>
//     <p id="desc"></p>
//   </div>

const WeatherHTMl = `

<div class="super-container">
<div class="main-container">
    <span class="WeatherData">
        <h2 class="temp"></h2>
        <p class="NameC"></p>
    </span>
    <p class="Desc"></p>
    <div class="container">
        <div class="sub-cont">
            <div class="s-main s1 Cbutton" id="S1">
                <div class="bars">
                    <span class="bar b1"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/sun-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s2 Cbutton" id="S2">
                <div class="bars">
                    <span class="bar b2"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/partialy-cloudy-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s3 Cbutton" id="S3">
                <div class="bars">
                    <span class="bar b3"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/cloudy-day-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s4 Cbutton" id="S4">
                <div class="bars">
                    <span class="bar b4"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/rain-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="s-main s5 Cbutton" id="S5">
                <div class="bars">
                    <span class="bar b5"></span>
                </div>
                <div class="logos">
                    <img src="assets/Popup/thunderstorm-one-svgrepo-com.svg" alt="">
                </div>
            </div>
        </div>

        <div class="cont-W">
            <input class="input-W" id="Input" type="text" placeholder="Enter city name">
            <button class="button-W">Check weather </button>
        </div>

    </div>
</div>
</div>
<button class="main-cont-close">+</button>
    `;

function weatherPortion() {

    let container = document.getElementById("s2-card-box1");

    container.addEventListener("click", (event) => {
        if (event.target && event.target.id === "weatherID") {
            let section2 = document.querySelector(".section2");
            section2.insertAdjacentHTML("afterbegin", WeatherHTMl)
            getWeather();

            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            async function Wdata() {
                let W1 = document.querySelectorAll(".s-main");
                W1.forEach(async (Element) => {
                    Element.addEventListener("click", async () => {
                        Element.classList.add("trans-s1")

                        await delay(1300);
                        Element.classList.add("full-cast");

                        await delay();
                        if (Element.classList.contains("full-cast")) {
                            if (!Element.querySelector(".W-btn")) {
                                let closeBtn = document.createElement("button");
                                closeBtn.innerText = "+";
                                closeBtn.setAttribute("class", "W-btn");
                                Element.insertAdjacentElement("afterend", closeBtn);


                                closeBtn.addEventListener("click", () => {
                                    console.log("Removing classes...");
                                    Element.classList.remove("full-cast");
                                    Element.classList.remove("trans-s1");

                                    console.log("Classes after removal:", Element.classList);


                                    closeBtn.remove();
                                });
                            }

                        }
                    })

                })
            }

            Wdata();
        } else {
            console.log("something is wrong");
        }
    })


    
}

weatherPortion()

async function getWeather() {

    try {
        let BtnWeth = document.querySelector(".button-W");
        BtnWeth.addEventListener("click", async () => {
            let city = document.getElementById("Input").value.trim();
            if (!city) {
                console.log("Please Enter the city name!");
                return;
            }
            let Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b76a5a41cbf6b5def0fd54214a738f4c&units=metric`);
            if (!Response.ok) {
                throw new Error(`Something is wrong, Network Error! : ${Response.status}`);
            }
            let data = await Response.json();
            console.log(data);
            document.querySelector(".temp").textContent = `${data.main.temp} °C`;
            document.querySelector(".NameC").textContent = `${data.name}`;
            document.querySelector(".Desc").textContent = `${data.weather[0].description}`;
        })



    }

    catch (error) {
        console.log(`Please check your code!`)
        console.log(`Nmae of the error! ${error.name}`)
        console.log(`Mesage of the error! ${error.message}`)
        console.log(`Stack of the error! ${error.stack}`)
    }
}






async function weatherUpdate() {

    let container = document.getElementById("s2-card-box1");
    container.addEventListener("click", async function (event) {
        if (event.target && event.target.id === ('weatherID')) {
            console.log('dynamic button clicked');
            event.target.textContent = 'Clicked!';
            document.getElementById("body").style.background = "#afabab94";

            if(event.target.textContent = 'Clicked!'){
                // let box1 = document.querySelector(".box1");
                // box1.classList.remove("more-detail-card1", "new-styles-card")
                let cardConts = document.querySelectorAll(".s2-box");
                cardConts.forEach((element) => {
                    element.classList.remove("more-detail-card1", "new-styles-card");
                })
            }

            let WcloseBTN = document.querySelector(".main-cont-close");
            let mainCont = document.querySelector(".main-container");

            WcloseBTN.addEventListener("click", () => {
                mainCont.remove();
                document.getElementById("body").style.background = "#f7f7f775"
                WcloseBTN.remove();
            })
        }
    });
}
weatherUpdate();

function OppenerNew() {

    let loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", () => {
        window.location.href = 'login.html'
    })

    let signup = document.querySelector(".btn1");
    signup.addEventListener("click", () => {
        window.location.href = 'signup.html'
    })


}
OppenerNew()
////////////////////////////////////////////


// MI; Lets understand how its working. 

// NOTE: in this step we wrap all the testimonial into an array, to make it easy to access.

const testimonials = [
    {
        text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis."`,
        name: "Rohit Pratap Singh",
        location: "Uttar Pradesh, India",
        img: "assets/Image.png"
    },
    {
        text: `"This is another testimonial. Great experience and wonderful service!"`,
        name: "Alex Singh",
        location: "Tundla, Agra",
        img: "https://smartcitymohaliplots.realtynivesh.com/management.png"
    },
    {
        text: `"Amazing support and fast response. Highly recommend!"`,
        name: "Priya Sharma",
        location: "Delhi, India",
        img: "https://smartcitymohaliplots.realtynivesh.com/plot.png"
    }
];

//note: Here we declare the currentIndex of the testmonial, We have declared this because every time we click on the up or down button the index will increase accourding to the buttons clicked. okk I hope you understand this thing.

let currentIndex = 0;

// note: Here we access all the elements, and in these elements we are going to update the content, how its given below.

const testimonialText = document.querySelector(".testimon-content")
// console.log(testimonialText)
const authorName = document.querySelector(".testimon-name")
// console.log(authorName)
const authorLocation = document.querySelector(".testimon-place")
// console.log(authorLocation)
const profileImg = document.querySelector(".testi-img")
// console.log(profileImg)

// note: After getting all the elements, we add a event listner to the downBtn and in that event listner, we have done some thing, 
document.querySelector(".downBtn").addEventListener("click", () => {

    // note: when the button is being clicked this message wil printed to the console.
    console.log("next button clicked")

    // note: Here on every click we are updating the current index. as you can see the current index above we have declared 0, and here when the button is click the currentIndex increases by 1 and the % testmonial.length is used to access the array in the circular way, means if all testimonial finished then the first testmonial will appear.
    currentIndex = (currentIndex + 1) % testimonials.length; // Move forward

    // note: After the previous step we are call the function to update the content.
    updateTestimonial();
});

// note: here we are using the event listner for the prev btn.

document.querySelector(".upBtn").addEventListener("click", () => {

    // note: when the button is being clicked this message wil printed to the console.
    console.log("prev button clicked")

    //note: Here we are updating the current index, as we are clicking the prev button so we are subtracting 1 from the current index, but along with subtracting we are also add the length of the testimonials array's length to prevent the current index goes in minus, and again we are using the % testimonials.length to make access the testimonails in the circular way.
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Move backward
    // note: After the previous step we are call the function to update the content.
    updateTestimonial();
});

// note: In this function we are updating the content. As you can see "testimonials[currentIndex] as we are calling the function after the currentIndex is updated, After the current index is updated, the content is update for the currentIndex element only."

function updateTestimonial() {
    testimonialText.textContent = testimonials[currentIndex].text;
    authorName.textContent = testimonials[currentIndex].name;
    authorLocation.textContent = testimonials[currentIndex].location;
    profileImg.src = testimonials[currentIndex].img;
}

const Menuhtml = `
<div class="menuSec">
<li class="menuItems"><a class="nav-link active" aria-current="page"
        href="#Destination">Destinations</a></li>
<li class="menuItems" id="hotel">Hotels</li>
<li class="menuItems" id="flight">Flights</li>
<li class="menuItems" id="booking">Bookings</li>
<li class="menuItems" id="login">Login</li>
</div>
`;

function menuOpen() {
    let menu = document.querySelector(".menuBtn");

    let liElements = document.querySelectorAll(".nav-buttons")
    let storedLiElements = Array.from(liElements);  //NOTE: this is used to store the got elements. and further we can use themif needed.
    const menuBtnHTML = `<button class="menuBtn">☰ Menu</button>`;

    let mediaJs = window.matchMedia('(max-width: 830px)');

    if (mediaJs.matches) {
        let ItmesN = document.querySelector(".nav-items")
        console.log(ItmesN)
        ItmesN.insertAdjacentHTML("afterbegin", menuBtnHTML);
    } else {
        console.log("does not matches")
    }



    try {
        let mediaJsMin = window.matchMedia('(min-width: 831px)');
        if (mediaJsMin.matches) {
            document.querySelector(".menuSec").remove()
        }

        document.querySelector(".menuBtn").addEventListener("click", () => {
            console.log("clicked btn menu")
            document.querySelector(".navigation-bar").insertAdjacentHTML("afterend", Menuhtml);
        })
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
    }
}

menuOpen()

function carouselMobile() {
    let mediaMobile = window.matchMedia('(max-width: 830px)');
    if (mediaMobile.matches) {
        console.log("matches for the carouselMobile");
        document.querySelector(".s3-card-cont").style = "flex-direction: column;"

        let PrevNextBtns = document.querySelector(".LR-btn-Cont");
        PrevNextBtns.remove();
    }
}

carouselMobile()

// function Thoughts() {
//     let point1 = document.querySelector(".point1");
//     let point2 = document.querySelector(".point2");
//     let point3 = document.querySelector(".point3");
//     setInterval(() => {
//         point1.style = "background-color: none"
//         point2.style = "background-coloe: grey"
//     }, 2000);
// }

// Thoughts()

function Just() {
    
    const thought2 = `<h2 class="thoughts thought2">What People Think about Us</h2>`;
    let point1 = document.querySelector(".point1");
    let point2 = document.querySelector(".point2");
    let point3 = document.querySelector(".point3");
    const interval1 = setInterval(() => {
        point1.style.background = "lightgray";
        point2.style.background = "grey";
        document.querySelector(".T1span").classList.add("thoughtTrans");
        document.querySelector(".T2span").classList.add("thought2Trans");
    }, 3000);
    

    setTimeout(() => {
        clearInterval(interval1);
    },3000);

    const interval2 = setInterval(() => {
        point2.style.background = "lightgray";
        point3.style.background = "grey";
        document.querySelector(".T2span").classList.add("thought2TransOUT");
        document.querySelector(".T3span").classList.add("thought3Trans");
    }, 6000);

    setTimeout(() => {
        clearInterval(interval2);
    }, 6000);

    setTimeout(() => {
        point1.style.background = "grey";
        point3.style.background = "lightgray";
        document.querySelector(".T1span").classList.remove("thoughtTrans");
        document.querySelector(".T2span").classList.remove("thought2Trans");
        document.querySelector(".T2span").classList.remove("thought2TransOUT");
        document.querySelector(".T3span").classList.remove("thought3Trans");
    }, 7500);

}

setInterval(() => {
    Just()
}, 17000);

 function Wopener(){
    let mediaWeather = window.matchMedia('(max-width: 800px)');
    let BtnWeather = document.getElementById("weatherID");
    console.log(BtnWeather)
    if(mediaWeather.matches){
        console.log("media matched for weather portion")
       BtnWeather.addEventListener("click", () => {
            console.log(BtnWeather);
            window.location.href = "weather.html"
            console.log(document.querySelector(".main-container"));
        })
    }
    
}

Wopener()







>>>>>>> 0ad2572598616639a25e3ed43293b760ceca7032
