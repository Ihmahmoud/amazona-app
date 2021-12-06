import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
export default function CartScreen(props) {
    const { id } = useParams();
    // const productId = props.match.params.id;
    const productId = id;
    const location = useLocation();
    // const qty = props.location.serach ? Number(props.location.split('=')[1]) : 1;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : ProductID: {productId} Qty: {qty}
            </p>
        </div>
    );
}

