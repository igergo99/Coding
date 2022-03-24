
window.addEventListener('load', () => {
    const questionBox = document.querySelector('#questionBox')
    const formElement = document.querySelector('#form');
    formElement.addEventListener('submit', (event) => {
        event.preventDefault()

        questionBox.innerHTML = "";
        let questionValue = document.querySelector('#questionInput').value;
        let answer1Value = document.querySelector('#answerInput1').value;
        let answer2Value = document.querySelector('#answerInput2').value;
        let answer3Value = document.querySelector('#answerInput3').value;
        let correctAnswerValue = document.querySelector('#correctAnswer').value;
        let allInputValues = document.querySelectorAll('input');

        /* function inputChecker() {
            allInputValues.forEach((element, index) => {
                if (element.value === "") {
                    throw new Error(`Valamelyik inputmező nincs kitöltve!`);
                }

            })
        }
        try {
            inputChecker()
        } catch (error) { console.log(error) } */


        fetch('https://6179a8bcaa7f340017404bde.mockapi.io/api/v1/question/16', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 16,
                question: questionValue,
                answer1: answer1Value,
                answer2: answer2Value,
                answer3: answer3Value,
                correct: correctAnswerValue
            })

        })
        fetch('https://6179a8bcaa7f340017404bde.mockapi.io/api/v1/question/16', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {

                console.log(json)
                let H1Elem = document.createElement('h1');
                H1Elem.innerHTML = json.question
                questionBox.append(H1Elem)
                let answerArr = [json.answer1, json.answer2, json.answer3];

                answerArr.forEach((element, index) => {

                    let H2Elem = document.createElement('h2');
                    H2Elem.innerHTML = element;


                    questionBox.append(H2Elem)
                    let h2Arr;
                    setTimeout(() => {
                        h2Arr = document.querySelectorAll('h2');
                    }, 300)
                    H2Elem.addEventListener('click', (event) => {
                        if (index + 1 == correctAnswerValue) {
                            event.target.style.color = "green"
                            questionBox.classList.add("disabledClick")
                        } else {
                            event.target.style.color = "red";
                            h2Arr[Number(correctAnswerValue) - 1].style.color = "green"
                        }
                    })
                })


            })


    })


})


