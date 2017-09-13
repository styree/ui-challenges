import React from 'react';
import { MenuIcon, MusicLibraryIcon, InfoIcon } from '../icons';

export default class KohutpiotrEventsApp extends React.Component {
	render () {
		return (
			<div className="KEA">
				<header>
					<MenuIcon/>
				</header>
				<div className="KEA__title-bar">
					<button>Back</button>
					<h2>HOOLIGANS</h2>
				</div>
				<div className="KEA__content">
					<nav>
						<MusicLibraryIcon/>
						<InfoIcon/>
						<MusicLibraryIcon/>
						<InfoIcon/>
					</nav>
					<section>
						<h3>heres content</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. </p>
					</section>
				</div>
			</div>
		);
	}
};
