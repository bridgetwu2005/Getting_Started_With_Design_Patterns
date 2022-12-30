# Shape interface 
class Shape:
    def draw(self) -> str:
        """draw shape"""
        pass

class Circle(Shape):
    """Simply return the draw Circle message"""
    def draw(self):
        print("Draw Circle.") 

class Oval(Shape):
    """Simply return the draw Oval message"""
    def draw(self):
        print("Draw Oval.") 

class Square(Shape):
    """Simply return the draw Square message"""
    def draw(self):
         print("Draw Square.") 

class ShapeFactory:
    """Factory Method"""
    shapeFactories = {
        "Circle": Circle(),
        "Oval": Oval(),
        "Square": Square(),
    }
    def create_shape(shapeType: str):
        return ShapeFactory.shapeFactories[shapeType]

# File: Factory.py
# Author: Bridget
def main():
    # create an circle object and call its draw method.
    circle = ShapeFactory.create_shape("Circle")
    #call draw method of squcircleare
    circle.draw()
    # create an oval object and call its draw method.
    oval=  ShapeFactory.create_shape("Oval")
    #call draw method of oval
    oval.draw()
    # create an square object and call its draw method.
    square =  ShapeFactory.create_shape("Square")
     #call draw method of square
    square.draw()

if __name__ == '__main__':
    main()