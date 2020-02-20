/***************************************************************

https://javascript.info/task/sum-to

* (3) 공식 사용이 가장 빠르다
* (2) sumTo(100000)는 계산가능하지만 자바 스크립트 엔진이 이를 지원하지 않는다.
* (2) 총 스택 크기에 제한이 있기 때문에 최대 스택 크기를 초과하여 오류가 발생한다.

****************************************************************/

/*
	1. Using a for loop
*/
function sumTo_1(n){
	var sum = 0;
	for (var i=0;i<n+1;i++){
		sum += i
	}
	return sum
}
alert(sumTo_1(100));
/*
	2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
*/
function sumTo_2(n){
	// my answer
	/*
	if (n > 1){
		return n + sumTo_2(n-1);
	}else{
		return 1;
	}
	*/
	// javascript info answer
	if (n === 1) return 1;
	else return n + sumTo_2(n-1);

}
alert(sumTo_2(100));
/*
	3. Using the !!arithmetic!! progression formula.
	 	: https://en.wikipedia.org/wiki/Arithmetic_progression
*/
function sumTo_3(n){
	//return (n+1) * (n/2);
	return n*(n+1)/2
}
alert(sumTo_3(100));
