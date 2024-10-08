import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types"; // Import PropTypes
import { remove_cart_product } from "../../../redux/features/cart-slice";
import Image from "next/image";
import useCartInfo from "@hooks/use-cart-info";

const SidebarCart = ({ openCart, setOpenCart }) => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  return (
    <>
      <div className="fix">
        <div
          className={`sidebar-action sidebar-cart ${
            openCart ? "cart-open" : ""
          }`}
        >
          <div className="d-flex align-items-center justify-content-between mb-30">
            <h4 className="sidebar-action-title mb-0">Shopping Cart</h4>
            <div className="sidebar__close2">
              <button
                onClick={() => setOpenCart(false)}
                className="sidebar__close-btn"
                id="sidebar__close-btn"
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
          </div>

          {cartProducts?.length === 0 && (
            <div className="container">
              <div className="empty-text pt-30 text-center">
                <h4>Your cart is empty</h4>
              </div>
            </div>
          )}

          {cartProducts.length >= 1 && (
            <>
              <div className="sidebar-action-list">
                {cartProducts.map((item, index) => (
                  <div
                    className="sidebar-list-item dp-sidebar-cart"
                    key={index}
                  >
                    <div className="product-image pos-rel">
                      <Link href={`/shop-details/${item.id}`}>
                        <Image
                          src={item.image}
                          width={500}
                          height={500}
                          style={{ width: "auto", height: "auto" }}
                          alt="product"
                        />
                      </Link>
                    </div>
                    <div className="product-desc">
                      <div className="product-name">
                        <Link href={`/shop-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </div>
                      <div className="product-pricing">
                        <span className="item-number">{item?.quantity}</span>
                        <span className="price-now">${item.price}</span>
                      </div>
                      <button
                        className="remove-item"
                        onClick={() => dispatch(remove_cart_product(item))}
                      >
                        <i className="fal fa-times"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="product-price-total">
                <span>Subtotal :</span>
                <span className="subtotal-price">${parseFloat(total)}</span>
              </div>
              <div className="sidebar-action-btn">
                <Link href="/cart" className="fill-btn justify-content-center">
                  View cart
                </Link>
                <Link
                  href="/checkout"
                  className="border-btn justify-content-center"
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        onClick={() => setOpenCart(false)}
        className={`body-overlay ${openCart ? "opened" : ""}`}
      ></div>
    </>
  );
};

// Add PropTypes validation for `openCart` and `setOpenCart`
SidebarCart.propTypes = {
  openCart: PropTypes.bool.isRequired,
  setOpenCart: PropTypes.func.isRequired,
};

export default SidebarCart;
