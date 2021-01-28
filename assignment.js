//https://github.com/raselacse/Js-problem-solving

// function kilometerToMeter(kilometer){
//     if(kilometer>=0){
//         var meter = kilometer*1000;
//         return meter;
//     }
//     else if(kilometer<0){
//         return 'Length cannot be negative!'
//     }
// }
//     var result = kilometerToMeter(12);
//     console.log(result);





// function budgetCalculator(watch, phone, laptop){
//     if( watch >= 0 && phone >= 0 && laptop >= 0 ){
//         var watchPrice = watch*50;
//         var phonePrice = phone*100;
//         var laptopPrice = laptop*500;
//         var total = watchPrice + phonePrice + laptopPrice;
//     }
//     else{
//         return "Pleas enter positive value" ;
//     }
//     return total;
// }
// var items = {watch:-1, phone:0, laptop:0};
// var result = budgetCalculator(items.watch, items.phone, items.laptop);
// console.log(result);





// function hotelCost(days){
//     var first = 0, second = 0, third = 0;
//     for(var i=0; i<=days; i++){
//         if(i<=10){
//             var first = i*100;
//         }
//         else if(i>10 && i<=20){
//             var second = (i-10)*80;
//         }
//         else if(i>20){
//             var third = (i-20)*50;
//        }
//     }
//     var total = first + second + third;
//     if(total>0){
//         return total;
//     }
//     //for error message
//     return "sir " + days + " day it's not possible! Please tell me, How long have you been here?"
// }
// var cost = hotelCost(30);
// console.log(cost);





function megaFriend(friendsName){
    if(friendsName == '' || friendsName == ' '){
        return 'we can not find becasue it is empty string';
    }
    else{
        var large = '';
        for(var i=0; i<friendsName.length; i++){
            var element = friendsName[i];
            if(element.length>large.length){
                large = element;
            }
        }
    }
    return large;
}
var largestName = megaFriend(['rasel hossain','shawon ahmed','raju ahmed','mahamodur rahman','mansurol islam']);
console.log(largestName);