class stringmethodsdemo {

    public run () : void {

const text : string =  "Welcome to Typecript"  ;
console.log(text);
// length
console.log("\nlength()");
console.log(text.length);

// upper case
console.log("\ntoUpperCase()");
console.log(text.toUpperCase());
// lower case
console.log("\ntoLowerCase()");
console.log(text.toLowerCase());
// trim
console.log("\ntrim()");
console.log(text.trim());
//includes
console.log("\nincludes()");
console.log(text.includes("play"));
//startwith
console.log("\nstartswith()");
console.log(text.startsWith("Welcome"));
//endswith
console.log("\nendswith()");
console.log(text.endsWith("Playwright"));
//indexof
console.log("\nindexof()");
console.log(text.indexOf("T"));
//lastindexof
console.log("\nlastindexof()");
console.log(text.lastIndexOf("T"));
//slice
console.log("\nslice()");
console.log(text.slice(2,4));
//substring
console.log("\nsubstring()");
console.log(text.substring(3,5));
//replace
console.log("\nreplace()");
console.log(text.replace("T","*"));
//replace all
console.log("\nreplaceall()");
console.log(text.replaceAll("T","*"));
//split
console.log("\nsplit()");
console.log(text.split("T"));
//repeat
console.log("\nrepeat()");
console.log(text.repeat(2));
    }
}
const demo = new stringmethodsdemo();
demo.run();











