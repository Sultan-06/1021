const letters = [
  {
    title: "A birthday letter for you",
    icon: "🎂",
    note: "My Dearest Chloe,\n\nHappy Birthday to the girl who makes every single day feel brighter, warmer, and full of laughter! 🎉💖\n\nEvery memory we've made—from our first coffee date to late-night drives and uncontrollable laugh fests—is my favorite treasure. Thank you for your kindness, your radiant smile, and for being you.\n\nHere's to your best, happiest, most magical year yet. I love you endlessly! ❤️"
  },
  {
    title: "Open when you need a laugh 😂",
    icon: "😂",
    note: "Remember that time we tried to look super cool and sophisticated, and within 5 minutes one of us spilled our drink and couldn't stop giggling?\n\nWhenever you're having a serious day, just remember: life with you is my favorite comedy show, and your laugh is an instant cure for anything! 🤪💛"
  },
  {
    title: "Open when you miss me ❤️",
    icon: "❤️",
    note: "Hey birthday girl,\n\nIf you're reading this and missing me, close your eyes for 3 seconds: I'm sending you the biggest, warmest bear hug right now! 🤗\n\nNo matter where we are, you're always on my mind. Text me 'I opened the pink envelope' right now and I'll call you immediately! 💕"
  },
  {
    title: "Open when you're stressed 🌿",
    icon: "🌿",
    note: "Take a slow, deep breath in... and let it out. 🌬️✨\n\nYou are the strongest, smartest, and most capable person I know. Whatever is on your plate right now, you don't have to carry it alone—I'm always in your corner cheering you on (and ready to bring you snacks). You've got this! 🍵💚"
  },
  {
    title: "Open when you want to know how much I love you 🥰",
    icon: "🥰",
    note: "More than all the stars in the night sky, more than cozy Sunday mornings, and even more than dessert!\n\nI love the way your eyes light up when you're excited, the way you care so deeply about the people around you, and the way just being near you feels like home. Happy Birthday, my love! 💖✨"
  }
];

const lettersContainer = document.getElementById("vault-letters");
const modal = document.getElementById("vault-modal");
const modalIcon = document.getElementById("vault-modal-icon");
const modalTitle = document.getElementById("vault-modal-title");
const modalNote = document.getElementById("vault-modal-note");

function openLetter(letter) {
  modalIcon.textContent = letter.icon;
  modalTitle.textContent = letter.title;
  modalNote.textContent = letter.note;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.getElementById("vault-modal-close").focus();
}

function closeLetter() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

letters.forEach((letter) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "envelope-card flex min-h-32 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-[#3A2A29] bg-[#FCEEE2] p-5 text-center font-bold text-[#3A2A29] shadow-sm transition hover:-translate-y-1 hover:bg-[#FDE8B2]";

  const icon = document.createElement("span");
  icon.className = "text-4xl";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = letter.icon;
  button.append(icon, document.createTextNode(letter.title));
  button.addEventListener("click", () => openLetter(letter));
  lettersContainer.appendChild(button);
});

document.getElementById("vault-modal-close").addEventListener("click", closeLetter);
document.getElementById("vault-modal-done").addEventListener("click", closeLetter);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeLetter();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) closeLetter();
});
