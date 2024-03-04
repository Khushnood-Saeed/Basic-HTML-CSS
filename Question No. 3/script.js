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
    table.classList.add("table");
    
    

    const tbody = table.createTBody();

    for (const key in formData) {
        const row = tbody.insertRow();

        const keyCell = row.insertCell(0);
        keyCell.textContent = key;
       

        const valueCell = row.insertCell(1);
        valueCell.textContent = formData[key];
    }

    table.classList.add("center-table");

    document.body.appendChild(table);

    console.log("Transformed data into table.");
}

function mySubmit(){

    const formElements = document.getElementById("jobApplicationForm").elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type !== "button" && element.type !== "submit") {
            if(element.value==''){
                console.log(`Please fill ${element.name}`)
                return false
            }
            
        }
    }
    console.log("Form Submitted")
    return false
}