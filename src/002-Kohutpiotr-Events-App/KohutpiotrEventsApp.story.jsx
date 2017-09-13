import React from 'react';
import { storiesOf } from '@storybook/react';
import KohutpiotrEventsApp from './KohutpiotrEventsApp.component';

storiesOf('002 - Kohutpiotr: Events App', module)
	.add('default', () => (
		<KohutpiotrEventsApp/>
	));
