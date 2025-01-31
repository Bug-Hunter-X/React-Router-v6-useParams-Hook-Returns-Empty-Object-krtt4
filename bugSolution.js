The solution involves restructuring the component tree or using context to make the params available where needed.

**Solution 1: Prop Drilling**

Pass the parameters down as props through the component tree:
```javascript
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User userIdParam={'userId'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//User.js
import { useParams } from 'react-router-dom';

function User({userIdParam}) {
  let { userId } = useParams();
  return (
    <div>
      <h1>User ID: {userIdParam || userId}</h1>
    </div>
  );
}

export default User;
```

**Solution 2: Context**

Use React Context to make the params available across your component tree:
```javascript
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import { UserContext } from './UserContext';

function App() {
  return (
    <BrowserRouter>
       <UserContext.Provider value={{ userId: '123' }}>
        <Routes>
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </UserContext.Provider> 
    </BrowserRouter>
  );
}

export default App;

// User.js
import { useContext } from 'react';
import { UserContext } from './UserContext';

function User() {
  const { userId } = useContext(UserContext);
  return (
    <div>
      <h1>User ID: {userId}</h1>
    </div>
  );
}

export default User;
```