function strangeCounter(t) {
    let counter = 3, ratio = 2;
    let time = 1;
    while (true) {
        if (time <= t && time + counter > t) {
             return time + counter -  t;
        } else {
            time += counter;
        }
        counter = counter * ratio;
    }
}