let lis = document.querySelectorAll('li')

lis[0].className = 'active'

let curLi = lis[0]


lis.forEach((li) => {
    li.addEventListener('click', () => {

        // 避免直接操作元素的 style , 如果多个元素, 则会造成多次重排
        // if (curLi !== null) {
        //     curLi.style = '50px'
        // }
        //
        // li.style.width = '500px'
        // curLi = li

        /*
        * 参考资料 : https://polydactyl-poppyseed-556.notion.site/69ab8c4afccd48f3b2b65a76738d7d58
        * */

        // 正确做法应该是添加类名 , 就算是多个元素, 也只进行一次重排
        if (curLi !== null) {
            curLi.classList.remove('active')
        }

        li.classList.add('active')
        curLi = li
    })
})
