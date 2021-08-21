const MONTHS=[1,2,3,4,5,6,7,8,9,10,11,12];
const FEB_DAYS=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
const LONG_MONTHS_DAYS=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const SHORT_MONTHS_DAYS=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const LONG_MONTHS=[1,3,5,7,8,10,12];
const SHORT_MONTHS=[4,6,9,11];
const HOROSCOPES=["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"];
const LAST_DAY_OF_HOROSCOPE=[19,18,20,19,20,20,22,22,22,22,21,21];

const validateUserName=function(){
    let userName=prompt("Please Enter Your Name");
    while(!(userName!=null && userName!=undefined && isNaN(userName))){
        alert("You have entered a wrong username");
        userName=prompt("Please Enter Your Name");
    }
}
const validatePassword=function(){
    let userPassword;
    let noOfTrials=0;
    let validPassword=false;
    while(noOfTrials!=3)
    {
        userPassword=prompt("Please Enter Your Password");
        if(userPassword==123){
            validPassword=true;
            return validPassword;
        }
        alert("You have entered a wrong password");
        noOfTrials++;
    }
    alert("You have entered wrong password 3 times");
    return validPassword;
}

const validateBirthMonth= function(){
    let birthMonth=Number(prompt("Please Enter Your Birth Month in Numbers"));
    
    while(!MONTHS.includes(birthMonth) || isNaN(birthMonth)){
        alert("You have entered a wrong month");
        birthMonth=Number(prompt("Please Enter Your Birth Month in Numbers"));
    }
    return birthMonth;
}

const validateBirthDay=function(birthMonth){
    let birthDay=Number(prompt("Please Enter Your Birth Day"));

    while(isNaN(birthDay)){
            alert("You have entered a wrong birthday");
            birthDay=Number(prompt("Please Enter Your Birth Day"));
    }
    
    if(birthMonth==2){
        while(!FEB_DAYS.includes(birthDay) || isNaN(birthDay)){
            alert("You have entered a wrong birthday");
            birthDay=Number(prompt("Please Enter Your Birth Day"));
        }
        return birthDay;
    }

    if(LONG_MONTHS.includes(birthMonth)){
        while(!LONG_MONTHS_DAYS.includes(birthDay) || isNaN(birthDay)){
            alert("You have entered a wrong birthday");
            birthDay=Number(prompt("Please Enter Your Birth Day"));
        }
        return birthDay;
    }

    if(SHORT_MONTHS.includes(birthMonth)){
        while(!SHORT_MONTHS_DAYS.includes(birthDay) || isNaN(birthDay)){
            alert("You have entered a wrong birthday");
            birthDay=Number(prompt("Please Enter Your Birth Day"));
        }
        return birthDay;
    }
}

const displayHoroscope=function(birthDay,birthMonth){
    
    if(birthDay<=LAST_DAY_OF_HOROSCOPE[MONTHS.indexOf(birthMonth)]){
        alert("Your Horoscope is "+HOROSCOPES[birthMonth-1]);
    }else{
        alert("Your Horoscope is "+HOROSCOPES[birthMonth%12]);
    }       
}

validateUserName();
let isValidPassword=validatePassword();
if(isValidPassword){
    let birthMonth=validateBirthMonth();
    let birthDay=validateBirthDay(birthMonth);
    displayHoroscope(birthDay,birthMonth);
}


