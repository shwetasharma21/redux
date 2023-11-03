import React from "react";
import { useDispatch } from "react-redux";
import { actionCreaters } from "../state";
import { bindActionCreators } from "redux";

function Shop() {
	const dispatch = useDispatch();
	const { depositMoney, withdrawMoney } = bindActionCreators(
		actionCreaters,
		dispatch
	);
	return (
		<div>
			<h1>Deposit/Withdraw money</h1>
			{/* <button
				className="btn btn-primary mx-2"
				onClick={() => dispatch(actionCreaters.depositMoney(100))}
			>
				+
			</button>
			Update Balance
			<button
				className="btn btn-primary mx-2"
				onClick={() => dispatch(actionCreaters.withdrawMoney(100))}
			>
				-
			</button> */}
			<button
				className="btn btn-primary mx-2"
				onClick={() => depositMoney(100)}
			>
				+
			</button>
			Update Balance
			<button
				className="btn btn-primary mx-2"
				onClick={() => withdrawMoney(100)}
			>
				-
			</button>
		</div>
	);
}

export default Shop;
