import './styles/input.css'
import { useImmer } from 'use-immer';
import {obj} from './Obj';
import side from "./assets/side.jpg";

export function Input() {
  console.log("Input component rendered");
  
  const AgeArray=Array.from({length:150},function(_,index){
    return index+1;
  })
  const {inputValues, handleChange}=obj();
  
    return (
        <>
        <div className="header">
          <p className='h1'>HEALTHIFY</p>
        </div>
        <div className="body">
          <div className="main">
          <div className="image">
            <img src={ side}/>

          </div>
         <div className="inputs">
          <div className='circle'>
         <div className="c1">

</div>
<div className="c1">
  
</div>
<div className="c1">
  
</div>
</div>
          <div className="f1">
            <p>USER DETAILS</p>
  
            <label>First Name</label>
            <input type="text"
          
             value={inputValues.fname}
             onChange={(e)=>(handleChange(e,"fname"))}
            
            />
            <label>Last Name</label>
            <input type="text" 
     
            value={inputValues.lname}
            onChange={(e)=>(handleChange(e,"lname"))}
            />
            <label>Email</label>
            <input type="email"
      
            value={inputValues.email}
            onChange={(e)=>(handleChange(e,"email"))}
            />
            <label>Select Age</label>
            
            <input
            id="age"
            type="number"
            onChange={(e)=>(handleChange(e,"age"))}
            placeholder="Enter Age"
            list="age-select" 
      />
      <datalist id="age-select">
      {AgeArray.map((age)=>(
              <option >{age}</option>
            )

            )

              
              
          }
        </datalist>

        <label for="file" class="file-label">
          Upload File
    </label>

        <input
        className='file'
         name="file"
          type="file" 
          id="file"
          
          />

          

  
           
          </div>
          <button>Submit</button>
          
  

          </div>

        </div>

      </div>
        </>
      );
}
