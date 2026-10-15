const memories = [
  {
    caption: "First Date ☕",
    note: "I was so nervous before you walked in, and then we talked for hours until the cafe closed. Best coffee ever. ☕❤️",
    art: "☕"
  },
  {
    caption: "Road Trip 🚗",
    note: "Singing at the top of our lungs with the windows down and pulling over to look at the stars. 🌠🚗",
    art: "🚗"
  },
  {
    caption: "Stargazing ✨",
    note: "Wrapped up in one giant blanket under the night sky. None of those stars shine as bright as you. ✨🌙",
    art: "🌙"
  },
  {
    caption: "Our Laugh Fest 😂",
    note: "I don't even remember what started the joke, just that we laughed until our stomachs hurt. 😂💕",
    art: "😂"
  },
  {
    caption: "Coffee Dates ☕",
    note: "Every little coffee date turns into my favorite part of the day when I'm with you. ☕💖",
    art: "🥐"
  },
  {
    caption: "Singing Together 🎤",
    note: "Our car concerts may be off-key, but they will always be number one on my playlist. 🎶",
    art: "🎤"
  },
  {
    caption: "Cozy Sundays 🧸",
    note: "Slow mornings, a cozy blanket, and nowhere else I'd rather be than right beside you. 🧸",
    art: "🧸"
  },
  {
    caption: "A Perfect Picnic 🧺",
    note: "Good food, fresh air, and your smile made an ordinary afternoon feel magical. 🌷",
    art: "🧺"
  },
  {
    caption: "Little Adventures 🗺️",
    note: "Even when we don't know where we're going, every adventure is better with you. 🗺️",
    art: "🗺️"
  },
  {
    caption: "Dancing Together 💃",
    note: "One song, a little dancing, and a memory I want to keep forever. 💃🕺",
    art: "💃"
  },
  {
    caption: "Our Sweet Treat 🍰",
    note: "Sharing dessert with you is sweet, but getting to share life with you is even sweeter. 🍰",
    art: "🍰"
  },
  {
    caption: "My Favorite Person 💖",
    note: "Of all the moments we've shared, my favorite is simply getting to be with you. Happy Birthday! 💖",
    art: "💖"
  }
];

const palette = ["#FDE8B2", "#F9D5D3", "#DFD3E8", "#D4E4D2"];
const grid = document.getElementById("polaroid-grid");

memories.forEach((memory, index) => {
  const scene = document.createElement("button");
  scene.type = "button";
  scene.className = `polaroid-scene aspect-[4/5] min-h-52 relative ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`;
  scene.setAttribute("aria-label", `${memory.caption} memory. Tap to read its note.`);
  scene.setAttribute("aria-pressed", "false");

  const card = document.createElement("span");
  card.className = "polaroid-card";

  const front = document.createElement("span");
  front.className = "polaroid-face";

  const tape = document.createElement("span");
  tape.className = "washi-tape";
  tape.setAttribute("aria-hidden", "true");

  const art = document.createElement("span");
  art.className = "memory-art";
  art.style.backgroundColor = palette[index % palette.length];
  art.setAttribute("aria-hidden", "true");
  art.textContent = memory.art;

  const caption = document.createElement("span");
  caption.className = "memory-caption";
  caption.textContent = memory.caption;
  front.append(tape, art, caption);

  const back = document.createElement("span");
  back.className = "polaroid-face polaroid-back";

  const note = document.createElement("span");
  note.className = "memory-note";
  note.textContent = memory.note;

  const hint = document.createElement("span");
  hint.className = "memory-hint";
  hint.textContent = "Tap to flip back ↩";
  back.append(note, hint);
  card.append(front, back);
  scene.append(card);

  scene.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    scene.setAttribute("aria-pressed", String(flipped));
  });

  grid.append(scene);
});
