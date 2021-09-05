import React from 'react'
import './Shop.style.scss'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionsStart } from '../../../redux/shop/shop.actions'

import CollectionsOverviewContainer from '../../Collections-overview/Collections-overview.container';

import { connect } from 'react-redux';
import CollectionPageContainer from '../Collection/Collection.container'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../../redux/shop/shop.selector'


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page' >

                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />

                <Route
                    path={`${match.path}/:categoryId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);