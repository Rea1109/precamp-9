for(let i=0; i<3; i=i+1){
    console.log("안녕하세요.")
}
// 3VM494:2 안녕하세요.
// undefined
const classmates = ["철수","영희","훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
for(let i=0; i<3; i++){
    console.log(classmates[i])
}
// VM888:2 철수
// VM888:2 영희
// VM888:2 훈이
// undefined
for(let i=0; i<3; i++){
    console.log(classmates[i]+" 입니다.")
}
// VM1014:2 철수 입니다.
// VM1014:2 영희 입니다.
// VM1014:2 훈이 입니다.
// undefined
let classmates2 = [
    {name: "철수", age: 10, school: "다람쥐초등학교"},
    {name: "영희", age: 11, school: "공룡초등학교"}
]
// undefined
classmates2[0].school
// '다람쥐초등학교'
classmates2[1].age
// 11

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]

for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i].number +" "+fruits[i].title)
}