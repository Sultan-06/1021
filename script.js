// --- DEFAULT DATA STATE ---
const DEFAULT_STATE = {
  name: "CHLOE",
  songTitle: '"Our Song"',
  mainBirthdayLetter: `My Dearest Chloe,\n\nHappy Birthday to the girl who makes every single day feel brighter, warmer, and full of laughter! 🎉💖\n\nEvery memory we've made—from our first coffee date to late-night drives and uncontrollable laugh fests—is my favorite treasure. Thank you for your kindness, your radiant smile, and for being you.\n\nHere's to your best, happiest, most magical year yet. I love you endlessly! ❤️`,
  polaroids: [
    {
      caption: "First Date ☕",
      tilt: "-rotate-6",
      backNote: "I was so nervous before you walked in, and then we talked for 4 hours straight until the cafe closed! Best coffee ever. ☕❤️",
      customImg: ""
    },
    {
      caption: "Road trip 🚗",
      tilt: "rotate-6",
      backNote: "Singing at the top of our lungs with the windows down and pulling over just to look at the shooting stars. 🌠🚗",
      customImg: ""
    },
    {
      caption: "Stargazing ✨",
      tilt: "-rotate-3",
      backNote: "Wrapped up in one giant blanket under the night sky. Still convinced none of those stars shine as bright as your eyes. ✨🌙",
      customImg: ""
    },
    {
      caption: "Our laugh fest 😂",
      tilt: "rotate-3",
      backNote: "I still don't even remember what started the joke, just that we laughed until our stomachs hurt! My favorite sound in the world. 😂💕",
      customImg: "",
      badge: "Click to flip!"
    }
  ],
  envelopes: [
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
  ],
  trivia: [
    {
      question: "Riddle #1: What was the best part of our first date? ☕",
      options: [
        "Talking & laughing so long we lost track of time 💬",
        "Awkwardly staring at the menu for 45 minutes 📖",
        "Arguing over whether pineapple belongs on pizza 🍍"
      ],
      correct: 0
    },
    {
      question: "Riddle #2: What happens every time 'Our Song' comes on? 🎵",
      options: [
        "We politely sit in silence 🤫",
        "Instant car concert & terrible high notes! 🎤🚗",
        "We change the radio station immediately 📻"
      ],
      correct: 1
    },
    {
      question: "Riddle #3: Who is officially the cutest, most amazing birthday girl in the world today? 👑",
      options: [
        "Definitely me! 💖",
        "Also me, obviously! 🥰",
        "1000% ME! 🎉"
      ],
      correct: -1 // -1 means ALL answers are correct!
    }
  ]
};

let appState = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem("birthday_scrapbook_state_v1");
    if (saved) {
      return { ...DEFAULT_STATE, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Could not read localStorage", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  try {
    localStorage.setItem("birthday_scrapbook_state_v1", JSON.stringify(appState));
  } catch (e) {
    console.warn("Could not save to localStorage", e);
  }
}

// --- HAND-DRAWN SVG ILLUSTRATIONS FOR POLAROIDS ---
function getPolaroidSVG(index) {
  const svgs = [
    // 0: First Date Cafe
    `<svg viewBox="0 0 140 120" class="w-full h-full bg-[#F5E6D3]">
      <rect width="140" height="120" fill="#F2DEC4"/>
      <circle cx="70" cy="40" r="38" fill="#FDE8B2" opacity="0.6"/>
      <!-- Cafe Table -->
      <ellipse cx="70" cy="100" rx="34" ry="12" fill="#E6C29F" stroke="#3A2A29" stroke-width="2"/>
      <!-- Two Coffee Cups -->
      <rect x="54" y="88" width="9" height="8" rx="2" fill="#FFFDF7" stroke="#3A2A29" stroke-width="1.6"/>
      <rect x="76" y="88" width="9" height="8" rx="2" fill="#FFFDF7" stroke="#3A2A29" stroke-width="1.6"/>
      <!-- Boy Left -->
      <path d="M18,118 C20,88 42,86 48,118 Z" fill="#A5B4FC" stroke="#3A2A29" stroke-width="2"/>
      <circle cx="34" cy="68" r="14" fill="#FAD7C0" stroke="#3A2A29" stroke-width="2"/>
      <path d="M20,66 C20,50 48,50 48,64 C40,58 28,58 20,66 Z" fill="#6D4333" stroke="#3A2A29" stroke-width="2"/>
      <!-- Girl Right -->
      <path d="M92,118 C96,88 118,88 122,118 Z" fill="#F4A6A0" stroke="#3A2A29" stroke-width="2"/>
      <circle cx="106" cy="68" r="14" fill="#FAD7C0" stroke="#3A2A29" stroke-width="2"/>
      <path d="M94,64 C94,48 122,50 120,85 C116,65 104,60 94,64 Z" fill="#7B4B3A" stroke="#3A2A29" stroke-width="2"/>
      <!-- Heart above table -->
      <path d="M70,58 C67,53 61,55 63,61 C65,65 70,68 70,68 C70,68 75,65 77,61 C79,55 73,53 70,58 Z" fill="#F28B82" stroke="#3A2A29" stroke-width="1.5"/>
    </svg>`,
    // 1: Road Trip Night Sky
    `<svg viewBox="0 0 140 120" class="w-full h-full">
      <rect width="140" height="120" fill="#3B3355"/>
      <!-- Stars & Shooting Star -->
      <circle cx="28" cy="24" r="2" fill="#FDE8B2"/>
      <circle cx="110" cy="18" r="2.5" fill="#FDE8B2"/>
      <circle cx="85" cy="36" r="1.8" fill="#FFF"/>
      <line x1="65" y1="28" x2="105" y2="12" stroke="#FDE8B2" stroke-width="2" stroke-linecap="round"/>
      <!-- Hills -->
      <path d="M0,85 Q45,68 95,82 Q120,88 140,78 L140,120 L0,120 Z" fill="#5D5179" stroke="#3A2A29" stroke-width="2"/>
      <!-- Car Hood & Couple -->
      <path d="M22,120 L34,94 L106,94 L118,120 Z" fill="#84A9C0" stroke="#3A2A29" stroke-width="2"/>
      <circle cx="52" cy="76" r="13" fill="#FAD7C0" stroke="#3A2A29" stroke-width="2"/>
      <path d="M38,76 C38,60 64,60 64,86" fill="#7B4B3A" stroke="#3A2A29" stroke-width="2"/>
      <circle cx="84" cy="74" r="13" fill="#FAD7C0" stroke="#3A2A29" stroke-width="2"/>
      <path d="M71,70 C71,56 97,56 97,70 Z" fill="#6D4333" stroke="#3A2A29" stroke-width="2"/>
      <path d="M40,120 C42,92 66,92 68,120 Z" fill="#F4A6A0" stroke="#3A2A29" stroke-width="2"/>
      <path d="M68,120 C70,92 98,92 100,120 Z" fill="#D5C4E8" stroke="#3A2A29" stroke-width="2"/>
    </svg>`,
    // 2: Stargazing Under Blanket
    `<svg viewBox="0 0 140 120" class="w-full h-full">
      <rect width="140" height="120" fill="#2D2A4A"/>
      <circle cx="24" cy="28" r="2" fill="#FDE8B2"/>
      <circle cx="115" cy="25" r="2.2" fill="#FDE8B2"/>
      <line x1="58" y1="26" x2="92" y2="14" stroke="#FDE8B2" stroke-width="2" stroke-linecap="round"/>
      <!-- Green Meadow -->
      <path d="M0,88 Q70,74 140,88 L140,120 L0,120 Z" fill="#6B7F6E" stroke="#3A2A29" stroke-width="2"/>
      <!-- Cozy Blanket Mound -->
      <path d="M24,110 C28,68 112,68 116,110 Z" fill="#7FA0C4" stroke="#3A2A29" stroke-width="2"/>
      <circle cx="56" cy="76" r="11" fill="#FAD7C0" stroke="#3A2A29" stroke-width="2"/>
      <circle cx="82" cy="76" r="11" fill="#FAD7C0" stroke="#3A2A29" stroke-width="2"/>
      <path d="M44,92 C54,82 86,82 96,92 L92,110 L48,110 Z" fill="#FDE8B2" stroke="#3A2A29" stroke-width="2"/>
    </svg>`,
    // 3: Our Laugh Fest Park Walk
    `<svg viewBox="0 0 140 120" class="w-full h-full">
      <rect width="140" height="120" fill="#FFF5E4"/>
      <!-- Autumn Pink & Green Trees -->
      <circle cx="22" cy="42" r="28" fill="#F9D5D3" stroke="#3A2A29" stroke-width="1.8"/>
      <circle cx="122" cy="38" r="26" fill="#D4E4D2" stroke="#3A2A29" stroke-width="1.8"/>
      <!-- Park Path -->
      <path d="M0,85 Q70,78 140,85 L140,120 L0,120 Z" fill="#C5D6A7" stroke="#3A2A29" stroke-width="1.8"/>
      <path d="M48,82 L32,120 L108,120 L92,82 Z" fill="#EAD7B7" stroke="#3A2A29" stroke-width="1.8"/>
      <!-- Couple Walking Hand in Hand -->
      <circle cx="55" cy="48" r="10" fill="#FAD7C0" stroke="#3A2A29" stroke-width="1.8"/>
      <path d="M44,86 L48,60 L62,60 L66,86 Z" fill="#FDE8B2" stroke="#3A2A29" stroke-width="1.8"/>
      <circle cx="85" cy="46" r="10" fill="#FAD7C0" stroke="#3A2A29" stroke-width="1.8"/>
      <path d="M74,86 L78,58 L92,58 L96,86 Z" fill="#84A9C0" stroke="#3A2A29" stroke-width="1.8"/>
      <!-- Holding Hands -->
      <path d="M64,68 L76,68" stroke="#3A2A29" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  ];
  return svgs[index % svgs.length];
}

// --- RENDER UI FROM STATE ---
function renderApp() {
  const cleanName = (appState.name || "CHLOE").trim();

  // Update page title
  document.title = `Happy Birthday, ${cleanName}! 🎉💖`;
  document.getElementById("hero-name-display").textContent = `${cleanName.toUpperCase()}!`;
  document.getElementById("song-title-display").textContent = appState.songTitle || '"Our Song"';

  // Render Polaroid Grid
  const grid = document.getElementById("polaroid-grid");
  grid.innerHTML = "";
  appState.polaroids.forEach((p, idx) => {
    const tapePositions = [
      "-top-2.5 left-6 -rotate-12",
      "-top-2.5 left-10 rotate-6",
      "-top-2.5 right-6 rotate-12",
      "-bottom-2.5 right-3 -rotate-25"
    ];
    const cardWrap = document.createElement("div");
    cardWrap.className = `polaroid-scene h-40 sm:h-44 relative ${p.tilt}`;
    cardWrap.innerHTML = `
      <div class="washi-tape ${tapePositions[idx % 4]}"></div>
      ${p.badge ? `
        <div class="absolute -right-5 top-1/2 -translate-y-1/2 bg-[#FFFDF7] px-2.5 py-1 rounded-full sketch-border-sm text-[11px] font-bold text-[#3A2A29] z-30 shadow pointer-events-none whitespace-nowrap">
          ${p.badge}
        </div>
      ` : ""}
      <div class="polaroid-card" id="polaroid-card-${idx}">
        <!-- Front -->
        <div class="polaroid-face">
          <div class="w-full flex-1 overflow-hidden border-2 border-[#3A2A29] rounded-sm bg-[#F5E6D3]">
            ${p.customImg ? `<img src="${p.customImg}" alt="${p.caption}" class="w-full h-full object-cover" onerror="this.style.display='none'"/>` : getPolaroidSVG(idx)}
          </div>
          <p class="font-hand text-lg sm:text-xl font-bold text-center text-[#3A2A29] mt-1 leading-none truncate">
            ${p.caption}
          </p>
        </div>
        <!-- Back -->
        <div class="polaroid-face polaroid-back">
          <p class="font-hand text-base sm:text-lg font-bold text-[#3A2A29] leading-tight overflow-y-auto max-h-full">
            "${p.backNote}"
          </p>
          <span class="text-[10px] font-sans font-bold text-[#3A2A29]/60 mt-1">Tap to flip back ↩</span>
        </div>
      </div>
    `;
    cardWrap.addEventListener("click", () => {
      const cardEl = document.getElementById(`polaroid-card-${idx}`);
      cardEl.classList.toggle("is-flipped");
      playPaperFlipSound();
    });
    grid.appendChild(cardWrap);
  });
}

// --- WEB AUDIO API SYNTHESIZER (Music Box Soundtrack & Sound Effects) ---
let audioCtx = null;
let isPlayingMusic = false;
let musicTimer = null;
let noteIndex = 0;
let melodyPreset = 0;

// Two romantic music-box melodies (Frequencies in Hz)
const MELODIES = [
  // Melody 0: Romantic Music Box Waltz ("Our Song")
  [523.25, 659.25, 783.99, 1046.50, 987.77, 783.99, 659.25, 587.33, 523.25, 659.25, 783.99, 880.00, 783.99, 659.25, 587.33, 659.25],
  // Melody 1: Happy Birthday Music Box
  [392.00, 392.00, 440.00, 392.00, 523.25, 493.88, 392.00, 392.00, 440.00, 392.00, 587.33, 523.25, 392.00, 392.00, 783.99, 659.25, 523.25, 493.88, 440.00]
];

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playMusicBoxNote(freq, duration = 0.45) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);

  // Gentle bell envelope
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.14, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + duration);
}

function playPaperFlipSound() {
  initAudio();
  playMusicBoxNote(587.33, 0.12);
}

function playSparkleChime() {
  initAudio();
  const notes = [523.25, 659.25, 783.99, 1046.50];
  notes.forEach((n, i) => {
    setTimeout(() => playMusicBoxNote(n, 0.35), i * 75);
  });
}

function toggleVinylPlayer() {
  initAudio();
  isPlayingMusic = !isPlayingMusic;
  const disc = document.getElementById("vinyl-disc");
  const arm = document.getElementById("vinyl-tonearm");
  const badge = document.getElementById("vinyl-status-badge");

  if (isPlayingMusic) {
    disc.classList.add("vinyl-spinning");
    arm.classList.add("playing");
    badge.textContent = "⏸️ Playing";
    scheduleNextNote();
  } else {
    disc.classList.remove("vinyl-spinning");
    arm.classList.remove("playing");
    badge.textContent = "▶️ Click to Play";
    clearTimeout(musicTimer);
  }
}

function scheduleNextNote() {
  if (!isPlayingMusic) return;
  const speed = parseFloat(document.getElementById("tempo-slider").value) || 1;
  const currentMelody = MELODIES[melodyPreset];
  const freq = currentMelody[noteIndex % currentMelody.length];
  playMusicBoxNote(freq * (speed > 1.15 ? 1.05 : 1), 0.55);
  spawnFloatingMusicNote();
  noteIndex++;
  musicTimer = setTimeout(scheduleNextNote, 360 / speed);
}

function spawnFloatingMusicNote() {
  const container = document.getElementById("music-notes-container");
  const note = document.createElement("span");
  const symbols = ["♪", "♫", "♬", "💖", "✨"];
  note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  note.className = "absolute text-base font-bold text-[#3A2A29] pointer-events-none transition-all duration-1000";
  note.style.left = `${20 + Math.random() * 65}%`;
  note.style.top = `${25 + Math.random() * 40}%`;
  container.appendChild(note);

  requestAnimationFrame(() => {
    note.style.transform = `translate(${(Math.random() - 0.5) * 40}px, -45px) scale(1.2)`;
    note.style.opacity = "0";
  });
  setTimeout(() => note.remove(), 1000);
}

document.getElementById("vinyl-widget").addEventListener("click", toggleVinylPlayer);

document.getElementById("change-melody-btn").addEventListener("click", () => {
  melodyPreset = (melodyPreset + 1) % MELODIES.length;
  noteIndex = 0;
  const songTitleEl = document.getElementById("song-title-display");
  songTitleEl.textContent = melodyPreset === 1 ? '"Happy Birthday Tune"' : appState.songTitle;
  if (!isPlayingMusic) toggleVinylPlayer();
});

document.getElementById("vinyl-Heart-btn").addEventListener("click", () => {
  launchConfetti({ particleCount: 25, heartsOnly: true });
  playSparkleChime();
});

// --- COUPLE ILLUSTRATION INTERACTION ---
document.getElementById("couple-illustration").addEventListener("click", () => {
  playSparkleChime();
  launchConfetti({ particleCount: 30, heartsOnly: true });
  const bubble = document.getElementById("couple-speech-bubble");
  const compliments = [
    "You're my favorite person in the universe! 💖",
    `Happy Birthday, ${appState.name}! You glow brighter every year! ✨`,
    "So lucky I get to love you! 🥰",
    "Here's to a million more memories together! 🥂💕"
  ];
  bubble.textContent = compliments[Math.floor(Math.random() * compliments.length)];
  bubble.classList.remove("opacity-0");
  setTimeout(() => bubble.classList.add("opacity-0"), 2600);
});

// --- INTERACTIVE BIRTHDAY CAKE & MICROPHONE BLOW DETECTION ---
let candlesLit = true;
let micStream = null;
let micInterval = null;

function blowOutCandles() {
  if (!candlesLit) {
    // Relight candles
    candlesLit = true;
    document.getElementById("candle-flames").classList.remove("hidden");
    document.getElementById("candle-smoke").classList.add("hidden");
    document.getElementById("cake-prompt-text").textContent = "Tap here to blow them out & make a wish!";
    playPaperFlipSound();
    return;
  }

  candlesLit = false;
  document.getElementById("candle-flames").classList.add("hidden");
  const smoke = document.getElementById("candle-smoke");
  smoke.classList.remove("hidden");
  document.getElementById("cake-prompt-text").textContent = "✨ Wish made! (Tap to relight candles 🔥)";
  playSparkleChime();
  launchConfetti({ particleCount: 85 });

  // Stop mic listener if active
  stopMicBlowDetection();
}

document.getElementById("cake-container").addEventListener("click", blowOutCandles);
document.getElementById("blow-candles-btn").addEventListener("click", blowOutCandles);

function stopMicBlowDetection() {
  if (micInterval) clearInterval(micInterval);
  if (micStream) {
    micStream.getTracks().forEach(t => t.stop());
    micStream = null;
  }
  document.getElementById("mic-btn-label").textContent = "Use Mic to Blow";
}

document.getElementById("mic-blow-btn").addEventListener("click", async () => {
  if (micStream) {
    stopMicBlowDetection();
    return;
  }
  try {
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const source = ctx.createMediaStreamSource(micStream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);

    document.getElementById("mic-btn-label").textContent = "Blow now! 🌬️";

    micInterval = setInterval(() => {
      analyser.getByteFrequencyData(data);
      const avg = data.reduce((a, b) => a + b, 0) / data.length;
      if (avg > 48) {
        if (!candlesLit) candlesLit = true;
        blowOutCandles();
      }
    }, 100);
  } catch (err) {
    // Fallback if mic permission denied
    document.getElementById("mic-btn-label").textContent = "Tap Cake to Blow!";
  }
});

// --- OPEN WHEN... DIGITAL VAULT MODALS ---
function openEnvelopeModal(index) {
  playSparkleChime();
  const env = appState.envelopes[index];
  document.getElementById("modal-badge-icon").textContent = env.icon;
  document.getElementById("modal-letter-title").textContent = env.title;
  document.getElementById("modal-letter-body").textContent = env.note;
  const modal = document.getElementById("letter-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLetterModal() {
  const modal = document.getElementById("letter-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// --- TRIVIA MINI-QUEST ---
let currentTriviaStep = 0;

document.getElementById("start-quest-btn").addEventListener("click", () => {
  playSparkleChime();
  currentTriviaStep = 0;
  document.getElementById("trivia-question-view").classList.remove("hidden");
  document.getElementById("trivia-reward-view").classList.add("hidden");
  renderTriviaStep();
  const modal = document.getElementById("trivia-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

function renderTriviaStep() {
  const qObj = appState.trivia[currentTriviaStep];
  document.getElementById("trivia-step-badge").textContent = `Riddle ${currentTriviaStep + 1} of${appState.trivia.length}`;
  document.getElementById("trivia-q-text").textContent = qObj.question;
  document.getElementById("trivia-feedback").classList.add("hidden");

  // Update progress dots
  const dotsContainer = document.getElementById("trivia-progress-dots");
  dotsContainer.innerHTML = appState.trivia.map((_, idx) => `
    <span class="w-3.5 h-3.5 rounded-full border-2 border-[#3A2A29] ${idx <= currentTriviaStep ? 'bg-[#DFB45A]' : 'bg-white'}"></span>
  `).join("");

  const optsContainer = document.getElementById("trivia-options");
  optsContainer.innerHTML = "";
  qObj.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "w-full text-left p-3.5 rounded-xl bg-[#FCEEE2] hover:bg-[#FDE8B2] border-2 border-[#3A2A29] font-bold text-sm text-[#3A2A29] transition transform hover:translate-x-1 flex items-center justify-between";
    btn.innerHTML = `<span>${optText}</span><span>➔</span>`;
    btn.addEventListener("click", () => handleTriviaAnswer(idx));
    optsContainer.appendChild(btn);
  });
}

function handleTriviaAnswer(selectedIndex) {
  const qObj = appState.trivia[currentTriviaStep];
  const isCorrect = qObj.correct === -1 || selectedIndex === qObj.correct;

  if (isCorrect) {
    playSparkleChime();
    currentTriviaStep++;
    if (currentTriviaStep >= appState.trivia.length) {
      // Completed all riddles!
      launchConfetti({ particleCount: 70 });
      document.getElementById("trivia-question-view").classList.add("hidden");
      document.getElementById("trivia-reward-view").classList.remove("hidden");
      document.getElementById("quest-card-title").textContent = "Present Unlocked!";
      document.getElementById("start-quest-btn").textContent = "Read Birthday Letter 💌";
    } else {
      renderTriviaStep();
    }
  } else {
    playPaperFlipSound();
    const fb = document.getElementById("trivia-feedback");
    const wittyLines = [
      "Oops! Incorrect... but you look way too pretty today, so I'll let it slide! 😉 Try again!",
      "Wrong answer, birthday girl! Good thing you're cute! 🥰 Pick another one!",
      "Haha nice try! Since it's your birthday, you get unlimited guesses! 🎉"
    ];
    document.getElementById("trivia-feedback-text").textContent = wittyLines[Math.floor(Math.random() * wittyLines.length)];
    fb.classList.remove("hidden");
  }
}

function closeTriviaModal() {
  const modal = document.getElementById("trivia-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function openMainBirthdayLetter() {
  closeTriviaModal();
  launchConfetti({ particleCount: 100 });
  playSparkleChime();
  document.getElementById("modal-badge-icon").textContent = "🎂💖";
  document.getElementById("modal-letter-title").textContent = `Happy Birthday, ${appState.name}!`;
  document.getElementById("modal-letter-body").textContent = appState.mainBirthdayLetter;
  const modal = document.getElementById("letter-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

// --- DINNER INVITATION & RUNAWAY "NO" BUTTON ---
const noWrapper = document.getElementById("runaway-no-wrapper");
const noBtn = document.getElementById("rsvp-no-btn");
const noLabels = ["No", "Nice try! 😜", "Too slow! 🏃💨", "Not an option!", "Click YES! 👉", "Still no? 😂"];
let noDodgeCount = 0;

function dodgeNoButton(e) {
  if (e) e.preventDefault();
  playPaperFlipSound();
  noDodgeCount++;
  noBtn.textContent = noLabels[noDodgeCount % noLabels.length];

  // Calculate safe random offset within the dinner card
  const randomX = (Math.random() - 0.5) * 160;
  const randomY = (Math.random() - 0.5) * 75 - 15;
  noWrapper.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${(Math.random() - 0.5) * 20}deg)`;
}

noWrapper.addEventListener("mouseenter", dodgeNoButton);
noWrapper.addEventListener("touchstart", dodgeNoButton, { passive: false });
noBtn.addEventListener("click", dodgeNoButton);

document.getElementById("rsvp-yes-btn").addEventListener("click", () => {
  playSparkleChime();
  launchConfetti({ particleCount: 110 });
  document.getElementById("modal-badge-icon").textContent = "🥂🎟️";
  document.getElementById("modal-letter-title").textContent = "Birthday Dinner Confirmed! 🥳";
  document.getElementById("modal-letter-body").textContent = `OFFICIAL BIRTHDAY DATE TICKET 🎟️✨\n\nPassenger: ${appState.name} (The Birthday Queen 👑)\nDestination: Your Favorite Dinner Spot + Dessert!\nDress Code: Whatever makes you feel gorgeous\nCost: 100% on me (+ unlimited hugs & compliments) 💖`;
  const modal = document.getElementById("letter-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

// --- CUSTOMIZER MODAL LOGIC ---
document.getElementById("open-customizer-btn").addEventListener("click", () => {
  document.getElementById("cust-name").value = appState.name;
  document.getElementById("cust-song").value = appState.songTitle;
  document.getElementById("cust-main-letter").value = appState.mainBirthdayLetter;

  // Populate Polaroid inputs
  const polList = document.getElementById("cust-polaroids-list");
  polList.innerHTML = appState.polaroids.map((p, i) => `
    <div class="bg-white/80 p-3 rounded-xl border border-[#3A2A29]/40 space-y-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label class="block text-[11px] font-bold">Polaroid #${i + 1} Caption:</label>
          <input type="text" id="cust-pol-cap-${i}" value="${p.caption}" class="w-full px-2.5 py-1 rounded border border-[#3A2A29] font-bold text-xs"/>
        </div>
        <div>
          <label class="block text-[11px] font-bold">Custom Image URL (Optional):</label>
          <input type="text" id="cust-pol-img-${i}" value="${p.customImg || ''}" placeholder="Paste image link or leave blank for art" class="w-full px-2.5 py-1 rounded border border-[#3A2A29] text-xs"/>
        </div>
      </div>
      <div>
        <label class="block text-[11px] font-bold">Handwritten Note on Back:</label>
        <input type="text" id="cust-pol-note-${i}" value="${p.backNote}" class="w-full px-2.5 py-1 rounded border border-[#3A2A29] text-xs"/>
      </div>
    </div>
  `).join("");

  // Populate Envelopes inputs
  const envList = document.getElementById("cust-envelopes-list");
  envList.innerHTML = appState.envelopes.map((env, i) => `
    <div class="bg-white/80 p-3 rounded-xl border border-[#3A2A29]/40">
      <label class="block text-xs font-bold mb-1">${env.title}:</label>
      <textarea id="cust-env-note-${i}" rows="2" class="w-full p-2 rounded border border-[#3A2A29] text-xs">${env.note}</textarea>