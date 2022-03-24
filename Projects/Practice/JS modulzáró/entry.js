import { initialConfig as processConfig } from "./config";



const deathStarMainFrameConfigarationSystemConfig = {
    position: null,
    initialSpeed: 1200,
    robotPilot: true,
    capacity: 5000,
}

try {
    processConfig(deathStarMainFrameConfigarationSystemConfig)
}
catch (error) {
    console.log(error)
}