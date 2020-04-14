const account = new Account(name,500);
function Account(name,balance) {
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
	   set:function(defaultBalance)
	   {
		   if(defaultBalance<500)
			   throw new Error('low balance');
		     defaultBalance=balance;
	   }
	   });
}
//console.log(" "+balance);


//deposit
var  balance=parseFloat(account.defaultBalance);
//const amount1=amount.value;
var acc= new function Funcaccount(balance)
{
this.balance=balance;
}
Account.prototype.deposit=function(amount1)
{
	this.balance += amount1;
}

function tobedeposited(){
	var amount1= document.getElementById("myamount");
	var amount=parseFloat(amount1.value);
	if(amount>0)
	{
    savingsAccount.deposit(amount);
	Account();
	displayAccountBalances();
	}
}

// withdraw fn
function tobewithdrawn(){
var amount1= document.getElementById("myamount");
	var amount=parseFloat(amount1.value);
   if(amount>0)
   {
	   savingsAccount.withdraw(amount);
	   displayAccountBalances();
   }
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

deposit: function (amount) {
this.balance += amount;
console.log("balance: "+this.balance);
},

withdraw: function (amount) {
this.balance -= amount;
console.log("balance: "+this.balance);
},   

debit: function (amount) {
this.balance -= amount;
console.log("balance: "+this.balance);
},

transfer: function (amount) {
this.balance -= amount;
//transferAccount.balance += amount;
console.log("balance: "+this.balance);
}

}


function displayAccountBalances () {
 // Displays current balance of both accounts.
 alert(" "+ savingsAccount.balance);
}
