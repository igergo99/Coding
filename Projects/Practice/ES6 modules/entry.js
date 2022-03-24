console.log('entry module loaded');
import { moduleAStart, } from "./moduleA.js";
import { moduleBStart, } from "./moduleB.js";

moduleAStart();
moduleBStart();