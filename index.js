const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];
//  1. Tìm và trả về object có author là 'Steve Jobs'.
//  var user='Steve Jobs'
//  var eat= library.find(function(n){
//     return n.author==user })
// console.log(eat)
// 2. Thay đổi readingStatus của object đó thành false.

// eat.readingStatus="false"
// console.log(eat)
// 3. Trả về mảng chỉ chứa title các object.hàm map array

// var map1=library.map(function(c){
//     return c.title})
// console.log(map1)
// 4. Filter những object mà title chứa chuỗi 'the'.

// var eat = library.filter(function(song){
//     return song.title.toLowerCase().includes("The".toLowerCase()) });
// console.log(eat)
// 5. Thêm thuộc tính price: 100000 cho mỗi object.
let eat = library.map(function (library) {
    return {
        author: library.author,
        title: library.title,
        readingStatus: library.readingStatus,
        price: "100000"

    }
});
// console.log(eat)
// 6. Thêm một object mới vào mảng trên.
//     {
//         author: 'Huyen Chip', 
//         title: 'Xach ba lo len va di', 
//         readingStatus: false, 
//         price: 110000
//     }
// var lir={
//           author: 'Huyen Chip', 
//             title: 'Xach ba lo len va di', 
//         readingStatus: false, 
//         price: 110000
//     }
// library.push(lir)
// console.log(library)
// 7. Filter những object có readingStatus là false.
 let ate = eat.filter(function (library) {
    return library.readingStatus === false
})
console.log(ate)

// 8. Sắp xếp mảng trên dựa vào thứ tự Alphabet của thuộc tính title.

var atee = eat.sort((a, b) => (a.title - b.title) ? 1 : -1)
console.log(atee)