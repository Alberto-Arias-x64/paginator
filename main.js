const backward = document.querySelector("#backward")
const forward = document.querySelector("#forward")
const minLimit = 1
const maxLimit = 10
let currentIndex = 1

const paginator = {
    1: document.querySelector("#pag_1"),
    2: document.querySelector("#pag_2"),
    3: document.querySelector("#pag_3"),
    4: document.querySelector("#pag_4"),
    5: document.querySelector("#pag_5"),
}

const change = (action, page) => {
    if (action === true && currentIndex < maxLimit) currentIndex++
    else if (action === false && currentIndex > minLimit) currentIndex--
    else if (page) (
        currentIndex = page
    )
    for (let index = 1; index < 6; index++) {
        paginator[index].classList.remove("currentElement")
    }
    backward.classList.remove("disabled")
    forward.classList.remove("disabled")
    if (currentIndex === minLimit) {
        backward.classList.add("disabled")
        paginator[1].classList.add("currentElement")
        paginator[1].textContent = currentIndex
        paginator[2].textContent = currentIndex + 1
        paginator[3].textContent = currentIndex + 2
        paginator[4].textContent = currentIndex + 3
        paginator[5].textContent = currentIndex + 4
    }
    else if (currentIndex === minLimit + 1) {
        paginator[2].classList.add("currentElement")
        paginator[1].textContent = currentIndex - 1
        paginator[2].textContent = currentIndex
        paginator[3].textContent = currentIndex + 1
        paginator[4].textContent = currentIndex + 2
        paginator[5].textContent = currentIndex + 3

    }
    else if (currentIndex === maxLimit - 1) {
        paginator[4].classList.add("currentElement")
        paginator[1].textContent = currentIndex - 3
        paginator[2].textContent = currentIndex - 2
        paginator[3].textContent = currentIndex - 1
        paginator[4].textContent = currentIndex
        paginator[5].textContent = currentIndex + 1
    }
    else if (currentIndex === maxLimit) {
        forward.classList.add("disabled")
        paginator[5].classList.add("currentElement")
        paginator[1].textContent = currentIndex - 4
        paginator[2].textContent = currentIndex - 3
        paginator[3].textContent = currentIndex - 2
        paginator[4].textContent = currentIndex - 1
        paginator[5].textContent = currentIndex
    }
    else {
        paginator[3].classList.add("currentElement")
        paginator[1].textContent = currentIndex - 2
        paginator[2].textContent = currentIndex - 1
        paginator[3].textContent = currentIndex
        paginator[4].textContent = currentIndex + 1
        paginator[5].textContent = currentIndex + 2
    }
}

const jumpPage = (e) => {
    if (Number(e.target.textContent)) change(undefined, Number(e.target.textContent))
}

backward.addEventListener('click', () => change(false))
forward.addEventListener('click', () => change(true))
document.querySelectorAll('.paginator_element').forEach(element => element.addEventListener('click', jumpPage))