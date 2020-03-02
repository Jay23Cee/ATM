/*jslint browser:true */
"use strict";

var name 
var account_Balance   // accountbalance  will be here

$(document).ready(function(){
    WireEvents();
    $('#wbutton').hide();
    $('#dbutton').hide();


    
      

});

//Submit Button
$('#sbutton').click(function(){
               
                AccounBal();
             $('#wbutton').show()
            $('#dbutton').show()
 });
 
 //Withdraw button               
 $('#wbutton').click(function(){
               
              Withdraw();
              
 });
 
 $('#dbutton').click(function(){
    
            Deposit();
 });

function WireEvents(){
 //  $("#wbutton").attr("disabled", true);
 //  $("#dbutton").attr("disabled", true);
   
 
}

function AccounBal(){
   
         name = $("input[name*=ename").val();
         account_Balance =  $("input[name*='acctbalance']").val();
        
        var display=  $("#feedback").text(name); 
        
        var total;

        
        
        
       $("#feedback").html("Name:"+ name+"<br>Account Balance :$"+ account_Balance);
        //display.innerHTML =">>>>> making big CHANGES>>> "
        
         $('#sbutton').hide();

}



function Withdraw(){
       
         var withdraw =  $("input[name*='withdraw']").val();
    
        var total;

        total = account_Balance - withdraw;//gettotal(hourrate, totalhours);
  
        if(total>0)
        {
  
            account_Balance = total;
            
           $("#feedback").html("Name:"+ name+"<br>Current Balance :$"+ total );
            //display.innerHTML =">>>>> making big CHANGES>>> "
           
            
        }
        else if (total =0){
         
                    account_Balance = total;
            
           $("#feedback").html("Name:"+ name+"<br>Current Balance :$"+ total );
                    
            

        }
        else{
            alert("Invalid Withdraw")
        }
         $("input[name*='withdraw']").val('');

}

function Deposit(){
      
         var deposit=  $("input[name*='deposit']").val();
   
        var total;
        
        deposit = Number(deposit)

        total = account_Balance + deposit;//gettotal(hourrate, totalhours);
        
        
  
        
       $("#feedback").html("Name:"+ name+"<br>Current Balance :$"+ total );
        //display.innerHTML =">>>>> making big CHANGES>>> "
        
        account_Balance = total;
        
        $("input[name*='deposit']").val('');

}

