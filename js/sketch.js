/*
===============================
CONSTANTS AND VARIABLES
===============================
*/

// HTML collections
const btns = document.querySelectorAll("button");
const heading = document.querySelector("h1");
const labels = document.getElementsByClassName("label");
const modes = document.querySelectorAll(".mode button")
const divs = document.getElementsByClassName("grid-square")
const eraseBtn = document.querySelector("#erase")

// Colors
const psychedelicColors = ['#46FF31', '#31FFCD', '#3180FF', '#9231FF', '#FF31BB', '#FF5731', '#F6FF31']
const modernColors = ['#1f1f1f', '#86b9ce', '#7772e2', '#4274fd', '#62c799', '#fba66c', '#fdd149']
const defaultGrey = 'rgb(220, 220, 220)'
let activeMode = 'Normal'


/*
===============================
STYLE FUNCTIONS
===============================
*/

function styleButtons() {
    for (btn of btns) {
        if (btn.id == "erase") {
            btn.className = "btn btn-danger"
        } else if (btn.id == "medium-density" || btn.id == "normal") {
        btn.className = "btn btn-light active";
        btn.style.margin = "5px";
        } else {
            btn.className = "btn btn-light";
            btn.style.margin = "5px";
        }
    }
}

function styleLabels() {
    for (label of labels) {
        label.classList.add("h5");
    }
}

function styleHeading() {
    heading.className = "display-2";
    heading.style.color = '#d9ffbc'
    heading.style.fontFamily = "cursive"
}


/*
===============================
UX FUNCTIONS
===============================
*/

function generateGrid(size = 32 * 44, cssClass = "medium-default") {
    const gridContainer = document.getElementById("container");

    gridContainer.innerHTML = '';

    gridContainer.classList.remove("low", "medium-default", "high"); 
    gridContainer.classList.add(cssClass);

    for (let i= 1; i <= size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square")
        gridContainer.appendChild(square);
    }
}

function gridDensity() {
    document.getElementById("low-density").addEventListener("click", 
    function() {
        generateGrid(16*22, "low")
        document.getElementById("low-density").setAttribute("aria-pressed", "true")
        document.getElementById("low-density").classList.add("active")
        document.getElementById("medium-density").classList.remove("active")
        document.getElementById("high-density").classList.remove("active")
        draw();
    });

    document.getElementById("medium-density").addEventListener("click", 
    function() {
        generateGrid(32 * 44, "medium-default")
        document.getElementById("medium-density").setAttribute("aria-pressed", "true")
        document.getElementById("medium-density").classList.add("active")
        document.getElementById("high-density").classList.remove("active")
        document.getElementById("low-density").classList.remove("active")
        draw();
    });

    document.getElementById("high-density").addEventListener("click", 
    function() {
        generateGrid(64 * 88, "high")
        document.getElementById("high-density").setAttribute("aria-pressed", "true")
        document.getElementById("high-density").classList.add("active")
        document.getElementById("medium-density").classList.remove("active")
        document.getElementById("low-density").classList.remove("active")
        draw();
    });
}

function selectMode() {
    document.getElementById("normal").addEventListener("click", 
    function() {
        document.getElementById("normal").setAttribute("aria-pressed", "true")
        document.getElementById("normal").classList.add("active")
        document.getElementById("modern").classList.remove("active")
        document.getElementById("psychedelic").classList.remove("active")
    });

    document.getElementById("modern").addEventListener("click", 
    function() {
        document.getElementById("modern").setAttribute("aria-pressed", "true")
        document.getElementById("modern").classList.add("active")
        document.getElementById("normal").classList.remove("active")
        document.getElementById("psychedelic").classList.remove("active")
    });

    document.getElementById("psychedelic").addEventListener("click", 
    function() {
        document.getElementById("psychedelic").setAttribute("aria-pressed", "true")
        document.getElementById("psychedelic").classList.add("active")
        document.getElementById("normal").classList.remove("active")
        document.getElementById("modern").classList.remove("active")
    });
}

function currentMode() {
    for (mode of modes) {
        mode.addEventListener("click", (e) => {
            activeMode = e.target.textContent;
       })
   }
}

function draw() {
   
    for (div of divs) {
        div.count = 0;
        div.addEventListener("mouseenter", (e) => {
            if (activeMode == 'Normal') {
                e.target.style.backgroundColor = 'rgb(150, 150, 150';
                e.target.count++;
                e.target.style.opacity = e.target.count * 0.2;
            } else if (activeMode == "Modern") {
                let random = Math.floor(Math.random() * modernColors.length);
                e.target.style.backgroundColor = modernColors[random];
            } else if (activeMode == "Psychedelic") {
                let random = Math.floor(Math.random() * psychedelicColors.length);
                e.target.style.backgroundColor = psychedelicColors[random];
            }         
        })
    }
}

function erase() {

    eraseBtn.addEventListener("click", (e) => {
        eraseBtn.setAttribute("aria-pressed", "true");
        for (div of divs) {
            div.style.backgroundColor = defaultGrey;
            div.style.opacity = 1;
        }
    }) 
}

/*
===============================
START GAME
===============================
*/

function startGame() {
    generateGrid();
    gridDensity();
    styleButtons();
    styleHeading();
    styleLabels();
    currentMode();
    selectMode();
    draw();
    erase();
}

startGame();