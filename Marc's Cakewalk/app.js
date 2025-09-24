function marcsCakewalk(calorie) {
    calorie = calorie.sort((x, y) => y -x);
    console.log(calorie);
    var count = 0;
    for (var i = 0; i < calorie.length; i++) {
        count += (Math.pow(2, i) * calorie[i]);
    }
    return count;
}