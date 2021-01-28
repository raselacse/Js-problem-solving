//https://github.com/raselacse/Js-problem-solving

function kilometerToMeter(kilometer){
    if(kilometer>=0){
        var meter = kilometer*1000;
        return meter;
    }
    else if(kilometer<0){
        return 'Length cannot be negative!'
    }
}
    var calculateMeter = kilometerToMeter(12);
    console.log(calculateMeter);





function budgetCalculator(watch, phone, laptop){
    if( watch >= 0 && phone >= 0 && laptop >= 0 ){
        var watchPrice = watch*50;
        var phonePrice = phone*100;
        var laptopPrice = laptop*500;
        var budgetAmount = watchPrice + phonePrice + laptopPrice;
    }
    else{
        return "Pleas enter positive value" ;
    }
    return budgetAmount;
}
var items = {watch:-1, phone:0, laptop:0};
var totalCost = budgetCalculator(items.watch, items.phone, items.laptop);
console.log(totalCost);




function hotelCost(days){
    var firstTenDays = 0, secondTenDays = 0, afterTwentyDays = 0;
    
    if(days>0){
        for(var i=0; i<=days; i++){
            if(i<=10){
                var firstTenDays = i*100;
            }
            else if(i>10 && i<=20){
                var secondTenDays = (i-10)*80;
            }
            else if(i>20){
                var afterTwentyDays = (i-20)*50;
            }
        }
        var totalCost = firstTenDays + secondTenDays + afterTwentyDays;
        return totalCost;
    }
    else{
        return "sir " + days + " day it's not possible! Please tell me, How long have you been here?"
    }
}
var calculateHotelCost = hotelCost(21);
console.log(calculateHotelCost);







function megaFriend(friendsName) {
    if (friendsName == '') {
        return "we can not find becasue it is empty string";
    }
    else if (friendsName == ' ') {
        return "we can not find becasue it is blank string";
    }
    else {
        var largestName = '';
        for (var i = 0; i < friendsName.length; i++) {
            var name = friendsName[i];
            if (name.length > largestName.length) {
                largestName = name;
            }
        }
        return largestName;
    }
}
var calculateLargestName = megaFriend(['rasel hossain', 'shawon ahmed', 'raju ahmed', 'mahamodur rahman', 'mansurol islam']);
console.log(calculateLargestName);