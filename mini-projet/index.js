// Codes couleurs
const jaune = "#efec4f";
const orange = "#eca45c";
const rouge = "#e85b69";
const violet = "#956caf";
const bleu = "#427cf5";
const vert = "#4cee7e";
const noir = "#020e13";

// Toutes les grilles (6 sections)
const grids = document.querySelectorAll("section.grid");

// petit helper : récupère les 9 div d'une grille
function cellsOf(n) {
  return grids[n].querySelectorAll("div");
}

function grid1() {
  // tout noir
  const cells = cellsOf(0);
  cells.forEach((c) => (c.style.backgroundColor = noir));
}

function grid2() {
  // damier vert/jaune (vert aux coins + centre)
  const cells = cellsOf(1);
  const pattern = [
    vert, jaune, vert,
    jaune, vert, jaune,
    vert, jaune, vert
  ];
  cells.forEach((c, i) => (c.style.backgroundColor = pattern[i]));
}

function grid3() {
  // 2 premières lignes colorées, dernière ligne blanche
  const cells = cellsOf(2);
  const pattern = [
    rouge, orange, jaune,
    vert, bleu, violet,
    null, null, null
  ];
  cells.forEach((c, i) => {
    if (pattern[i]) c.style.backgroundColor = pattern[i];
  });
}

function grid4() {
  // tout noir sauf centre vert
  const cells = cellsOf(3);
  cells.forEach((c) => (c.style.backgroundColor = noir));
  cells[4].style.backgroundColor = vert; // centre
}

function grid5() {
  // bleu / violet-rouge-violet / orange-jaune-orange
  const cells = cellsOf(4);
  const pattern = [
    bleu, bleu, bleu,
    violet, rouge, violet,
    orange, jaune, orange
  ];
  cells.forEach((c, i) => (c.style.backgroundColor = pattern[i]));
}

function grid6() {
  // 3 bandes en dégradé
  const cells = cellsOf(5);

  // ligne 1
  for (let i = 0; i < 3; i++) {
    cells[i].style.backgroundImage = `linear-gradient(${violet}, ${bleu})`;
  }

  // ligne 2
  for (let i = 3; i < 6; i++) {
    cells[i].style.backgroundImage = `linear-gradient(${vert}, ${jaune})`;
  }

  // ligne 3
  for (let i = 6; i < 9; i++) {
    cells[i].style.backgroundImage = `linear-gradient(${orange}, ${rouge})`;
  }
}

// Appels
grid1();
grid2();
grid3();
grid4();
grid5();
grid6();