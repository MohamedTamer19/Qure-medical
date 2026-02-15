// ====== Patients Data ======
const firstNames = ["Ahmed","Sara","Omar","Nour","Youssef","Mariam","Karim","Hana","Mahmoud","Salma","Ramy","Leila","Fady","Lina","Tamer","Rania","Hussein","Aya","Mohamed","Dina"];
const lastNames = ["Ali","Mohamed","Hassan","Khaled","Tarek","Adel","Mostafa","Samir","Salah","Nabil","Yassin","Omar","Hossam","Farid","Youssef","Hussein","Nader","Kamel","Fouad","Saeed"];
const bloodTypes = ["O+","O-","A+","A-","B+","B-","AB+","AB-"];
const conditions = ["None","Diabetes","Asthma","Heart Disease","Hypertension","Allergy"];
const patientNotes = {};

const tbody = document.querySelector("#patientsTable tbody");

// ====== Generate 50 patients ======
for(let i=1;i<=50;i++){
    let name = firstNames[Math.floor(Math.random()*firstNames.length)] + " " + lastNames[Math.floor(Math.random()*lastNames.length)];
    let blood = bloodTypes[Math.floor(Math.random()*bloodTypes.length)];
    let condition = conditions[Math.floor(Math.random()*conditions.length)];
    patientNotes[i] = "";

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${i}</td>
        <td>${name}</td>
        <td>${blood}</td>
        <td>${condition}</td>
        <td>
            <div style="width:40px; height:40px; background:white; display:flex; align-items:center; justify-content:center; border-radius:4px;">
                <img src="./images/qr.jpg" class="qr-img" alt="QR">
            </div>
        </td>
    `;

    tr.onclick = ()=> {
        const url = `Patients.html?id=${i}&name=${encodeURIComponent(name)}&blood=${blood}&condition=${encodeURIComponent(condition)}&note=${encodeURIComponent(patientNotes[i])}`;
        window.open(url,"_blank","width=900,height=700");
    };
    tbody.appendChild(tr);
}

// ====== Search Function ======
function searchTable(){
    const filter = document.getElementById("searchInput").value.toLowerCase();
    const rows = tbody.getElementsByTagName("tr");
    for(let i=0;i<rows.length;i++){
        let tdID = rows[i].getElementsByTagName("td")[0];
        let tdName = rows[i].getElementsByTagName("td")[1];
        rows[i].style.display = (tdID.textContent.toLowerCase().includes(filter) || tdName.textContent.toLowerCase().includes(filter)) ? "" : "none";
    }
}
