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
	console.log('LEFT IS ' + left);
	const controls = useAnimation();
	const rootRef = useRef();
	const onScreen = useOnScreen(rootRef);

	useEffect(() => {
		if (onScreen)	{
			if (left)	{
				controls.start({
					x: 0,
					opacity: 1,
					transition:	{
						duration: 0.8,
						ease: 'easeIn',
						delay: 1,
					}
				});
			} else	{
				console.log('WINDOW WIDTH: ' + window.innerWidth);
				// controls.start({
				// 	x: 0,
				// 	opacity: 1,
				// 	transition:	{
				// 		duration: 0.8,
				// 		ease: 'easeIn',
				// 		delay: 1,
				// 		// staggerDirection: -1,
				// 		from: window.innerWidth / 2,
				// 		// from: 100
				// 	}
				// })
				controls.start({
					x: 0,
					opacity: 1,
					transition:	{
						duration: 0.8,
						ease: 'easeIn',
						delay: 1,
						// staggerDirection: -1,
						// from: window.innerWidth / 2,
						// from: 100
					}
				})
			}
		}
	}, [onScreen, controls, left]);

	const x = left ? -100 : -100; 

	return (
		<motion.div
			className='lazy-div'
			ref={rootRef}
			initial={{opacity: 0, x: x}}
			animate={controls}
		>
			{children}
		</motion.div>
	);
}

export default LazyShow;