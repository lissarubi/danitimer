const startButton1 = document.querySelector('input#startbutton1')
const startButton2 = document.querySelector('input#startbutton2')
const timerBox1 = document.querySelector('div#timerbox1')
const timerBox2 = document.querySelector('div#timerbox2')
const stopButton1 = document.querySelector('input#pausebutton1')
const stopButton2 = document.querySelector('input#pausebutton2')
stopButton1.style.display = 'none'
stopButton2.style.display = 'none'
const resetButton1 = document.querySelector('input#resetbutton1')
const resetButton2 = document.querySelector('input#resetbutton2')
let booleanStop1 = false
let booleanStop2 = false
const toggleButton = document.querySelector('a.toggle-button')
const navlinks = document.querySelector('ul.navlinks')

toggleButton.addEventListener('click', ()=>{
    navlinks.classList.toggle('active')
})

stopButton1.addEventListener('click', function stopButton1(){
    stopButton1.value = 'Retomar'
    startButton1.style.display = 'initial'
    clearInterval(timer1)
    timer = null
    startButton1.value = 'Retomar'
    document.querySelector('input#pausebutton1').style.display = 'none'
    booleanStop1 = true
    if (booleanStop1 == true){
        stopButton1.value = 'Pausar'
        booleanStop1 = false
    }
})

resetButton1.addEventListener('click', function(){
    timerBox1.style.color = 'black'
    document.querySelector('input#min-timer1').value = ''
    document.querySelector('input#sec-timer1').value = ''
    timerBox1.innerHTML = 'Reiniciado!'
    startButton1.value = 'Retomar'
    startButton1.style.display = 'initial'
    stopButton1.style.display = 'none'
    clearInterval(timer1)
})

startButton1.addEventListener('click', function(){
    timerBox1.style.color = 'black'
    startButton1.value = 'Iniciar'
    startButton1.style.display = 'none'
    stopButton1.style.display = 'initial'
    let min = Number(document.querySelector('input#min-timer1').value)
    let sec = Number(document.querySelector('input#sec-timer1').value)
    if (min < 0 || sec < 0){
        alert('Valor de minutos e segundos estão inválidos.')
        document.querySelector('input#min-timer1').value = ''
        document.querySelector('input#sec-timer1').value = ''
    }
    booleanStart1 = true
    
    let countdown = new Date()
    countdown.setMinutes(countdown.getMinutes() + min)
    countdown.setSeconds(countdown.getSeconds() + sec + 1)
    timer1 = setInterval(function setTimer1() {
        let now = new Date()
        let distance = countdown - now
        //calculation for minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.querySelector('input#min-timer1').value = minutes
        document.querySelector('input#sec-timer1').value = seconds
        if (seconds >= 0 && seconds <=9){
            timerBox1.innerHTML = minutes + ':' + '0' + seconds
        }
        if (minutes == 0 && minutes <= 9){
            timerBox1.innerHTML = '0' + minutes + ':' + seconds
        }
        if (seconds == 0 && seconds <=9){
            timerBox1.innerHTML = minutes + ':' + '0' + seconds
        }
        if (seconds == 0 && seconds <=9 && minutes == 0 && minutes <= 9){
            timerBox1.innerHTML = minutes + ':' + '0' + seconds
        }
        else{
            timerBox1.innerHTML = minutes + ':' + seconds
        }

        if(distance < 0){
            clearInterval(timer1)
            document.querySelector('input#min-timer1').value = ''
            document.querySelector('input#sec-timer1').value = ''
            timerBox1.style.color = '#8C0707'
            timerBox1.innerHTML = 'Terminado!'
            stopButton1.style.display = 'none'
            startButton1.style.display = 'initial'
            let bomb = new Audio('sounds/bomb.mp3')
            bomb.play()
        }
    })
    
})


stopButton2.addEventListener('click', function stopButton2(){
    stopButton2.value = 'Retomar'
    startButton2.style.display = 'initial'
    clearInterval(timer2)
    timer2 = null
    startButton2.value = 'Retomar'
    document.querySelector('input#pausebutton2').style.display = 'none'
    booleanStop2 = true
    if (booleanStop2 == true){
        stopButton2.value = 'Pausar'
        booleanStop2 = false
    }
})

resetButton2.addEventListener('click', function(){
    timerBox2.style.color = 'black'
    document.querySelector('input#hour-timer2').value = ''
    document.querySelector('input#min-timer2').value = ''
    document.querySelector('input#sec-timer2').value = ''
    timerBox2.innerHTML = 'Reiniciado!'
    startButton2.value = 'Retomar'
    startButton2.style.display = 'initial'
    stopButton2.style.display = 'none'
    clearInterval(timer2)
})

startButton2.addEventListener('click', function(){
    timerBox2.style.color = 'black'
    startButton2.value = 'Iniciar'
    startButton2.style.display = 'none'
    stopButton2.style.display = 'initial'
    let hourclass = Number(document.querySelector('input#hour-timer2').value)
    let minclass = Number(document.querySelector('input#min-timer2').value)
    let secclass = Number(document.querySelector('input#sec-timer2').value)
    if (hourclass < 0 || minclass < 0 || secclass < 0){
        alert('Valor de horas, minutos e segundos estão inválidos.')
        document.querySelector('input#hour-timer2').value = ''
        document.querySelector('input#min-timer2').value = ''
        document.querySelector('input#sec-timer2').value = ''
    }
    booleanStart2 = true
    
    let countdownclass = new Date()
    countdownclass.setHours(countdownclass.getHours() + hourclass)
    countdownclass.setMinutes(countdownclass.getMinutes() + minclass)
    countdownclass.setSeconds(countdownclass.getSeconds() + secclass + 1)
    
    timer2 = setInterval(function setTimer2() {
        let nowclass = new Date()
        let distanceclass = countdownclass - nowclass
        //calculation for minutesclass and seconds
        var hourclass = Math.floor((distanceclass % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutesclass = Math.floor((distanceclass % (1000 * 60 * 60)) / (1000 * 60))
        var secondsclass = Math.floor((distanceclass % (1000 * 60)) / 1000)
        document.querySelector('input#hour-timer2').value = hourclass
        document.querySelector('input#min-timer2').value = minutesclass
        document.querySelector('input#sec-timer2').value = secondsclass
        if (hourclass >= 0 && hourclass <=9){
            timerBox2.innerHTML = '0' + hourclass + ':' + minutesclass + ':' + secondsclass
        }
        if (minutesclass >= 0 && minutesclass <= 9){
            timerBox2.innerHTML = hourclass + ':' + '0' + minutesclass + ':' + secondsclass
        }
        if (secondsclass >= 0 && secondsclass <=9){
            timerBox2.innerHTML = hourclass + ':' + minutesclass + ':' + '0' + secondsclass
        }
        if (secondsclass >= 0 && secondsclass <=9 && minutesclass >= 0 && minutesclass <= 9){
            timerBox2.innerHTML = hourclass + ':' + '0' + minutesclass + ':' + '0' + secondsclass
        }
        if (secondsclass >= 0 && secondsclass <=9 && minutesclass >= 0 && minutesclass <= 9 && hourclass >= 0 && hourclass <=9){
            timerBox2.innerHTML = '0' + hourclass + ':' + '0' + minutesclass + ':' + '0' + secondsclass
        }
        else{
            timerBox2.innerHTML = hourclass + ':' + minutesclass + ':' + secondsclass
        }

        if(distanceclass < 0){
            clearInterval(timer2)
            document.querySelector('input#hour-timer2').value = ''
            document.querySelector('input#min-timer2').value = ''
            document.querySelector('input#sec-timer2').value = ''
            timerBox2.style.color = '#8C0707'
            timerBox2.innerHTML = 'Terminado!'
            stopButton2.style.display = 'none'
            startButton2.style.display = 'initial'
            let bomb2 = new Audio('sounds/bomb.mp3')
            bomb2.play()
        }
    })
    
})