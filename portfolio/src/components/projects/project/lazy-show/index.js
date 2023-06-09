import './index.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const useOnScreen = (ref, rootMargin = '0px') =>	{

	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		let currentRef = null;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
			{
				rootMargin
			}
		);

		if (ref.current)	{
			currentRef = ref.current;
			observer.observe(currentRef);
		}

		return () => {
			observer.unobserve(currentRef)
		}
	}, [ref, rootMargin]);

	return isIntersecting;
}

const LazyShow = ({ children, left }) =>	{

	const controls = useAnimation();
	const rootRef = useRef();
	const onScreen = useOnScreen(rootRef);

	useEffect(() => {
		if (onScreen)	{
			const transition = {
				duration: 0.8,
				ease: 'easeIn',
				delay: 0.8,
			}
			if (!left)	{
				transition.from = '90%'
			}

			controls.start({
				x: 0,
				opacity: 1,
				transition:	transition
			});
		}
	}, [onScreen, controls, left]);

	return (
		<motion.div
			className='lazy-div'
			ref={rootRef}
			initial={{opacity: 0, x: -100}}
			animate={controls}
		>
			{children}
		</motion.div>
	);
}

export default LazyShow;