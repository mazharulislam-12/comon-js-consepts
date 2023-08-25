function kitchen() {
    let rost = 0;
    return function () {
        rost ++;
        return rost;
    }
}
const fistServer = kitchen();
console.log(fistServer());
console.log(fistServer());
console.log(fistServer());