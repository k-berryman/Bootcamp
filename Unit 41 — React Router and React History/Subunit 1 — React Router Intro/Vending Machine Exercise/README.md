# React Router Vending Machine

`npx create-react-app vend`
`cd vend`
`npm start`

### Create the Header Component

Add in  `{/* Component Comments */}`  in  `App.js`

```
{/* Header */}
```

Create the Header component — Create  `src/Header.js`  They use ES7 Snippets for VSCode, but I'm using Atom

Add in component template into  `Header.js`

```
import React from 'react'

function Header() {
  return (
    <div>

    </div>
  )
}

export default Header
```

Give the `div` a className of 'header' Create `src/Header.css` and import it to the Header component with `import './Header.css`

Go to  `App.js`  add  `import Header from './Header';`  Add in  `<Header />`

----

### Create components with the same process as above for Vending Machine & Snacks

---

### Adding multiple pages

In order to have multiple pages in our website, we're going to use  **React Router**  `npm install react-router-dom`

Now in  `App.js`  we need to  `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`

And then wrap our app div inside the Router

```
    <Router>
      <div className="app">
        <Header />
        <VendingMachine />
      </div>
    </Router>
```

Now let's render different pages based on the current route '/' is the default/home route.

**The default route should be at the bottom**

```
import './App.css';
import Header from './Header';
import VendingMachine from './VendingMachine';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```
