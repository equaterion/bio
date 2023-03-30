function animateText() {
    const text = document.getElementById("animatedText").getAttribute("data-text");
    const animatedText = document.getElementById("animatedText");
    const textLength = text.length;
    let i = 0;
    let interval;
    
    function addLetter() {
        animatedText.innerHTML += text.charAt(i);
        i++;
        if (i >= textLength) {
            clearInterval(interval);
        }
    }
    
    addLetter();
    interval = setInterval(addLetter, 100);
    
    setInterval(function() {
        animatedText.scrollIntoView(false);
    }, 50);
}

window.onload = animateText;