
function solution(price, money, count) {
  let totalCost = 0;
  let price = 100; // 놀이기구의 원래 이용료
  let money = 250; // 현재 가지고 있는 금액
  let count = 3; // 놀이기구를 탄 횟수
 

  for (let i = 1; i <= count; i++) {
    totalCost += price * i;
  }

  let shortage = totalCost - money;

  return shortage > 0 ? shortage : 0;

}
