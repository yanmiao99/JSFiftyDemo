let bg = document.querySelector('.bg')
let loadingText = document.querySelector('.num-loading span')

// 获取 class 中定义的属性
let bgStyle = getComputedStyle(bg).filter

// 获取括号中的内容
let str = bgStyle.replace('blur(', '')
let str1 = str.replace('px)', '')

let num = +str1

let timer = null

let percent = 0


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

timer = setInterval(function () {
    percent++

    if (percent > 99) {
        clearInterval(timer)
        loadingText.style.display = 'none'
    }

    loadingText.innerText = percent + '%'
    bg.style.filter = `blur(${scale(percent, 0, 100, num, 0)}px)`
    console.log(scale(percent, 0, 100, num, 0));

}, num)

