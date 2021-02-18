import brand from '../assest/images/brand.svg'
import { Brand } from "../components/Styled";

function Logo(){
   return( 
    <div>
        <Brand href="/"> 
            <img src={brand} alt="brand"/>      
           <span>COVID-19</span> 
        </Brand>
    </div>
    );
}

export default Logo;