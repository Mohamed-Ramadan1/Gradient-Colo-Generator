const gradientBox = document.querySelector(".gradient-box");
const slectMenu = document.querySelector(".slect-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refresh = document.querySelector(".refresh");
const copy = document.querySelector(".copy");

// function to genrate hex color .
const getRandomColor = () => {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
    if(isRandom){
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${slectMenu.value} ,${colorInputs[0].value},${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background:${gradient}`;
};


// function to copy the gradient from the textarea .
const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copy.innerText = "code copyed ";
    setTimeout(()=> copy.innerText = "copy code",3000)
    
};


colorInputs.forEach(input => {
    input.addEventListener("input", ()=>generateGradient(false));
});

slectMenu.addEventListener("change", () => generateGradient(false));
refresh.addEventListener("click", () => generateGradient(true));

copy.addEventListener("click", copyCode);
