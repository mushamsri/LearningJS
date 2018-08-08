let book={
    author:'dennis ritchie',
    name:'c',
    pagecount:300
}
let details=function(bookdetails){
    return{
        summary: `${bookdetails.author} wrote ${bookdetails.name}`,
        page: `${bookdetails.name} contains ${bookdetails.pagecount} pages`
    }
}
let booksummary=details(book)
let pagesummary=details(book)
console.log(booksummary.summary)
console.log(booksummary.page)



let tempconv=function(fah){
    return{
        fah:fah,
        kelvin:(fah+459.67)*(5/9),
        celsius:(fah-32)*(5/9)
    }
}
    let printkelvin=tempconv(20)
    console.log(printkelvin.kelvin)
