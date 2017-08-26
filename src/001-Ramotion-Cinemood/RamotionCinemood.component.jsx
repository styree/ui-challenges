import React from 'react';
import '../styles/index.scss';
import { ShoppingCartIcon, AlarmIcon, EyeIcon, BatteryIcon, WifiIcon } from '../icons';

export default class RamotionCinemood extends React.Component {
	//https://dribbble.com/shots/3479873-Cinemood-Product-Card-Concept
	render () {
		return (
			<div className="cinemood">
				<div className="cinemood__inner-left">
					<div className="tempImage">
						<img
							src="https://cinemood.com/wp-content/themes/focux-child/assets/cwe-278/build/img/pictures/cinemood-pack1.png"
							height="100%" width="100%" alt=""/>
					</div>
					<div className="cinemood__image-path"></div>
					<div className="tempImage tempImage--main">
						<img
							src="https://cinemood.com/wp-content/themes/focux-child/assets/cwe-278/build/img/pictures/bottom-cinemood.png"
							height="100%" width="100%" alt=""/>
					</div>
					<div className="cinemood__slide-control">
						<div className="cinemood__slide-control__item">
							<span></span>
						</div>
						<div className="cinemood__slide-control__item cinemood__slide-control__item--active">
							<span></span>
						</div>
						<div className="cinemood__slide-control__item">
							<span></span>
						</div>
					</div>
					<div className="tempImage">
						<img
							src="https://cinemood.com/wp-content/themes/focux-child/assets/cwe-278/build/img/pictures/cinemood-pack1-hover.png"
							height="100%" width="100%" alt=""/>
					</div>
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
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusanti
									doloremque.</p>
							</div>
							<div className="cinemood__blurbs__item">
								<BatteryIcon/>
								<p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
									beatae.</p>
							</div>
							<div className="cinemood__blurbs__item">
								<WifiIcon/>
								<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed
									quia.</p>
							</div>
							<div className="cinemood__blurbs__item">
								<AlarmIcon/>
								<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
									laboriosam.</p>
							</div>
						</div>
						<div className="cinemood__blurbs__see-more">
							<hr/>
							<span>See more</span>
							<hr/>
						</div>
						<div className="cinemood__content-actions">
							<button className="primary">Add to cart</button>
							<button>Add to comparison</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
