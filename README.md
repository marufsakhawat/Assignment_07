1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It lets us write HTML-like code directly inside JavaScript.
Even though it looks like HTML, it actually becomes JavaScript when React processes it.

JSX is used because it:

Makes UI code much easier to understand

Allows writing dynamic content inside curly braces { }

Helps combine HTML structure and JavaScript logic in one place

2. What is the difference between State and Props?

State is data that a component owns and controls. It can change while the app is running.

Props are values passed from a parent component to a child component. They are read-only, meaning the child cannot change them.

In short:

Props = external, fixed data

State = internal, changeable data

3. What is the useState hook, and how does it work?

useState is a built-in React Hook that lets functional components have their own state.

When you call useState, it returns:

The current state value

A function to update that value

Example:

const [count, setCount] = useState(0);


Here, count is the value, and setCount updates it.

4. How can you share state between components in React?

To share state between components, you usually lift the state up to the closest parent component.

The parent holds the state and passes it down to children using props.
This way, multiple components can use or update the same data.

Other state-sharing methods:

React Context → for global or app-wide sharing

Redux / Zustand → for larger projects with complex state

5. How is event handling done in React?

React handles events almost like JavaScript but with a few differences:

Event names use camelCase (e.g., onClick instead of onclick)

You pass a function, not a string