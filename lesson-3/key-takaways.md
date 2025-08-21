# 1. Git (command Undo things)
## Change commit message:
git commit --amend -m"message"
## Move file from Staging -> Working directory
git restore --staged *filename*
## Move commit from Repository -> Working directory
git reset HEAD~1 (undo 1 commit)
# 2. Branching model
## Create new branch
git branch *branch_name*
## GitIgnore 
- Create a new file name: .gitignore
- Add file or folder in file
Note: If ignore a folder, .gitignore must out of folder
# 3. Javascript
## 3.1. console.log 
console.log('${variable_name}')
Ex: let name = "Nga"
console.log('Toi la ${name}') 
## 3.2. Object
let/const *objectname* = {
    "name": "string"
    "variablename2": number
    "variablename3" {
        "name": "string123"
    }
}
### a. Print whole object:
console.log(*objectname*)
### b. Print 1 variable name in object
console.log(*objectname*.name)
=> Result: String

console.log(*objectname*.variablename3.name)
=> Result: String123
## 3.3. Logical operator (apply for boolean)
a = true
b = true
### If a = b (a && b)
if (a && b) {
    console.log("run code")
}
### If a or b is true (a || b)
if (a || b) {
    console.log("runcode")
}
### Change status (true -> false and reverse)
console.log(!a)
## 3.4. Array
const listname = {"a", "n", "b"}
console.log(listname.length) -> print 3 

console.log(listname[0])
-> print a

for (let i = 0; i < listname.length; i++) {console.log(listname{i})} -> print a, n, b
## 3.5. Function
function sum(3,5) {return 3 + 5;}
let total = sum(3,5)
console.log(total)

