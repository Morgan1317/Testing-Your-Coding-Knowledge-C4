# Testing-Your-Coding-Knowledge-C4

### CODING QUIZ ###

**Purpose**

Create a timed quiz on JavaScript that store High scores, so the user can gauge progress with others

***Summary**

I utilized functions to perform most of the actions that work to change between pages and questions. 
When the user gets on the page they are able to press start and a timer begins as a series of 5 questions happen. If the user is wrong, 10 seconds are deducted from the timer and it moves onto the question, otherwise if they are correct it simply moves to the next question. If the user fails to complete the questions in time they are prompted to try again if they wish to do so. 

![Functions](https://user-images.githubusercontent.com/103079401/175204366-7ba13826-11a8-48b2-ac75-334d1c072ee5.png)

I made a timer function that runs when the user hits the start button quiz, and has conditionals that affect other parts of the page. 

![timer](https://user-images.githubusercontent.com/103079401/175205813-0be549e7-42b6-442a-b1c0-45ea331a7885.png)

***Limitations***

The code is very buggy and creates exceeding stacks becauase I have multiple nested functions. In the future, I plan to input the questions into an array and implement a function that will run through each iteration and display the question, and do the appropriate click events. The way the code is written currently causes a delay in loading up the pages, because the system is bogged down with the exceeding stacks. 

I also plan to see if there are better ways to repopulate the page instead of doing things as shown in the image below. By hardcoding the values of that element of the page to be blank, and thus removing them from the page. 

![empty text](https://user-images.githubusercontent.com/103079401/175205236-5ea3d96f-a911-4af5-9d43-4e3c5f9c75b7.png)

There are other issues I came accross such as non-global variables, which led to me not being able to list the text as blank in later parts of the code, so I had to improvise and thus it is not a very succinct code, therefor in the future I plan to do a lot of refractoring.

***SCREEN CAPTURE OF WEBPAGE*** 

The image below shows the working when the page is loaded.

<img width="1555" alt="screen capture of quiz" src="https://user-images.githubusercontent.com/103079401/175206172-6a758e86-d8ac-46f2-aaaf-1b9aeaa43f6a.png">



***LINK TO DEPLOYED APPLICATION***

https://github.com/Morgan1317/Testing-Your-Coding-Knowledge-C4






