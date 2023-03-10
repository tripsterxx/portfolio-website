import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import hexalogo from "./pp_items/hexalogo.svg";
import githublogo from "./pp_items/lefticons/githublogo.svg"
import linkedinlogo from "./pp_items/lefticons/linkedinlogo.svg"
import twitterlogo from "./pp_items/lefticons/twitterlogo.svg"
import instagramlogo from "./pp_items/lefticons/instagramlogo.svg"
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useLayoutEffect(() => {
		gsap.from("#hexalogo", {
			opacity: 0,
			scrollTrigger: {
				trigger: ".allpagecontainer",
				start: "top 40%",
				end: "top top",
				scrub: 0.7,
			},
		});

		gsap.from([".lefticons", "#lefticonbar"], {
			opacity: 0,
			scrollTrigger: {
				trigger: ".allpagecontainer",
				start: "top 10%",
				end: "top top",
				scrub: 0.5,
			},
		});
	}, []);

	const githublink = "https://github.com/tripsterxx";
	const linkedinlink = "https://www.linkedin.com/in/aakash-rawat-a1a528236/";
	const twitterlink = "https://twitter.com/rawatAsh2004";
	const instagramlink = "https://www.instagram.com/rawatash04/";

	return (
		<div className="overlay_left">
			<img src={hexalogo} alt="hexalogo" id="hexalogo"></img>

			<div className="lefticons">
				<a href={githublink} target="_blank" rel="noreferrer">
					<img src={githublogo} alt="lefticons"></img>
				</a>
				<a href={linkedinlink} target="_blank" rel="noreferrer">
					<img
						src={linkedinlogo}
						alt="lefticons"
					></img>
				</a>
				<a href={twitterlink} target="_blank" rel="noreferrer">
					<img src={twitterlogo} alt="lefticons"></img>
				</a>
				<a href={instagramlink} target="_blank" rel="noreferrer">
					<img
						src={instagramlogo}
						alt="lefticons"
					></img>
				</a>
			</div>

			<div id="lefticonbar"></div>
		</div>
	);
};

export default Home;
