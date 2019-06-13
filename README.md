
# Add Remove Overlay

Basic javascript utility functions that can be used to attach or remove overlay to an element

##Usage
**Works with jquery**

contains two functions :


| Function name | Description                    |
| ------------- | ------------------------------ |
| `attach_overlay_to(element, duration, background)`      | attaches an overlay to the element       |
| `remove_overlay_from(element, duration)`   | removes overlay from the specified element     |


| Parameter name  | Info  | Default value | Example value |
| ------------ |:---------------:|:-----:|----------|
| element      | A string with the class/id name of the html element to which we want to attach the overlay  | - |`'.element'` or `'#element'`|
| duration     | Transition duration of the overlay in microseconds | `400`  | `1000`,`1200`, etc|
| background | Background color of the overlay      | `rgba(0, 0, 0, 0.600)` |`red`,`#000`,`rgba(200,200,200,0.4)` or any other color value|
                
----

