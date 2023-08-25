function greeting(greetingHandler, name) {
   greetingHandler(name);
    
}
function greetingHandler(name) {
    console.log('Hello js programmer', name);
}
function greetingJs(name) {
    console.log('Hi js ', name);
}
function greetingNight(name) {
    console.log('Good Night', name);
}
greeting(greetingHandler, 'Jon Doe')
greeting(greetingHandler, 'Ali Bat')
greeting(greetingJs, 'Tom jon')
greeting(greetingNight, 'Salman')


// const name = 'Halim Mama'
// const numbers = [45, 86, 69];
// const laptop = {name: 'lenovo', price: '50000', memory: '1tb'}
// greeting(laptop);