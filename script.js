// --- DEFAULT DATA STATE ---
const DEFAULT_STATE = {
  name: "CHLOE",
  songTitle: '"Our Song"',
  polaroids: [
    {
      caption: "First Date ☕",
      tilt: "-rotate-6",
      backNote: "I was so nervous before you walked in, and then we talked for 4 hours straight until the cafe closed! Best coffee ever. ☕❤️",
    },
    {
      caption: "Road trip 🚗",
      tilt: "rotate-6",
      backNote: "Singing at the top of our lungs with the windows down and pulling over just to look at the shooting stars. 🌠🚗",
    },
    {
      caption: "Stargazing ✨",
      tilt: "-rotate-3",
      backNote: "Wrapped up in one giant blanket under the night sky. Still convinced none of those stars shine as bright as your eyes. ✨🌙",
    },
    {
      caption: "Our laugh fest 😂",
      tilt: "rotate-3",
      backNote: "I still don't even remember what started the joke, just that we laughed until our stomachs hurt! My favorite sound in the world. 😂💕",
      badge: "Click to flip!"
    }
  ]
};

const appState = DEFAULT_STATE;

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
            ${getPolaroidSVG(idx)}
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

function closeLetterModal() {
  const modal = document.getElementById("letter-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
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

const confettiCanvas = document.getElementById("confetti-canvas");
const confettiContext = confettiCanvas.getContext("2d");
const confettiParticles = [];
let confettiAnimationFrame = null;

function launchConfetti({ particleCount = 60, heartsOnly = false } = {}) {
  const pixelRatio = window.devicePixelRatio || 1;
  confettiCanvas.width = window.innerWidth * pixelRatio;
  confettiCanvas.height = window.innerHeight * pixelRatio;
  confettiContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const colors = ["#F28B82", "#DFB45A", "#DFD3E8", "#7FA982", "#FDE8B2"];
  for (let index = 0; index < particleCount; index++) {
    confettiParticles.push({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight * 0.3,
      size: 5 + Math.random() * 8,
      speedX: (Math.random() - 0.5) * 4,
      speedY: 2 + Math.random() * 4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.12,
      color: colors[index % colors.length],
      heart: heartsOnly || Math.random() < 0.25
    });
  }

  if (confettiAnimationFrame === null) {
    animateConfetti();
  }
}

function animateConfetti() {
  confettiContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let index = confettiParticles.length - 1; index >= 0; index--) {
    const particle = confettiParticles[index];
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    particle.rotation += particle.rotationSpeed;
    particle.speedY += 0.045;

    confettiContext.save();
    confettiContext.translate(particle.x, particle.y);
    confettiContext.rotate(particle.rotation);
    confettiContext.fillStyle = particle.color;
    if (particle.heart) {
      const size = particle.size;
      confettiContext.beginPath();
      confettiContext.moveTo(0, size * 0.3);
      confettiContext.bezierCurveTo(-size, -size * 0.4, -size * 0.55, -size, 0, -size * 0.35);
      confettiContext.bezierCurveTo(size * 0.55, -size, size, -size * 0.4, 0, size * 0.3);
      confettiContext.fill();
    } else {
      confettiContext.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 0.65);
    }
    confettiContext.restore();

    if (particle.y > window.innerHeight + 20) {
      confettiParticles.splice(index, 1);
    }
  }

  if (confettiParticles.length) {
    confettiAnimationFrame = requestAnimationFrame(animateConfetti);
  } else {
    confettiContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    confettiAnimationFrame = null;
  }
}

renderApp();