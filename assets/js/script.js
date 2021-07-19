// create the time with moment display with #currentDay 
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//1. Get the current time
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

//2. Depending on time, grey out time that has passed, make timeblock red that is current, make green future timeblocks
function currentColor() {
        if(timeBlock < currentTime) {
         
            
        
        }
}

//2.1 add current day below work day scheduler
        // liveTime
        // element.queryselector("#hour")
        // append.

//3. Save Button
// - Grab the data in the textbox (var variable = document.getelementbyid)
var saveButton = document.getElementsByClassName("saveBtn") {
    // 
}


//4.  - Save it to the localstorage (value = variable) and retrieve the storage
    // Create var Localstorage
    // json.stringify the object 
    // localstorage.set("key", "value",)
    // save the text equals localStorage.getItem("key") which will get the data
    // store the object into JSON.parse()
    // document.write into object.name
    