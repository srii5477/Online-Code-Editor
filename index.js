$("h1").addClass("big-title");
//convert to jQuery
//separation of concerns
let button1 = document.querySelector(".one");
let pane1 = document.querySelector(".html");
let button2 = document.querySelector(".two");
let pane2 = document.querySelector(".css");
let button3 = document.querySelector(".three");
let pane3 = document.querySelector(".js");
let button4 = document.querySelector(".four");
let pane4 = document.querySelector(".result");
let buttons = [button1, button2, button3, button4];
let panes = [pane1, pane2, pane3, pane4];
for(let i = 0; i < 4; i++) {
    buttons[i].addEventListener("click", function() {
        panes[i].classList.toggle("open");
    })
}

//run implementation
// let runButton = document.querySelector(".run").addEventListener("click", function() {
//     document.querySelector("iframe").
// })

let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");

$(".flexrun").on("click", function() {
    var c1 = html.value;
    var c2 = css.value;
    var c3 = js.value;
    var updatedC1 = c1.replace("<head>", "<head>" + "<style>" + c2 + "</style>");
    updatedC1 = updatedC1.replace("</body>", "<script>" + c3 + "</script>" + "</body");
    document.querySelector("#window").setAttribute("srcdoc",updatedC1);
})

function inputHandler (event) {
    if (event.target !== html || event.target !== css || event.target !== js) {
        let code = event.target.previousElementSibling.firstChild;
        if (code) {
            code.textContent = event.target.value;
            Prism.highlightElement(code);
        }
    }


}

document.addEventListener('input', inputHandler);

