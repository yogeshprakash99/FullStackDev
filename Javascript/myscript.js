var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var age = prompt("Enter your age: ");
var height = prompt("Enter your height: ");
var nickName = prompt("Enter your nickname: ");
var i;

if(firstName[0] == lastName[0])
{
    if(age>=20 && age<=30)
    {
        if(height = 170)
        {
            if (nickName[nickName.length-1] === "y")
            {
                console.log("Welcome Spy! Good to see you.")
            }
        }
    }
}
else
{
    console.log("Hi. Nothing much to see here")
}