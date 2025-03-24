import { useHistory } from 'react-router-dom';

export const useUser=()=>{
    const history = useHistory();


    const navigateTo=(to:string)=>{
        history.push(to);
    }


    return{
        navigateTo,
    }
        
    
}