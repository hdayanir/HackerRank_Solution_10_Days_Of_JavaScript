// github.com/hdayanir

function reverseString(s) {
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
        {
            console.log(error.message);
            console.log(s);
        }    
}