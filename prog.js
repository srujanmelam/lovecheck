
function plag()
{
var rec = document.form1.text1.value;
var rect = document.form1.text2.value;
if (rec === "" || rect === "")
{
    document.getElementById("demo").innerHTML = "***please enter inputs properly***";
    
}
else
{
    var loveValue = Math.random()*100;
    loveValue = Math.floor(loveValue)+1;
    
    if(loveValue <=10){
        document.getElementById("demo").innerHTML ="percentage is:"+" "+ loveValue+" "+"you stick together like WATER and OIL";
        
    }
    else if(loveValue >=70){
        document.getElementById("demo").innerHTML = "percentage is:"+" "+loveValue+" "+"you love each other as majnu loves laila";
    }
    else{
         document.getElementById("demo").innerHTML = "percentage is:"+" "+loveValue+" "+"routine couple";
    }
    
}
}