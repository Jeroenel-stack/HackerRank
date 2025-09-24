Steps:

Initialize counters

count = 0 → counts special problems

page = 1 → current page number

Loop through each chapter (for problems of arr):

Loop through each problem in the chapter (for i = 1 to problems):

Check if problem is special:

If i === page → increment count

Move to next page if page is full:

If i % k === 0 → increment page

After finishing chapter:

If last page in the chapter isn’t full (problems % k !== 0) → increment page

Return the total count of special problems