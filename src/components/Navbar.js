import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
	const amount = useSelector((state) => state.amount);
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						State Bank of Delhi
					</a>

					<button className="btn btn-primary">Show my balance:{amount}</button>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
