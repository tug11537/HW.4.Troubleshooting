# Troubleshooting 4 | MUST 4707

[How to Access Assignment Materials](#accessing-the-assignment-materials)

## Finding Errors in existing code and fixing them

In this assignment you will update the file `script.js` and commit it to your assignment repository. Your updated version of `script.js` should run without any errors. 

### Troubleshooting

Troubleshooting is the process of identifying, diagnosing, and resolving issues or problems in a system, device, software, or any complex situation. It involves systematically analyzing the symptoms, investigating potential causes, and implementing solutions to restore normal functionality or achieve the desired outcome. Troubleshooting is a critical skill used in various fields, including technology, engineering, and everyday problem-solving, to address and fix problems efficiently.


### Task Description

1. The provided `script.js` contains multiple coding errors
2. Figure out what is wrong with the code and fix it!

### Coding Instructions

You will edit your code  in `script.js`:

```javascript
const numbers = [1, 2, 3, 4, 5];

let index = 0;

const sum = 0;

while (index == numbers.length) {
    sum += numbers[index];
    index = index + 1;
}


numbers.append(6);

console.log(numbers);
console.log(sum);

```


### **Expected Console Output After Errors are fixed**
```
[1, 2, 3, 4, 5, 6]
15
```

---
---


### Submission Steps
1. Upload your `script.js` to the Canvas assignment.
---
## Accessing the Assignment Materials
1. Navigate to the assignment repository in the course [GitHub organization](https://github.com/MUST4707)
2. Click on the green `Use this template` button in the top right corner.
3. Choose 'Create a new repository'
4. Set up the repo name under your account.
5. Click `Create repository`

*You should now be at your own personal repository with the assignment materials.*
6. Click on the green `<> Code` button and select `Open with GitHub Desktop

*You should now be in your GitHub Desktop application that has a pop up window called 'Clone a Repository'*

7. Make sure the local path is where you would like to save this repo.
8. Hit `Clone`
9. You should be able to now click the `Open in Visual Studio Code ` button or navigate to your files and open the folder in Visual Studio Code.
10. After you finish working on your project please return to GitHub Desktop and
11. Commit your changes to the `master` (don't to add a summary description)
12. Click on the `Push Orgin` to sync your commit with the GitHub cloud.
