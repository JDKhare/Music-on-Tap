window.addEventListener('load', () => {
    const audiotracks = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "rgb(255, 223, 40)",
        "rgb(93, 243, 34)",
        "rgb(243, 100, 34)",
        "rgb(34, 125, 243)",
        "rgb(142, 34, 243)",
        "rgb(243, 34, 173)"
    ];
    pads.forEach((colorpad, index) => {
        colorpad.addEventListener('click', function () {
            audiotracks[index].currentTime = 0;
            audiotracks[index].play();
            createBubbles(index);
        });
    });
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
    }; 
});

