//Function การทํางานหนึ่งๆ ************
//Function จะไม่ทํางานถ้าเราไม่call function (เรียกใข้ ฟังก์ชั่น)
//1 ไม่ส่งค่ากลับ ไม่มีพารามิเตอร์
function funcNa(){
    console.log('Na na na....')

}

//2 ไม่ส่งค่ากลับ มีพารามิเตอร์
function funcni(x y){
       let a = x + y
       comsole.log("a มีค่า" + a)

}


//3สงค่า ไม่มีพารามิเตอร์
function funcwow(){
    return 999 +1;

}


//4 ส่งค่า มีพารามิเตอร์
function funcWee(X, y, z){
    let sum = x + t + z
    return 555 + sum;
}


funcNa()
funcni(10,20)//

console.log(funcWow())

funcWee(10, 20 ,30)
//alert( total)
//================================
function funcA(x, y =20){
    console.log(x + y)
}




