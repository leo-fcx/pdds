# Software design concepts

### Communication. 
Code well documented and properly written is valuable. See [here](https://github.com/leo-fcx/pdds/blob/master/restAPI/endPoint.js#L1)

### Simplicity
Keep things simple. Simple way to communicate to API. See [here](https://github.com/leo-fcx/pdds/blob/master/index.js#L10)
Do not repeat yourself. Do not need to have different classes for each end-point. See [here](https://github.com/leo-fcx/pdds/blob/master/index.js#L6)

### Flexibility and Generalization
Flexibility does not mean generalization. Rest API may get additional end-points implemented/added. See [here](https://github.com/leo-fcx/pdds/blob/master/index.js#L6)

### Write code that is not needed
Rest API supports 4 HTTP methods. And, we just add implementation of each on demand. See [here](https://github.com/leo-fcx/pdds/blob/master/restAPI/endPoint.js#L19)

### Making code easy to change
If there is needed to specialize and end-point, change is matter of creating an instance of a specialized end-point.  See [here](https://github.com/leo-fcx/pdds/blob/master/index.js#L6)

### Local consequences
End-point file is going to use a package to communicate to API. Any change we want to try a new package, that change will be transparent to the "consumers". See [here](https://github.com/leo-fcx/pdds/blob/master/restAPI/endPoint.js#L1) 

### Minimize repetition
Do not repeat yourself. Do not need to have different classes for each end-point. See [here](https://github.com/leo-fcx/pdds/blob/master/index.js#L6)

### Symmetry
RestAPI/EndPoint provides CRUD methods. See [here](https://github.com/leo-fcx/pdds/blob/master/restAPI/endPoint.js#L19)

### Declarative expression
Easily to identify which resources/end-points school API has.  See [here](https://github.com/leo-fcx/pdds/blob/master/index.js#L6)

### Logic and data together
URL is specific to schoolAPI. See [here](https://github.com/leo-fcx/pdds/blob/master/index.js#L3)

## Following items were improved

* Code repetition:
* Not giving meaningful names.
* Not meaningful comments for variable and classes
* Over-documentation
