var fs = require('fs');

function chkFile(filePath){
    console.log(`Checking if file "${filePath}" exist or not`);
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

module.exports = {
    configReader: function(filename,err){
        var file =  filename || "./config.json";
        console.log(`Attempting to read config file: ${file}`)
        if(chkFile(file)){
            tempObject = require(file);
            console.log(`\t>>>> File FOUND`);
            return tempObject;
        }
        else{
            console.log("\t >>>> File NOT FOUND");
            return(false);
        }
    }
};