import React, {Component} from 'react';
import { Appear,  CodePane, Code, Deck,  Heading, Image,  Slide, Text, Link } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme(
	{
		primary: "#fafafa",
		secondary: "hsl(220, 13%, 18%)",
		color: "#242424"
	},
	{
		primary: {
			name: "Roboto",
			googleFont: true,
			styles: ["100", "300", "400", "500", "700", "900"]
		},
		secondary: {
			name: "Source Code Pro",
			googleFont: true,
			styles: ["200", "300", "400", "500", "600", "700", "900"]
		}
	}
);

class AframePresentationSpectacle extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	slideLabel(labelText) {
		const labelSettings = {
			textColor: "#666666",
			textSize: "4rem",
			className: "slide-label",
			lineHeight: 1.1
		};

		return <Heading {...labelSettings}> {labelText} </Heading>;
	}
	render(){

		const slideSettings = {
			textColor: "red",
			align: "flex-start flex-start",
			textColor: "#242424",
			maxHeight: "100vh",
			maxWidth: "100vw"
		};
		const headlineSettings = {
			textColor: "#242424",
			textSize: "6rem",
			className: "slide-headline",
			lineHeight: 1.1,
		}


		return (
			<div>
				spectacleeeeeeee
				<Deck
				theme={theme}
				progress="none"
				controls={false}
				contentHeight={2160}
				contentWidth={3840}
			>

				<Slide>
					{/* {this.slideLabel("Aframe Basics")} */}
					<Text {...headlineSettings}> Aframe Basics </Text>
				</Slide>

				<Slide>
					{this.slideLabel("User Experience")}

					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-user.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Camera")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-camera.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Raycaster")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-raycaster.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Sky")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-sky.png"
						/>
					</figure>
				</Slide>

				<Slide maxHeight={100} maxWidth={100}>
					{this.slideLabel("Annotations Portals Entities")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-entities.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Relative Positioning in Aframe")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-positioning.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Synthetic Events in 3D")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-user.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Translating 3D to 2D")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-user.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Projecting to Canvas Element")}
					<figure className="slide-fig">
						<Image
							className="slide-pic"
							src="graphics/aframe-deck-user.png"
						/>
					</figure>
				</Slide>

				<Slide>
					{this.slideLabel("Now See It In Action")}
					<Link href="/demo">Demo</Link>
				</Slide>
			</Deck>
			</div>
		)
	}
}
export default AframePresentationSpectacle;