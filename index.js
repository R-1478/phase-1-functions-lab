function distanceFromHqInBlocks(){
    const num1 = 50
    const num2 = 42
    const ans = (num1 - num2)
     
    return ans 
}
distanceFromHqInBlocks()


function  distanceFromHqInFeet () {
 (distanceFromHqInBlocks * 264)
} 
distanceFromHqInFeet() ;


function distanceTraveledInFeet(){
    (distanceFromHqInBlocks * 264)
}

distanceTraveledInFeet();


function calculatesFarePrice (start,destination) {
    let x = (destination - start)
    if (x < 400)
    console.log("Enjoy your free sample!")
    else if (400 <= x < 2000)
    console.log((x-400)*2.56)
    else if (2000 <= x <2500 )
    console.log(x * 25)
    else  if (x > 2500) 
    console.log('cannot travel that far')
 

}
calculatesFarePrice(1500,2400)
