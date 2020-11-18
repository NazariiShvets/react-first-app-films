import {connect} from 'react-redux'
import Footer from './Footer'


const mapStateToProps = (state) => {
    return {
        socialLinks: state.footer.socialLinks
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
