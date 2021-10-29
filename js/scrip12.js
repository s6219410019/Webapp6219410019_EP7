let weight = document.querySelector('#weight')
let height = document.getElementById('height')
let calBMI = document.getElementById('calBMI')
let bmiValue = document.getElementById('bmiValue')
let bmiResult = document.getElementById('bmiResult')

function calculateBMI() {
    if (weight.value.lenght == 0) {
        alert('ป้อนน้ำหนักด้วย')
    } else if (height.value.trim().lenght == 0) {
        alert('ป้อนส่วนสูงด้วย')
    } else {
        //คำนวณ
        let bmiValueShow = Number(weight.value) / ((Number(height.value) / 100) ** 2)

        bmiValue.innerHTML = bmiValueShow.toFixed(2)
    }
    calBMI.addEventListener('click', calculateBMI)