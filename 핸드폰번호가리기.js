
function solution(num) {
    let result='';

    for(let i=0; i<num.length; i++) {
        result += i<num.length-4 ? '*': num.charAt(i);
    }
    return result;
}   

console.log(solution('01033334444'));






