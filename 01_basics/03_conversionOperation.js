 let score = "33abc"

 console.log(typeof score);  // string

 let value = Number(score)
 console.log(typeof value);  // number me convert ho jayega even if no. na ho
 console.log(value);  // but value NaN aayega Not a Number isliye dhyan rakhna h

  /*  value:
  "33" => 33
  "33abc" => NaN
  true => 1
  false => 0
  null => 0
  undefined => NaN
  */ 

  let isLoggedIn = 1
  let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log(booleanIsLoggedIn);

  /* 
  1 => true
  0 => false
  "" = false
  "sana" => true
  */

  // number to string me number whi rhega bs type change ho jayega to string

  //************* operations *************

  let val = 3
  let negVal = -val
  console.log(negVal);

  let str1 = "hello"
  let str2 = "sana"
  let str3 = str1 + str2
  console.log(str3);

  console.log("1" + 2);  //12
  console.log(1 + "2");  //12
  console.log("1" + 2 + 2);  //122
  console.log(1 + 2 + "2");  //32

  // its done but should not be done
  console.log(+true);  //1
  console.log(+"");  //0

  //prefix and postfix
  x = 2
  y = x++
  console.log(x);  //3
  console.log(y);  //2

  a = 2
  b = ++a
  console.log(a);  //3
  console.log(b);  //3

  x = 2
  y = x--
  console.log(x);  //1
  console.log(y);  //2

  a = 2
  b = --a
  console.log(a);  //1
  console.log(b);  //1
  
  
  

  
  

 
 