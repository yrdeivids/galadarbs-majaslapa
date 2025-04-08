
        // Generate a Random Number
        let y = Math.floor(Math.random() * 20 + 1);

        // Counting the number of guesses
        // made for correct Guess
        let guess = 1;

        document.getElementById("submitguess").onclick = function () {

            // Number guessed by user    
            let x = document.getElementById("guessField").value;

            if (x == y) {
                alert("Tu uzminēji pareizo skaitli "
                    + guess + " minējumos!");
            }

            /* If guessed number is greater than actual number*/
            else if (x > y) {
                guess++;
                alert("Nepareizi, mēģini mazāku skaitli!");
            }
            else {
                guess++;
                alert("Nepareizi, mēģini lielāku skaitli!")
            }
        }