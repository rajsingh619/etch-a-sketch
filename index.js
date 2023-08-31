const container = document.getElementById("container");
const range = document.getElementById('input');
let rows = range.value;
range.addEventListener('input',()=>solve(range.value));


function solve(rows){
    container.innerHTML = '';
    for (let i = 0; i < rows*rows; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        let calch = 600/rows;
        div.style.width = calch+"px";
        div.style.height = calch+"px";
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "blue";
        });
    }
    const sizeInput = document.getElementById('sizeInput');
    sizeInput.innerHTML = rows;
}
solve(rows);

    
