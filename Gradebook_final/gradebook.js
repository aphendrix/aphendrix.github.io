// Called when the page loads
window.onload = fetchGradeData;

async function fetchGradeData() {
  console.log("fetchGradeData function called");
  try {
    const response = await fetch('/grades');
    const data = await response.json();
    console.log("Received data:", data);
    populateGradebook(data);
  } catch (error) {
    console.error("Error fetching grade data:", error);
  }
}

function populateGradebook(data) {
  console.log("populateGradebook function called");
  const tableBody = document.getElementById('gradebook-body');
  tableBody.innerHTML = ''; // Clear old rows

  data.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.grade}</td>
      <td>-</td>
      <td>-</td>
    `;
    tableBody.appendChild(row);
  });
}
