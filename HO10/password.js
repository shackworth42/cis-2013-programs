var $ = function (id) //DOM function
    {
        return document.getElementById(id);
    };
var passwordCheckOld = function () //main function
{
    var stringPassword, arrayBadPasswords, stringOutput; //initialize vars
    stringPassword = $("password").value; //DOM over the input
    arrayBadPasswords = ["123456",'password','12345678','1234','12345','dragon','qwerty','696969','mustang','letmein','baseball','master','michael','football','shadow','monkey','abc123','pass','6969','jordan','harley','ranger','iwantu','jennifer','hunter','2000','test','batman','trustno1','thomas','tigger','robert','access','love','buster','1234567','soccer','hockey','killer','george','sexy','andrew','charlie','superman','dallas','jessica','panties','pepper','1111','austin','william','daniel','golfer','summer','heather','hammer','yankees','joshua','maggie','biteme','enter',
                         'ashley','thunder','cowboy','silver','richard','orange','merlin','michelle','corvette','bigdog','cheese','matthew','121212','patrick','martin','freedom','ginger','nicole','sparky','yellow','camaro','secret','falcon','taylor','111111','131313','123123','bitch','hello','scooter','please','porsche','guitar','chelsea','black','diamond','nascar','jackson','cameron','654321','computer','amanda','wizard','xxxxxxxx','money','phoenix','mickey','bailey','knight','iceman','tigers','purple','andrea','horny','dakota','aaaaaa','player','sunshine','morgan','starwars',
                         'boomer','cowboys','edward','charles','girls','booboo','coffee','xxxxxx','bulldog','ncc1701','rabbit','peanut','john','johnny','gandalf','spanky','winter','brandy','compaq','carlos','tennis','james','mike','brandon','fender','anthony','ferrari','cookie','chicken','maverick','chicago','joseph','diablo','sexsex','hardcore','666666','willie','welcome','chris','panther','yamaha','justin','banana','driver','marine','angels','fishing','david','maddog','hooters','wilson','butthead','dennis','captain','chester','smokey','xavier','steven','viking','snoopy','blue','eagles','winner','samantha','house','miller'];
    //iteration statement
         for (i = 0; i < arrayBadPasswords.length; i++){//starts at [0], then goes as long as the array is one item at a time.
            if (stringPassword == ""){
                stringOutput = "Please enter a password"
                break;
            }else if (stringPassword.length > 8){
                stringOutput = "Password must be less than 8 characters"
                break;
            }else if (arrayBadPasswords[i] == stringPassword){
            stringOutput = "No";
            console.log(stringOutput);//added console logs during testing to help with the logic
            break;
            } else if (arrayBadPasswords[i] != stringPassword){
            stringOutput = "Yes";
            console.log(stringOutput)
            }
        }
    $("output").value = stringOutput;//DOMs out the output
    console.log(stringOutput)
    }
window.onload = function () 
{
    $("password").value = "";
    $("password").focus();
    $("check_password").onclick = passwordCheckOld;
}
