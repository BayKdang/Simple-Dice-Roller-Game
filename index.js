function rollDice(){
    const diceNumber = document.getElementById("diceNumber").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const diceImages = [];

    for(let i = 0; i<diceNumber; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        diceImages.push(`<img src="img/dice${value}.png" alt="Dice${value}">`);
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImg.innerHTML = diceImages.join(" ");
}