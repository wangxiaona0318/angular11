
var arr = ['1','2','3','2'];
arr = arr.filter(function(item,index){
    return item != '2';
});
console.log(arr);

arr = arr.find(function(item){
    return item == '1';
});
console.log(arr);

var arr = ['1','2','3','2'];
arr = arr.map(function(item){
    if(item == '1'){
        return 100;
    }
    return item;
});
console.log(arr)