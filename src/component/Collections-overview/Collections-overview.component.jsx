import React from 'react'
import CollectionPreview from '../Preview-collection/Collection-preview.component'
import './Collections-overview.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'


const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...otherSectionProps }) => (
                <CollectionPreview key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);