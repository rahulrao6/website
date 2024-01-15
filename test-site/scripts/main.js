const myImage = document.querySelector("img");
const images = ["images/image.png", "images/image2.png"]; // Add paths to your images
let currentImgIndex = 0;

myImage.onclick = () => {
currentImgIndex = (currentImgIndex + 1) % images.length;
myImage.setAttribute("src", images[currentImgIndex]);
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName || myName.trim() === "") {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to Rahul's Website, ${myName}!`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Rahul's Website, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };

  //better scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
//themes
  const toggleThemeButton = document.querySelector('#theme-toggle');
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Collapsible Sections
document.querySelectorAll('.collapsible').forEach(collapsible => {
    collapsible.addEventListener('click', function () {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  });
      
