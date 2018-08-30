//one of the amazing feature in javascript is forin loop
const weekDays = ['mon','tue','wed','thu','fri','sat']

for(days in weekDays){

    console.log(`${parseInt(days) + 1} --> ${weekDays[days]}`)
    
}
