function processSubmit(event) {

    event.preventDefault();

    const tableContainer = document.getElementById("tableContainer");

    const rows = parseInt(document.getElementById("rows").value, 10);
    const columns = parseInt(document.getElementById("columns").value, 10);

    if (rows <= 0 || columns <= 0) {
        alert("Wrong input. Rows and columns must be greater or equal to 1")
        return
    }

    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("generated-table");

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);

}