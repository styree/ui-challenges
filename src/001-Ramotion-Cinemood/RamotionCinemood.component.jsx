import React from 'react';
import '../styles/index.scss';
import { ShoppingCartIcon, AlarmIcon, EyeIcon, BatteryIcon, WifiIcon } from '../icons';

export default class RamotionCinemood extends React.Component {
	//https://dribbble.com/shots/3479873-Cinemood-Product-Card-Concept
	render () {
		return (
			<div className="cinemood">
				<div className="cinemood__inner-left">
					<div className="tempImage"></div>
					<div className="tempImage tempImage--main">
						<img src="https://cinemood.com/wp-content/themes/focux-child/assets/cwe-278/build/img/pictures/bottom-cinemood.png" height="100%" width="100%" alt=""/>
					</div>
					<div className="tempImage"></div>
				</div>
				<div className="cinemood__inner-right">
					<div style={{ height: '100%', width: 150 }}>
						<svg style={{ height: '100%', width: '100%' }} viewBox="0 0 150 400"
							 preserveAspectRatio="xMinYMin meet">
							<polygon
								points="150,0 0,250 150,500"
								style={{ fill: 'white' }}
								height="100%"
								x="0"
								y="0"/>
						</svg>
					</div>
					<div className="cinemood__inner-right__content">
						<div className="cinemood__content-header__action">
							<div className="cinemood__content-header__action__icon">
								<div><span>2</span></div>
								<ShoppingCartIcon/>
							</div>
						</div>
						<div className="cinemood__content-header">
							<h2 className="cinemood__content-header__title">CINEMOOD</h2>
							<h2 className="cinemood__content-header__price"><span>$</span>399</h2>
						</div>
						<h3 className="cinemood__subtitle">Storyteller</h3>
						<p className="cinemood__content-description">Lorem ipsum dolor sit amet, consectetur adipiscing
							elit,
							sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip.</p>
						<div className="cinemood__blurbs">
							<div className="cinemood__blurbs__item">
								<EyeIcon/>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
							<div className="cinemood__blurbs__item">
								<BatteryIcon/>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
							<div className="cinemood__blurbs__item">
								<WifiIcon/>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
							<div className="cinemood__blurbs__item">
								<AlarmIcon/>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
