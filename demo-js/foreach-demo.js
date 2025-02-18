const arr = [1, 2, 3, 4, 5];


// 객체(또는 배열)에서 요소를 하나 꺼낸 다음 불리는 콜백함수
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수(데이터, 인덱스, 객체 통째로)
arr.forEach(function(a, b, c){
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})


// Map 과 forEach의 만남
let map = new Map()
map.set(7, "seven")
map.set(9, "nine")
map.set(8, "eight")

map.forEach(function(a, b, c){
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})