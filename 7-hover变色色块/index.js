
// 随机 hex 颜色色值
const randomHexColor = () => {
    let num = (Math.random() * 100000000000).toString(16);
    return '#' + num.slice(0, 6)
}

// 获取 x - x 的随机数, 包含最大和最小
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

// console.log(Math.floor(Math.random() * COLORS.length));


// 字典
let colorObj = {
    'rgb': (r, g, b) => `rgb(${[r, g, b].join(',')})`,
    'rgba': (r, g, b, a) => `rgba(${[r, g, b, a].join(',')})`,
}

// 随机 rgba 色值
const randomRGBAColor = (type) => {
    let r = getRandomIntInclusive(0, 255)
    let g = getRandomIntInclusive(0, 255)
    let b = getRandomIntInclusive(0, 255)
    let a = Math.random().toFixed(2)
    return colorObj[type](r, g, b, a)
}


const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']


let boxList = document.querySelector('.box-list')

for (let i = 0; i < 400; i++) {
    let cBoxItem = document.createElement('div')
    cBoxItem.className = 'box-item'

    cBoxItem.addEventListener('mouseenter', () => {
        // let color = randomRGBAColor('rgb')
        let color = COLORS[getRandomIntInclusive(0, COLORS.length)]
        cBoxItem.style.background = color
        cBoxItem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    })

    cBoxItem.addEventListener('mouseleave', () => {
        cBoxItem.style.background = ''
        cBoxItem.style.boxShadow = ''
    })

    boxList.appendChild(cBoxItem)
}
