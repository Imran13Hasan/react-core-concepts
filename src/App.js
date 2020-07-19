import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // var person = {
  //   name: "Imran Hasan", 
  //   profession: "Student"
  // }

  // var person2 = {
  //   name: "Mahmudul Hasan", 
  //   profession: "Web Developer"
  // }

  // var style = {
  //   backgroundColor: 'yellow',
  //   color: 'black',
  // }

  const nayoks = ['Jasim', 'Manna', 'Burel Panda', 'Eleyas', 'Salman Shah', 'Omor Sany', 'Bappi', 'Shuvo', 'Skip Khan']

  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'illustrator', price: '$159.99' },
    { name: 'AfterEffects', price: '$209.99' },
    { name: 'LightRoom', price: '$109.99' }
  ]




  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am a react dude!
        </p>
          
          <Counter></Counter>
          <Users></Users>
          
        <ul>
          {
          nayoks.map(banglaNayok => <li>{banglaNayok}</li>) //Here it works as response that means if one of the string may be delete or add one it will automatically changed itself//
          }      
        </ul>

        <div>

          {products.map(prod => <Product product={prod}></Product>)}

          {/* <Product name={products[0].name} price={products[0].price}></Product>
          <Product name={products[1].name} price={products[1].price}></Product>
          <Product name={products[2].name} price={products[2].price}></Product>
          <Product name={products[3].name} price={products[3].price}></Product> */}
        </div>

        <p>
          <Person name="Imran" profession="Web Developer"></Person>
          <Person name={nayoks[0]} profession="Artist"></Person>
          <Person name={nayoks[1]} profession="Actor"></Person>
          <Person name={nayoks[2]} profession="Hero"></Person>
          <Person name={nayoks[5]} profession="Idol"></Person>
        </p>

        {/* <h1 style={{color: 'red'}}> First Heading: {person.name + " " + person.profession} </h1>
        <h2 style= {style}> Second Heading: {person2.name + " " + person2.profession} </h2> */}
      </header>
    </div>
  );
}

//Counter//

function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () =>{
  //   const newCount = count+1;
  //   setCount(newCount) //setCount(count + 1);//
  // }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}  style={{padding: '20px', margin: '5px', background: 'red', border: 'none'}}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}  style={{padding: '20px', margin: '5px', background: 'red', border: 'none'}}>Increase</button>
    </div>
  )
}

//Counter//

//Load Data from server JSON//
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3 style={{color: 'yellow'}}>JSON Dynamic Users Info: {users.length} </h3>
      
      {/* {
        console.log(users)
      } */}

      <ol>
        {
          users.map(user => <li style={{color: 'cyan', textAlign: 'left', fontFamily: 'monospace'}}> Name: {user.name} , Email: {user.email} , Phone: {user.phone}</li>)
        }
      </ol>
    </div>
  )
}
//Load Data from server JSON//




function Product(props) {

  const productStyle = {
    color: 'black',
    background: 'white',
    height: '400px',
    width: '380px',
    fontFamily: 'poppins',
    border: '1px solid gray',
    borderRadius: '5px',
    float: 'left',
    margin: '15px'
  }

  const {name, price} = props.product;  //if that line doesn't exist than the lines of below will be works//
  return (
    <div style={productStyle}>
      <h3> {name} </h3>   
        {/* <h3> {props.name} </h3> */}
      <h2>Price: {price} </h2>
        {/* <h2>Price: {props.price} </h2> */}
      <button>Buy Now</button>
    </div>
  )
}



function Person(props) {   //The parameter should be props must//
  // console.log(props)
  return (
    <div style={{ border: '5px solid transparent', boxShadow: '5px 5px 10px grey', margin: '15px', fontFamily: 'sans-serif', width: '500px' }}>
      <h3 style={{ color: 'red' }}>My Name: {props.name} </h3>
      <h4>My Profession: {props.profession} </h4>
      <p style={{ background: 'yellow', color: 'black' }}>N.B: Basically I am a student</p>

    </div>
  )
}

export default App;
