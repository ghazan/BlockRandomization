/**
 * Created by Gay on 2016-10-16.
 */
var dict = {};
for (var i = 0 ; i < 2000000 ; i++) {

    var originalArray = ["a","a","a","b","b","b"];
    var copiedArray = originalArray.slice();
//console.log("Copied Array is : " + copiedArray)
    var finalArray = [];
    var rand;

    while(copiedArray.length > 1) {

        rand = Math.floor(Math.random() * copiedArray.length);
        finalArray.push(copiedArray[rand]);

        //console.log(copiedArray);

        copiedArray.splice(rand,1);
    }

    finalArray.push(copiedArray[0]);

    if (finalArray in dict) {

        dict[finalArray] += 1;
    } else {

        dict[finalArray] = 1;
    }
}

console.log("Permutation :" + Object.keys(dict).length);

for(var key in dict) {

    var percent = (dict[key]/2000000) * 100;
    console.log(key + " : " + percent.toFixed(0)  + "%");
}