import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice';
import DetailComp from '../components/detail/DetailComp';

const Detail = () => {

const {id} = useParams();
const dispatch = useDispatch();
const {productDetail,productDetailStatus} = useSelector(state => state.products)


useEffect(() => {
    dispatch(getDetailProduct(id))
},[dispatch,id])


console.log(productDetail,"productDetail");

    return (
        <div>
            <DetailComp />
        </div>
    )
}

export default Detail