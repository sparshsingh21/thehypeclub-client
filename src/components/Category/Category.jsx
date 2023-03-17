import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Metadata from "../../helpers/Metadata";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";
import '../Products/Product/Product.scss'
import '../Products/Products.scss'
import "./Category.scss";
const Category = () => {
    const { products, setProducts, user } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const { data } = useFetch(
        `/api/products?populate=*&filters[categories][id]=${id}`,
        user
    );
    return (
        <div className="category-main-content">
            {id ==='1' ? <Metadata title={'T-Shirts'}/>: id ==='2' ? <Metadata title={'Hoodies'}/>: <Metadata title={'Sweatshirts'}/>}
            <div className="layout">
                <div className="sec-heading">

                    {data?.data?.[0]?.attributes?.categories?.data?.[0]
                        ?.attributes?.title}

                </div>
                <div className="products-container">
                    <div className="products">
                {/* <Products innerPage={true}/> */}
                {data?.data?.map((product) => (
                    <div
                    key={product.id}
                        className="product-card"
                        onClick={() => navigate("/product/" + product.id)}
                    >
                        <div className="thumbnail">
                            <img
                                src={
                                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                    product?.attributes.img.data?.[0].attributes.url
                                }
                            />
                        </div>
                        <div className="prod-details">
                            <span className="name">{product?.attributes.title}</span>
                            <span className="price">&#8377;{product?.attributes.price}</span>
                        </div>
                        {!!product?.attributes.sale && <span className="indicator">On Sale</span>}
                    </div>
                    
                ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
