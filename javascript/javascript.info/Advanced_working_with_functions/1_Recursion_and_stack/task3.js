/***************************************************************
# Fibonacci numbers
https://javascript.info/task/fibonacci-numbers

* 아래 함수의 접근 방식을 동적 프로그래밍 상향식 (dynamic programming bottom-up) 이라고 한다 

****************************************************************/

// 재귀적 방법 but 중복된 계산을 사용하기 때문에 cpu자원을 너무 많이 사용해서 fib(77)은 브라우저에서 종료되지 않는다
/*
function fib(n) {
	return (n>2)? fib(n-1) + fib(n-2) : 1;
}
*/

// 위의 문제를 해결하기 위해 아래같은 방법을 사용 할 수 있다. 중복된 계산이 필요하지 않음
function fib(n){
	let a = 1;
	let b = 1;
	for (let i=3;i<=n;i++){
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

alert(fib(1)); // 1
//alert(fib(2)); //1
//alert(fib(3)); //2
//alert(fib(4)); // 3
//alert(fib(5)); // 5
//alert(fib(6)); // 8
//alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
