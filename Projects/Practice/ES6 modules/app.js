import { stringLength as strLength } from "./stringUtil.js";
import { stringUpperCase as strUpperCase } from "./stringUtil.js";
import { textFirstLetter } from "./wordUtil.js";



console.log(textFirstLetter('asdafafa', 'adfazfdazf', 'ajdazdfadfa'))

console.log(strUpperCase('hello'));
try { console.log(strLength("123")) }
catch (error) {
    console.log(error)
}