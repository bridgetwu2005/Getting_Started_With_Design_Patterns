# Python built-in Polymorphism functions
# len() being used for a string
print(len("polymorphism"))
# len() being used for a list
print(len([1, 2]))
print(len((10, 11, 12, 13)))


# Examples of user-defined Method Overloading Polymorphism 
 
def sum(x, y, z = 10):
    return x + y+z
 
# Driver code
print(sum(1, 2))
print(sum(1, 2, 3))