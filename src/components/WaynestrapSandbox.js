import React from "react";
import Helmet from "react-helmet";
import Navbar from "./common/Navbar";
import Btn from "./common/Elements/Btn";

const WaynestrapSandbox = props => {
	//   render() {
	return (
		<div className="ws-root">
			<Helmet>
				<title>Waynestrap Sandbox</title>
			</Helmet>
			<Navbar logo_filename="VRooms_V11_Hori_Gray" theme="white-bg" />
			{/* Button Sandbox ----------------------------------------- */}
			<article id="ws-btn-sandbox" className="ws-sandbox">
				<section>
					<h4>Colors</h4>
					<div className="section-content">
						<Btn text="primary" theme="primary" />
						<Btn text="secondary" theme="secondary" />
						<Btn text="success" theme="success" />
						<Btn text="danger" theme="danger" />
						<Btn text="info" theme="info" />
						<Btn text="warning" theme="warning" />
						<Btn text="disabled" theme="disabled" />
						<Btn text="black" theme="black" />
						<Btn text="dark" theme="dark" />
						<Btn text="light" theme="light" />
						<Btn text="white" theme="white" />
					</div>
				</section>
				<section>
					<h4>Outlined</h4>
					<div className="section-content">
						<Btn isOutlined text="primary" theme="primary" />
						<Btn isOutlined text="secondary" theme="secondary" />
						<Btn isOutlined text="success" theme="success" />
						<Btn isOutlined text="danger" theme="danger" />
						<Btn isOutlined text="info" theme="info" />
						<Btn isOutlined text="warning" theme="warning" />
						<Btn isOutlined text="disabled" theme="disabled" />
						<Btn isOutlined text="black" theme="black" />
						<Btn isOutlined text="dark" theme="dark" />
						<Btn isOutlined text="light" theme="light" />
						<Btn isOutlined text="white" theme="white" />
					</div>
				</section>
				<section>
					<h4>Icons</h4>
					<div className="section-content">
						<Btn text="Github" icon="github" />
						<Btn text="Left" icon="check-circle" />
						<Btn text="Right" icon="check-circle" iconLocation="right"/>
					</div>
				</section>
				<section>
					<h4>Custom Classes</h4>
					<div className="section-content">
						<Btn text="custom classes" classes={["dog", "cat"]} />
					</div>
				</section>
			</article>
		</div>
	);
};

export default WaynestrapSandbox;
