import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/actions.js";
import classes from "./Product.module.css";

export default function ProductsPage() {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state);

    useEffect(() => {

    }, [dispatch]);

    return (
        <div>
            {products.map(item => (
                <div className={classes.block} key={item.id}>
                    <p className={classes.name}>{item.name}</p>
                    <span className={classes.price}>{item.price}</span>
                    <button className={classes.btn} onClick={() => { dispatch(addProduct(item.id)) }}>Купить</button>
                </div>
            ))}
        </div>
    );
}