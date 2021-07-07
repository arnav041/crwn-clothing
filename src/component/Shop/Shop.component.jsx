import React from 'react'
import CollectionPreview from '../Preview-collection/Collection-preview.component';
import SHOP_DATA from './Shop.data'
import './Shop.style.scss'


class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page' > 
                 {
                     collections.map(({id, ...otherSectionProps}) => (
                         <CollectionPreview key={id} {...otherSectionProps} />
                     ))
                 }
            </div>
        )
    }
}

export default ShopPage