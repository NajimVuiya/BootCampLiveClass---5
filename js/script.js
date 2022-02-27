'use strict';

// looping Example 
const getUserSerial = [1,2,3,4,5,6];
let occurence;

for(let i = 0; i <= getUserSerial.length; i++)
{
    if(i <= 1)
    {
        occurence = 'time';
    }else{
        occurence = 'times';
    }
    console.log(`I love Bangladesh ${occurence}`);
}
// another example
console.log('-----');
let tractValue ;
for(let loop1 = 0; loop1 < getUserSerial.length; loop1++)
{
    if(loop1 === 0 || loop1 === 1)
    {
        tractValue = ('Value able time ');
    }else{
        tractValue = ('Value able times ');
    }
    console.log(`Bangladesh is my ${tractValue}`);
}

// function user

// very common way to write it 
function sums(arr)
{
    let valueStor = 0;
    for(let i = 0; i <= arr.length; i++)
    {
        valueStor = valueStor + i;
    }
    console.log(valueStor);
}
sums(4)


function sumation(arr)
{
    let sum = 0;
    for(let loop2 = 0; loop2 <= arr.length; loop2++)
    {
        sum = sum + loop2;
    }
    console.log(sum);
}
sumation([1,2,3,4])



// other example 
const valueAdd = [1,2,3,4,5,6];

let val1 = valueAdd[0];
let val2 = valueAdd[1];
let val3 = valueAdd[2];
let val4 = valueAdd[3];
let val5 = valueAdd[4];
let val6 = valueAdd[5];

let result = val1 += val2 += val3 += val4 += val5 += val6;
console.log(result);

let storResult = 0;
for(let loop1 = 0; loop1 < valueAdd.length; loop1++)
{
    storResult = storResult + loop1;
}
console.log(storResult);

// another simple exampole
function adding(arr)
{
    const sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    console.log(sum);
}
adding([1,2,3,4,5]);

// better way to write code 
function add(arr)
{
    let tractValueS = 0;
    for(let loop1 = 0; loop1 <= arr.length; loop1++)
    {
       if(loop1 <= 3)
       {
         tractValueS += loop1;
       }
    }
    console.log(tractValueS);
}
add([1,2,3,4,5,6]);


// another example it will be my own example 
console.log('---1---');
function additions(number1,number2,number3)
{
     // variable
    let sumation1 = number1;
    let sumation2 = number2;
    let sumation3 = number3;

    // traking value
    let tractValue1 = 0;
    let tractValue2 = 0;
    let tractValue3 = 0;
    // loop 1;
    for(let myLoop1 = 0; myLoop1 < sumation1.length; myLoop1++)
    {
        tractValue1 += (sumation1[myLoop1]);
    }
    console.log('--2--');
    // loop 2
    //let result = (sumation2[0] += sumation2[1] += sumation2[2] += sumation2[3] += sumation2[4] += sumation2[5]);
    for(let loop = 0; loop < sumation2.length; loop++)
    {
        tractValue2 += (sumation2[loop]);
    }
    /// loop 3
    console.log('--3--');
    for(let myLoop3 = 0; myLoop3 < sumation3.length; myLoop3++)
    {
        tractValue3 += (sumation3[myLoop3])
    }
    console.log(tractValue1);
    console.log(tractValue2);
    console.log(tractValue3);

    const totalResult = tractValue1 += tractValue2 += tractValue3;
    console.log(totalResult);
}
additions([1,2,3,4,5,6], [7,8,9,10,11,12], [13,14,15,16,17]);

// function default parameter
function validate(name = 'Robya akter' ,email = 'robya@gmail.com',phone = '01489723422',password = 'siufda9',gender = 'famle')
{
    console.log(`
        Name is : ${name}.
        Email address : ${email}.
        Phone number : ${phone}.
        Password : ${password}.
        Gender : ${gender}.
        `);
}
validate('Najim vuiya','vuiyanajim609@gmail.com','01289749234','ikadfa','male');

// another example
function validateFun(fName = 'Gias uddin ',lName = 'vuiya ',age = 20)
{
   return `
        First name : ${fName}.
        Last name : ${lName}.
        Age : ${age}.
    `;
}
let getValidatedForm = validateFun('Tajin','akter');
console.log(getValidatedForm);

// JavaScrip looping method 
// array
/*
    *for of
    *forEach
*/

// object 
/*
    *for in
*/

// Example of forEach

const array = [2,12,3,24,53,6];

array.forEach(number => 
{
    console.log(number);
});

let newResults = 0;
array.forEach((value,index,kf) => 
{
    newResults += (value);
});
console.log(newResults);

const arrayOne = [2,45,3,90,4];
let trackFile = 0;
arrayOne.forEach((value,index,fullArray) =>
{
    trackFile = (index);
});
console.log(trackFile);

// Example of for of loop
console.log('-----=-=-');
let newValues = 0;
for(let numbers of arrayOne)
{
    newValues += (numbers);
}
console.log(newValues);

// for in loop
const obj = 
{
    fName : 'Mahmuda',
    lName : 'Akter',
    age : 15
}

console.log(obj);
for(let userInfo in obj)
{
    // console.log(userInfo);
    console.log(obj[userInfo]);
}

// another example
console.log('-------');
const myNewObj = 
{
    firstName : 'Gias uddin',
    lastName : 'vuiya',
    email : 'giasuddin609@gmail.com',
    phone : '01598342420',
    gender : 'male'
}

/*
for(let objValue in myNewObj)
{
    console.log(objValue);
    console.log(myNewObj[objValue]);
}
*/
let key = Object.keys(myNewObj);
console.log(key);

let value = Object.values(myNewObj);
console.log(value);


for(let myObjs in myNewObj)
{
    console.log(myObjs);
}

let tesing1 = Object.keys(myNewObj);
let tesing2 = Object.values(myNewObj);

console.log(tesing1);
console.log(tesing2);


for(let key of tesing1)
{
    console.log(key);
}

// 
tesing2.forEach((value,index,full) =>
{
    console.log(value)
})
console.log(Object.entries(myNewObj))
// Array destructuring 
const userName = ['Najim vuiya','Tajin akter', ,'Mahmuda akter', ,'Robya akter'];

const [arr1,arr2,arr3 = 'test',arr4, arr5 = 'Malaka'] = userName;
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr5);

// another Example 
const myUserInfos = ['Bangladesh','Chottogram','Bramunbaria','Banchapur','Charshipur','Pubropara'];
const [country,city,hometworn,thana,valleage,resion] = myUserInfos;

console.log(country);

for(let showValue of myUserInfos)
{
    console.log(showValue);
}
myUserInfos.forEach((value,index,total) => 
{
    console.log(total);
})

// 
for(let show = 0; show < myUserInfos.length; show++)
{
    console.log(myUserInfos[show]);
}

// Object destructuring 
console.log('--------');
const myUserInformation = 
{
    uName : 'Talha',
    uEmail : 'talha@gmail.com',
    uPhone : '01310010347',
    uPassword : '89usdoifsa',
    uGender : 'male'
}

console.log(myUserInformation);
const {uName,uEmail,uPhone,uPassword,uGender} = myUserInformation;
console.log(uName);


// another way object destructring 
const myNewInfo = 
{
    userNames : 'Mahmuda akter',
    userEmails : 'mahmuda@gmail.com',
    userPhones : '87688230482',
    userPasswords : 'y879faf',
    userGenders : 'female'
}

console.log(myNewInfo);
const {userNames:newNames,userEmails:newEmail,userPhones:newPhone,userPasswords:newPassword,userGenders:newGender} = myNewInfo;
console.log(newNames);
console.log(newEmail);

// object destructring with default value
const myNewInfo$ = 
{
    //userNames_$ : 'Mahmuda akter',
   // userEmails_$ : 'mahmuda@gmail.com',
    userPhones_$ : '87688230482',
    userPasswords_$ : 'y879faf',
    userGenders_$ : 'female'
}
const {userNames_$:newUName = 'Gias uddin',userEmails_$:newUEmail = 'giasuddin609@gmail.com',userPhones_$:newUPhone,userPasswords_$:newUPassword,userGenders_$:newUGender} = myNewInfo$;
console.log(newUName);
console.log(newUEmail);

// spread and rest operator start here
const userData =
{
    countryName : 'Irak',
    city : 'SaddamCity',
    name : 'Saddam hossain',
    email : 'saddam@gmail.com',
    phone : '0-9-0903874834',
    password : '797fs8f9df9',
    gender : 'male'
}


const userDataStor = 
{

    ...userData,
    name_$ : 'Tammana akter',
    email_$ : 'tammana@gmail.com',
    phone_$ : '485028455258',
    password_$ : '7897s8f',
    gender_$ : 'female'
}
console.log(userDataStor);

// another  
const mainOperators = 
{
    ...userDataStor,
    myUserName : 'Mark Zokkarbar',
    myUserEmail : 'mark@gmail.com',
    myUserPhone : '97-0438247832',
    myUserPassword : '768sdf98s',
    myUserGender : 'male'
}

console.log(mainOperators);
for(let newTesting in mainOperators)
{
    console.log(mainOperators[newTesting]);
}

console.log('-----------');

const myUserInformations = ['Robya akter','robya@gmail.com','8340824902','oiofa','male'];
console.log(myUserInformations);

let myNewUsers = [...myUserInformations,'Bangladesh','Pakistan','Japan','Chinna'];
console.log(myNewUsers);


// Example of rest operator
let testing = [134,true,'Irakian','Afganistan'];
const [newArr1,newArr2,newArr3,newArr4] = testing;
console.log(newArr1);

const myNewArrayTesging = [1,2,3,4,5,5];
console.log(myNewArrayTesging);

const [num1, ...restArr] = myNewArrayTesging;
console.log(num1);
console.log(restArr);


// another example 
const myFirstArray = [12,44,56,33,66,90,88];
console.log(myFirstArray);

// destructruring and rest operator
const [arrayNumber1,arrayNumber2,arrayNumber3,...arrayNumberRested] = myFirstArray;
console.log(arrayNumberRested);

for(let workWithRest of arrayNumberRested)
{
    console.log(workWithRest);
}

arrayNumberRested.forEach((value,index,fullArr) => 
{
    console.log(index);
})

// important example
const importantEndArray = [1,2,3,4,5,6];
console.log(importantEndArray);

const [array1,array2,array3,...restArray] = importantEndArray;
console.log(restArray);

// rest operator in object 
const myObj =
{
    userName_$$ : 'Tajin akter',
    userEmail_$$ : 'tajin@gmail.com',
    userPassword_$$ : '78sdfuioi',
    userPhone_$$ : '0128745928347',
    userGender_$$ : 'female'
}
console.log(myObj);

const {userName_$$,userEmail_$$,userPassword_$$,...myRestedObj} = myObj;
console.log(userName_$$);

console.log(myRestedObj);
for(let num1 in myRestedObj)
{
    console.log(myRestedObj[num1]);
}
