var abi = ''
var bytecode = '';
var cAddr = '';

var instance = null;
window.addEventListener('web3Ready', function () {
  var contract = web3.ss.contract(abi);
  instance = contract.at(cAddr);
  document.getElementById('AccNo-lbl').innerHTML = "Account No : "+instance.getAddress()
});


document.querySelector("#Deposit").addEventListener("click", function () {
  var amount = document.getElementById('Enter_amount').value
  instance.deposit(amount)
});

document.querySelector("#Withdraw").addEventListener("click", function () {
  var amount = document.getElementById('Enter_amount').value
  instance.withdraw(amount)
});

document.querySelector("#balance").addEventListener("click", function () {  
  var curr_bal=instance.getBalance()
  document.getElementById('balance-lbl').innerHTML=curr_bal;  
});
