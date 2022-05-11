let lis = document.querySelectorAll('li')

let curLi = null

lis.forEach((li) => {
    li.addEventListener('click', () => {

        // 避免直接操作元素的 style , 如果多个元素, 则会造成多次重排
        // if (curLi !== null) {
        //     curLi.style = '50px'
        // }
        //
        // li.style.width = '500px'
        // curLi = li

        // 正确做法应该是添加类名 , 就算是多个元素, 也只进行一次重排
        if (curLi !== null) {
            curLi.classList.remove('active')
        }

        if (li === curLi) {
            curLi.classList.remove('active')
            curLi = null
            return
        }

        li.classList.add('active')
        curLi = li
    })
})
