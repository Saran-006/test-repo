import Navbar from './elements/navbar'
import Top from './elements/top'
import { Content } from './elements/content';
function Home(){
    return(
      <div> 
      <Navbar />
      <Top />
      <Content />
      </div>
    );
}
export default Home;