# react-tutorial
Tutorial> intro to React (https://reactjs.org/tutorial/tutorial.html)
Final result> https://codepen.io/gaearon/pen/gWWZgR?editors=0010


## Notes
A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.
The render method returns a __description__ of what you want to see on the screen. React takes the description and displays the result.

### BABEL
Transforms modern javascript to something that can run on all browsers.
Depends on plugins to do it.
In react for instance, it provides support for the JSX syntax

### Developer Tools
The React Devtools extension for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) lets you inspect a React component tree with your browser’s developer tools.

### Conventions
In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.


## Further reading
- You can learn more about shouldComponentUpdate() and how you can build pure components by reading [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html#examples)
- [Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview)

### Practice
If you have extra time or want to practice your new React skills, here are some ideas for improvements that you could make to the tic-tac-toe game which are listed in order of increasing difficulty:

1. Display the location for each move in the format (col, row) in the move history list.
2. Bold the currently selected item in the move list.
3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
4. Add a toggle button that lets you sort the moves in either ascending or descending order.
5. When someone wins, highlight the three squares that caused the win.
6. When no one wins, display a message about the result being a draw.
