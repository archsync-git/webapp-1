/**
 * Purpose of this module is for purely reading the siteconfig file
 * of JSON data structure and nothing else. In future we will be writing
 * a more general file reader where based on arguments: filename, ext type
 * and return type(JSON) will be written.
 */
var fs = require('fs');

// Check if the file exist or not in the given path and it is a file.
function chkFile(filePath){
    console.log(`Checking if file "${filePath}" exist or not`);
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

/**
 * Export the required functions/modules in a singleton Pattern.
 * All the modules are run in sync state and will not return an
 * instance of the modules rather will given the function object,
 * there by making all the variables inside a exported module shared
 * accross multiple calls. To avoid mutation of variables declare them
 * as const. 
 */
module.exports = {
    configReader: function(filename,err){
        const file =  filename || "./config.json";
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