import React from 'react';

const Lstbx = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div className="col-sm-6 px-0" >
            <div className="list-group">
                {
                    props.items.map((item, idx) => 
                    <button key={idx}
                        style={{background:'rgba(217, 217, 217, 0.1)', border:'2px solid #FFFFFF',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '30px', margin: '20px'}}
                        onClick={clicked}
                        className='btn-success'
                        id={item.track.id}>
                            <p 
                            style={{color: 'white', fontSize:'12px', marginLeft:'15px', marginRight: '15px', letterSpacing: '0.15em'}}>
                                {item.track.name}
                            </p>
                    </button>)
                }
            </div>
        </div>
        

    );
}

export default Lstbx;