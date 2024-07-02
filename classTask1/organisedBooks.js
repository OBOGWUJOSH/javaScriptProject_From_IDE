
const members = ["Emely", "Jack", "Sophia", "Daniel", "John"]
const books = ["book1", "book2", "book3", "book4"]
const woman = ["woman", "woman1", "woman2", "woman3"]

function generateAnObjectItem(a,b){
    const obj = {}
    a.forEach((a, b) =>{
    obj[a] = woman[b];
    })
    return obj
}
    console.log(generateAnObjectItem(members));

