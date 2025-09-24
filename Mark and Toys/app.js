function maximumToys(prices, k) {
  prices = prices.sort((x,y)=>x-y);
  for(let i=0;i<prices.length;i++){
      k = k - prices[i];
      if(k<0) return i;
  }
}       