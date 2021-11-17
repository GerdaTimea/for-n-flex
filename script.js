const generateArray = function(amount) {
    let returnArray = [];
    
    let amountLength = amount.toString().length;

    /*  
    amount = parseInt(amount); ===
    let amountConverted = parseInt(amount);
    amount = amountConverted;
    */

    amount = parseInt(amount);

    // console.log(amount);

    // if (typeof amount === "number") helyett:
    if (!Number.isNaN(amount)) {

        // console.log("Az amount egy szám.");

        for (let i = 1; i <= amount; i++) {

            let iLength = i.toString().length;
            let zerosNeeded = amountLength - iLength;
            
            // console.log(zerosNeeded);

            let zeros = '';
            for (let j = 0; j < zerosNeeded; j++) {
                zeros += '0';
            }

            returnArray.push(`${zeros}${i}`);
        }
    } 

    else {
        // console.log("Az amount nem egy szám.");
        returnArray.push("error");
    }

    return returnArray;
}

const loadEvent = function() {
    console.log("Az oldal betöltődött.");

    // console.log(generateArray("100"));
    // console.log(generateArray(15));
    // console.log(generateArray("kiskutya"));
    // console.log(generateArray([2]));

    const root = document.getElementById("root");
    const list = generateArray(1111);

    if (list[0] !== "error" ) {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
        }
    }
}

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function() {
    ez is teljesen elfogadott
});
*/

/*
window.addEventListener("load", () => {
    arrow
    ez is teljesen elfogadott
});
*/

