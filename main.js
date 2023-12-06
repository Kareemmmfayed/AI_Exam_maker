let loop = document.getElementById("label")
let one = document.getElementById("one");
let questionsContainer = document.getElementsByClassName("questions")[0];
let two = document.getElementById("two")
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
    two.classList.remove("show")
});