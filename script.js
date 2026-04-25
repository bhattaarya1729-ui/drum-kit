// ===== PRELOAD ALL SOUNDS =====
const sounds = {
  a: new Audio('Drums/Bass.mp3'),
  s: new Audio('Drums/Crash-cymbal.mp3'),
  d: new Audio('Drums/Floor-tom.mp3'),
  f: new Audio('Drums/Hi-hat-closed.mp3'),
  g: new Audio('Drums/Hi-hat-open.mp3'),
  h: new Audio('Drums/High-tom.mp3'),
  j: new Audio('Drums/medium-tom.mp3'),
  k: new Audio('Drums/Ride-cymbal.mp3'),
  l: new Audio('Drums/Snare.mp3')
};

const keyToDiv = {
  a: 'pad-1', s: 'pad-2', d: 'pad-3',
  f: 'pad-4', g: 'pad-5', h: 'pad-6',
  j: 'pad-7', k: 'pad-8', l: 'pad-9'
};

function playDrum(key) {
  const audio = sounds[key];
  const divClass = keyToDiv[key];
  if (!audio || !divClass) return;

  audio.currentTime = 0;
  audio.play().catch(err => console.error('Audio blocked:', err));

  const pad = document.querySelector(`.${divClass}`);
  if (pad) {
    pad.classList.add('active');
    setTimeout(() => pad.classList.remove('active'), 200);
  }
}

// ===== KEYBOARD =====
document.addEventListener('keydown', (e) => {
  playDrum(e.key.toLowerCase());
});

// ===== MOUSE CLICK =====
Object.entries(keyToDiv).forEach(([key, divClass]) => {
  const pad = document.querySelector(`.${divClass}`);
  if (pad) pad.addEventListener('click', () => playDrum(key));
});