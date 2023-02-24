
function writeInVisitorsLog() {
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }  
    }).then(response => response.json())
    .then(result => updateVisitorCount(result.data))
  console.log("hi");
}
fetch("/api/visitors").then((response) => response.json())
.then(result => {
    updateVisitorCount(result.data)
});

function updateVisitorCount(visitorCount) {
    const visitorCountDiv = document.getElementById("visitor-count");
    visitorCountDiv.innerText = visitorCount;
}
