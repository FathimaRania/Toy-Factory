let box = [1, 0, 2, 0, 3, 4, 0, 5];
let result = factory(box);
function factory(a){
    let index = 0;
    let count = 0;

    
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== 0) {
            a[index] = a[i]; 
            index++; 
        } else {
            count++; 
        }
    }


    for (let i = index; i < a.length; i++) {
        a[i] = 0;
    }

    return {
        updatedBoxes: a,
        count: count
    };
}




console.log(result.updatedBoxes);   
console.log(result.count);  
