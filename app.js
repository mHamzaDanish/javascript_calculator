function getnum(num){
	var result = document.getElementById('result');
	result.value+=num;
}
function clearresult(){
	var result = document.getElementById('result');
	result.value="";
}
function showresult(){
	var result = document.getElementById('result');
	result.value=eval(result.value);
}