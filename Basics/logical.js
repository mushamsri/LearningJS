let isguest1vegan=true
let isguest2vegan=false
if( isguest1vegan &&  isguest2vegan){
    console.log('only offer vegan dishes')
}
else if( isguest1vegan ||  isguest2vegan){
    console.log('make sure to offer more vegans')
}
else{
    console.log('offer anything')
}