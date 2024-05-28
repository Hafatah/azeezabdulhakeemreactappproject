import './App.css';
import Tobi from './ellb';
import Lol from './nikki02.jpg'
import jep from './nikki03.jpg'
import pej from './nikki06.png'
const productDetails={
  title:['Medicine','Food','W ater'],
  image:[Lol,jep,pej],
  price:[2000,1500,1000],
  description:['health is cool','eat good food','water is life']
}
function App(){
  return(
    <div>
      <div className='lepo container'>
        <div className='row gap-2 lepo' style={{textAlign:'center'}}>
        <div className='col-sm emp'>
          <Tobi
          name={productDetails.title[0]}
          description={productDetails.description[0]}
          price={productDetails.price[0]}
          image={productDetails.image[0]}
          />
        </div>
        <div className='col-sm mep'>
          <Tobi
          name={productDetails.title[1]}
          description={productDetails.description[1]}
          price={productDetails.price[1]}
          image={productDetails.image[1]}
          />
        </div>
        <div className='col-sm pem'>
          <Tobi
          name={productDetails.title[2]}
          description={productDetails.description[2]}
          price={productDetails.price[2]}
          image={productDetails.image[2]}
          />
        </div>
        </div>
      </div>
    </div>
  )
}
export default App;