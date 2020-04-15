
var imported = document.createElement("script");
imported.src = "operations.js";
document.getElementsByTagName("head")[0].appendChild(imported);


var user=document.getElementById("myname");
function details(){
const name=user.value;
}

const transactiontype = document.querySelector("#transaction_type");
document.querySelector("#submit_transaction").addEventListener("click", () => {

    checking();

});

function checking(){
	 var total;
if(transactiontype.value=="Deposit"){
	  tobedeposited();
}
else if(transactiontype.value=="Withdraw"){
	debit();
}
else if(transactiontype.value=="Transfer"){
	tobetransfered();
}
else if(transactiontype.value=="Ministatement"){
	ministatement();
}
else if(transactiontype.value=="Interest"){
	calculateinterest();
}	
}

