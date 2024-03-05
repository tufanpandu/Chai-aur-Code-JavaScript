// ============ IIFE (Immediately Invoked Function Expressions) =======

(function rashi(){ // Named IIFE
    console.log("Rashi Shivarae");
})();

(()=>{// Unnamed IIFE
  console.log("Rashi Welcome to JS");
})();

((name)=>{ // Parameter IIFE
    console.log(`${name} I Love You`)
})("JS")