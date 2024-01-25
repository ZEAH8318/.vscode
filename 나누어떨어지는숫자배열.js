//  배열의 각 요소 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬하여 반환. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. 

function solution(arr, divisor){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % divisor === 0){
            result.push(arr[i]);
        }
    }
    return result.length === 0 ? [-1] : result.sort((a,b) => a-b);  
}