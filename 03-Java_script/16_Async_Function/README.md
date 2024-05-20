Sync in JS
Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.

Asynchronous:
Due to synchronous programing, sometimes imp instructions get blocked due to some previous instruction, which
causes a dealy in the Ul. Asynchronous code execution to exectue next instruction imeediately and doens't block 
the flows 

call back:
A callback is a function passed as an argument to another function.

Call backhell:
Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom) this style of progaraming becomes difficults to understand & manage.

Promises:
Promise is for “eventual” completion of task. It is an object in JS
it is solution to call backhell.


throw keyword:
we used throw keyword when we catch some random error


Await Keyword:
pauses the execution of its surrounding async funciton until the promise is settled 
(resolved or rejected)

wherever used ansync keywork it should should be return promise compulsorly. 

we only used await keyword whenever over function is async postition 


Promise Chaing
whenever settimouet function used the main function declared async functioon




IIFE: Immediately invoked Function Expression
IIFE is a function that is called immediately as soon as it is defined.
