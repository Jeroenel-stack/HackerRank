function jimOrders(orders) {
    for (let i = 0; i < orders.length; i++) {
      orders[i][3] = i+1;
      orders[i][2] = orders[i][0] + orders[i][1];
    }
    orders.sort((x,y)=>x[2]-y[2]);
    return orders.map((order)=>order[3]);
}