import React from 'react'
import CollectionItem from '../Collection-item/Collection-item.component'
import './Collection-preview.style.scss'
import { withRouter } from 'react-router-dom'

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className="collection-preview">
        <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
)

export default withRouter(CollectionPreview)

