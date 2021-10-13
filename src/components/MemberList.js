import React from 'react';
import OneMember from './OneMember'

const MemberList = (props) => {
    const members = props.family.map(member => 
    <OneMember
    key={member.id} 
    name={member.name}
    lastName={member.lastName}
    age={member.age}
    sex={member.sex}
    value={member.value}
    delete={props.delete} 
    />
    )
    return ( 
        <>
        <fieldset>
                <legend> Twoja rodzina</legend>
                {members.length>0 ? members : <p>Nie dodano żadnych członków rodziny</p>}
        </fieldset>
        </>
     );
}
 
export default MemberList;