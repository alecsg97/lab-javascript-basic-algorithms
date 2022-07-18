// Iteration 1: Names and Input
// 

//1.1
        const hacker1 = 'Alec';
//1.2    
        console.log(`The driver name is ${hacker1}`);
//1.3        
        const hacker2 = 'pepe';
//1.4      
        console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
        if (hacker1.length > hacker2.length) {
            console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
        } else if (hacker2.length > hacker1.length) {
            console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
        } else {
            console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
        }

// Iteration 3: Loops
// 3.1
        const spacedName = hacker1.toUpperCase().split('').join(' ');
        console.log(spacedName);

//3.2   
        const reversedName = hacker2.split('').reverse().join('');
        console.log(reversedName);

//3.3   
        const sortedNames = [hacker1, hacker2];
        console.log(sortedNames.sort());

        if (hacker1, hacker2) {
          console.log('The driver`s name goes first')
        } else if (hacker2, hacker1) {
          console.log('The navigator name goes first')
        } else {
          console.log('No way you both have equal names')
        }

        
        
        