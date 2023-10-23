import React, { useRef } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";
import Benefits from "../../components/Benefits/Benefits";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import { CookiesProvider } from "react-cookie";

const Home = () => {
	const productRef = useRef(null);
	const benefitRef = useRef(null);

	return (
		<div>
			<Navigation />
			<Banner benefitRef={benefitRef} />
			<Benefits benefitRef={benefitRef} productRef={productRef} />
			<CookiesProvider>
				<Product productRef={productRef} />
			</CookiesProvider>
			<Footer />
		</div>
	);
};

export default Home;
