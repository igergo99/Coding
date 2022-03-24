window.addEventListener("load", function () {
    let adatbazis = [
        {
            id: 0,
            fullname: 'Kiss Jolan',
            username: 'bekalab',
            isimage: true,
            email: "string@sjvsjhdv.com",
            imageurl: "http://placekitten.com/200/200",
        },
        {
            id: 1,
            fullname: 'Nagy Jolan',
            username: 'bekalab2',
            isimage: false,
            email: "string@jaebdvjhev.hu",
            imageurl: "",
        },
        {
            id: 25,
            fullname: 'Közepes Jolan',
            username: 'bekalab3',
            isimage: true,
            email: "string@freemail.com",
            imageurl: "http://placekitten.com/200/200",
        },
        /* {
            id: 31241235,
            fullname: 'Kiss Jolan',
            username: 'bekalab',
            isimage: false,
            email: "string@ahdgsugf.de",
            imageurl: "",
        } */
    ];



    // Giving id for the elements of the array
    function indexSetter() {
        for (let index = 0; index < adatbazis.length; index++) {
            adatbazis[index].id = index
        };
    };
    indexSetter();








    // Visible to invisible
    let clickedMenu = null;
    const statMenu = document.getElementById("statMenu");
    statMenu.addEventListener("click", function (event) {
        if (clickedMenu) {
            clickedMenu.classList.remove("clickedMenuClass")
        };
        clickedMenu = event.target;
        event.target.classList.add("clickedMenuClass");
        document.getElementById("statistics").classList.remove("hiddenClass")
        document.getElementById("statistics").classList.add("visibleClass");
        document.getElementById("users").classList.add("hiddenClass");
        document.getElementById("gallarea").classList.add("hiddenClass");
        document.getElementById("users").classList.remove("visibleClass");
        document.getElementById("gallarea").classList.remove("visibleClass");
        document.getElementById("form").classList.remove("visibleClass");
    });
    const usersMenu = document.getElementById("usersMenu");
    usersMenu.addEventListener("click", function (event) {
        if (clickedMenu) {
            clickedMenu.classList.remove("clickedMenuClass")
            // Giving id for the elements of the array
            indexSetter();
            //clearing Database
            tableClearer();
            // Showing my database
            databaseShower();
        };
        clickedMenu = event.target;
        event.target.classList.add("clickedMenuClass");
        document.getElementById("form").classList.add("visibleClass");
        document.getElementById("users").classList.remove("hiddenClass")
        document.getElementById("users").classList.add("visibleClass");
        document.getElementById("statistics").classList.add("hiddenClass");
        document.getElementById("gallarea").classList.add("hiddenClass");
        document.getElementById("statistics").classList.remove("visibleClass");
        document.getElementById("gallarea").classList.remove("visibleClass");

    });


    for (let i = 0; i < adatbazis.length; i++) {
        if (adatbazis[i].isimage) {
            let option = document.createElement("option");
            option.innerText = adatbazis[i].fullname
            document.getElementById("gallerySelect").append(option)
        }
    };
    const gallareaMenu = document.getElementById("galleryMenu");
    gallareaMenu.addEventListener("click", function (event) {
        if (clickedMenu) {
            clickedMenu.classList.remove("clickedMenuClass")
        };
        clickedMenu = event.target;
        event.target.classList.add("clickedMenuClass");
        document.getElementById("gallarea").classList.remove("hiddenClass")
        document.getElementById("gallarea").classList.add("visibleClass");
        document.getElementById("users").classList.add("hiddenClass");
        document.getElementById("statistics").classList.add("hiddenClass");
        document.getElementById("users").classList.remove("visibleClass");
        document.getElementById("statistics").classList.remove("visibleClass");
        document.getElementById("form").classList.remove("visibleClass");

        // Gallery menu
        let clickedPhoto = null;
        let photos = document.querySelectorAll(".photos");
        for (let index = 0; index < photos.length; index++) {
            photos[index].addEventListener("click", function (event) {
                document.getElementById("gallerysave").classList.add("visiblebutton")
                if (clickedPhoto) {
                    clickedPhoto.classList.remove("clickedPhoto")
                }
                clickedPhoto = event.target;
                clickedPhoto.classList.add("clickedPhoto")
            })
        };

        let galleryForm = document.getElementById("galleryForm");
        let gallerySelect = document.getElementById("gallerySelect")
        galleryForm.addEventListener("submit", function (event) {
            event.preventDefault();
            for (let i = 0; i < adatbazis.length; i++) {
                if (adatbazis[i].fullname === gallerySelect.value) {
                    adatbazis[i].imageurl = clickedPhoto.src
                }
            }
        })
    });



    // Statistics menu
    function stat() {
        let sum = 0;
        for (let index = 0; index < adatbazis.length; index++) {
            if (adatbazis[index].isimage) {
                sum += 1
            }
        };
        if (adatbazis.length === 0) {
            document.getElementById("statistics").innerHTML = `<p>Regisztrált felhasználók száma:0</p><p>Regisztrált fényképpel rendelkező felhasználók száma:0</p>`;
        } else {
            document.getElementById("statistics").innerHTML = `<p>Regisztrált felhasználók száma: ${adatbazis.length}</p><p>Regisztrált fényképpel rendelkező felhasználók száma: ${sum}</p>`;
        }
    };
    stat();



    // tabel clearer function
    function tableClearer() {
        table.innerHTML = "";
    };





    // Users menu
    let table = document.createElement("table")
    table.classList.add("table")
    let saveButton = document.getElementById("saveButton");
    //let pressedButton;
    function databaseShower() {
        let tableHeader = document.createElement("tr")
        tableHeader.innerHTML = '<td><strong>id</strong></td><td><strong>fullname</strong></td><td><strong>username</strong></td><td><strong>isPicture</strong></td><td><strong>e-mail</strong></td><td><strong>img</strong></td><td><strong>művelet</strong></td>';
        table.append(tableHeader);
        for (let index = 0; index < adatbazis.length; index++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let img = document.createElement("img")
            let td7 = document.createElement("td")
            img.src = adatbazis[index].imageurl
            td1.innerText = adatbazis[index].id;
            td2.innerText = adatbazis[index].fullname;
            td3.innerText = adatbazis[index].username;
            td4.innerText = adatbazis[index].isimage;
            td5.innerText = adatbazis[index].email;

            let deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.id = "deleteButton";
            deleteButton.innerText = "Törlés";

            let changeButton = document.createElement("button");
            changeButton.type = "button";
            changeButton.id = "changeButton";
            changeButton.innerText = "Módosítás";

            td7.append(deleteButton, changeButton);
            img.classList.add("imgClass")
            td6.append(img);
            tr.append(td1, td2, td3, td4, td5, td6, td7);
            table.append(tr);

            deleteButton.addEventListener('click', function () {
                deleteButton.parentNode.parentNode.remove();
                if (adatbazis.length === 1) {
                    adatbazis = [];
                } else { adatbazis.splice(index, 1) }


                stat();
                console.log(adatbazis);
            });
            changeButton.addEventListener("click", function (event) {
                fullName.value = adatbazis[index].fullname;
                userName.value = adatbazis[index].username;
                eMail.value = adatbazis[index].email;
                /* pressedButton = event.target;
                console.log(pressedButton) */

            })
            console.log(adatbazis);

        }
    };

    databaseShower();


    // Form + save button => live database refresh

    let fullName = document.getElementById("fullNameInput");
    let userName = document.getElementById("userNameInput");
    let eMail = document.getElementById("emailInput");

    document.getElementById("users").append(table);
    let arr;
    let saveCounter = 0;
    let idOfNewUser;
    saveButton.addEventListener("click", function (event) {
        saveCounter++;
        for (let index = 0; index < adatbazis.length; index++) {
            idOfNewUser = index
            arr = Object.values(adatbazis[index]);
            if (userName.value === "" || fullName.value === "" || eMail.value === "") { break }
            if (arr.includes(userName.value) || arr.includes(fullName.value) || arr.includes(eMail.value)) {
                adatbazis[index].fullname = fullName.value;
                adatbazis[index].username = userName.value;
                adatbazis[index].email = eMail.value;
                break
            }
        }
        if (userName.value === "" && fullName.value === "" && eMail.value === "") { alert("Nem adott meg értéket!") } else {
            if (!arr.includes(userName.value) && !arr.includes(fullName.value) && !arr.includes(eMail.value)) {
                adatbazis.push({ id: 0, fullname: fullName.value, username: userName.value, isimage: false, email: eMail.value, imageurl: "" })

            } console.log(adatbazis)


            // Refreshing stat
            stat();
            // Giving id for the elements of the array
            indexSetter();
            //clearing Database
            tableClearer();
            // Showing my database
            databaseShower();
        }
        fullName.value = "";
        userName.value = "";
        eMail.value = "";

    });

})


