

let loop = document.getElementById("label")
let one = document.getElementById("one");
let questionsContainer = document.getElementsByClassName("questions")[0];
let two = document.getElementById("two")
let title = document.getElementsByClassName("title")[0];
let gene = document.getElementsByClassName("generator")[0];

one.addEventListener("click", () => {
    questionsContainer.innerHTML = ``
    let thev = loop.value
    for (let i = 0; i < thev; i++) {
        questionsContainer.innerHTML += `
        <div class="mar">
            <div class="question">
                <label for="q1">Q1</label>
                <input type="text" id="q1">
            </div>
            <div class="answer">
                <label for="a1">A1</label>
                <input type="text" id="a1">
            </div>
        </div>`;
    }

    let divs = document.querySelectorAll('.mar');

    for (let i = 0; i < divs.length - 1; i++) {
        divs[i].innerHTML += `
        <div class="large">
            <div class="line"></div>
        </div>`;
    }

    if (thev != 0) {
        two.classList.remove("show")
        title.classList.remove("title")
        title.classList.add("show")
        gene.classList.add("show")
    }
});