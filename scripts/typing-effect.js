//Text to type
const textArray = [
  { element: "typed-heading", text: "Hi, I'm Tyler Kuhn." },
  {
    element: "typed-paragraph",
    text: "Front-End Developer | Creative Thinker | Problem Solver",
  },
];

//Other Variables
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenPhrases = 1000;
const imgSrc = "styles/resources/images/profile_pic.jpg";
const imgAlt = "Profile Picture of Tyler Kuhn";
const imgClass = "img-fluid";
const img = document.createElement("img");
const imgContainer = document.getElementById("profile-pic");
const cursor = document.getElementsByClassName("cursor");

//Setting Attributes
img.setAttribute("src", imgSrc);
img.setAttribute("alt", imgAlt);
img.setAttribute("class", imgClass);

// Tracks which element is being typed
let currentIndex = 0; 

// Tracks character position within the text
let charIndex = 0; 


// Start typing
function type() {
  const currentElement = document.getElementById(
    textArray[currentIndex].element
  );
  const currentText = textArray[currentIndex].text;

  if (charIndex < currentText.length) {
    currentElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(() => {
      charIndex = 0; // Reset character index for next element
      currentIndex++;
      if (currentIndex < textArray.length) {
        type(); // Start typing the next element
      } else {
        imgContainer.appendChild(img);
        setTimeout(() => {
          img.classList.add("visible");
        });
      }
    }, delayBetweenPhrases);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type(); // Start the typing effect
});
