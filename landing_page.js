
// function to initialize the toggle menu
function initNavbar() {
    const navBar = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.addEventListener('click', () => {
        navBar.classList.toggle('show_nav');
    });
}
//call toggle menu fonction 
initNavbar();

// Function to display a carousel slide 'nth is carousel position'
function showSlide(carousel, currentIndex, nth) {
    let nbItems = carousel.querySelectorAll(`.carousel-item${nth}`).length;
    // Build the carousel specific class using nth
    const itemClass = `.carousel-item${nth}`;
    // take width of carousel-item
    const itemWidth = carousel.querySelector(itemClass).clientWidth;
    //add transform css style to slide carousel '+20 for margin'
    carousel.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
}


// Function to handle "previous" and "next" carousel events
function handleCarouselButtons(prevBtn, nextBtn, carousel, currentIndex, nth) {
    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carousel.querySelectorAll(`.carousel-item${nth}`).length - 1;
        }
        showSlide(carousel, currentIndex, nth);
    });

    nextBtn.addEventListener("click", () => {
        const nbItems = carousel.querySelectorAll(`.carousel-item${nth}`).length;
        currentIndex++;
        if (currentIndex >= nbItems) {
            currentIndex = 0;
        }
        showSlide(carousel, currentIndex, nth);
    });
}

// This function handles touch events for a carousel. It takes as parameters the carousel itself, the current index and the nth element of the carousel.
function handleTouchEvents(carousel, currentIndex, nth) {
    let touchStartX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (deltaX > 10) {
            currentIndex++;
            const numItems = carousel.querySelectorAll(`.carousel-item${nth}`).length;
            if (currentIndex >= numItems) {
                currentIndex = 0;
            }
            showSlide(carousel, currentIndex, nth);
        } else if (deltaX < -10) {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = carousel.querySelectorAll(`.carousel-item${nth}`).length - 1;
            }
            showSlide(carousel, currentIndex, nth);
        }
    });
}

// Function to initialize a carousel
function initCarousel(carouselSelector, prevBtnSelector, nextBtnSelector, nth) {
    const carousel = document.querySelector(carouselSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    let currentIndex = 0;

    showSlide(carousel, currentIndex, nth);
    handleCarouselButtons(prevBtn, nextBtn, carousel, currentIndex, nth);
    handleTouchEvents(carousel, currentIndex, nth);
}

// Function to launch the carousel when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Carousel 1 (features)
    initCarousel('.carousel1', '.prevBtn1', '.nextBtn1', '1');

    // Carousel 2 (members)
    initCarousel('.carousel2', '.prevBtn2', '.nextBtn2','2');

    // Carousel 3 (client)
    initCarousel('.carousel3', '.prevBtn3', '.nextBtn3', '3');

    // Carousel 4 (blog)
    initCarousel('.carousel4', '.prevBtn4', '.nextBtn4', '4');

    // Carousel 5 (pricing)
    initCarousel('.carousel5', '.prevBtn5', '.nextBtn5', '5');
});


































// // setting up the toggle menu
// const navBar = document.querySelector('.navbar');
// const toggleButton = document.querySelector('.toggle-button');
// const all = window;
// function toggleMenu (){
//     toggleButton.addEventListener('click', () => {
//         navBar.classList.toggle('show_nav'); 
//     })    
// }       
// toggleMenu();

// // carousel  section features 

// //Select the carousel item, “Previous” and “Next” buttons and initialize the current index.
// const carousel = document.querySelector('.carousel');
// const prevBtn = document.querySelector('.prevBtn');
// const nextBtn = document.querySelector('.nextBtn');
// let currentIndex = 0;

// //Function to display a slide based on the index passed as an argument.
// function showSlide(index) {
//     // Get the width of a slide element.
//     const itemWidth = carousel.querySelector('.carousel-item').clientWidth;
//     //Move the carousel horizontally to view the desired slide.
//     carousel.style.transform = `translateX(-${index * itemWidth}px)`;	
// }

// //Add an event handler for the "Back" button.
// prevBtn.addEventListener("click", () => {
//      // Decrement index and show the corresponding slide
//      currentIndex--;
//      if (currentIndex < 0) {
//          const nbItems = carousel.querySelectorAll(".carousel-item").length;
//          currentIndex = nbItems - 1; // If it's the first slide, go to the last one.
//      }
//      showSlide(currentIndex);
// });

// //Add an event handler for the "next" button.
// nextBtn.addEventListener("click", () => {
//     // Get the total number of items in the carousel.
//     const nbItems = carousel.querySelectorAll(".carousel-item").length;
//     // Increment the index and display the corresponding slide.
//     currentIndex++;
//     if (currentIndex >= nbItems) {
//         currentIndex = 0; // If it's the last slide, go back to the first one.
//     }
//     showSlide(currentIndex);
//     }
// );

// // Show the first slide on page load.
// showSlide(currentIndex);

// // Événement touchstart
// carousel.addEventListener('touchstart', (e) => {
//     touchStartX = e.touches[0].clientX;
// });

// // Événement touchmove
// carousel.addEventListener('touchmove', (e) => {
//     const touchEndX = e.touches[0].clientX;
//     const deltaX = touchStartX - touchEndX;

//     if (deltaX > 10) {
//         // Swipe vers la gauche
//         const numItems = carousel.querySelectorAll('.carousel-item').length;
//         if (currentIndex < numItems - 1) {
//             currentIndex++;
//             showSlide(currentIndex);
//         }
//     } else if (deltaX < -10) {
//         // Swipe vers la droite
//         if (currentIndex > 0) {
//             currentIndex--;
//             showSlide(currentIndex);
//         }
//     }
// });

// // Carousel menu section members 

// const carousel2 = document.querySelector('.carousel2');
// const prevBtn2 = document.querySelector('.prevBtn2');
// const nextBtn2 = document.querySelector('.nextBtn2');
// let currentIndex2 = 0;
// let touchStartX = 0; // Pour enregistrer la position de départ du touch

// function showSlide2(index) {
//     const articleWidth = carousel2.querySelector('.members-articles').clientWidth;
//     carousel2.style.transform = `translateX(-${index * articleWidth}px)`;
// }

// prevBtn2.addEventListener("click", () => {
//     currentIndex2--;
//     if (currentIndex2 < 0) {
//         currentIndex2 = carousel2.querySelectorAll(".members-articles").length - 1;
//     }
//     showSlide2(currentIndex2);
// });

// nextBtn2.addEventListener("click", () => {
//     currentIndex2++;
//     if (currentIndex2 >= carousel2.querySelectorAll(".members-articles").length) {
//         currentIndex2 = 0;
//     }
//     showSlide2(currentIndex2);
// });

// // Événement touchstart
// carousel2.addEventListener('touchstart', (e) => {
//     touchStartX = e.touches[0].clientX;
// });

// // Événement touchmove
// carousel2.addEventListener('touchmove', (e) => {
//     const touchEndX = e.touches[0].clientX;
//     const deltaX = touchStartX - touchEndX;

//     if (deltaX > 10) {
//         // Swipe vers la gauche
//         currentIndex2++;
//         if (currentIndex2 >= carousel2.querySelectorAll(".members-articles").length) {
//             currentIndex2 = 0;
//         }
//         showSlide2(currentIndex2);
//     } else if (deltaX < -10) {
//         // Swipe vers la droite
//         currentIndex2--;
//         if (currentIndex2 < 0) {
//             currentIndex2 = carousel2.querySelectorAll(".members-articles").length - 1;
//         }
//         showSlide2(currentIndex2);
//     }
// });

// // Afficher la première diapositive au chargement de la page
// showSlide2(currentIndex2);


// // Carousel menu section Client 

// // Wait for the document to load
// document.addEventListener("DOMContentLoaded", function () {
//     // Select carousel elements
//     const carouselContainer3 = document.querySelector('.carousel-container3');
//     const carousel3 = document.querySelector('.carousel3');
//     const prevBtn3 = document.querySelector('.prevBtn3');
//     const nextBtn3 = document.querySelector('.nextBtn3');
//       // Initialize variables 
//     let currentIndex3 = 0;
//     let isAnimating3 = false;
//     let touchStartX3 = 0;
//     let touchEndX3 = 0;
//     // Function to display the current slide 
//     function showSlide3(index) {
//         const carouselWidth = carousel3.offsetWidth;
//         carousel3.style.transform = `translateX(-${index * carouselWidth}px)`;
//     }
//     // Function to go to the next slide 
//     function nextSlide() {
//         if (!isAnimating3) {
//             currentIndex3++;
//             if (currentIndex3 >= carousel3.children.length) {
//                 currentIndex3 = 0;
//             }
//             showSlide3(currentIndex3);
//         }
//     }
//      // Function to go to the previous slide 
//     function prevSlide() {
//         if (!isAnimating3) {
//             currentIndex3--;
//             if (currentIndex3 < 0) {
//                 currentIndex3 = carousel3.children.length - 1;
//             }
//             showSlide3(currentIndex3);
//         }
//     }
//      // Event to go to the next slide when the next button is clicked 
//     nextBtn3.addEventListener('click', function () {
//         nextSlide();
//     });
//       // Event to go to the previous slide when the previous button is clicked 
//     prevBtn3.addEventListener('click', function () {
//         prevSlide();
//     });

//       // Event to go to the previous slide when the previous button is clicked 
//     setInterval(nextSlide, 3000);

//       // Touch swipe 
//     carouselContainer3.addEventListener('touchstart', function (e) {
//         touchStartX3 = e.touches[0].clientX;
//     });

//     carouselContainer3.addEventListener('touchmove', function (e) {
//         touchEndX3 = e.touches[0].clientX;
//     });

//     carouselContainer3.addEventListener('touchend', function () {
//         const touchDiff = touchStartX3 - touchEndX3;
//         if (touchDiff > 50) {
//             nextSlide();
//         } else if (touchDiff < -50) {
//             prevSlide();
//         }
//     });

//      // Display the first slide when the page loads 
//     showSlide3(currentIndex3);
// });


// // Carousel4 Section Blog

// document.addEventListener("DOMContentLoaded", function () {
//     // Select the carousel container and elements
//     const carouselContainer4 = document.querySelector(".carousel-container4");
//     const carousel4 = document.querySelector(".carousel4");
//     const articles4 = document.querySelectorAll(".blog-articles");
//     const articleWidth4 = articles4[0].offsetWidth;
//     let currentIndex4 = 0;
//     let touchStartX = null;

//     // Function to update the carousel display
//     function updateCarousel4() {
//         const translateX4 = -currentIndex4 * articleWidth4;
//         carousel4.style.transform = `translateX(${translateX4}px)`;
//     }

//     // Function to move to the next slide
//     function nextSlide4() {
//         currentIndex4++;
//         if (currentIndex4 >= articles4.length) {
//             currentIndex4 = 0;
//         }
//         updateCarousel4();
//     }

//     // Function to move to the previous slide
//     function prevSlide4() {
//         currentIndex4--;
//         if (currentIndex4 < 0) {
//             currentIndex4 = articles4.length - 1;
//         }
//         updateCarousel4();
//     }

//     // Function to handle touch start event
//     function handleTouchStart(event) {
//         touchStartX = event.touches[0].clientX;
//     }

//     // Function to handle touch move event and detect swipe direction
//     function handleTouchMove(event) {
//         if (touchStartX === null) {
//             return;
//         }

//         const touchEndX = event.touches[0].clientX;
//         const deltaX = touchEndX - touchStartX;

//         // Define the swipe threshold (adjust as needed)
//         const swipeThreshold = 50;

//         if (deltaX > swipeThreshold) {
//             prevSlide4();
//         } else if (deltaX < -swipeThreshold) {
//             nextSlide4();
//         }

//         touchStartX = null;
//     }

//     // Add touch event listeners for swipe support
//     carouselContainer4.addEventListener("touchstart", handleTouchStart);
//     carouselContainer4.addEventListener("touchmove", handleTouchMove);

//     // Optional: Add buttons for navigation
//     const prevBtn4 = document.querySelector(".prevBtn4");
//     const nextBtn4 = document.querySelector(".nextBtn4");

//     if (prevBtn4 && nextBtn4) {
//         prevBtn4.addEventListener("click", prevSlide4);
//         nextBtn4.addEventListener("click", nextSlide4);
//     }

//     // Initial update of the carousel
//     updateCarousel4();
// });

// // Carousel of section pricing 

// document.addEventListener("DOMContentLoaded", function () {
//     // Select elements of carousel #5
//     const carouselContainer5 = document.querySelector(".carousel-container5");
//     const pricingBlock = document.querySelector(".pricing-block");
//     const priceCards = document.querySelectorAll(".price-card");
//     const cardWidth = priceCards[0].offsetWidth;
//     let currentIndex5 = 0;
//     let touchStartX = null;

//     // Function to update the carousel display
//     function updateCarousel5() {
//         const translateX5 = -currentIndex5 * cardWidth;
//         pricingBlock.style.transform = `translateX(${translateX5}px)`;
//     }

//     // Function to move to the next slide
//     function nextSlide5() {
//         currentIndex5++;
//         if (currentIndex5 >= priceCards.length) {
//             currentIndex5 = 0;
//         }
//         updateCarousel5();
//     }

//     // Function to move to the previous slide
//     function prevSlide5() {
//         currentIndex5--;
//         if (currentIndex5 < 0) {
//             currentIndex5 = priceCards.length - 1;
//         }
//         updateCarousel5();
//     }

//     // Function to handle touch event at the start
//     function handleTouchStart(event) {
//         touchStartX = event.touches[0].clientX;
//     }

//     // Function to handle touch swipe event and detect the swipe direction
//     function handleTouchMove(event) {
//         if (touchStartX === null) {
//             return;
//         }

//         const touchEndX = event.touches[0].clientX;
//         const deltaX = touchEndX - touchStartX;

//         // Set the swipe threshold (adjust if needed)
//         const swipeThreshold = 50;

//         if (deltaX > swipeThreshold) {
//             prevSlide5();
//         } else if (deltaX < -swipeThreshold) {
//             nextSlide5();
//         }

//         touchStartX = null;
//     }

//     // Add touch event listeners to support swipe
//     carouselContainer5.addEventListener("touchstart", handleTouchStart);
//     carouselContainer5.addEventListener("touchmove", handleTouchMove);

//     // Optional: Add navigation buttons
//     const prevBtn5 = document.querySelector(".prevBtn5");
//     const nextBtn5 = document.querySelector(".nextBtn5");

//     if (prevBtn5 && nextBtn5) {
//         prevBtn5.addEventListener("click", prevSlide5);
//         nextBtn5.addEventListener("click", nextSlide5);
//     }

//     // Initial update of the carousel
//     updateCarousel5();
// });
