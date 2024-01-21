import button1EN from '../../assets/images/button1.svg';
import button2EN from '../../assets/images/button2.svg';
import button3EN from '../../assets/images/button3.svg';
import button1UA from '../../assets/images/button1UA.svg';
import button2UA from '../../assets/images/button2UA.svg';
import button3UA from '../../assets/images/button3UA.svg';

import AnimatedButton from '../animated-button/AnimatedButton';

import './TopSection.css';
import { TopSectionStyles } from './TopSection.styles';

const topSectionLangs = {
	en: {
		button1: button1EN,
		button2: button2EN,
		button3: button3EN,
	},
	ua: {
		button1: button1UA,
		button2: button2UA,
		button3: button3UA,
	},
};

export const TopSection = (props: any) => {
	const topSectionLangGenerated =
		props.language === 'en' ? topSectionLangs.en : topSectionLangs.ua;

	return (
		<div className='top-section' style={TopSectionStyles.topSection}>
			<div style={TopSectionStyles.buttonsWrapper}>
				<AnimatedButton
					url={'/aboutme'}
					buttonType={'aboutme'}
					text={'About me'}
					width={296}
					height={113}
					top={39}
					left={48}
				/>
				<AnimatedButton
					url={'/courses'}
					buttonType={'courses'}
					text={'Courses'}
					width={265}
					height={108}
					top={39}
					left={48}
				/>
				<AnimatedButton
					url={'/'}
					buttonType={'signin'}
					text={'Sign in'}
					width={213}
					height={103}
					top={39}
					left={50}
				/>
			</div>
		</div>
	);
};
