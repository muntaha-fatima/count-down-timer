#! /usr/bin/env node
import{ differenceInSeconds } from 'date-fns';


 import inquirer from 'inquirer';
 const res =await inquirer.prompt([{
    type:"number",
    name:"userinput",
    message:"enter amount of second",
    validate:(input) =>{
        if (isNaN(input )){
            return "please enter valid number"



        }else if (input>60){
            return "second must witin 60"
        }else{
            return true;
        }
    }

 }]);
 let input =res.userinput
 function startTime(val:number) {
const inTime = new Date().setSeconds(new Date().getSeconds() + val)
const intervalTime =new Date(inTime);
setInterval(()=>{
    const  currentTime = new Date()
    const timeDiff =differenceInSeconds(intervalTime,currentTime)
    if(timeDiff <=0){
        console.log("Time has expired")
        process.exit();
    }
    const min = Math.floor((timeDiff%(3600*24))/3600)
    const sec = Math.floor(timeDiff%60);
    console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}}`)


}, 1000);

 }
 startTime(input);
 