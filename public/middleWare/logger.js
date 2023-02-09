let date = new Date();
let currentHours = date.getHours()
console.log(currentHours)

let currentDay = date.getDate()
console.log(currentDay)

const logger = (req,res,next) =>{
    if(currentHours >= 9 && currentHours < 17 && currentDay >= 1 && currentDay <= 5){
        next();
    }else{
        res.send(`
        <div style="text-align: center;color:red;">
        <h1> Sorry, We are Closed Today !!!!</h1>
        <h1> Open Monday To Friday , from 9 to 17 </h1>
        <h3> Have a nice day </h3>
        </div>
        `)
    }
}

module.exports = logger