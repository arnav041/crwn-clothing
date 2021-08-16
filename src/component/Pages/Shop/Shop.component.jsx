import React from 'react'
import './Shop.style.scss'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../Collections-overview/Collections-overview.component'
import CollectionPage from '../Collection/Collection.component'


const ShopPage = ({ match }) => {
    return (
        <div className='shop-page' >
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;