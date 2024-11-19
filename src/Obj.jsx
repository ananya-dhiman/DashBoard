import { useImmer } from 'use-immer';

export function obj(){
    /*Here we will create an object which will contain all the input value"*/
    const [inputValues, setInputValues] = useImmer({
  
        fname: 'John',      
        lname: 'Doe',     
        email: 'john.doe@example.com',  
        age: 53, 
        
      
  
  
    }
   
   
    );
    //Function to change the i nput as the user changes value
    function handleChange(e,n){
      setInputValues(draft=>{
        if (n=="age" && /^\d+$/.test(e.target.value)) {
          draft[n]=e.target.value;
     
        }
        else if (n!="age"){
          draft[n]=e.target.value;

        }
       
        console.log("Re-render")
  
      })
      
    }
    return {inputValues,setInputValues,handleChange};
  }