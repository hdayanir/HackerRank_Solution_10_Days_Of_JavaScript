// github.com/hdayanir

function getSecondLargest(nums) {
    var sorted_array = nums.sort(function (a,b) {return a - b;});
    var unique_sorted_array = sorted_array.filter(function(elem, index, self) {
        return index === self.indexOf(elem);})
    return unique_sorted_array[unique_sorted_array.length - 2];
}