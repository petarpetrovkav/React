import './App.css';

export default function App() {
  const loggedIn = true;
  const productsPrice = [{name: 'scarf', price: 30}, {name: 'dress', price: 40}, {name: 'skirt', price: 35}];
  const user = {name: 'jon', surname: 'doe'};

  // Return FirstName and LastName function
  function formatUser (user) {
    return `${upperFirstWord(user.name)} ${upperFirstWord(user.surname)}`;
  }

  //Separate input string
  function upperFirstWord (str) {
    const [first, ...others] = str.split('');             // Split returns array and separates all characters  (input: test => first: t, others: est)
    return [first.toUpperCase(), ...others].join('');     // Return string with all array elements joined
  }

  return (
      <div className="App">
        {/* notice is not class */}
        <header className="App-header">
          <h1>Welcome to Class 1</h1>
          <p>{loggedIn ? 'Hello ' + formatUser(user) : 'Please log in'}</p>

          {loggedIn && <div>
            <h1>Here are your products list 2</h1>
            {
              productsPrice.map((product,index) =>
                  <p key={index}>Product name: {product.name} | Product price: {product.price}</p>
              )}
          </div> }

        </header>
      </div>
  );
}


