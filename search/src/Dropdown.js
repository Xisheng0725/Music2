import React from 'react';

const Dropdown = props => {    

    const dropdownChanged = e => {
        props.changed(e.target.value);

    }    

    return (
        <div 
            style={{ color: 'white', letterSpacing: '0.15em', fontSize: '20px', padding: '10px', lineHeight:'18px'}}>     
            <label 
            >
                {props.label}
            </label>       
            <select 
            value={props.selectedValue} 
            onChange={dropdownChanged} 
            style={{background: 'rgba(217, 217, 217, 0.1)', border:'2px solid #FFFFFF',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius:'30px', padding:'10px', color:'white'}}
            >

                <option key={0}>Select...</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}


            </select>            
        </div>
    );
}

export default Dropdown;