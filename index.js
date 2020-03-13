#!/usr/bin/env node
const process = require('process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const argument = process.argv; 

function takeArgument(argument) {
   let stringOfArray = "";
   for(let i=2;i<argument.length;i++)
   {
    stringOfArray = stringOfArray + " " + argument[i];
   }

   if(stringOfArray)
   {
      //First Task to uppercase
      console.log((stringOfArray.toUpperCase()).trim());
      //Second Task lower-upper sequence
      console.log((lower_upper(stringOfArray)).trim());
      //Thirs Task Csv generation
      console.log(create_csv(stringOfArray));
   }
   else
   {
      console.log("Please follow the pattern..");
      console.log("Example :: iprice hello world");
   }

}

function lower_upper(string){
   var arrayOfCharecter = string.split('');
   var newConvertedString = "";
   for(var i=0;i<arrayOfCharecter.length;i++){
       var temp = "";
       if(i%2 != 0)
       {
         temp = arrayOfCharecter[i].toLowerCase();
       }
       if(i%2 === 0)
       {  
         temp = arrayOfCharecter[i].toUpperCase(); 
       }
       newConvertedString = newConvertedString + "" + temp;
   }
   return newConvertedString;
}


function create_csv(string)
{
    var arrayOfCharecter = string.trim().split('');
    const filename = path.join(__dirname, string+'.csv');
    const output = []; 
    const data = arrayOfCharecter;
    const row = []; 
    
    //Generating column
    data.map(single=>{
        row.push(single);        
    })
    output.push(row.join());    

    try
    {
       fs.writeFileSync(filename, output.join(os.EOL));
       return "CSV created! \nFile location : iprice/"+string.trim()+".csv";  
    }
    catch(e)
    {
        return "Error" + e; 
    }
    
}



takeArgument(argument);