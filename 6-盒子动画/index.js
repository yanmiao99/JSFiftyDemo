const boxList = document.querySelectorAll('.box')
//
// console.log(window.innerHeight, 'innerHeight');
// console.log(window.innerHeight / 5, 'innerHeight / 5');
// console.log(window.innerHeight / 5 * 4, 'innerHeight / 5 * 4');


// console.log(boxList[0].getBoundingClientRect());
// console.log(boxList[1].getBoundingClientRect());
// console.log(boxList[0].offsetTop);
// console.log(boxList[1].offsetTop);

// 初始进入执行一次
scrollLoad()

// 滚动执行
window.addEventListener('scroll', scrollLoad)


function scrollLoad() {

    boxList.forEach(box => {
        // 当前盒子距离顶部的Top
        const boxTop = box.getBoundingClientRect().top

        // 触发的条件 , 整体高度的 80%
        const triggerBottom = window.innerHeight * 0.8

        if (boxTop <= triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
