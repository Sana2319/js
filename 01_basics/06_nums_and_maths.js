 // two way to write number

 // js automatically detects number
 const score = 100
 console.log(score);  // 100

 // you explicitly metion it => better
 const balance = new Number(100)
 console.log(balance);  // [Number: 100]

 console.log(balance.toString().length);  // 3
 console.log(balance.toFixed(2));  // 100.00  // upto 2 decimal point

 const number1 = 23.896
 console.log(number1.toPrecision(3));  // 23.9

 const number2 = 123.896
 console.log(number2.toPrecision(3));  // 124

 const number3 = 1123.896
 console.log(number3.toPrecision(3));  // 1.12e+3 i.e. =  1.12 × 10³  =  1120

 const hundreds = 1000000
 console.log(hundreds.toLocaleString());  // it should be 1,000,000 but since the device is set to indian setting its showing 10,00,000
 console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

 // ****************** Maths *******************

 console.log(Math);  // Object [Math] {}
 console.log(Math.abs(-4));  // 4
 console.log(Math.round(4.6));  // 5
 console.log(Math.ceil(4.2));  // 5
 console.log(Math.floor(4.9));  // 4

 console.log(Math.random());  // floating number b/w 0 and 1
 console.log((Math.random()*10) + 1);  // random float b/w 1 and 10
 console.log(Math.floor((Math.random()*10) + 1));  // random integer b/w 1 to 10

 const min = 10
 const max = 20
 console.log(Math.floor((Math.random() * (max - min + 1)) + min));  // random integer b/w min and max
 
 
 
  
 
 
 
 
 
 