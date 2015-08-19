$(document).ready(function(){

var currentStartBalance = 0;
console.log('first boo')
var savingsStartBalance = 0;

var savingsNewBalance = 0;
var currentNewBalance = 0;

//Deposit amount, --calculate -- update variable, display new amount and update with future deposits too

//Current Account -- deposit

 $('#deposit1').on('click', function(e){ 
    currentNewBalance = parseInt($('#amount1').val());
    console.log(currentNewBalance)
    $('#balance1').text(currentNewBalance);
    currentStartBalance = currentStartBalance + currentNewBalance;
    $('#balance1').text('$' + currentStartBalance);
    console.log(currentNewBalance);
    console.log("You've got cash!"); 
  });


//Savings Account -- deposit

 $('#deposit2').on('click', function(e){ 
    savingsNewBalance = parseInt($('#amount2').val());
    console.log(savingsNewBalance)
    $('#balance2').text(savingsNewBalance);
    savingsStartBalance = savingsStartBalance + savingsNewBalance;
    $('#balance2').text('$' + savingsStartBalance);
    console.log(savingsNewBalance);
    console.log("You're socking it away!");
  });

//Current Account -- withdraw

$('#withdraw1').on('click', function(e){ 
    currentNewBalance = parseInt($('#amount1').val());
    console.log(currentNewBalance)
    $('#balance1').text(currentNewBalance);
    currentStartBalance = currentNewBalance - currentStartBalance;
    $('#balance1').text('$' + currentStartBalance);
    console.log(currentNewBalance);
    console.log("Buy something nice!"); 
  });


// //Savings Account -- withdraw

$('#withdraw2').on('click', function(e){ 
    currentNewBalance = parseInt($('#amount2').val());
    console.log(currentNewBalance)
    $('#balance2').text(currentNewBalance);
    currentStartBalance = currentNewBalance - ;
    $('#balance2').text('$' + currentStartBalance);
    console.log(currentNewBalance);
    console.log("Keep some for later!"); 
  });

//   if (#amount1 === Nan) || if (#amount2 === NaN) {
//     $ "Please enter valid numbers"; //print to the right class or id
//     };

//   if (currentNewBalance === 0) {
//     $('#balance1').css('background', 'red');
//   };

//   if (savingsNewBalance === 0) {
//     $('#balance2').css('background', 'red');
//   };

// //try to take too much from current

//   if ($('amount1').click.val() > currentNewBalance) && ($('amount1').click.val() > savingsNewBalance) {
//       (savingsNewBalance = savingsNewBalance - amount1) && (currentNewBalance = currentNewBalance - amount1) // ?&& //unless there's not enough
//   };

// //try to take too much from savings

//   if ($('amount1').click.val() > currentNewBalance) && ($('amount1').click.val() > savingsNewBalance) {
//     $('.clear', 'The balance in both account is too low.')
//   };

 })