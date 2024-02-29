function viewApplicationsAsTable() {

    const formData = {};
    const formElements = document.getElementById("jobApplicationForm").elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type !== "button" && element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }


    const table = document.createElement("table");
    table.classList.add("applications-table");


    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    for (const key in formData) {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    }

    const tbody = table.createTBody();
    const dataRow = tbody.insertRow();
    for (const key in formData) {
        const td = dataRow.insertCell();
        td.textContent = formData[key];
    }

  
    document.body.appendChild(table);

    console.log("Transformed data into table.");
}

document.getElementById("jobApplicationForm").addEventListener("submit", function (event) {
    
    event.preventDefault(); 
    console.log("Form submitted!");
});