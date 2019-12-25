window.addEventListener('load', () => {
    const audiotracks = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#f3ffff",
        "#000fff",
        "#000fff",
        "#000fff",
        "#000fff",
        "#000fff"
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

