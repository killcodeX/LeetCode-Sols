# Dutch partitioning problem

[Dutch national flag problem](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)

Dutch Flag Algorithm (DFA) is one of the most basic and important algorithms for arrays. It is used to segregate an array consisting of 3 numbers in linear time complexity.

The worst time complexity for DFA is O(n) and the space complexity for the algorithm is O(1). The problem statement is as follows:

`An array consisting of 0s, 1s, and 2s is provided to you. The task is to write a function that segregates all the numbers together. The order can be anything.`

Let's assume that the provided array A is
`A = [1, 2, 0, 1, 2, 0, 1, 2, 0]`
and the output expected is
`A = [2, 2, 2, 0, 0, 0, 1, 1, 1]`

To solve the problem, we need to first select the order. For this example, let's select 2,1,0.
Now we need to have 3 pointers namely start, end, and P, pointing to three different indices of the array.

The start will denote the first index of the middle element i.e 0 over here. The End will denote the last index of the middle element and pointer P will be used to traverse the array.

The loop will run while the P is not equal to End. As the P traverses, if P encounters 2, it will swap it with start and increment the start. Similarly, if P encounters 1, it will swap it with end and decrement end. The code is as follows:-
