let bus={
    name:'redbus',
    seats:70,
    available:0,
    start:'adilabad',
    checkseats:function(totalbus){
        let seatsleft=this.seats-this.available
        return totalbus<=seatsleft
    }
}
let status=bus.checkseats(5)
console.log(status)