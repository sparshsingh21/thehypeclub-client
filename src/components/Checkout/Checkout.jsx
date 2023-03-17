import React, { useContext, useState } from 'react'
import { Context } from "../../utils/context";
import './Checkout.scss';
import Metadata from '../../helpers/Metadata'
import { MdClose } from "react-icons/md";

const Checkout = () => {
    const userData = JSON.parse(localStorage.getItem('User'));
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity, setShowCart, cartSubTotal } = useContext(Context);
    console.log(cartItems)
    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [add1, setAdd1] = useState(userData.address_line_1);
    const [add2, setAdd2] = useState(userData.address_line_2);
    const [add3, setAdd3] = useState(userData.address_line_3);
    const [addCity, setAddCity] = useState(userData.address_city);
    const [addState, setAddState] = useState(userData.address_state);
    const [pin, setPin] = useState(userData.pincode);

    return (
        <div className='checkout-page'>
            <Metadata title="Checkout" />
            <div className="left">
                <table className='checkout-table' align='left'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left' }}>Product</th>
                            <th style={{ textAlign: 'left' }}>Price</th>
                            <th style={{ textAlign: 'left' }}>Quantity</th>
                            <th style={{ textAlign: 'left' }}>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems?.map((item) => (
                            <tr className='checkout-product' id={item.id}>
                                <td className='checkout-prod-details'>
                                    <img className='checkout-img'
                                        src={
                                            process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                            item.attributes.img.data[0].attributes.url
                                        }
                                    />
                                    {item.attributes.title}
                                </td>
                                <td>{item.attributes.price}</td>
                                <td>{item.attributes.quantity}</td>
                                <td>{item.attributes.price * item.attributes.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
					<div class="w-full lg:w-5/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Checkout Details</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										First Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="Name"
                                        value={username}
                                        onChange={(e)=>{setUsername(e.target.value)}}
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Email
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="email"
										placeholder="Email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
									/>
								</div>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Address Line 1
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="address"
									type="address"
									placeholder="address line 1"
                                    value={add1}
                                    onChange={(e)=>{setAdd1(e.target.value)}}
								/>
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Address Line 2
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="address"
									type="address"
									placeholder="address line 2"
                                    value={add2}
                                    onChange={(e)=>{setAdd2(e.target.value)}}
								/>
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Address Line 3
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="address"
									type="address"
									placeholder="address line 3"
                                    value={add3}
                                    onChange={(e)=>{setAdd3(e.target.value)}}
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
										City
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="city"
										type="text"
										placeholder="City"
                                        value={addCity}
                                        onChange={(e)=>{setAddCity(e.target.value)}}
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										State
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="state"
										type="text"
										placeholder="State"
                                        value={addState}
                                        onChange={(e)=>{setAddState(e.target.value)}}
									/>
								</div>
                                <div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										Pincode
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="pincode"
										type="text"
										placeholder="Pincode"
                                        value={pin}
                                        onChange={(e)=>{setPin(e.target.value)}}
									/>
								</div>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-5/12 px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Proceed to Pay
								</button>
							</div>
							
						</form>
					</div>
            {/* <div className="details">
                <h2>Checkout Details</h2>
                <form className='checkout-form'>
                    <div className="field-cont">
                        <label htmlFor="name" className='field'> Name:
                            <input type="text" placeholder='Enter name' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        </label>
                        <label htmlFor="email" className='field'> Email:
                            <input type="email" placeholder='Enter email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </label>
                    </div>
                    <label htmlFor="address_1" className='long-field'> Address Line 1:
                        <input type="text" placeholder='Enter address line 1' value={add1} onChange={(e) => { setAdd1(e.target.value) }} />
                    </label>
                    <label htmlFor="address_2" className='long-field'> Address Line 2:
                        <input type="text" placeholder='Enter address line 2' value={add2} onChange={(e) => { setAdd2(e.target.value) }} />
                    </label>
                    <label htmlFor="address_3" className='long-field'> Address Line 3:
                        <input type="text" placeholder='Enter address line 3' value={add3} onChange={(e) => { setAdd3(e.target.value) }} />
                    </label>
                    <div className="field-cont">
                        <label htmlFor="city" className='field'> City:
                            <input type="text" placeholder='Enter city' value={addCity} onChange={(e) => { setAddCity(e.target.value) }} />
                        </label>
                        <label htmlFor="state" className='field'> State:
                            <input type="text" placeholder='Enter state' value={addState} onChange={(e) => { setAddState(e.target.value) }} />
                        </label>
                        <label htmlFor="pincode" className='field'> Pincode:
                            <input type="text" placeholder='Enter pincode' value={pin} onChange={(e) => { setPin(e.target.value) }} />
                        </label>
                    </div>
                </form>
            </div> */}
        </div>
    )
}

export default Checkout