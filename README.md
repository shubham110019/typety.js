# typingtest

Copy the provided HTML code and save it as an HTML file (e.g., typewriter.html).

Open the HTML file in a web browser.

You will see three different sections with text that appears as if it is being typed.

Each section is wrapped in a <span> element with the class typewriter.
  
To customize the typewriter effect, you can modify the attributes of each <span> element.
  
ty-text: This attribute holds an array of strings that will be typed out one by one. Modify the array elements to change the text content. For example, ty-text='["Hello", "World!"]' can be changed to ty-text='["Welcome", "to my website!"]'.
ty-typing-speed: This attribute determines the typing speed in milliseconds. A lower value makes the typing faster, and a higher value makes it slower. Modify this value to adjust the typing speed.
ty-delay: This attribute specifies the delay between each text in milliseconds. Modify this value to adjust the delay between texts.
ty-cursor-speed: This attribute controls the speed of the cursor blinking in milliseconds. Modify this value to change the cursor blinking speed.
You can add or remove additional sections with the typewriter effect by duplicating or removing the <span> elements with the typewriter class.

Feel free to customize the CSS styles or add additional functionality to the typewriter effect as per your requirements.

## CDN Link
```
https://cdn.jsdelivr.net/gh/shubham110019/typingtest@latest/typingtest.min.js
```

## html code

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
 <body>

  <span
    class="typewriter"
    ty-text='["What is Lorem Ipsum?", "Why do we use it?", "Where does it come from?"]'
    ty-typing-speed="400"
    ty-delay="100"
    ty-cursor-speed="100">
  </span>
 
  <script src="https://cdn.jsdelivr.net/gh/shubham110019/typingtest@latest/typingtest.min.js"></script>
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
