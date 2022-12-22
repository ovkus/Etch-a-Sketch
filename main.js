const container = document.createElement("div");
container.classList.add("container");
container.style.border = "thick solid green";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.padding = "0";
container.style.alignContent = "center";
container.style.alignSelf = "center";
container.innerText = "Why?";
container.addEventListener("mouseover", mouseOver);
document.body.appendChild(container);

let times = prompt("Size?", "10");

function mouseOver() {
    event.target.style.backgroundColor = "red";

}

const row = document.createElement("div");
row.classList.add("row");
row.style.border = "thin solid red";
row.style.padding = "0";
row.style.display = "flex";
row.style.justifyContent = "center";
row.style.alignContent = "center";
row.style.alignSelf = "center";
container.appendChild(row);

function cloneRows (times) {
    for (let i=0; i < times; i++) {
        container.appendChild(row.cloneNode(true));
    }
}

const column = document.createElement("div");
column.classList.add("column");
column.style.border = "thin solid black";
column.style.backgroundColor = "yellow";
column.style.padding = "10px";
column.addEventListener("mouseover", mouseOver)
row.appendChild(column);

function cloneColumns (times) {
    for (let i=0; i < times; i++) {
        row.appendChild(column.cloneNode(true));
    }
}

function finalClone (times) {
    cloneColumns(times-1);
    cloneRows(times-1);
    
}

finalClone(times);