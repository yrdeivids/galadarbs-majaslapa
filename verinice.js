// document.getElementById("sniegs");: atlasa elementu <canvas> ar id "sniegs".
const canvas = document.getElementById("snow");

// canvas.getContext("2d");: iegūst 2D renderēšanas kontekstu zīmēšanai.
const ctx = canvas.getContext("2d");

// Iestata audekla izmēru, lai tas atbilstu pārlūkprogrammas skata loga izmēriem.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Izveido masīvu sniegpārslu objektu glabāšanai.
const snowflakes = [];

// Veic 200 cilpas, lai radītu 200 sniegpārslas.
for (let i = 0; i < 200; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
    });
}

function drawSnowflakes() {

    // Notīra katra kadra audeklu, lai novērstu celiņu pārklāšanos.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Izvelk cilpas cauri visām sniegpārslām, lai tās uzzīmētu.
    snowflakes.forEach((flake) => {
        const gradient = ctx.createRadialGradient(
            flake.x,
            flake.y,
            0,
            flake.x,
            flake.y,
            flake.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;

        // Sāk jaunu zīmēšanas ceļu.
        ctx.beginPath();

        // Uzzīmē apli, kas attēlo sniegpārsliņu.
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

        // Aizpilda apli ar gradientu.
        ctx.fill();
    });
}

function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {

            // Pārvieto katru sniegpārsliņu uz leju, pamatojoties uz tās ātrumu
            flake.y = 0;

            // Atiestata sniegpārsliņu uz augšu, kad tā nokrīt no apakšas, ar jaunu nejaušu horizontālu pozīciju.
            flake.x = Math.random() * canvas.width;
        }
    });
}

// Galvenā animācijas cilpa.
function animate() {

// Uzzīmē pašreizējo sniegpārslu stāvokli.
    drawSnowflakes();

// Atjaunina viņu pozīcijas nākamajam kadram.
    updateSnowflakes();

// Nepārtraukti izsauc animate(), lai izveidotu vienmērīgas animācijas.
    requestAnimationFrame(animate);
}

animate();