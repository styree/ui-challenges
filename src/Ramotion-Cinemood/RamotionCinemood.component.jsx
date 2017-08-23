import React from 'react';

// TODO: Webpack SCSS compile to storybook header
const styles = {
	wrapper: {
		borderRadius: 20,
		height: 400,
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		backgroundImage: 'url("https://images.unsplash.com/photo-1478001517127-fccc92f54906?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=")', // TODO: Storybook local assets config
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
		margin: 20,
		fontFamily: '"Roboto", sans-serif',
		maxWidth: 900
	},
	innerLeft: {
		width: 150
	},
	innerRight: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row'
	},
	innerRightContent: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		padding: 20,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20
	},
	contentHeaderAction: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	contentHeader: {
		flexDirection: 'row',
		width: '100%',
		display: 'flex'
	},
	contentHeaderTitle: {
		flex: 1,
		margin: 0,
		fontSize: 40,
		fontWeight: 900
	},
	contentHeaderSubtitle: {
		margin: 0
	},
	contentDescription: {
		margin: '40px 0',
		fontSize: 14
	},
	contentHeaderPrice: {
		color: 'blue',
		margin: 0,
		fontSize: 40,
		fontWeight: 900
	},
	tempIcon: {
		height: 30,
		width: 30,
		backgroundColor: 'blue',
		borderRadius: '50%'
	},
	pointsRow: {
		fleDirection: 'row',
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
		justifyContent: 'space-between'
	},
	point: {
		width: '40%',
		flexDirection: 'row',
		display: 'flex',
		fontSize: 14,
		marginBottom: 20
	},
	pointDescription: {
		flex: 1,
		marginTop: 0,
		marginLeft: 10
	}
};

export default class RamotionCinemood extends React.Component {
	//https://dribbble.com/shots/3479873-Cinemood-Product-Card-Concept
	render () {
		return (
			<div style={styles.wrapper} className="wrapper">
				<div style={styles.innerLeft}></div>
				<div style={styles.innerRight}>
					<div style={{ height: '100%', width: 150 }}>
						<svg style={{ height: '100%', width: '100%' }} viewBox="0 0 150 400"
							 preserveAspectRatio="xMinYMin meet">
							<polygon
								points="150,0 0,200 150,400"
								style={{ fill: 'white' }}
								height="100%"
								x="0"
								y="0"/>
						</svg>
					</div>
					<div style={styles.innerRightContent}>
						<div style={styles.contentHeaderAction}>
							{/*<AccessAlarmIcon/>*/}
							<div style={styles.tempIcon}></div>
						</div>
						<div style={styles.contentHeader}>
							<h2 style={styles.contentHeaderTitle}>CINEMOOD</h2>
							<h2 style={styles.contentHeaderPrice}><span>$</span>399</h2>
						</div>
						<h3 style={styles.contentHeaderSubtitle}>Storyteller</h3>
						<p style={styles.contentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.</p>
						<div style={styles.pointsRow}>
							<div style={styles.point}>
								<div style={styles.tempIcon}></div>
								<p style={styles.pointDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
							<div style={styles.point}>
								<div style={styles.tempIcon}></div>
								<p style={styles.pointDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
							<div style={styles.point}>
								<div style={styles.tempIcon}></div>
								<p style={styles.pointDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
							<div style={styles.point}>
								<div style={styles.tempIcon}></div>
								<p style={styles.pointDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
