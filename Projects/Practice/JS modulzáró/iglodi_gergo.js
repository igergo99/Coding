
// 1. feladat

{
    const category = "fajáték";
    const item = "Jenga Classic";
    console.log(`A ${category} kategóriában a ${item} játék megtalálható`)
}

// 2. feladat

{
    let log = (param) => console.log(param);
    log("Szia Tibor!");
}

// 3. feladat

{
    let loggerFunc = (category, item) => `A(z) ${category} kategóriában a(z) ${item} játék megtalálható`;
    console.log(loggerFunc('Társasjátékok', 'Monopoly'))
    console.log(loggerFunc('Autó', 'BMW'))
}

// 4. feladat

{
    let dokkolas = (...vehicles) => {
        vehicles.forEach(element => console.log(`${element} dokkolt`))
    }

    dokkolas("Millenium Falcon")
    dokkolas("Millenium Falcon", "X-wing", "B-wing", "Star destroyer")
}

// 5. feladat

{
    const planets = ["Mars", "Vénusz"]
    const planets2 = ["Föld", ...planets]
    console.log(...planets2)
}


// 6. feladat
{
    const ships = ["Millenium Falcon", "J-Type Star", "Jedi Starfighters", "A-Wing"];
    [topSpeed1, topSpeed2, topSpeed3] = ships
    console.log(topSpeed1, topSpeed2, topSpeed3)
}

// 7. feladat

{
    const deathStarMainFrameConfigarationSystemConfig = {
        position: { x: 123.53, y: 324.2, z: 591.1 },
        initialSpeed: 10000,
        robotPilot: true,
        capacity: 5000,
    }
    let { initialSpeed, position } = deathStarMainFrameConfigarationSystemConfig


    console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)
}


// 8. feladat
{
    const deathStarMainFrameConfigarationSystemConfig = {
        position: { x: 123.53, y: 324.2, z: 591.1 },
        initialSpeed: 10000,
        robotPilot: true,
        capacity: 5000,
    }

    function initialConfig(obj) {
        let { initialSpeed, position } = obj
        console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)
    }

    initialConfig(deathStarMainFrameConfigarationSystemConfig)
}

// 9.feladat
{
    const deathStarMainFrameConfigarationSystemConfig = {
        position: null,
        initialSpeed: 1200,
        robotPilot: true,
        capacity: 5000,
    }

    function initialConfig(obj) {
        let { initialSpeed, position } = obj
        if (initialSpeed === null) {
            throw new Error("Az initialSpeed property hibás")
        }
        if (position === null) {
            throw new Error("Az position property hibás")
        }
        else {
            console.log(`Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)
        }
    }
    try {
        initialConfig(deathStarMainFrameConfigarationSystemConfig)
    }
    catch (error) {
        console.log(error)
    }
}



// 12. feladat

{
    let promise = new Promise(function (resolve, reject) {
        resolve(2)
    });
    console.log(promise)
}

// 13. feladat

{
    function cargoShipArrive(resolve, reject) {
        setTimeout(() => {
            if (Math.floor(Math.random() * 2) == 1) {
                reject("Nincs rakomány"); // nincs rakomány 
            }
            resolve(1); // 1 kg szemett beerkezett
        }, 500)
    }

    let promise = new Promise(cargoShipArrive)
    promise.then(function (value) {
        console.log(value * 300)
    }).catch(function (reason) {
        console.log(reason)
    })
}

// 14. feladat

{
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
        .then(response => response.json())
        .then(json => console.log(`Szerencsés állat neve: ${json.name}, szerencsés állat latin neve: ${json.latin_name}`))
        .catch(reason => console.log(reason));
}