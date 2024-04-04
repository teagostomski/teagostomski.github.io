const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]

/* Declaring the alternative text for each image file */
const alts = {
    "pic1.jpg" : "Ralphie running",
    "pic2.jpg" : "Folsom Field",
    "pic3.jpg" : "Prime Time",
    "pic4.jpg" : "Cu Boulder Campus",
    "pic5.jpg" : "Cheering Fans"
}
/* Looping through images */

for (const i of filenames) {

const nalt = alts[i];
const nsrc = `images/${i}`;
const newImage = document.createElement('img');
newImage.setAttribute('src', nsrc);
newImage.setAttribute('alt', nalt);
thumbBar.appendChild(newImage);

newImage.addEventListener("click", () =>{
    displayedImage.setAttribute("src",nsrc);
    displayedImage.setAttribute("alt",nalt);
})
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    const btnCLass = btn.getAttribute("class");

    if(btnCLass == "dark"){
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    else{
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

    }

});