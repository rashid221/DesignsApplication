import { connect } from 'react-redux';
import { addToCart } from '../services/actions/Actions';
import Home from '../components/Home';

const mapStateToProps=state=>{

}

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home) 

// export default Home;
