const pflanzen = [
  {
    "id": 1,
    "name": "Elfenbeinginster 'Allgold'",
    "art": "Schmetterlingsblütler",
    "standort": "Sonnig",
    "wuchshoehe": "120 cm",
    "rueckschnitt": "Nach der Blüte im Frühsommer; neue Triebe um 1/3 bis 2/3 kürzen; nicht ins alte Holz schneiden.",
    "bild_pfad": "images/ginster_allgold.webp",
    "bluetezeit": "April - Mai",
    "pflegetipp": "Mag durchlässige, sandige Böden; Staunässe unbedingt vermeiden."
  },
  {
    "id": 2,
    "name": "Edelginster 'Lena'",
    "art": "Schmetterlingsblütler",
    "standort": "Sonnig",
    "wuchshoehe": "Variiert",
    "rueckschnitt": "Direkt nach der Blüte im Frühsommer.",
    "bild_pfad": "images/edelginster-lena.webp",
    "bluetezeit": "Mai - Juni",
    "pflegetipp": "Sehr trockenheitstolerant, benötigt in der Regel keinen zusätzlichen Dünger."
  },
  {
    "id": 3,
    "name": "Himbeere",
    "art": "Rosengewächs / Beerenstrauch",
    "standort": "Sonnig bis halbschattig",
    "wuchshoehe": "100 - 150 cm",
    "rueckschnitt": "Nach der Ernte im Herbst; abgetragene Ruten bodennah entfernen.",
    "bild_pfad": "images/himbeere.webp",
    "bluetezeit": "Mai - Juli",
    "pflegetipp": "Flachwurzler: Den Boden um die Pflanze herum mulchen und nicht tief hacken."
  },
  {
    "id": 4,
    "name": "Segge",
    "art": "Sauergrasgewächs",
    "standort": "Halbschattig bis schattig",
    "wuchshoehe": "30 - 60 cm",
    "rueckschnitt": "Im Frühjahr vor dem Neuaustrieb nur bei Bedarf ausputzen.",
    "bild_pfad": "images/segge.webp",
    "bluetezeit": "April - Mai (oft unscheinbar)",
    "pflegetipp": "Im Frühjahr mit etwas Kompost versorgen, verträgt keine extreme Trockenheit."
  },
  {
    "id": 5,
    "name": "Schildfarn",
    "art": "Gefäßsporenpflanze",
    "standort": "Schattig bis halbschattig",
    "wuchshoehe": "Variiert",
    "rueckschnitt": "Alte Wedel im späten Winter oder zeitigen Frühjahr entfernen.",
    "bild_pfad": "images/schildfarn.webp",
    "bluetezeit": "Keine (Sporenpflanze)",
    "pflegetipp": "Liebt humosen Boden; herabgefallenes Laub als natürlichen Winterschutz liegen lassen."
  },
  {
    "id": 6,
    "name": "Tulpe",
    "art": "Zwiebelblume",
    "standort": "Sonnig bis halbschattig",
    "wuchshoehe": "20 - 50 cm",
    "rueckschnitt": "Blütenstiele nach dem Verblühen kappen; Blätter erst entfernen, wenn sie gelb/braun sind.",
    "bild_pfad": "images/tulpe.webp",
    "bluetezeit": "April - Mai",
    "pflegetipp": "Direkt nach der Blüte leicht düngen, damit die Zwiebel Kraft fürs nächste Jahr sammelt."
  },
  {
    "id": 7,
    "name": "Narzisse",
    "art": "Zwiebelblume",
    "standort": "Sonnig bis halbschattig",
    "wuchshoehe": "30 - 50 cm",
    "rueckschnitt": "Wie Tulpen: Laub einziehen lassen, um Energie für das nächste Jahr zu speichern.",
    "bild_pfad": "images/narzisse.webp",
    "bluetezeit": "März - Mai",
    "pflegetipp": "Sehr robust; Zwiebeln können über viele Jahre am selben Standort bleiben und verwildern."
  },
  {
    "id": 8,
    "name": "Pfingstrose",
    "art": "Pfingstrosengewächs",
    "standort": "Sonnig",
    "wuchshoehe": "60 - 100 cm",
    "rueckschnitt": "Im späten Herbst bodennah zurückschneiden.",
    "bild_pfad": "images/pfingstrose.webp",
    "bluetezeit": "Mai - Juni",
    "pflegetipp": "Nicht zu tief pflanzen, da sie sonst blühfaul wird. Eine Staudenstütze hilft bei schweren Blüten."
  },
  {
    "id": 9,
    "name": "Lampenputzergras",
    "art": "Süßgras",
    "standort": "Sonnig",
    "wuchshoehe": "60 cm",
    "rueckschnitt": "Erst im Frühjahr (März) 20 cm über dem Boden zurückschneiden.",
    "bild_pfad": "images/lampenputzergras.webp",
    "bluetezeit": "August - Oktober",
    "pflegetipp": "Im Winter die Halme oben zusammenbinden, um das Herz der Pflanze vor Fäulnis durch Nässe zu schützen."
  },
  {
    "id": 10,
    "name": "Lilientraube",
    "art": "Spargelgewächs",
    "standort": "Halbschattig",
    "wuchshoehe": "40 cm",
    "rueckschnitt": "Zurückschneiden nicht nötig.",
    "bild_pfad": "images/lilientraube.webp",
    "bluetezeit": "August - Oktober",
    "pflegetipp": "Perfekt als immergrüner Bodendecker unter Gehölzen; bevorzugt leicht sauren, humosen Boden."
  },
  {
    "id": 11,
    "name": "Ficus Microcarpa 'Ginseng'",
    "art": "Chinesische Feige",
    "standort": "Heller Standort, verträgt volle Sonne",
    "wuchshoehe": "Variiert",
    "rueckschnitt": "Bei Bedarf formen; verträgt kräftigen Rückschnitt gut.",
    "bild_pfad": "images/ficus-microcarpa-ginseng.webp",
    "bluetezeit": "Keine (als Zimmerpflanze selten blühend)",
    "pflegetipp": "Boden leicht feucht halten und 1x pro Woche Pflanzennahrung ins Wasser geben. Außerhalb der Reichweite von Kindern und Haustieren aufstellen."
  },
  {
    "id": 12,
    "name": "Ficus Microcarpa",
    "art": "Feige",
    "standort": "Heller Standort, verträgt volle Sonne",
    "wuchshoehe": "Variiert",
    "rueckschnitt": "Bei Bedarf formen; verträgt kräftigen Rückschnitt gut.",
    "bild_pfad": "images/ficus-microcarpa.webp",
    "bluetezeit": "Keine (als Zimmerpflanze selten blühend)",
    "pflegetipp": "Boden leicht feucht halten und 1x pro Woche Pflanzennahrung ins Wasser geben. Außerhalb der Reichweite von Kindern und Haustieren aufstellen."
  }
]

// DOM-Elemente referenzieren
const listContainer = document.getElementById('plant-list');
const detailContainer = document.getElementById('plant-details');

// Funktion zum Anzeigen der Details
function showDetails(id) {
  const pflanze = pflanzen.find(p => p.id === id);
  
  if (pflanze) {
    detailContainer.innerHTML = `
      <div class="detail-card">
        <h2>${pflanze.name}</h2>
        ${pflanze.bild_pfad ? `<img src="${pflanze.bild_pfad}" alt="${pflanze.name}" style="max-width:100%; height:auto; border-radius:8px;">` : ''}
        <p><strong>Art:</strong> ${pflanze.art}</p>
        <p><strong>Standort:</strong> ${pflanze.standort}</p>
        <p><strong>Wuchshöhe:</strong> ${pflanze.wuchshoehe}</p>
        <p><strong>Blütezeit:</strong> ${pflanze.bluetezeit}</p>
        <p><strong>Rückschnitt:</strong> ${pflanze.rueckschnitt}</p>
        <div class="tipp">
          <strong>Pflegetipp:</strong> ${pflanze.pflegetipp}
        </div>
      </div>
    `;
  }
}

// Liste initialisieren
function init() {
  // Liste links aufbauen
  pflanzen.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.name;
    li.style.cursor = 'pointer';
    li.onclick = () => showDetails(p.id);
    listContainer.appendChild(li);
  });

  // Startzustand: Platzhalterbild rechts
  detailContainer.innerHTML = `
    <div class="placeholder">
      <h3>Willkommen im Garten-Katalog</h3>
      <p>Wähle links eine Pflanze aus, um Details zu sehen.</p>
      <img src="images/garten-uebersicht.jpg" alt="Garten Übersicht" style="opacity: 0.5; width: 100%;">
    </div>
  `;
}

// App starten
init();