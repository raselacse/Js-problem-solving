/**function kilometerToMeter(kilometer){
    if(kilometer>=0){
        var meter = kilometer*1000;
        return meter;
    }
    else if(kilometer<0){
        return 'Length cannot be negative!'
    }
}
    var result = kilometerToMeter(12);
    console.log(result);*/



/**function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}
var items = {watch:4, phone:3, laptop:2};
var result = budgetCalculator(items.watch, items.phone, items.laptop);
console.log(result);*/

/**function hotelCost(num){
    var first = 0, second = 0, third = 0;
    for(var i=0; i<=num; i++){
        if(i<=10){
            var first = i*100;
        }
        else if(i>10 && i<=20){
            var second = (i-10)*80;
        }
        else if(i>20){
            var third = (i-20)*50;
        }
    }
    var total = first + second + third;
    if(total>0){
        return total;
    }
    //for error message
    return "sir " + num + " day it's not possible! Please tell me, How long have you been here?"
}
var cost = hotelCost(-1);
console.log(cost);*/


function megaFriend(name){
    var large = '';
    for(var i=0; i<name.length; i++){
        var element = name[i];
        if(element.length>large.length){
            large = element;
        }
    }
    return large;
}
var largestName = megaFriend(['rasel hossain','shawon ahmed','raju ahmed','mahamodur rahman','mansurol islam']);
console.log(largestName);