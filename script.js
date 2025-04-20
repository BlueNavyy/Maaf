document.getElementById("maafkanBtn").addEventListener("click", function() {
    alert("Makasii yaa udah mau maafin. 🥹\nKedepannya Kalo ada salah lagi, kamu yang aku salahin:p");
});
if (music.paused) {
    music.play();
    toggleBtn.textContent = 'Pause Musik';
    toggleBtn.classList.add('playing');
} else {
    music.pause();
    toggleBtn.textContent = 'Play Musik';
    toggleBtn.classList.remove('playing');
}
