// github.com/hdayanir

class Polygon {
    constructor(heights) 
    {
        var polygon_perimeter = 0;
        for (var index in heights)
            {
                polygon_perimeter += heights[index];
            }
        
        this.my_perimeter = polygon_perimeter;
    }
    
     perimeter() 
    {
        return this.my_perimeter;
    }    
}