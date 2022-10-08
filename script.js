let calculator = document.querySelector("#calculator");

let hasil = document.getElementById("hasil");

let btnReset = document.getElementById("reset-btn");

calculator.addEventListener("submit", (event) => {
    event.preventDefault();

    let weight = document.getElementById("weight").value;
    // console.log(weight);

    let height = document.getElementById("height").value;
    // console.log(height);

    let bmiCal = (height / 100) ** 2;
    let totalBMI = weight / bmiCal;

    totalBMI = Number.parseFloat(totalBMI).toFixed(1);
    // console.log(totalBMI);

    let bmiKategori = "";

    if (totalBMI < 18.5) {
        bmiKategori = "underweight";
    } else if (totalBMI >= 18.5 && totalBMI <= 24.9) {
        bmiKategori = "normal weight";
    } else if (totalBMI >= 25 && totalBMI <= 29.9) {
        bmiKategori = "overweight";
    } else {
        bmiKategori = "obesity";
    }

    let p = document.createElement("p");
    p.innerHTML = `Weight: ${weight}<br>
    Height: ${height} <br> <br>
    Your BMI is <b>${totalBMI}</b> which means you are <b>${bmiKategori}</b>`;

    hasil.append(p);

    btnReset.classList.remove("hidden");

    calculator.reset();

    btnReset.addEventListener("click", () => {
        btnReset.classList.add("hidden");
        p.remove();
    });
});
