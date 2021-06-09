// 웹 페이지로부터 두 수가 오기를 기다린다.
onmessage = function(e) {
  var num1 = parseInt(e.data.num1); //앞서 만든 numAndNum 이름의 객체에서 num1을 지칭
  var num2 = parseInt(e.data.num2); //앞서 만든 numAndNum 이름의 객체에서 num2를 지칭
  var result = num1 * num2; //전달받은 두 수를 곱함

  postMessage(result); //결과값 송신
}

