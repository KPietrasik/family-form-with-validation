import React from 'react';

const OneMember = props => {

   let sex = props.sex;
   if(props.sex === "men") {
   sex = <em>męską</em>;
} else if (props.sex === "women") {
    sex = <em>żeńską</em>;
};
   


    return ( 
       
        <div>
            <p>Witaj <strong>{props.name} {props.lastName}</strong>. Twój wiek w latach to: {props.age}. 
            Deklarujesz następującą płeć: {sex}, a twoja relacja względem innych członków rodziny to {props.value}. 
            
            <button onClick={() => props.delete(props.id)}>X</button></p>
        </div>
     );
}
 
export default OneMember;