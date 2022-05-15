// 1. 生成 box-item

let boxList = document.querySelector('.box-list')


// 色值
// 1. 获取 0- 255 之间的所有色值

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

function getRandomRgaColor (){
    let r = getRandomIntInclusive(0,255)
    let g = getRandomIntInclusive(0,255)
    let b = getRandomIntInclusive(0,255)

    return [r,g,b].join(',')
}

console.log(getRandomRgaColor());


const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']



for (let i = 0; i < 300; i++) {
    let cBoxItem = document.createElement('div')
    cBoxItem.className = 'box-item'

    //2. 监听鼠标事件

    cBoxItem.addEventListener('mouseenter',()=>{
        console.log('进入了');
        let color = COLORS[getRandomIntInclusive(0,COLORS.length)]
        cBoxItem.style.background = color
        cBoxItem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    })
    cBoxItem.addEventListener('mouseleave',()=>{
        console.log('出去了');

        cBoxItem.style.background = ''
        cBoxItem.style.boxShadow = ''

    })



    boxList.appendChild(cBoxItem)
}
