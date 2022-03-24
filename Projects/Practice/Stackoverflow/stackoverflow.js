
window.addEventListener("load", () => {
    const testDatabase = ["1. kérdés", "2. kérdés", "2. kérdés", "2. kérdés", "2. kérdés"]
    const questionForum = document.getElementById("questionForum");
    const questionList = document.getElementById("questionList")
    const newQuestionButton = document.getElementById("newQuestionButton")
    const forumForm = document.getElementById("forumForm")
    forumForm.classList.add("invisible")
    forumForm.classList.remove("visible")
    let questionId = null;
    function questionLister() {
        questionList.innerHTML = "";
        fetch('http://localhost:3000/questions', {
            method: "GET",   /* PUT, PATCH */
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                json.forEach(element => {
                    let aElem = document.createElement('a');
                    aElem.innerHTML = `<strong>${element.title}</strong><br>`
                    aElem.addEventListener('click', (event) => {
                        questionId = element.id;
                        console.log(questionId)
                        questionForum.classList.remove("invisible")
                        questionForum.classList.add("visible")
                        forumForm.classList.remove("invisible")
                        forumForm.classList.add("visible")
                        newQuestionForm.classList.add("invisible")
                        newQuestionForm.classList.remove("visible")

                        questionForum.innerHTML = "";

                        questionForum.append(event.target.parentNode.parentNode.innerText);

                        fetch('http://localhost:3000/answers', {
                            method: "GET",   /* PUT, PATCH */
                            headers: {
                                'Content-Type': 'application/json'
                            },

                        })
                            .then(response => response.json())
                            .then(json => {
                                json.forEach(elem => {
                                    if (element.id === elem.question_id) {

                                        const fourmP = document.createElement('p');
                                        fourmP.innerHTML = `${elem.answer}<br>`
                                        questionForum.append(fourmP)
                                    }
                                })
                            })

                    })
                    let pElem = document.createElement("p");
                    pElem.append(aElem, element.question)
                    questionList.append(pElem)

                })
            })
            .catch(reason => console.log(reason));
    }
    questionLister()
    const newQuestionForm = document.getElementById("newQuestionForm")
    newQuestionButton.addEventListener("click", (event) => {
        newQuestionForm.classList.remove("invisible")
        newQuestionForm.classList.add("visible")
        questionForum.classList.add("invisible")
        questionForum.classList.remove("visible")
        forumForm.classList.add("invisible")
        forumForm.classList.remove("visible")
    })

    const questionForm = document.getElementById("questionForm");
    questionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/questions', {
            method: "POST",   /* PUT, PATCH */
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "title": document.getElementById("questionTitle").value, "question": document.getElementById("questionInput").value })
        })
        document.getElementById("questionTitle").value = ""
        document.getElementById("questionInput").value = ""
        questionLister()
    });







})