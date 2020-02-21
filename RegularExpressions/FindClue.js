let myString =
  "o/;.iluyesdfgh98%%%%qasw%%%%76543wqasxcvghjiop[]';lkjhgfcvbnjhytrewq123456ygv nmki87654esxnmcrvfbghnubvftdrfvbnufvtbygnmkjhgyutre43q2123456780-[][]';lkjhgfdsaw3edcvbhjio9876567890-=[pluh%..You..%vtbytresdcvguiolkmnhgtre234567ygbnjki0-=][poiuytfcvbnm,lkjhgfswqasdfv nhewq1qaw2%!!no!!%3wsde4rft6yhu8ijn cdr567890[]=-09876543wsxcv gynhut%.$weqckpq£..%65e4w3cq2z3xcvb%..are..%gnhjkl,kmgnfvdcw%..bfibiwbverhbfh..%xzaexcd%&&word@@%fvbygnh7%..Regex..%gtvtuvitgvktcrt%!!no!!%dserwerdi%.you.%%88%!!no!!%jico%!!no!!%en9.%9cj3q[0cjirjek%..royalty..%.nienue";

//find %..[word]..%

function findClue(str) {
  let myRegex = /%\.\.\w{3}\.\.%/gi;

  console.log(str.match(myRegex));
}

findClue(string);

console.log(myRegex.test(myString));
console.log(myString.match(myRegex));
