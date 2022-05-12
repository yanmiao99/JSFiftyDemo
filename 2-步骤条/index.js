let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let lis = document.querySelectorAll('li')
let span = document.querySelector('span')

// 用于判断当前是第几个 , 从 1 开始是因为 1 已经是 active 的效果了
let index = 1

if (index === 1) prev.classList.add('disabled')

span.innerText = index

next.addEventListener('click', () => {
    update('add')
})
prev.addEventListener('click', () => {
    update('sub')
})

/**
 *
 * @param type 传入 add 或者 sub 进行判断是增或减
 */
function update(type) {
    if (type === 'add') {
        // 临界值的判断
        if (index === lis.length) return

        // 添加类名, 然后 index 自增
        lis[index].classList.add('active')
        index += 1

        // 删除禁用按钮的类名
        if (prev.className === 'disabled') prev.classList.remove('disabled')

        // 如果达到临界值 则给 next 按钮添加禁用类名
        if (index === lis.length) next.classList.add('disabled')

    } else if (type === 'sub') {
        // 临界值的判断
        if (index === 1) return

        // 删除类名, 然后 index 自减
        lis[index - 1].classList.remove('active')
        index -= 1

        // 删除禁用按钮的类名
        if (next.className === 'disabled') next.classList.remove('disabled')

        // 如果达到临界值 则给 prev 按钮添加禁用类名
        if (index === 1) prev.classList.add('disabled')

    } else {
        alert('错误')
    }
    // 切换值
    span.innerText = index
}
