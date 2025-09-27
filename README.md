Q1. What is JSX, and why is it used?

Ans: JSX is JavaScript XML. It's look like HTML but it is actually JavaScript Code..

    Example: 
      
       const element = <h1>Hello, world!</h1>;

JSX is used for easy to access UI and more readable

    Example: 

        const name = "Ehasun";
        const element = <h1>Hello, {name}!</h1>;


Q2. What is the difference between State and Props?

<table border="1" cellpadding="10" cellspacing="0">
  <tr>
    <th>Feature</th>
    <th>Props</th>
    <th>State</th>
  </tr>
  <tr>
    <td>Definition</td>
    <td>Data passed from parent to child component</td>
    <td>Data managed inside the component</td>
  </tr>
  <tr>
    <td>Who owns it?</td>
    <td>Parent component</td>
    <td>The component itself</td>
  </tr>
  <tr>
    <td>Can it be changed?</td>
    <td>No (read-only)</td>
    <td>Yes (can be updated with setState/useState)</td>
  </tr>
  <tr>
    <td>Purpose</td>
    <td>To pass data and configure a component</td>
    <td>To store information that can change over time</td>
  </tr>
  <tr>
    <td>Example</td>
    <td><code>&lt;User name="Ehasun" /&gt;</code></td>
    <td><code>const [count, setCount] = useState(0);</code></td>
  </tr>
</table>


Q3. What is the useState hook, and how does it work?

Ans: useState is ReactHook. it's used for managed our state in our functional components

when we use useState it should have a initial value. 
It's gives use tow things 

1. The current state value
2. A function to update that value

    Example: 

        import { useState } from "react";

        function Counter() {
            const [count, setCount] = useState(0);

            return (
                <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>
            );
        }


Q4. How can you share state between components in React?

Ans: If two components need the same state → put that state in their closest common parent.

    Example: 

        function Parent() {
            const [count, setCount] = useState(0);

            return (
                <div>
                <ChildA count={count} />
                <ChildB setCount={setCount} />
                </div>
            );
            }

            function ChildA({ count }) {
             return <p>Count is: {count}</p>;
            }

            function ChildB({ setCount }) {
                return <button onClick={() => setCount(c => c + 1)}>Increase</button>;
        }


Q5. How is event handling done in React?

Ans: React handles events similar to JavaScript, but with a few key differences.

    Example: 

        In html

            <button onclick="handleClick()">Click</button>

        In React 

            <button onClick={handleClick}>Click</button>



