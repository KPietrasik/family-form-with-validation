import React from 'react';
import MemberList from './MemberList.js';
import AddMember from './AddMember.js';
import './App.css';



class App extends React.Component {

  counter = 1
  state=
    {
        family : 
            [
                {
                    id:0,
                    name:"Kamila",
                    lastName:"Pietrasik",
                    age: 37,
                    sex:"women",
                    value:"Matka"
                },
            ],
       
          }


  

handleDelete = id => {
  const family = [...this.state.family];
  const index = family.findIndex(member => member.id ===id);
  family.splice(index,1)
  this.setState({family});
}

addMember = (name, lastName, age, sex, value) => {
  const member = {
    id: this.counter,
    name,
    lastName,
    age,
    sex,
    value,
  }
  this.counter++
  console.log("addMember w Appjs")
  this.setState( prevState => ({
    family: [...prevState.family, member]
}))
return true
}

  render() { 

    return (
    <div className="App">
    <h1>Dodaj członków rodziny</h1>
    <AddMember add={this.addMember}/>
    <MemberList family={this.state.family} delete={this.handleDelete}/>
    </div>
    )
  }
}
 
export default App;