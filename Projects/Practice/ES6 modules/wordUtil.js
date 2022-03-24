import { stringUpperCase } from "./stringUtil.js"


const textFirstLetter = function (...phrases) {
    let upperCasePhrase = []
    for (let index = 0; index < phrases.length; index++) {
        upperCasePhrase.push(stringUpperCase(phrases[index]))
    }
    return upperCasePhrase
}
export { textFirstLetter };