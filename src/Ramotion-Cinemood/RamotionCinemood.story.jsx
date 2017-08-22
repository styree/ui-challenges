import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RamotionCinemood from './RamotionCinemood.component';

storiesOf('Ramotion: Cinemood Product Card Concept', module)
	.add('with text', () => (
		<RamotionCinemood/>
	));
