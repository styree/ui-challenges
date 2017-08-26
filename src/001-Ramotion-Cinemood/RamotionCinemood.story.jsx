import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RamotionCinemood from './RamotionCinemood.component';

storiesOf('001 - Ramotion: Cinemood Product Card Concept', module)
	.add('with text', () => (
		<RamotionCinemood/>
	));
