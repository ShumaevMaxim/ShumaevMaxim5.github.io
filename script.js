function Calc(){
var ans;
var a = Number(document.getElementById("num1").value);
var b = Number(document.getElementById("num2").value);
if ((typeof a == 'number') && (typeof b == 'number') && (a > 0) && (b > 0)) {
ans = a * b;
}
else {
ans = "Проверьте корректность введённых вами данных";
}
document.getElementById('answer').innerHTML = ans;
}