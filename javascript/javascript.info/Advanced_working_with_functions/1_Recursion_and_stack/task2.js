/***************************************************************

https://javascript.info/task/factorial

* factorial_1는 0에서 에러가 발생한다
* 한번 더 생각하면 factorial_2 로 작성한다.


****************************************************************/

/*
	my answer

*/

function factorial_1(n){
	if (n != 1) return n * factorial_1(n-1);
	else return  1
}
//alert(factorial_1(0));
/*
	javascript info answer
*/

function factorial_2(n){
	return n ? n * factorial_2(n-1) : 1;
}

alert(factorial_2(0));
