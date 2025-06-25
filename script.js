// script.js
(() => {
  'use strict';

  // —— DATA MODEL ——
  const posters = [
    {
      id: 1,
      title: "De Karper en de Draakpoort",
      audioUrl: "audio/de_Karper en_de_draakpoort.mp3", // VERVANG MET EIGEN AUDIO
      puzzleHint: "Ik ben een jaar waarin een stad werd gesticht. Mijn cijfers zijn 1, 2, 0, 0. Wat ben ik?",
      puzzleSolution: "1200",
      isSecret: false,
      puzzleSolved: false,
      isCompleted: false,
      details: [
        {
          text: `
            Langs de Gele Rivier in China ligt de Draakpoort, een smalle kloof met een indrukwekkende waterval. Volgens eeuwenoude overlevering vechten karpers hier tegen de stroom op, gestimuleerd door hun droom om boven de waterval te springen. Slechts één per eeuw weet een karper de kloof te beklimmen en transformeert ze in een draak, symbool van moed, doorzettingsvermogen en transformatie. Het verhaal herinnert ons eraan dat de zwaarste uitdagingen vaak leiden tot de mooiste beloningen.
          `,
          source: ""
        },
        {
          text: `
            De karper die de Draakpoort overwint staat in de Chinese cultuur niet alleen voor doorzettingsvermogen, maar draagt ook diepere betekenissen:

            Transformatie & zelfverbetering: 
            De sprong symboliseert persoonlijke groei: elke uitdaging die je overwint, brengt je een stap dichter bij je hoogste potentieel.
            Balans tussen hard werken en vertrouwen: 
            Net als de karper moet je zowel kracht (hard werken) als overgave (vertrouwen op het proces) combineren om succes te behalen.
            Collectief geheugen: 
            De legende herinnert gemeenschappen eraan om samen te werken; in drakenbootraces navolgen teams de karpersprong en vieren ze saamhorigheid.
          `,
          source: ""
        },
        {
          text: `
            Drakenfestival: 
            Dorpen langs de Gele Rivier vieren elk jaar met drakenbootraces en muziek.
            Beeldende kunst: 
            Keramisten verwerken de springende karper in vazen en sculpturen.
            Educatieve projecten: 
            Lessen over doorzettingsvermogen en ecologie, waarbij leerlingen eigen “karper-dromen” uittekenen.
          `,
          source: ""
        }
      ]
    },
    {
      id: 2,
      title: "De Zalm van Kennis",
      audioUrl: "audio/de_zalm_van_kennis.mp3", // VERVANG MET EIGEN AUDIO
      puzzleHint: "Ik ben een kunststroming met 6 letters, beginnend met 'im' en eindigend op 'isme'.",
      puzzleSolution: "imisme", // LET OP: Pas hint/oplossing aan indien nodig (bijv. impressionisme is langer)
      isSecret: false,
      puzzleSolved: false,
      isCompleted: false,
      details: [
        {
          title: "Achtergrond & legende",
          text: `
            De “Zalm van Kennis” komt uit de Ierse mythologische cyclus Fenian Cycle. Hij zwemt in de Boyne of Knowledge, een magische rivier. Legende vertelt dat wie zijn vlees eet, alle wijsheid van de wereld verkrijgt. Fionn mac Cumhaill kreeg dit geschenk per ongeluk na een kleine verbranding van zijn duim.
          `,
          source: ""
        },
        {
          title: "Symboliek & betekenis",
          text: `
            * Wijsheid & mentorschap: Fionn’s leerlingrol toont dat kennis doorgeven en delen net zo waardevol is als zelf leren.
            * Ongeluk als zegen: Het duimincident herinnert ons dat onverwachte fouten belangrijke kansen kunnen brengen.
            * Rivier als levensader: Water symboliseert continuïteit en beweging; de rivier is de drager van cultuur en kennis.
          `,
          source: ""
        },
        {
          title: "Moderne tradities",
          text: `
            * Féile na Smoltuine: Jaarlijks in juni: Ierse dorpen langs de Boyne vieren met zang en dans de mythe van de zalm.
            * Kunst & literatuur: Hedendaagse Ierse schrijvers verwerken de zalm in poëzie en schilderijen als metafoor voor groei.
            * Educatie en ecologie: Scholen gebruiken de legende om kinderen bewust te maken van rivierreiniging en waterbescherming.
          `,
          source: ""
        }
      ]
    },
    {
      id: 3,
      title: "Het Geheim van de Zonnegodin",
      audioUrl: "audio/het_geheim_van_de_zonnegodin.mp3", // VERVANG MET EIGEN AUDIO
      puzzleHint: "Ik ben een natuurgebied met 4 letters, zoals een groen oasis.",
      puzzleSolution: "park",
      isSecret: false,
      puzzleSolved: false,
      isCompleted: false,
      details: [
        {
          title: "Achtergrond & legende",
          text: `
            Amaterasu Ōmikami is een van de belangrijkste godheden in het shintoïsme. Haar terugkeer uit de “Ame-no-Iwato” (Hemelgrot) markeert het herstel van licht en leven. De spiegel die de kami gebruikten, is nu een van de drie keizerlijke schatstukken van Japan en staat symbool voor waarheid en zuiverheid.
          `,
          source: ""
        },
        {
          title: "Symboliek & betekenis",
          text: `
            * Licht en waarheid: De spiegel weerspiegelt niet alleen Amaterasu, maar ook de zuivere aard van de mens.
            * Gemeenschapsritueel: De dans en het feest tonen hoe gezamenlijkheid duisternis overwint.
            * Balans tussen chaos en orde: Susanoo’s wanorde vs. Amaterasu’s harmonie herinneren aan de dualiteit in het leven.
          `,
          source: ""
        },
        {
          title: "Moderne rituelen",
          text: `
            * Ame-no-Iwato Matsuri: Jaarlijks festival in Takachiho, Kyushu: een kleurrijke nachtdans rond een grot waarin een actrice de rol van Amaterasu vertolkt.
            * Kagura-dans: Traditionele schaduwspel- en dansvoorstellingen in shintoïsme-tempels, geïnspireerd op het “feest voor de zon”.
            * Populaire cultuur: Animes en videogames (zoals Ōkami) verwerken de Amaterasu-legende als heroïsche missie van licht over duisternis.
          `,
          source: ""
        }
      ]
    },
    {
      id: 4,
      title: "Het Epos van Gilgamesh",
      audioUrl: "audio/epos_van_gilgamesh.mp3", // VERVANG MET EIGEN AUDIO
      puzzleHint: "Ik ben een verborgen verhaal, 6 letters, synoniem voor 'legende'.",
      puzzleSolution: "mythe",
      isSecret: true,
      puzzleSolved: false,
      isCompleted: false,
      details: [
        {
          title: "Achtergrond & legende",
          text: `
            Het Epos van Gilgamesh is één van de oudste literaire werken, opgetekend rond 2100 v.Chr. in Mesopotamië. Het vertelt het avontuur van koning Gilgamesh van Uruk en zijn metgezel Enkidu, hun gevechten met monsters en Gilgamesh’ zoektocht naar onsterfelijkheid na de dood van Enkidu. Het verhaal is gebeiteld op kleitabletten in het Akkadisch en is een rijke bron voor inzicht in vroege beschaving, vriendschap en de menselijk conditie.
          `,
          source: ""
        },
        {
          title: "Symboliek & thema’s",
          text: `
            * Vriendschap & verlies: De band tussen Gilgamesh en Enkidu illustreert hoe nabijheid en verlies menszijn vormen.
            * Zoektocht naar betekenis: Gilgamesh’ reis van arrogantie naar nederigheid toont onze drang om zingeving te vinden.
            * Onsterfelijkheid vs. nalatenschap: De plant van eeuwig leven symboliseert vernieuwing (de slang verliest huid), terwijl de stadsmuren staan voor blijvende nalatenschap.
          `,
          source: ""
        },
        {
          title: "Historische impact & moderne interpretaties",
          text: `
            * Oude wereld: Claiment onsterfelijkheid en zondvloedvertellingen in later Bijbelse en Griekse mythen zijn beïnvloed door het Gilgamesh-epos.
            * Moderne cultuur: Romans (bv. Gilgamesh the King van Robert Silverberg), toneel, stripboeken en videogames gebruiken de oude heldenreis als inspiratie.
            * Archeologie: Kleitabletten gevonden in Ninive (1853) legden de basis voor onze kennis van Sumerische literatuur en het vroege schrift.
          `,
          source: ""
        }
      ]
    }
  ];

  // —— STATE ——
  let starCounter = 0;
  let currentPoster = null;
  let currentDetailPage = 0;
  let isGameStarted = false;
  let currentAudio = null; // Houd een referentie naar het actieve Audio object

  // —— SCREEN ELEMENTS ——
  const grandStartScreen    = document.getElementById('grand-start');
  const homeScreen          = document.getElementById('home-screen');
  const puzzleScreen        = document.getElementById('puzzle-screen');
  const posterExperience    = document.getElementById('poster-experience');
  const detailPagesScreen   = document.getElementById('detail-pages');
  const secretPosterScreen  = document.getElementById('secret-poster');
  const endPageScreen       = document.getElementById('end-page');
  const allScreens = [
    grandStartScreen,
    homeScreen,
    puzzleScreen,
    posterExperience,
    detailPagesScreen,
    secretPosterScreen,
    endPageScreen
  ];

  // —— BUTTONS & INPUTS ——
  const grandStartButton    = document.getElementById('grand-start-button');
  const startButton         = document.getElementById('start-button');
  const headerTitle         = document.getElementById('header-title');
  const starDisplay         = document.getElementById('star-display'); // Aangepast van starCounterDisplay

  const puzzleHintEl        = document.getElementById('puzzle-hint');
  const puzzleInput         = document.getElementById('puzzle-input');
  const submitPuzzleButton  = document.getElementById('submit-puzzle');
  const puzzleFeedback      = document.getElementById('puzzle-feedback');

  const posterTitle         = document.getElementById('poster-title');
  const audioCurrentTime    = document.getElementById('audio-current-time');
  const audioTotalTime      = document.getElementById('audio-total-time');
  const audioRewind         = document.getElementById('audio-rewind');
  const audioPlayPause      = document.getElementById('audio-play-pause');
  const audioFastForward    = document.getElementById('audio-fast-forward');
  const audioProgress       = document.getElementById('audio-progress');
  const audioMute           = document.getElementById('audio-mute');
  const audioVolume         = document.getElementById('audio-volume');
  const toDetailsButton     = document.getElementById('to-details');

  const detailContent       = document.getElementById('detail-content');
  const prevPageButton      = document.getElementById('prev-page');
  const nextPageButton      = document.getElementById('next-page');

  const secretPuzzleHint    = document.getElementById('secret-puzzle-hint');
  const secretPuzzleInput   = document.getElementById('secret-puzzle-input');
  const submitSecretPuzzle  = document.getElementById('submit-secret-puzzle');
  const secretPuzzleFeedback = document.getElementById('secret-puzzle-feedback');

  const restartButton       = document.getElementById('restart-button');
  const themeToggle         = document.getElementById('theme-toggle');

  // —— AR ELEMENTS ——
  const arCanvas    = document.getElementById('ar-canvas');
  const arOverlay   = document.getElementById('ar-overlay');
  const startARBtn  = document.getElementById('start-ar');

    // —— WEBGL / SHADER SETUP VOOR AR ——
  // Deze WebGL/shader code is momenteel niet geïntegreerd met de Three.js AR-implementatie
  // en kan mogelijk verwijderd worden als je alleen Three.js gebruikt voor 3D-rendering in AR.
  // Als je van plan bent deze shaders te gebruiken, moet je ze apart aanroepen via Three.js.
  const gl = arCanvas.getContext('webgl', { xrCompatible: true });
  if (!gl) console.warn('WebGL context kon niet worden verkregen.');

  // Vertex shader
  const vertexShaderSource = `
    attribute vec3 a_position;
    attribute vec3 a_color;
    uniform mat4 u_projectionMatrix;
    uniform mat4 u_viewMatrix;
    varying vec3 v_color;
    void main() {
      gl_Position = u_projectionMatrix * u_viewMatrix * vec4(a_position, 1.0);
      v_color = a_color;
    }
  `;
  // Fragment shader
  const fragmentShaderSource = `
    precision mediump float;
    varying vec3 v_color;
    void main() {
      gl_FragColor = vec4(v_color, 1.0);
    }
  `;

  // Compile shaders
  function compileShader(src, type) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      console.error(gl.getShaderInfoLog(s));
    return s;
  }
  const vertexShader   = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
  const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

  // Link program
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  // Attrib/uniform locations
  const positionLocation         = gl.getAttribLocation(program, 'a_position');
  const colorLocation            = gl.getAttribLocation(program, 'a_color');
  const projectionMatrixLocation = gl.getUniformLocation(program, 'u_projectionMatrix');
  const viewMatrixLocation       = gl.getUniformLocation(program, 'u_viewMatrix');

  // Cube geometry
  const positions = new Float32Array([
    // front face
    -0.5,-0.5, 0.5,  0.5,-0.5, 0.5,  0.5, 0.5, 0.5,
    -0.5,-0.5, 0.5,  0.5, 0.5, 0.5, -0.5, 0.5, 0.5,
    // back face
    -0.5,-0.5,-0.5,  0.5,-0.5,-0.5,  0.5, 0.5,-0.5,
    -0.5,-0.5,-0.5,  0.5, 0.5,-0.5, -0.5, 0.5,-0.5,
    // left, right, top, bottom … (zelfde patroon)
  ]);
  const colors = new Float32Array([
    1,0,0,  1,0,0,  1,0,0,
    1,0,0,  1,0,0,  1,0,0,
    // vul aan voor alle 36 vertices …
  ]);

  // Bufferen
  const posBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

  const colBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(colorLocation);
  gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

  // Eenvoudige drawCube functie
  function drawCube() {
    gl.drawArrays(gl.TRIANGLES, 0, positions.length / 3);
  }

  // —— PERSISTENCE ——
  function loadProgress() {
    try {
      const savedStars = localStorage.getItem('starCounter');
      const savedPosters = JSON.parse(localStorage.getItem('posters') || '[]');
      let valid = true;

      if (savedStars !== null) {
        const s = parseInt(savedStars, 10);
        if (!isNaN(s) && s >= 0 && s <= 4) starCounter = s;
        else valid = false;
      }

      if (Array.isArray(savedPosters) && savedPosters.length === posters.length) {
        posters.forEach(p => {
          const sp = savedPosters.find(x => x.id === p.id);
          if (sp && typeof sp.isCompleted === 'boolean') {
            p.isCompleted = sp.isCompleted;
            p.puzzleSolved = typeof sp.puzzleSolved === 'boolean'
                              ? sp.puzzleSolved
                              : sp.isCompleted;
          } else valid = false;
        });
      } else if (localStorage.getItem('posters')) {
        valid = false;
      }

      if (!valid) resetProgress();
    } catch (e) {
      console.error("Error loading progress:", e);
      resetProgress();
    }
  }

  function resetProgress() {
    starCounter = 0;
    posters.forEach(p => {
      p.isCompleted  = false;
      p.puzzleSolved = false;
    });
    localStorage.removeItem('starCounter');
    localStorage.removeItem('posters');
    renderStars(); // Update visuele sterren na reset
  }

  function saveProgress() {
    try {
      localStorage.setItem('starCounter', starCounter);
      localStorage.setItem('posters', JSON.stringify(posters));
    } catch (e) {
      console.error("Error saving progress:", e);
    }
  }

  function updateProgressBar() {
    const pct = (starCounter / 4) * 100;
    document.querySelectorAll('.progress-fill')
            .forEach(f => f.style.width = pct + '%');
  }

  // Render de visuele sterren in de header
  function renderStars() {
    starDisplay.innerHTML = ''; // Leeg bestaande sterren
    for (let i = 0; i < 4; i++) {
      const starEl = document.createElement('span');
      starEl.textContent = i < starCounter ? '⭐' : '☆'; // Gevulde of lege ster
      starEl.classList.add('text-base'); // Of een andere Tailwind klasse voor grootte
      starDisplay.appendChild(starEl);
    }
  }

  // —— SCREEN NAV (AANGEPAST VOOR STABILITEIT) ——
  function showScreen(screenEl) {
    // Stop eventuele actieve audio bij het wisselen van scherm
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to start
        currentAudio = null; // Clear reference
    }

    // Verberg alle schermen met een animatie
    allScreens.forEach(s => {
        s.classList.add('hidden');
        setTimeout(() => {
            if (s.classList.contains('hidden')) {
                s.style.display = 'none';
            }
        }, 500);
    });

    // Toon het gekozen scherm
    screenEl.style.display = 'flex';
    screenEl.offsetHeight; // Forceer een reflow
    screenEl.classList.remove('hidden');

    // Accessibility: focus first button/input
    const ctl = screenEl.querySelector('button, input');
    if (ctl) ctl.focus();
  }

  // —— PUZZLES ——
  function loadPuzzleScreen() {
    if (!isGameStarted) return;
    const available = posters
      .filter(p => !p.isSecret && !p.puzzleSolved)
      .sort((a,b) => a.id - b.id); // Sorteert op ID, dus Poster 1, dan 2, dan 3

    if (available.length === 0 && starCounter < 3) { // Alle reguliere puzzels opgelost, maar nog geen 3 sterren
      puzzleHintEl.textContent       = "Geen puzzels beschikbaar.";
      puzzleInput.style.display      = 'none';
      submitPuzzleButton.style.display = 'none';
      puzzleFeedback.classList.add('hidden'); // Zorg dat feedback verborgen is
    } else if (available.length > 0) { // Er is nog een reguliere puzzel
      puzzleHintEl.textContent       = available[0].puzzleHint;
      puzzleInput.value              = '';
      puzzleInput.style.display      = '';
      submitPuzzleButton.style.display = '';
      puzzleFeedback.classList.add('hidden'); // Zorg dat feedback verborgen is
      puzzleInput.classList.remove('border-green-500', 'border-red-500'); // Reset rand
    } else { // Dit punt wordt bereikt als starCounter >= 3 en alle reguliere puzzels zijn opgelost
      resetProgress();
      showScreen(homeScreen);
      return;
    }
    showScreen(puzzleScreen);
  }

  function checkPuzzleSolution() {
    const ans = puzzleInput.value.toLowerCase().trim();
    const found = posters.find(p =>
      !p.isSecret &&
      !p.puzzleSolved &&
      p.puzzleSolution.toLowerCase() === ans
    );

    puzzleInput.classList.remove('border-green-500', 'border-red-500'); // Verwijder eerdere stijlen
    puzzleFeedback.classList.add('hidden'); // Verberg eerdere feedback

    if (found) {
      found.puzzleSolved = true;
      saveProgress();
      puzzleInput.classList.add('border-green-500'); // Groene rand
      puzzleFeedback.textContent = "Correct! Verhaal ontgrendeld.";
      puzzleFeedback.classList.remove('hidden', 'text-red-400');
      puzzleFeedback.classList.add('text-green-500'); // Groene tekst
      setTimeout(() => {
        loadPoster(found); // Ga naar de poster na een korte vertraging
      }, 1000);
    } else {
      puzzleInput.classList.add('border-red-500'); // Rode rand
      puzzleFeedback.textContent = "Fout antwoord, probeer opnieuw!";
      puzzleFeedback.classList.remove('hidden', 'text-green-500');
      puzzleFeedback.classList.add('text-red-400'); // Rode tekst
    }
  }

  // —— POSTER EXPERIENCE & AUDIO ——
  function loadPoster(p) {
    currentPoster = p;
    posterTitle.textContent = p.title;
    setupAudioPlayer(p.audioUrl);
    arOverlay.classList.add('hidden'); // Zorg dat AR overlay verborgen is bij laden poster
    showScreen(posterExperience);
  }

  function setupAudioPlayer(src) {
    if (currentAudio) { // Als er al een audio object is, stop het dan
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const audio = new Audio(src);
    currentAudio = audio; // Sla de referentie op

    audioCurrentTime.textContent = "0:00";
    audioTotalTime.textContent   = "0:00";
    audioProgress.value          = 0;
    audioVolume.value            = 1;
    audioPlayPause.textContent   = "▶️";
    audioMute.textContent        = "🔇";

    audioPlayPause.onclick = () => {
      if (audio.paused) {
        audio.play();
        audioPlayPause.textContent = "⏸️";
      } else {
        audio.pause();
        audioPlayPause.textContent = "▶️";
      }
    };

    audioRewind.onclick = () => {
      audio.currentTime = Math.max(0, audio.currentTime - 10);
    };
    audioFastForward.onclick = () => {
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
    };

    audioMute.onclick = () => {
      if (audio.volume > 0) {
        audio.volume = 0;
        audioMute.textContent = "🔈";
      } else {
        audio.volume = audioVolume.value; // Herstel naar de laatst ingestelde volume
        audioMute.textContent = "🔇";
      }
    };

    audioVolume.oninput = () => {
      audio.volume = audioVolume.value;
      audioMute.textContent = audio.volume === 0 ? "🔈" : "🔇";
    };

    audio.ontimeupdate = () => {
      const cur = Math.floor(audio.currentTime);
      const dur = Math.floor(audio.duration || 0); // Zorg voor 0 als duration nog niet beschikbaar is
      audioProgress.value = dur ? (cur / dur) * 100 : 0;
      audioCurrentTime.textContent = formatTime(cur);
      audioTotalTime.textContent   = formatTime(dur);
    };

    audioProgress.oninput = () => {
      if (audio.duration) {
        audio.currentTime = (audioProgress.value / 100) * audio.duration;
      }
    };

    audio.onended = () => {
      audioPlayPause.textContent = "▶️";
      audioProgress.value        = 0;
      audio.currentTime          = 0;
    };
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  // —— DETAILS NAV ——
  function loadDetailPage(idx) {
    currentDetailPage = idx;
    const d = currentPoster.details[idx];
    detailContent.innerHTML = `
      <div class="detail-text-wrapper">
        ${d.title ? `<h3>${d.title}</h3>` : ''}
        <p class="mb-2">${d.text}</p>
        <p class="text-xs text-[#1B263B]/80">${d.source}</p>
      </div>
    `;
    prevPageButton.disabled = idx === 0;
    nextPageButton.textContent =
      idx === currentPoster.details.length - 1 ? "Afronden" : "Volgende";
  }

  // —— STARS & SECRET PUZZLE ——
  function updateStarCounter() {
    starCounter++;
    renderStars(); // Update visuele sterren direct
    updateProgressBar();
    saveProgress();

    if (starCounter === 3) {
      secretPuzzleInput.value      = "";
      secretPuzzleFeedback.classList.add('hidden');
      secretPuzzleInput.classList.remove('border-green-500', 'border-red-500');
      secretPuzzleHint.textContent = posters.find(p => p.isSecret).puzzleHint;
      showScreen(secretPosterScreen);
    } else if (starCounter === 4) {
      showScreen(endPageScreen);
    } else {
      loadPuzzleScreen(); // Ga naar volgende reguliere puzzel
    }
  }

  function checkSecretPuzzle() {
    const ans = secretPuzzleInput.value.toLowerCase().trim();
    const sec = posters.find(p => p.isSecret);

    secretPuzzleInput.classList.remove('border-green-500', 'border-red-500');
    secretPuzzleFeedback.classList.add('hidden');

    if (ans === sec.puzzleSolution.toLowerCase()) {
      sec.puzzleSolved = true;
      saveProgress();
      secretPuzzleInput.classList.add('border-green-500');
      secretPuzzleFeedback.textContent = "Correct! Geheime poster ontgrendeld.";
      secretPuzzleFeedback.classList.remove('hidden', 'text-red-400');
      secretPuzzleFeedback.classList.add('text-green-500');

      setTimeout(() => {
        loadPoster(sec); // Ga naar de geheime poster na een korte vertraging
      }, 1000);
    } else {
      secretPuzzleInput.classList.add('border-red-500');
      secretPuzzleFeedback.textContent = "Fout antwoord, probeer opnieuw!";
      secretPuzzleFeedback.classList.remove('hidden', 'text-green-500');
      secretPuzzleFeedback.classList.add('text-red-400');
    }
  }

  // —— THEME & RESET ——
  function resetGame() {
    resetProgress();
    isGameStarted = false;
    updateProgressBar();
    showScreen(grandStartScreen);
  }

  function toggleTheme() {
    const isDark = document.body.classList.contains("dark");
    document.body.classList.toggle("dark", !isDark);
    document.body.classList.toggle("light", isDark);
    themeToggle.textContent = isDark ? "🌙" : "☀️";
    localStorage.setItem("theme", isDark ? "light" : "dark");
  }

  function loadTheme() {
    const t = localStorage.getItem("theme") || "dark";
    document.body.classList.add(t);
    themeToggle.textContent = t === "dark" ? "🌙" : "☀️";
  }

  // —— AR HELPERS ——
  async function isARSupported() {
    if (!navigator.xr) return false;
    return await navigator.xr.isSessionSupported("immersive-ar");
  }

  async function startARSession() {
    const gl = arCanvas.getContext("webgl", { xrCompatible: true });
    if (!gl) {
      arOverlay.querySelector("h3").textContent = "WebGL niet ondersteund";
      arOverlay.classList.remove("hidden");
      return;
    }

    const session = await navigator.xr
      .requestSession("immersive-ar", { requiredFeatures: ["local"] })
      .catch((error) => {
        console.error("Fout bij aanvragen AR-sessie:", error);
        return null;
      });

    if (!session) {
      arOverlay.querySelector("h3").textContent = "AR-sessie geweigerd of mislukt";
      arOverlay.classList.remove("hidden");
      return;
    }

    // --- DEZE CODE BLOK MOET HIER STAAN, OMDAT DE SESSIE NU SUCCESVOL IS GESTART! ---
    // Initialiseer Three.js renderer en koppel deze aan de WebXR sessie
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Belangrijk voor transparantie met de AR-camera feed
      preserveDrawingBuffer: true,
      context: gl // Gebruik de reeds verkregen WebGL context
    });
    renderer.setSize(window.innerWidth, window.innerHeight); // Stel de grootte in
    renderer.xr.enabled = true; // Activeer XR voor de renderer

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(); // Three.js beheert de camera voor XR in een XR-sessie

    // Voeg licht toe aan de scene (essentieel om je 3D-model te zien)
    scene.add(new THREE.AmbientLight(0xffffff, 0.8)); // Zacht omgevingslicht
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(0, 5, 0); // Licht van bovenaf
    scene.add(directionalLight);

    // Stel de XR-sessie in voor de renderer
    renderer.xr.setSession(session);

    // Laad je 3D-model
    const loader = new THREE.GLTFLoader();

    loader.load(
      'model/p1.gltf', // <-- VERVANG DIT PAD naar je 3D-model!
      (gltf) => {
        // Voeg het geladen model toe aan de scene
        scene.add(gltf.scene);

        // Pas de positie en schaal van je model aan
        // Bijvoorbeeld: 0.5 meter voor de camera op grondniveau (ongeveer)
        gltf.scene.position.set(0, -0.5, -0.5);
        gltf.scene.scale.set(0.1, 0.1, 0.1); // Schaal het model naar 10% (pas aan naar behoefte)

        console.log("3D model geladen en geplaatst!");
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% geladen');
      },
      (error) => {
        console.error('Fout bij het laden van 3D model:', error);
      }
    );

    // Start de animatielus voor het renderen van de AR-scene
    renderer.setAnimationLoop((time, frame) => {
      if (frame) {
        // De 'frame' object is nodig voor geavanceerde XR-functionaliteit zoals hit-testing
      }
      renderer.render(scene, camera);
    });

    // Zorg ervoor dat de arOverlay weer verborgen is zodra de AR-sessie start
    arOverlay.classList.add("hidden");

    // Optioneel: Voeg een event listener toe voor het einde van de AR-sessie
    session.addEventListener('end', () => {
      console.log('AR Session Ended.');
      // Hier kun je opruimcode toevoegen, bijv. terugkeren naar een ander scherm
      // showScreen(posterExperience); // Keer terug naar de posterpagina
    });
  }

  // —— EVENT LISTENERS ——
  grandStartButton.addEventListener("click", () => {
    resetProgress();
    updateProgressBar();
    isGameStarted = false;
    showScreen(homeScreen);
  });

  startButton.addEventListener("click", () => {
    isGameStarted = true;
    loadPuzzleScreen();
  });

  headerTitle.addEventListener("click", () => {
    showScreen(homeScreen);
  });

  submitPuzzleButton.addEventListener("click", checkPuzzleSolution);
  puzzleInput.addEventListener("keypress", e => {
    if (e.key === "Enter") checkPuzzleSolution();
  });

  toDetailsButton.addEventListener("click", () => {
    loadDetailPage(0);
    showScreen(detailPagesScreen);
  });

  prevPageButton.addEventListener("click", () => {
    if (currentDetailPage > 0) loadDetailPage(currentDetailPage - 1);
  });

  nextPageButton.addEventListener("click", () => {
    if (currentDetailPage < currentPoster.details.length - 1) {
      loadDetailPage(currentDetailPage + 1);
    } else {
      currentPoster.isCompleted = true;
      updateStarCounter();
    }
  });

  submitSecretPuzzle.addEventListener("click", checkSecretPuzzle);
  secretPuzzleInput.addEventListener("keypress", e => {
    if (e.key === "Enter") checkSecretPuzzle();
  });

  restartButton.addEventListener("click", resetGame);
  themeToggle.addEventListener("click", toggleTheme);

  startARBtn.addEventListener("click", async () => {
    arOverlay.classList.add("hidden");
    if (!(await isARSupported())) {
      arOverlay.querySelector("h3").textContent = "AR niet ondersteund";
      arOverlay.classList.remove("hidden");
      return;
    }
    await startARSession();
  });

  // —— BOOTSTRAP ——
  loadTheme();
  loadProgress();
  updateProgressBar();
  renderStars();
  showScreen(grandStartScreen);
})();