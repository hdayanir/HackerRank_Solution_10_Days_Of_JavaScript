// github.com/hdayanir

function modifyArray(nums) {
    const func = nums.map(function(num) {
        
        if (num % 2 == 0)
            {
                return 2*num;
            }
        else
            {
                return 3*num;
            }
    });
    return func;
}