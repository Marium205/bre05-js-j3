document.addEventListener("DOMContentLoaded", () => {
  // on force ce css
  document.body.style.display = "grid";
  document.body.style.gridTemplateRows = "10vh minmax(90vh, max-content)";

  const main = document.querySelector("main");
  main.style.display = "grid";
  main.style.gridTemplateColumns = "30vw 30vw";
  main.style.columnGap = "50px";
  main.style.rowGap = "50px";

  const grids = document.querySelectorAll("section.grid");
  grids.forEach((grid) => {
    grid.style.height = "30vw";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";

    grid.querySelectorAll("div").forEach((cell) => {
      cell.style.border = "1px dashed #ccc";
    });
  });

  // ====== 2) Couleurs ======
  const jaune = "#efec4f";
  const orange = "#eca45c";
  const rouge = "#e85b69";
  const violet = "#956caf";
  const bleu = "#427cf5";
  const vert = "#4cee7e";
  const noir = "#020e13";

  function cellsOf(n) {
    return grids[n].querySelectorAll("div");
  }

  function grid1() {
    cellsOf(0).forEach((c) => (c.style.backgroundColor = noir));
  }

  function grid2() {
    const pattern = [
      vert, jaune, vert,
      jaune, vert, jaune,
      vert, jaune, vert
    ];
    cellsOf(1).forEach((c, i) => (c.style.backgroundColor = pattern[i]));
  }

  function grid3() {
    const pattern = [
      rouge, orange, jaune,
      vert, bleu, violet,
      null, null, null
    ];
    cellsOf(2).forEach((c, i) => {
      if (pattern[i]) c.style.backgroundColor = pattern[i];
    });
  }

  function grid4() {
    const cells = cellsOf(3);
    cells.forEach((c) => (c.style.backgroundColor = noir));
    cells[4].style.backgroundColor = vert;
  }

  function grid5() {
    const pattern = [
      bleu, bleu, bleu,
      violet, rouge, violet,
      orange, jaune, orange
    ];
    cellsOf(4).forEach((c, i) => (c.style.backgroundColor = pattern[i]));
  }

  function grid6() {
    const cells = cellsOf(5);

    for (let i = 0; i < 3; i++) {
      cells[i].style.backgroundImage = `linear-gradient(${violet}, ${bleu})`;
    }
    for (let i = 3; i < 6; i++) {
      cells[i].style.backgroundImage = `linear-gradient(${vert}, ${jaune})`;
    }
    for (let i = 6; i < 9; i++) {
      cells[i].style.backgroundImage = `linear-gradient(${orange}, ${rouge})`;
    }
  }

  grid1();
  grid2();
  grid3();
  grid4();
  grid5();
  grid6();
});