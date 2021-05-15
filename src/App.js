import React from "react";
import { Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component { 
  constructor(props)
  {super(props);this.state={ Person:
    { fullName:"Louis Pasteur" , 
    bio:"Louis Pasteur, né à Dole (Jura) le 27 décembre 1822 et mort à Marnes-la-Coquette (Hauts-de-Seine, à cette époque en Seine-et-Oise) le 28 septembre 1895, est un scientifique français, chimiste et physicien de formation. Pionnier de la microbiologie, il connut, de son vivant même, une grande notoriété pour avoir mis au point un vaccin contre la rage." ,
     imgSrc:"Luis.jpg", 
     profession:"Biologiste" 
    },
     toggle:false, 
     count:0
    } 
    }
     handleClick=()=>{ 
       this.setState({toggle:!this.state.toggle})
      }
     componentDidMount(){
       setInterval(()=>{ 
       this.setState({count:this.state.count+1}) },1000); 
      }
      render()
      { return (this.state.toggle? <div className='Menu'> <div style={{textAlign:'center',marginTop:'4%'}}> 
      <Button variant="secondary" onClick={this.handleClick}>Hide profile</Button> 
      <p style={{ color:'black',fontWeight: 'bold',fontSize:'larger'}}>{this.state.count}</p> </div>
       <div style={{margin:'3% 10% 4% 10%',lineHeight:'1.5',padding:'2%',background:'beige',boxShadow: '3px 3px 5px #00000063',borderRadius:'20px'}}> 
       <p style={{color:'black',fontSize:'larger'}}> <span style={{ color:'black',fontWeight: 'bold',fontSize:'larger'}}>Full name:</span> {this.state.Person.fullName}</p> 
       <p style={{color:'black',fontSize:'larger'}}><span style={{ color:'black',fontWeight: 'bold',fontSize:'larger'}}>Profession:</span> {this.state.Person.profession}</p>
        <p style={{color:'black',fontSize:'larger'}}><span style={{ color:'black',fontWeight: 'bold',fontSize:'larger'}}>Bio:</span> {this.state.Person.bio}</p> 
        <img src={this.state.Person.imgSrc} alt="myImage" style={{border: '1px solid wheat', boxShadow: '-3px 3px 5px rgb(120, 98, 150), -7px 7px 5px rgb(223, 207, 243)', marginLeft:'40%',marginTop:'3%' ,marginBottom:'3%', width:'25%',height:'40%'}} /> </div></div>:<div> 
          <div style={{textAlign:'center',marginTop:'4%'}}>
             <Button variant="secondary" onClick={this.handleClick}>Show profile</Button> </div> </div> ); 
             };
             } 
     export default App;