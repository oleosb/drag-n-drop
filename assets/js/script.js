let fill = document.querySelector('.fill')
let boxes = document.querySelectorAll('.box')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

boxes.forEach(box => {
        box.addEventListener('dragover', dragOver)
        box.addEventListener('dragenter', dragEnter)
        box.addEventListener('dragleave', dragLeave)
        box.addEventListener('drop', dragDrop)
})

function dragStart() {
        this.classList.add('hold')
        setTimeout(() => this.className = '', 0)
}

function dragEnd() {
        this.classList.remove('hold')
        this.classList.add('fill')
}

function dragOver(e) {
        e.preventDefault()
        this.classList.add('hovered')
}

function dragEnter(e) {
        e.preventDefault()
}

function dragLeave() {
        this.classList.remove('hovered')
}

function dragDrop() {
        this.appendChild(fill)
}