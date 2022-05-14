let label = document.querySelector('label')
let input = document.querySelector('input')
let span = document.querySelector('span')
let p = document.querySelector('p')

span.addEventListener('click', () => {
    if (label.className === 'active') {
        label.classList.remove('active')
    } else {
        label.classList.add('active')

        p.innerText = '当前搜索值 : ' + input.value

        // 清空 input 框
        input.value = ''
    }
})
