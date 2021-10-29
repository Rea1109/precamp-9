const classmates = [
    {name:"철수",age:13,school:"다람쥐초등학교"},
    {name:"영희",age:8,school:"공룡초등학교"},
    {name:"훈이",age:11,school:"거북이초등학교"}
]
// undefined
classmates
// // // // (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '다람쥐초등학교'}1: {name: '영희', age: 8, school: '공룡초등학교'}2: {name: '훈이', age: 11, school: '거북이초등학교'}length: 3[[Prototype]]: Array(0)
classmates.length
// 3
classmates[0]
// {name: '철수', age: 13, school: '다람쥐초등학교'}
classmates[0].school
// '다람쥐초등학교'

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
// undefined
fruits[0].number+" "+fruits[0].title
// '1 레드향'
fruits[1].number+" "+fruits[1].title
// '2 샤인머스켓'
fruits[2].number+" "+fruits[2].title
// '3 산청딸기'
fruits[3].number+" "+fruits[3].title
// '4 한라봉'
fruits[4].number+" "+fruits[4].title
// '5 사과'
fruits[5].number+" "+fruits[5].title;
// '6 애플망고'
fruits[6].number+" "+fruits[6].title;
// '7 딸기'
fruits[7].number+" "+fruits[7].title;
// '8 천혜향'
fruits[8].number+" "+fruits[8].title;
// '9 과일선물세트'
fruits[9].number+" "+fruits[9].title;
// '10 귤'