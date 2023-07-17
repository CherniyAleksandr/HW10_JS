// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.

// 1  Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль. -->
/* <div class="personenInfo">
    <form id="information">
        <input type="text" placeholder="Ваше имя" class="name_input">
        <input type="text" placeholder="Ваша фамилия" class="family_input">
        <input type="text" placeholder="Ваш возраст" class="age_input">
        <button>"Кликни дядь"</button>
    </form>
</div>
<div class="infoContainer">
    
</div> */

const users = []
const infoCont = document.querySelector("#information")
const nameInp = document.querySelector(".name_input")
const familyInp = document.querySelector(".family_input")
const ageInp = document.querySelector(".age_input")
infoCont.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log(nameInp.value);
    // console.log(familyInp.value);
    // console.log(ageInp.value);
    // //2  Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
    const usersObj = {
        name: nameInp.value,
        secondname: familyInp.value,
        old: +ageInp.value,
    }
    users.push(usersObj)
    // Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
})

console.log(users)

// function createUsersCards(name, secondname, old) {
//     const divElem = document.createElement("div")
//     divElem.classList.add("usersInfo")
//     const pName = createElement("p")
//     pName.innerText = name
//     const pSecondname = createElement("p")
//     pSecondname.innerText = secondname
//     const pAge = createElement("p")
//     pOld.innerText = old
//     divElem.append (pName, pSecondname, pAge)
//     // return divElem
//     users.append (divElem)
// }
// console.log(users);

// const infoContainer = document.querySelector(".infoContainer")
// function rerender() {
//     infoContainer.innerHTML = ""
//     for (let i = 0; i < users.lenght; i++) {
//         const {name,secondname,old} = users[i]
//         const usersElem = createInfoCard
//     }

// }
