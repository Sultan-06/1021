const wishButton = document.getElementById("wish-button");
const wishForm = document.getElementById("wish-form");
const wishInput = document.getElementById("wish-input");
const wishMessage = document.getElementById("wish-message");
const flame = document.getElementById("flame");
const blowButton = document.getElementById("blow-button");
const manualBlowButton = document.getElementById("manual-blow-button");
const candleStatus = document.getElementById("candle-status");
const cutSection = document.getElementById("cut-section");
const knifeButton = document.getElementById("knife-button");
const cutInstruction = document.getElementById("cut-instruction");
const cutStatus = document.getElementById("cut-status");
const againButton = document.getElementById("again-button");
const cakeStage = document.getElementById("cake-stage");
const cutOverlay = document.getElementById("cut-overlay");
const knifeCursor = document.getElementById("knife-cursor");

let microphoneStream;
let audioContext;
let analyser;
let microphoneFrame;
let loudFrames = 0;
let knifeEnabled = false;
let cutStart;
let candleOut = false;

wishButton.addEventListener("click", () => {
  const isOpening = wishForm.hidden;
  wishForm.hidden = !isOpening;
  wishButton.setAttribute("aria-expanded", String(isOpening));
  if (isOpening) wishInput.focus();
});

wishForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!wishInput.value.trim()) {
    wishInput.focus();
    return;
  }

  wishForm.hidden = true;
  wishButton.setAttribute("aria-expanded", "false");
  wishMessage.textContent = "Your wish is on its way to the stars. ✨";
});

function stopMicrophone() {
  if (microphoneFrame !== undefined) {
    cancelAnimationFrame(microphoneFrame);
    microphoneFrame = undefined;
  }
  if (microphoneStream) {
    microphoneStream.getTracks().forEach((track) => track.stop());
    microphoneStream = undefined;
  }
  if (audioContext && audioContext.state !== "closed") {
    audioContext.close();
    audioContext = undefined;
  }
}

function extinguishCandle(message) {
  candleOut = true;
  flame.classList.add("is-out");
  flame.setAttribute("aria-label", "Candle flame is out");
  candleStatus.textContent = message;
  blowButton.hidden = true;
  manualBlowButton.hidden = true;
  stopMicrophone();
  cutSection.hidden = false;
  cutInstruction.textContent = "Grab the knife, then drag it across the cake to cut a slice.";
  cutSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function monitorMicrophone() {
  const samples = new Uint8Array(analyser.fftSize);
  analyser.getByteTimeDomainData(samples);
  let sumSquares = 0;
  for (const sample of samples) {
    const normalized = (sample - 128) / 128;
    sumSquares += normalized * normalized;
  }
  const volume = Math.sqrt(sumSquares / samples.length);

  if (volume > 0.12) {
    loudFrames += 1;
  } else {
    loudFrames = 0;
  }

  if (loudFrames >= 4) {
    extinguishCandle("What a lovely birthday blow! Your candle is out. 🎉");
    return;
  }

  microphoneFrame = requestAnimationFrame(monitorMicrophone);
}

function microphoneErrorMessage(error) {
  if (window.isSecureContext === false) {
    return "Microphone access needs a secure page (HTTPS or localhost). Tap below to blow out the candle instead.";
  }
  if (error && error.name === "NotAllowedError") {
    return "Microphone access was denied. You can still tap the button below to blow out the candle.";
  }
  if (error && error.name === "NotFoundError") {
    return "No microphone was found. You can still tap the button below to blow out the candle.";
  }
  return "The microphone couldn't start. You can still tap the button below to blow out the candle.";
}

blowButton.addEventListener("click", async () => {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !AudioContextConstructor) {
    candleStatus.textContent = "Microphone blowing isn't supported here. Tap below to blow out the candle instead.";
    manualBlowButton.hidden = false;
    return;
  }

  blowButton.disabled = true;
  candleStatus.textContent = "Allow microphone access, then blow toward your device. 🎤";
  try {
    microphoneStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (candleOut) {
      stopMicrophone();
      return;
    }
    audioContext = new AudioContextConstructor();
    await audioContext.resume();
    if (candleOut) {
      stopMicrophone();
      return;
    }
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    audioContext.createMediaStreamSource(microphoneStream).connect(analyser);
    blowButton.textContent = "Listening... blow now!";
    blowButton.disabled = false;
    candleStatus.textContent = "I'm listening! Blow toward your microphone to put out the candle.";
    microphoneFrame = requestAnimationFrame(monitorMicrophone);
  } catch (error) {
    stopMicrophone();
    if (candleOut) return;
    blowButton.disabled = false;
    candleStatus.textContent = microphoneErrorMessage(error);
    manualBlowButton.hidden = false;
  }
});

manualBlowButton.addEventListener("click", () => {
  extinguishCandle("Wish made! Your candle is out. 🎉");
});

knifeButton.addEventListener("click", () => {
  knifeEnabled = !knifeEnabled;
  knifeButton.setAttribute("aria-pressed", String(knifeEnabled));
  document.body.classList.toggle("knife-active", knifeEnabled);

  if (knifeEnabled) {
    knifeButton.textContent = "Done cutting";
    cutInstruction.textContent = "Drag the knife across the cake. You can make as many cuts as you like!";
    cutStatus.textContent = "Knife ready — drag across the cake to make a cut.";
  } else {
    knifeButton.textContent = "🔪 Grab the knife";
    cutStatus.textContent = "Knife put away.";
  }
});

function cakePoint(event) {
  const bounds = cakeStage.getBoundingClientRect();
  return {
    x: ((event.clientX - bounds.left) / bounds.width) * 100,
    y: ((event.clientY - bounds.top) / bounds.height) * 100,
    svgX: ((event.clientX - bounds.left) / bounds.width) * 1000,
    svgY: ((event.clientY - bounds.top) / bounds.height) * 1000
  };
}

function addCut(start, end) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", String(start.svgX));
  line.setAttribute("y1", String(start.svgY));
  line.setAttribute("x2", String(end.svgX));
  line.setAttribute("y2", String(end.svgY));
  cutOverlay.append(line);
  cakeStage.classList.add("is-cut");
  againButton.hidden = false;
  cutStatus.textContent = "You did it! A slice of birthday cake, made just for you. 🍰";
  cutInstruction.textContent = "A sweet little slice, just for you! Drag again to cut another.";
}

cakeStage.addEventListener("pointerdown", (event) => {
  const targetIsCake = event.target.closest(".cake");
  if (!knifeEnabled || !targetIsCake) return;
  event.preventDefault();
  cutStart = cakePoint(event);
  cakeStage.setPointerCapture(event.pointerId);
});

cakeStage.addEventListener("pointermove", (event) => {
  if (!knifeEnabled) return;
  knifeCursor.style.left = `${event.clientX}px`;
  knifeCursor.style.top = `${event.clientY}px`;
  knifeCursor.classList.add("is-visible");
});

cakeStage.addEventListener("pointerleave", () => {
  if (!cutStart) knifeCursor.classList.remove("is-visible");
});

cakeStage.addEventListener("pointerup", (event) => {
  if (!cutStart) return;
  const end = cakePoint(event);
  const distance = Math.hypot(end.x - cutStart.x, end.y - cutStart.y);
  if (distance < 3) {
    end.x = Math.min(95, Math.max(5, cutStart.x + 15));
    end.svgX = (end.x / 100) * 1000;
  }
  addCut(cutStart, end);
  cutStart = undefined;
});

cakeStage.addEventListener("pointercancel", () => {
  cutStart = undefined;
});

againButton.addEventListener("click", () => {
  knifeEnabled = true;
  knifeButton.setAttribute("aria-pressed", "true");
  knifeButton.textContent = "Done cutting";
  document.body.classList.add("knife-active");
  cutInstruction.textContent = "Drag the knife across the cake. You can make as many cuts as you like!";
  cutStatus.textContent = "Knife ready — drag across the cake to make another cut.";
});

window.addEventListener("pagehide", stopMicrophone);
