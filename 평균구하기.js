// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수 solution 만들기

function solution (arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    
    const average = sum / arr.legnth;
    return average;
}