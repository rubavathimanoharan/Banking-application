const account = new Account(name,500);

function Account(name,balance) {
  this.name = name;
  this.balance=balance;
}

//ENCAPSULATION 
const myaccount=new Account(name,500);
function Account(name,balance){
	this.name = name;
	this.balance=balance;
   let defaultBalance = balance;
   this.getDefaultBalance=function()
   {
	   return defaultBalance;
   };
   Object.defineProperty(this, 'defaultBalance' ,{
	   get:function()
	   {
		   return defaultBalance;
	   },
	   set:function(balance)
	   {
		   if(savingsAccount.balance<500)
			   throw new Error('low balance');
		   defaultBalance=balance;
	   }
	   });
	   
}



 
//GIVING GLOBAL ACCESS TO THE ENCAPSULATED VARIABLE
var  balance=parseFloat(myaccount.defaultBalance);


var acc= new function Funcaccount(balance)
{
this.balance=balance;
}



//function  to transfer
function tobetransfered(myamount){
var amount1= document.getElementById("myamount");
	var amount=parseFloat(amount1.value);
   if(amount>0)
   {
	    savingsAccount.transfer(amount); 	
	   displayAccountBalances();
   }
}



let savingsAccount = {

    // Savings account.
 name: "savings",
 balance: balance ,
 allTransactions: [],
 

deposit: function (amount) {
this.balance += amount;
this.allTransactions.push({
       type: "deposit",
	   amount: amount,
})
return this.balance;
},

withdraw: function (amount) {
this.balance -= amount;
 this.allTransactions.push({
        type: "withdrawal",
		amount: amount,
		})
console.log("balance: "+this.balance);
},
  

transfer: function (amount) {
this.balance -= amount;
console.log("balance: "+this.balance);
 this.allTransactions.push({
      type: "transfer",
	  amount: amount,
  })
}

}


function displayAccountBalances () {
 // Displays current balance of both accounts.
 alert(" "+ savingsAccount.balance);
}	




//POLYMORPHISM(OVERRIDING)
function debit(){
var count=0;

// withdraw fn
if(count>12)
	throw new Error("Maximum Transaction Excceded");
else{
function tobewithdrawn(){
var amount1= document.getElementById("myamount");
	var amount=parseFloat(amount1.value);
   if(amount>0)
   {
	   savingsAccount.withdraw(amount);
	   
   }
}
tobewithdrawn.prototype.display=function()
{
	return (savingsAccount.balance);
}
function withdrawn()
{
	count++;
}
withdrawn.prototype=Object.create(tobewithdrawn.prototype);
withdrawn.prototype.display=function()
{
  return "Transaction Count:"+count;
 count++;
}
var obj=[new tobewithdrawn(),new withdrawn()]
obj.forEach(function (msg)
{
	alert(msg.display());
});

}
}




//DISPLAYING THE TRANSACTION ARRAY
function ministatement(){
     for(i=0;i<savingsAccount.allTransactions.length;i++){
   console.log("type:- "  + savingsAccount.allTransactions[i].type + "    amount:- "  +savingsAccount.allTransactions[i].amount);
  }
}




//INHERITANCE
function tobedeposited(){
var amount1= document.getElementById("myamount");
var amount=parseFloat(amount1.value);
if(amount>0)
	{
const Acc = function(balance){
  this.balance=savingsAccount.deposit(amount);
  console.log("balance: "+this.balance);
};
Acc.prototype.deposit=function(amount)
{
	displayAccountBalances();
}
const Dep = function(name,amount){
  const self = this;
  Object.assign(self, new Acc(amount), Acc.prototype);
  self.name = name;
};
const dep=new Dep(name,balance);
dep.deposit();
	}
}





//ABSTRACTION
function calculateinterest(){
 function V()  
{  
    this.v="v";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
V.prototype.display=function()  
{  
    return "Interest amount for your balance is: "+this.v;  
}  
//Creating a constructor function  
function B(v)  
{  
    this.v=v;  
}  
//Creating object without using the function constructor  
B.prototype=Object.create(V.prototype); 
amount=(savingsAccount.balance*0.25 )/100;
var b=new B(amount);  
console.log(b.display());
}
