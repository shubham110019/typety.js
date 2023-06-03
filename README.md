# typety.js


### [Live Demo](https://codepen.io/sralli73/pen/JjmgxwP) 

<p>Customize the typewriter effect by modifying the attributes of the span element with the class "typewriter". Here are the available attributes:</p>

<ul>
  <li><strong>ty-text:</strong> Specify an array of strings as the value, and the typewriter effect will cycle through each string. For example, ty-text='["Hello", "World!"]'.</li>
  <li><strong>ty-typing-speed:</strong> Set the speed of typing in milliseconds. For example, ty-typing-speed="200" sets the typing speed to 200 milliseconds.</li>
  <li><strong>ty-delay:</strong> Set the delay between each text in milliseconds. For example, ty-delay="1000" sets the delay to 1000 milliseconds.</li>
  <li><strong>ty-cursor-speed:</strong> Set the speed of the cursor blinking in milliseconds. For example, ty-cursor-speed="500" sets the cursor speed to 500 milliseconds.</li>
</ul>


## Installation


<h3>CDN</h3>

```
https://cdn.jsdelivr.net/gh/shubham110019/typingtest@latest/typety.min.js
```

## html code

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
 <body>

 <h1><span
    class="typewriter"
    ty-text='["What is Lorem Ipsum?", "Why do we use it?", "Where does it come from?"]'
    ty-typing-speed="400"
    ty-delay="100"
    ty-cursor-speed="100">
  </span></h1>


  <h1>How to <span
    class="typewriter"
    ty-text='["open", "read", "enjoy"]'
    ty-typing-speed="400"
    ty-delay="100"
    ty-cursor-speed="100">
  </span> a book</h1>
 
  <script src="https://cdn.jsdelivr.net/gh/shubham110019/typingtest@latest/typety.min.js"></script>
  </body>
</html>
```

## how to change cursor color
```

<style>
  .ty-cursor{
  color:#FA8072;
  }
</style>
```
