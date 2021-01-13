/*
let v1 = [20,19,18,17,16,15,14,13,12,11,5,4,3,2,1,6,7,8,9,10];
let v2 = [1,2,3,4,5,6,7,8,9,10,25,26,27,28,29,30,21,22,23,24];
*/
/*
var v1 = [20, 19, 1, 11, 11, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var v2 = [2,2,2,2, 29, 22, 24, 26, 28, 30, 10, 9, 8, 7, 6, 5, 40,40,40,40];
*/

let v1 = [20,19,18,17,16,15,14,13,12,11,5,4,3,2,1,50,50,50,50,50];
let v2 = [1,2,3,4,5,6,7,8,9,10,25,26,27,28,29,30,21,22,23,24];

//console.log(v1.length)
//console.log(v2.length)
//console.log(v1.length + v2.length);

// .sort() approach
v1.sort (function(a,b) {
    return a-b;
})
console.log(v1)

v2.sort (function(a,b) {
    return a-b;
})
console.log(v2)


function merge(v1,v2){
    var v3 = [];
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;

    while(i3 < (v1.length + v2.length)){
        let unmerged1 = i1 >= v1.length;
        let unmerged2 = i2 >= v2.length;

        if(!unmerged1 && (unmerged2 || (v1[i1] < v2[i2]))){
            v3[i3] = v1[i1];
            i1++;
        } else {
            v3[i3] = v2[i2];
            i2++;
        }
        i3++;
    }
    return v3
}

console.log(merge(v1,v2))