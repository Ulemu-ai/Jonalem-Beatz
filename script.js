let beats = [
  { title: "Midnight Amapiano", genre: "Amapiano", file: "", locked: true },
  { title: "Street Drill", genre: "Drill", file: "", locked: true }
];

const beatsEl = document.getElementById("beats");
const searchInput = document.getElementById("search");
const filters = document.querySelectorAll(".filter");

function renderBeats(list) {
  beatsEl.innerHTML = "";
  list.forEach((beat, i) => {
    const card = document.createElement("div");
    card.className = "beat-card";
    card.dataset.genre = beat.genre;

    card.innerHTML = `
      <h3>${beat.title}</h3>
      <div class="genre">${beat.genre}</div>
      <audio controls data-index="${i}"></audio>
      <button class="glow-btn buy-btn">Buy / Unlock</button>
    `;
    beatsEl.appendChild(card);
  });
}

renderBeats(beats);

/* SEARCH */
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  renderBeats(beats.filter(b => b.title.toLowerCase().includes(q)));
});

/* FILTER */
filters.forEach(btn => {
  btn.onclick = () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const g = btn.dataset.genre;
    renderBeats(g === "All" ? beats : beats.filter(b => b.genre === g));
  };
});

/* UPLOAD */
document.getElementById("uploadBtn").onclick = () => {
  const title = titleInput.value;
  const genre = genreInput.value;
  const file = fileInput.files[0];

  if (!title || !file) return alert("Fill all fields");

  beats.push({ title, genre, file: URL.createObjectURL(file), locked: true });
  renderBeats(beats);

  titleInput.value = "";
  fileInput.value = "";
};
