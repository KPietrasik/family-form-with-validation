import React from 'react';
import './AddMember.css';

class AddMember extends React.Component {

    state=
    {
    
                    name:"",
                    lastName:"",
                    age: 0,
                    sex:"",
                    value:"wybierz",
    errors:{
        name:false,
        lastName:false,
        age: false,
        sex:false,
        value:false,
        }
              
            
    }
    messages = { 
        name_incorrect: "Nazwa musi być dłuższa niż 2 znaki", 
        lastName_incorrect: "Nazwa musi być dłuższa niż 2 znaki",
        age_incorrect: "Wiek musi być większy od zera.",
        sex_incorrect: "zadeklaruj swoją płeć",
        value_incorect: "wybierz pozycję z listy",
      }

handleLastNameChange = e => {
this.setState({ lastName: e.target.value });
}
handleNameChange = e => {
this.setState({ name: e.target.value });
}
handleAgeChange = e => {
this.setState({ age: e.target.value });
}
handleSexChange = e => {
    if(e.target.checked) {
        this.setState({ sex: e.target.id });
    }
}
handleChange = e => {
    this.setState({ value: e.target.value });
}
handleClick = e => {

    const validation = this.formvalidation()

if(validation.correct) {
    
    this.props.add(this.state.name, this.state.lastName, this.state.age, this.state.sex, this.state.value) 

     this.setState({
        name:"",
        lastName:"",
        age: 0,
        sex:"",
        value:"wybierz",

        errors:{
            name:false,
            lastName:false,
            age: false,
            sex:false,
            value:false,
            }

     })

    } else {
        this.setState({
            errors:{
                name: !validation.name,
                lastName: !validation.lastName,
                age: !validation.age,
                sex: !validation.sex,
                value: !validation.value,
                }
        });
    }
}

formvalidation = () => {
// true = ok, false - zle

let name = false;
let lastName = false;
let age = false;
let sex = false;
let value = false;
let correct = false;

    if(this.state.name.length > 2) {
        name = true;
    }
    if(this.state.lastName.length > 2) {
        lastName = true;
    }
    if(this.state.age > 0 && this.state.age <= 100) {
        age = true;
    }
    if(this.state.sex === "men" || this.state.sex === "women") {
        sex = true;
    }
    if (this.state.value !== "wybierz") {
        value = true;
    }

    if(name && lastName && age && sex && value) {
        correct = true
    }

    return ({
        name, 
        lastName, 
        age,
        sex,
        value,
        correct,
    })

}

    render() { 
        return (
        <div className="form">
            <fieldset>
                <legend> Wpisz dane członków rodziny</legend>
                <div><input type="text" placeholder="podaj imię" value={this.state.name} onChange={this.handleNameChange}/>
                {this.state.errors.name && <span>{this.messages.name_incorrect}</span>}
                </div>
                
                <br></br>
                <div><input type="text" placeholder="podaj nazwisko" value={this.state.lastName} onChange={this.handleLastNameChange}/>
                {this.state.errors.lastName && <span>{this.messages.lastName_incorrect}</span>}
                </div>
                <br></br>
                
                <div><label>Wiek członka rodziny: <input id="age" type="number" value={this.state.age} min="0" max="100" onChange={this.handleAgeChange}/></label>
                {this.state.errors.age && <span>{this.messages.age_incorrect}</span>}
                </div>
                
                <p>Wybierz płeć:</p>
                <div><label><input type="radio" name="sex" id="men" value={this.state.sex} onChange={this.handleSexChange} />Mężczyzna</label></div><br></br>
                <div><label><input type="radio" name="sex" id="women"  value={this.state.sex} onChange={this.handleSexChange}/>Kobieta</label>
                {this.state.errors.sex && <span>{this.messages.sex_incorrect}</span>}
                </div>
                <br></br>
                
                <label>Określ pokrewieństwo:  
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="wybierz">wybierz</option>
                        <option value="Ojciec">Ojciec</option>
                        <option value="Matka">Matka</option>
                        <option value="Syn">Syn</option>
                        <option value="Córka">Córka</option>
                        <option value="Babcia">Babcia</option>
                        <option value="Dziadek">Dziadek</option>
                    </select>
                    {this.state.errors.value && <span>{this.messages.value_incorect}</span>}    
                </label>
                <br></br>
                <button onClick={this.handleClick}>Dodaj</button>

            </fieldset>
        </div>
        )
    }
}
 
export default AddMember;