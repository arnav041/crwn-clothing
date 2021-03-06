import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../With-spinner/With-spinner.component'
import CollectionPage from './Collection.component'

import { selectIsCollectionLoaded } from '../../../redux/shop/shop.selector'


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;