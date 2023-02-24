fetch("http://localhost:8080/api/tanks")
  .then(response => response.json())
  .then(result => {
    const tanksWrapper = document.getElementById("tanks-wrapper");

    result.data.forEach(tank => {

        const tankDiv = document.createElement("div");

        const tankNameP = document.createElement("p");
        const tankNationalityP = document.createElement("p");
        tankNameP.innerText = tank.name || "no name";
        tankNationalityP.innerText = tank.nationality || "no nationality";
        const breakBr = document.createElement("br")

        tankDiv.appendChild(tankNameP);
        tankDiv.appendChild(tankNationalityP);
        tankDiv.appendChild(breakBr);

        tanksWrapper.appendChild(tankDiv);

        /* tanksWrapper.innerHTML += `
        <div>
          ${tank.name}
          </div>
          <script>alert("oh no")</script>
        `; */
    });
    
  });
  
