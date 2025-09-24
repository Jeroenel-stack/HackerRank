function quickSort(ar) {
    let ar_size= ar.length;
   var left=[];
    var right=[];
    var pivot=ar[0];
    var j=0,k=0;
    for(var i=1;i<ar_size;i++)
    {
       if(ar[i]<pivot)
       {
           left[j]=ar[i];
           j++;
       }
       else
       {
           right[k]=ar[i];
           k++;
       }
    }
    let arr=[];
    //j=0;k=0;
    for(var i=0;i<j;i++)
    {
           arr[i]=left[i];
    }
    arr[j]=pivot;
    for(var i=0;i<k;i++)
    {
           arr[i+j+1]=right[i];
    }
     return arr;
}