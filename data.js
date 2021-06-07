
const data = [0,2,3];
console.log (data[1]);

const dataObj = {"species":"bird", "pet": "parrot"}
console.log(dataObj['pet']);
console.log(dataObj.pet);
console.log(Object.keys(dataObj));

let keys = Object.keys(dataObj); // objektu raktu masyvas

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log("i yra "+i+" key yra "+key+" value yra " + dataObj[key]);
    console.log(dataObj[key]);
}

    
const whoman = {
    name: 'Naglis', //key: value
    surmame: 'Mockevicius',
    age: 'unknown',
    runDates: [1,5,8],
    pet:{  ////i - pet, key - name, value -ciucis
        name: 'ciucis',
        species:'canis',
        age:3
    }
}
console.log(whoman.runDates);
console.log(whoman['runDates']);

for (let i = 0; i < whoman.runDates.length; i++) {
    let dates = whoman.runDates;
    console.log(dates[i]);
    console.log(whoman.runDates[i]); 
}
//kaip pasiekti gilesni objekta
let pet = whoman.pet;
keys = Object.keys(pet);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    console.log("i-"+i+" key-"+keys[i]+" value-"+pet[keys[i]]);
    console.log("i-"+i+" key-"+key+" value-"+pet[key]);
}

 