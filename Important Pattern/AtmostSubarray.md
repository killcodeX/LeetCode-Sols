# Atmost Logic


## What's the logic of atmostSubarray function?

This function actually calculates the number of subarrays which is having sum less than and equal to goal , now the catch is this function will return the number of subarrays having sum less than goal too.

### How it's calculating ?

For example : ```Array = [ 1 , 0 , 1 , 0 , 1 ] and Goal = 2.```

We'll iterate over it like below and calculate the current sum and check whether it's less than or equal to Goal and count the number of subarrays in count variable.

Initially : ```sum = 0 , i = 0 , count = 0.```

Step 1 : ```1 0 1 0 1 ; i = 0 , sum = 1 , count = 1```
Step 2 : ```1 0 1 0 1 ; i = 1 , sum = 1 , count = 1 + 2 = 3 , not 2```

Now here's the catch , we aren't simply incrementing the count by 1 , we are adding 2, why?

See, till 1st index how many subarrays are there with sum <= 2 ( our goal ).

(a) 1
(b) 1 0
(c) 0

Total = 3 , not 2 , So from this we can observe that to cover all possible subarrays whose sum <= goal we will add length of our current window means ( j - i + 1 ) to count variable.

and after Step 2 , for each step you'll do this only and get count as follow :

1 + 2 + 3 + 4 + 4 ; at last 4 not 5 , as 1 0 1 0 1 , this window sum > goal , so we will shrink it like this 1 0 1 0 1 , now the size is 4.

so total count = 14.

and similarly we will count the number of subarrays having Sum <= Goal - 1.

I won't go into calculations of that , that you can do, but result will be 10.

That's the logic of this function.

### Why calculating atmost goal or count of subarrays having sum <= goal , not directly equal to goal.

Let me explain you with an example :

Initially , i = 0 , j = 0 , sum = 0 , count = 0 , goal = 2

Note : Here count will count the subarray having sum = goal.

Array = [ 1 , 0 , 1 , 0 , 1 ]

1 , 0 , 1 , 0 , 1 ; i = 0 , j = 0 , sum = 1 , count = 0

1 , 0 , 1 , 0 , 1 ; i = 0 , j = 1 , sum = 1 , count = 0

1 , 0 , 1 , 0 , 1 ; i = 0 , j = 2 , sum = 2 , count = 1

1 , 0 , 1 , 0 , 1 ; i = 0 , j = 3 , sum = 2 , count = 1

1 , 0 , 1 , 0 , 1 ; i = 0 , j = 4 , sum = 3 , count = 1

Now as sum > goal , we will shrink our window by incrementing our i pointer and subtracting ith element from sum till sum > goal and we will get.

1 , 0 , 1 , 0 , 1 ; i = 1 , j = 4 , sum = 2 , count = 2

And now observe, now loop ends as our j == n - 1. but we missed one subarray if you will see , 1 0 1 at last.

### Why is this happening ?

As array is containing zeroes so it won't create any impact on current sum , as by adding or subtracting 0 from your sum , sum value won't change , so here we can say with having number of zeros in our array additional possiblity of having subarray of sum = goal is there.

So that's why we are counting atmost or sum <= goal , so we can include all subarray cases.

At last , main question you guys want to know now would be .

🚀 Why atmostSubarray(nums,goal) - atmostSubarray(nums,goal-1);

a) atmostSubarray(nums,goal) will give you number of subarrays with sum <= goal
i.e. ```goal, goal-1 , goal-2 , goal-3 ... 0```

b) atmostSubarray(nums,goal) will give you number of subarrays with sum <= goal -1
i.e. ```goal-1 , goal-2 , goal-3 ... 0```

So we only need number of subarrays which having sum as goal ,

atmostSubarray(nums,goal) having that , but additionally having other count too of subarrays having sum < goal.

and we know atmostSubarray(nums,goal -1) having count of all subarrays having sum <= goal - 1 or we can say sum < goal too. So that means this contain that additional count which we want to remove from atmostSubarray(nums,goal) result.

So we subtract both.