import './index.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const LazyShow = ({ children }) =>	{
	const controls = useAnimation();
	const rootRef = useRef();
	const onScreen = useOnScreen(rootRef);

	useEffect(() => {
		if (onScreen)	{
			constols.start({
				x: 0,
				opacity: 1,
				transition:	{
					duration: 0.5,
					ease: 'easeOut'
				}
			});
		}
	}, [onScreen, controls]);

	return (
		<motion.div
			className='lazy-div'
			ref={rootRef}
			initial={{opacity: 0, x: -10}}
			animate={controls}
		>
			{children}
		</motion.div>
	);
}

export default LazyShow;