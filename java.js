const hueSlider = document.querySelector('#hue-slider');
const themeBtn = document.querySelector('#theme-toggle');
const root = document.documentElement;

// --- 1. INITIALISIERUNG (Beim Laden der Seite) ---

// Farbe aus Speicher laden oder Standard (220) nutzen
const savedHue = localStorage.getItem('user-hue') || 220;
root.style.setProperty('--primary-h', savedHue);
hueSlider.value = savedHue;

// Dark Mode aus Speicher laden
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// --- 2. INTERAKTION (Beim Klicken/Schieben) ---

// Farbe speichern, wenn der Slider bewegt wird
hueSlider.addEventListener('input', (e) => {
  const val = e.target.value;
  root.style.setProperty('--primary-h', val);
  localStorage.setItem('user-hue', val); // Dauerhaft speichern
});

// Dark Mode speichern, wenn der Button geklickt wird
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});