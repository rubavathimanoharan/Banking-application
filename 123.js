
var user_id=document.getElementById('user_id');
var address=document.getElementById('address');
var adhaar=document.getElementById('adhaar');
var phone=document.getElementById('phone');
var user=document.getElementById('name');
var passw=document.getElementById('pwd');
var accountnum=document.getElementById('account_num');
rgstr.onclick=function()
{
const name=user.value;
const value=passw.value;
const key=user_id.value;
const myaddress=address.value;
const myadhaar=adhaar.value;
const myphone=phone.value;
const acc_num=accountnum.value;
if(key && value && userid && address && adhaar && phone) 
{
localStorage.setItem('name',name);
localStorage.setItem('pwd',value);
localStorage.setItem('user_id',key);
localStorage.setItem('account_number',acc_num);
localStorage.setItem('address',myaddress);
localStorage.setItem('adhaar',myadhaar);
localStorage.setItem('phone_number',myphone );
}
else
	alert("Fill all ur details");
};

var username = document.getElementById('userName')
 var userpw = document.getElementById('userPw');  
login.onclick=function(){
	var i=0;
	var flag=0;
for(i=0;i<localStorage.length;i++)
{
	const c1=username.value;
	const c2=userpw.value;
	const passcheck=localStorage.getItem('pwd');
	const userid_check=localStorage.getItem('user_id');
	if(c1 == userid_check && c2 == passcheck)
	{
		location="page2.html";
		 flag=1;
	}
}
if(flag==0)
	alert("Invalid Username and Password");
};