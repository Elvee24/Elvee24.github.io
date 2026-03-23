// Mouse Flicker

const vignette = document.querySelector('.vignette');
let mouseX = 50;
let mouseY = 50;

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    setInterval(() => {
    const jitter = (Math.random() - 0.5) * 1.5;
    const flickerDepth = Math.random() > 0.9 ? 70 : 40;
    const opacity = Math.random() > 0.95 ? 0.2 : 1;
    
    const x = mouseX + jitter;
    const y = mouseY + jitter;
    
    vignette.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 10%, rgba(0,0,0,0.95) 50%)`;
});


// Wrong End Glitch

const subtitle = document.querySelector('.blood-text');
const creepyMessages = [
    "It's all your fault!",
    "I will make your life miserable for what you did...",
    "How could you...",
    "Don't split up! That's how people die in horror movies!",
    "HELP ME"
];

function triggerGlitch() {
    const originalText = subtitle.innerText;
    const randomMessage = creepyMessages[Math.floor(Math.random() * creepyMessages.length)];
    
    subtitle.innerText = randomMessage;
    subtitle.style.color = "#ff0000";
    
    setTimeout(() => {
        subtitle.innerText = originalText;
        subtitle.style.color = "#d1d1d1";
    }, 1000);
}

setInterval(() => {
    if (Math.random() > 0.7) triggerGlitch();
}, 3000);
