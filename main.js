// Add images
const images = ['https://cdn.merchantmaverick.com/wp-content/uploads/2020/03/online-tutoring-business.jpg', 'https://www.bizstim.com/assets/frontend/images/news/marketing-dos-and-donts-for-managing-a-tutoring-business/testimonials.png', 'https://www.bizstim.com/assets/frontend/images/news/marketing-dos-and-donts-for-managing-a-tutoring-business/credibility.png'];

let currentImgIndex = 0;

// Grab a main image
const mainImage = document.getElementById('mainImage');

// Set a main image attribute from images array
mainImage.setAttribute('src', images[currentImgIndex]);

// Grab a next button 
const nextBtn = document.querySelector('.next'); 
// Grab a previous button 
const previousBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    currentImgIndex += 1;
    if(currentImgIndex > images.length -1){
        currentImgIndex = 0;
    }
    mainImage.setAttribute('src', images[currentImgIndex]);
})

previousBtn.addEventListener('click', () => {
    currentImgIndex -= 1;
    if(currentImgIndex <= -1){
        currentImgIndex = images.length -1;
    }
    mainImage.setAttribute('src', images[currentImgIndex]);
})


// let currentImgIndex = 0;
// const testimonialLength = 3;

// const next = document.querySelector('.next'); 
// const prev = document.querySelector('.prev');

// next.addEventListener('click', ()=>{
//     if(currentImgIndex >= testimonialLength.length-1){
//         currentImgIndex = 0;
//     }else{
//         currentImgIndex++;
//         const currentImg = document.getElementById('test_'+ currentImgIndex);

//         if(currentImg) {
//             currentImg.classList.remove('display-none');

//             const testimonials = document.querySelectorAll('.testimonial');
//             testimonials.forEach(function(item) {
//                 if(item.id.split('_')[1] != currentImgIndex) {
//                     item.classList.add('display-none');
//                 }
//             });
//         }
//     }
// });

// prev.addEventListener('click', ()=>{
//     if(currentImgIndex <=0){
//         currentImgIndex = testimonialLength.length-1;
//     }else{
//         currentImgIndex--;
//         const currentImg = document.getElementById('test_'+ currentImgIndex);

//         if(currentImg) {
//             currentImg.classList.remove('display-none');

//             const testimonials = document.querySelectorAll('.testimonial');
//             testimonials.forEach(function(item) {
//                 if(item.id.split('_')[1] != currentImgIndex) {
//                     item.classList.add('display-none');
//                 }
//             });
//         }
//     }
// });


//google form here: 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOk41poG_3p7dgpISLsxtmJui4EHQzK7NC4N4BJnrysQx6qYw/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code
            const email = document.getElementById('email')
            email.value = ""

            const  firstname= document.getElementById('first_name')
            firstname.value = ""

            const lastname = document.getElementById('last_name')
            lastname.value = ""



            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})


const beginnertitle = document.getElementById('beginnertitle'); 
const intermediatetitle = document.getElementById('intermediatetitle'); 
const advancedtitle = document.getElementById('advancedtitle'); 


const begtitlelist = document.getElementById('begtitlelist'); 
const intertitlelist = document.getElementById('intertitlelist'); 
const advtitlelist = document.getElementById('advtitlelist'); 

beginnertitle.addEventListener('click', ()=>{
    begtitlelist.setAttribute('style', 'background-color: yellow'); 
    intertitlelist.setAttribute('style', 'background-color: #ccc'); 
    advtitlelist.setAttribute('style', 'background-color: #ccc'); 
}); 

intermediatetitle.addEventListener('click', ()=>{
    begtitlelist.setAttribute('style', 'background-color: #ccc'); 
    intertitlelist.setAttribute('style', 'background-color: yellow'); 
    advtitlelist.setAttribute('style', 'background-color: #ccc'); 
});

advancedtitle.addEventListener('click', ()=>{
    begtitlelist.setAttribute('style', 'background-color: #ccc'); 
    intertitlelist.setAttribute('style', 'background-color: #ccc'); 
    advtitlelist.setAttribute('style', 'background-color: yellow'); 
}); 
