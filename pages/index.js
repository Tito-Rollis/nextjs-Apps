import Head from "next/head";
import Image from "next/image";
import JumbotronComponent from "../components/JumbotronComponent";
import FooterComponent from "../components/FooterComponent";

export default function LandingPage() {
	return (
		<div>
			<JumbotronComponent />
			<FooterComponent />
		</div>
	);
}
