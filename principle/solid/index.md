SOLID is a clean code and use a oop concept but in JS i ithnk we can use A HOF Concept to extends a oop behavior
why SOLID is implotant if when we have a medium or large project and continue to develop in someday we will get a damage from techinical debt
for example class is big or large to maintain or developer that why S is SOLID has improtent  
s : single responsibility
o : open closed
l : liskov substitution
i : interface segregation
d : dependency inversion
let start!
[Single responsibility]
"One Class should have only One JoB"
Example
`class User {
    name:string
    getName():string
    save():string
    export():string
}`

so this class we have 1 property and 3 behavior and if we tihnk in deep we found save and export is not a user responsibility so we should to
separate them and refartor to this
`class User{
    name:string
    getName():string
}`
`class UserDataBase{
    save(user:User):User
}`
`class UserExporter{
    export(user:User):User
}`
