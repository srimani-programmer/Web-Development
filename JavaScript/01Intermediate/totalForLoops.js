//one of the amazing feature in javascript is forin loop
const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

for(displayMonths in months){

    console.log(`${parseInt(displayMonths) + 1} --> ${months[displayMonths]}`)
    
}

console.log('================================')

months.forEach(function(months,index){

    console.log(`${index+1} --> ${months}`)
})

console.log('================================')

for(let index = 0 ; index < months.length ; index ++){

    console.log(`${index + 1} -- > ${months[index]}`)
}