let container = document.querySelector('container');

document.getElementById('playButton').addEventListener('click', function() {
    var song = document.getElementById('birthdaySong');
    var hiddenMessage = document.getElementById('hiddenMessage');
    song.play();
    hiddenMessage.classList.remove('hidden');


    // heart 
    const creatHeart = () => {
        let heart = document.createElement("div");
        
        heart.classList.add("heart");
    
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
        heart.innerHTML = "💗";
    
        document.body.appendChild(heart);
    
        setTimeout(() => {
            heart.remove()
        }, 5000);
    }
    
    setInterval(creatHeart, 300);
});


// const creatHeart = () => {
//     let heart = document.createElement("div");
    
//     heart.classList.add("heart");

//     heart.style.left = Math.random() * 100 + "vw";
//     heart.style.animationDuration = Math.random() * 2 + 3 + "s";

//     heart.innerHTML = "💜";

//     document.body.appendChild(heart);

//     setTimeout(() => {
//         heart.remove()
//     }, 5000);
// }

// setInterval(creatHeart, 300);