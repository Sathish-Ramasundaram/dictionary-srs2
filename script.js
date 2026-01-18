window.words = [];


const SHEET_URL ="https://opensheet.elk.sh/1_SCEFy8J8tE5AYpEIHbcDnHD3584_yOtXowDLaXAut8/Sheet1";

fetch(SHEET_URL)
  .then(res => res.json())
  .then(data => window.words = data);

searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const found = words.find(
        w => w.English.toLowerCase() === searchInput.value.toLowerCase()
    );
    result.innerHTML = found ? 
    `<div>
    <h3>${found.English}</h3>
    ${found.Image ? `<img src="${found.Image}" alt="${found.English}" width="150">` : '<p>No image available</p>'}

    <p><strong>Meaning:</strong> ${found.Meaning}</p>
    <p><strong>Tamil:</strong> ${found.Tamil}</p>
    <p><strong>Kannada:</strong> ${found.Kannada}</p>
    <p><strong>Hindi:</strong> ${found.Hindi}</p>
    
    </div>` : "<p>Word not found</p>";
    }
});