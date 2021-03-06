import { connect } from 'react-redux';
import { addImages, toggleDialog, showNotification } from '../actions'
import Add from '../components/Add';

const mapStateToProps = (state, ownProps) => ({
    dialog_opened: state.dialog_opened,
    subscribe_dialog_opened: state.subscribe_dialog_opened
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addImages: (images) => {
            dispatch(addImages(images))
        },
        toggleDialog: () => {
            dispatch(toggleDialog())
        },
        showNotification: (message, isError) => {
            dispatch(showNotification(message, isError))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)