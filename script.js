const beats = {
  Afrobeats: [
    { name: "12 January Afro", file: "Beatz/Afrobeats/12-january-afro.mp3" },
    { name: "Fasha 2026", file: "Beatz/Afrobeats/fasha-2026.mp3" },
    { name: "Foster Afrodancehall", file: "Beatz/Afrobeats/foster-afrodancehall.mp3" },
    { name: "Full Beat", file: "Beatz/Afrobeats/full-beat.mp3" },
    { name: "Mbambande Jonalem Beatz", file: "Beatz/Afrobeats/mbambande-jonalem-beatz.mp3" }
  ]
};

function openGenre(genre) {
  const container = document.getElementById("beatsContainer");
  const title = document.getElementById("genreTitle");

  title.innerText = genre + " Beats (20s Demo Preview)";
  container.innerHTML = "";

  beats[genre].forEach((beat, index) => {
    container.innerHTML += `
      <div class="beat-card">
        <h3>${beat.name}</h3>

        <audio id="audio${index}" src="${beat.file}"></audio>

        <button onclick="playDemo('audio${index}')">▶ Play 20s Demo</button>
        <button class="locked">🔒 Locked</button>
      </div>
    `;
  });
}

function playDemo(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    audio.pause();
  }, 20000);
}
