if(1+1 === 2){
    console.log("정답")
} else {
    console.log("오답")
}
// VM215:2 정답
// undefined
if(true){
    console.log("정답")
} else {
    console.log("오답")
}
// VM244:2 정답
// undefined
if(1+1 === 3){
    console.log("정답")
} else {
    console.log("오답")
}
// VM293:4 오답
// undefined
if(false){
    console.log("정답")
}
// undefined
// let age = 13
// undefined
age
// 13
if(age >= 20) {
    console.log("성인")
} else if(age >= 8){
    console.log("학생")
} else {
    console.log("어린이")
}
// VM733:4 학생
// undefined
const profile = {
    name: "철수",
    age: 13,
    school: "다람쥐초등학교"
}
// undefined
profile.age = 7
// 7
profile
// {name: '철수', age: 7, school: '다람쥐초등학교'}
profile.age
// 7
profile.name
// '철수'

