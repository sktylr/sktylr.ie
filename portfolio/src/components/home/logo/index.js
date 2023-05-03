import './index.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {

	const backgroundRef = useRef();
	const outlineLogoRef = useRef();
	const didAnimate = useRef(false);

	// useEffect(() => {
	// 	gsap.registerPlugin(DrawSVGPlugin);

	// 	if (didAnimate.current)	{
	// 		return;
	// 	} else didAnimate.current = true;

	// 	gsap.timeline()
	// 		.to(backgroundRef.current, {
	// 			duration: 1,
	// 			opacity: 1,
	// 		})
	// 		.from(outlineLogoRef.current, {
	// 			drawSVG: 0,
	// 			duration: 15,
	// 		})
	// }, [])

	// useEffect(() => {
	// 	KUTE.fromTo(
	// 		'#s-logo',
	// 		{
	// 			path: '#s-logo',
	// 			opacity: 0,
	// 		},
	// 		{
	// 			path: '#s-logo',
	// 			opacity: 1,
	// 		}
	// 	)
	// })
	
	return (
		<div className='logo-container' ref={backgroundRef}>
			
			<svg
				width="559pt"
				height="897pt"
				version="1.0"
				viewBox="0 0 559 897"
				xmlns="http://www.w3.org/2000/svg"
				className='zfmXffeD_0'
			>
				<g
					className="svg-container"
					transform="translate(0 457) scale(.1 -.1)"
					fill="none"
				>
					<path
						ref={outlineLogoRef}
						d="m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436-61-60-145-137-188-169-432-325-715-757-806-1230-109-564 21-1117 384-1641 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-293 350-448 55-114 75-188 82-298 6-96-6-173-39-257-21-53-27-59-73-76-136-51-374-73-521-46-401 71-763 376-1088 916-21 35-43 63-50 63s-32-13-57-29c-74-48-229-141-233-141-3 0-54-31-113-68s-135-84-168-102c-33-19-67-39-77-45-9-5-56-34-105-63-48-29-153-94-233-143s-152-92-160-96c-26-12-144-86-180-114-19-15-137-88-262-164-130-78-228-143-228-151s30-70 66-137c207-379 396-640 644-887 219-218 401-350 665-480 247-122 484-196 775-241 172-27 628-38 819-19 636 61 1161 302 1561 716 47 48 128 120 181 160 402 304 684 722 804 1189 61 240 70 318 70 640 0 259-3 304-23 418-84 467-268 823-647 1257-192 218-401 409-1095 995-637 539-1034 894-1208 1081-152 163-223 311-223 465 0 43 2 83 5 88 20 32 266 41 394 15 322-65 649-312 972-731 39-51 70-83 82-83 10 0 283 234 615 528 328 290 684 605 792 700s197 181 199 191-38 62-100 131c-399 446-754 740-1106 918-314 159-659 255-962 268-63 2-135 6-160 7-25 2-110 0-190-4zm570-58c671-123 1188-450 1813-1144 53-60 97-112 96-115-1-12-411-367-423-367-6 0-20-13-31-28-11-16-164-156-340-312l-320-283-18 24c-239 311-459 523-675 651-99 59-246 117-344 137-112 23-311 21-416-4-200-48-373-182-450-349-32-70-34-82-34-176 0-179 64-318 229-494 182-195 573-545 1213-1086 693-585 897-771 1085-985 379-434 563-790 647-1257 20-113 23-161 23-398 0-300-10-384-70-620-97-379-302-729-586-1e3 -105-100-185-166-191-159-9 8-63-29-92-63-48-57-291-191-482-266-202-79-481-143-735-167-188-18-606-8-779 19-290 45-528 119-775 241-385 190-680 444-972 836-118 159-345 527-332 538 46 36 763 456 773 453 16-7 36 11 30 27-3 9 131 99 212 142 28 15 203 122 231 141 21 14 23 13 45-23 225-384 515-687 794-829 164-84 300-115 503-115 125 0 235 15 340 46 17 5 22 4 17-4-13-22 24-13 47 11 12 13 53 40 91 61 193 105 351 279 418 462 18 49 21 82 22 199 1 165-11 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 24 318 109 596 262 848 74 123 192 277 231 301 18 11 43 38 56 61 24 42 155 164 277 255 293 221 660 367 1050 419 167 23 601 15 754-13zm-2357-938c-321-485-398-1123-203-1693 70-208 178-417 315-615 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-292 350-448 65-136 80-200 79-343-1-134-15-186-80-302-60-108-201-244-326-317-53-31-55-28-31 35 12 33 17 79 17 184 1 165-12 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 34 454 190 817 504 1174 58 66 264 256 277 256 4 0-23-44-58-97zm2095-529c212-43 445-176 659-378 129-121 368-406 360-429-2-6-95-93-208-193l-204-182-18 24c-105 137-202 250-307 355-191 192-351 304-540 380-145 58-234 72-415 67l-153-4 24 47c28 57 121 159 181 200 71 49 158 88 240 108 99 25 274 27 381 5zm-2672-5486c233-416 511-757 812-997 275-219 616-385 967-472 225-55 364-71 669-76 307-6 445 3 666 43 255 46 474 119 698 233l117 60-75-71c-377-356-881-572-1471-628-188-18-606-8-779 19-465 72-868 244-1222 521-180 141-402 382-575 625-130 183-342 550-326 566 11 11 446 277 454 278 4 1 33-45 65-101z"
					/>
				</g>
			</svg>
			{/*<svg xmlns="http://www.w3.org/2000/svg" width="559pt" height="1196" version="1.0" viewBox="0 0 559 897" ><path fill="none" d="M293 1c-34.4 1.6-62.3 8.5-91.5 22.8-23.1 11.4-40.6 24.1-60 43.6-6.1 6-14.5 13.7-18.8 16.9-43.2 32.5-71.5 75.7-80.6 123-10.9 56.4 2.1 111.7 38.4 164.1 25 36 78 87.7 154.7 151.1 45.1 37.3 60 50.5 80.3 70.8 21.5 21.6 27.5 29.3 35 44.8 5.5 11.4 7.5 18.8 8.2 29.8.6 9.6-.6 17.3-3.9 25.7-2.1 5.3-2.7 5.9-7.3 7.6-13.6 5.1-37.4 7.3-52.1 4.6-40.1-7.1-76.3-37.6-108.8-91.6-2.1-3.5-4.3-6.3-5-6.3s-3.2 1.3-5.7 2.9c-7.4 4.8-22.9 14.1-23.3 14.1-.3 0-5.4 3.1-11.3 6.8s-13.5 8.4-16.8 10.2c-3.3 1.9-6.7 3.9-7.7 4.5-.9.5-5.6 3.4-10.5 6.3-4.8 2.9-15.3 9.4-23.3 14.3s-15.2 9.2-16 9.6c-2.6 1.2-14.4 8.6-18 11.4-1.9 1.5-13.7 8.8-26.2 16.4C9.8 712.2 0 718.7 0 719.5s3 7 6.6 13.7c20.7 37.9 39.6 64 64.4 88.7 21.9 21.8 40.1 35 66.5 48 24.7 12.2 48.4 19.6 77.5 24.1 17.2 2.7 62.8 3.8 81.9 1.9 63.6-6.1 116.1-30.2 156.1-71.6 4.7-4.8 12.8-12 18.1-16 40.2-30.4 68.4-72.2 80.4-118.9 6.1-24 7-31.8 7-64 0-25.9-.3-30.4-2.3-41.8-8.4-46.7-26.8-82.3-64.7-125.7-19.2-21.8-40.1-40.9-109.5-99.5-63.7-53.9-103.4-89.4-120.8-108.1-15.2-16.3-22.3-31.1-22.3-46.5 0-4.3.2-8.3.5-8.8 2-3.2 26.6-4.1 39.4-1.5 32.2 6.5 64.9 31.2 97.2 73.1 3.9 5.1 7 8.3 8.2 8.3 1 0 28.3-23.4 61.5-52.8 32.8-29 68.4-60.5 79.2-70s19.7-18.1 19.9-19.1-3.8-6.2-10-13.1c-39.9-44.6-75.4-74-110.6-91.8C392.8 12.2 358.3 2.6 328 1.3c-6.3-.2-13.5-.6-16-.7-2.5-.2-11 0-19 .4zm57 5.8c67.1 12.3 118.8 45 181.3 114.4 5.3 6 9.7 11.2 9.6 11.5-.1 1.2-41.1 36.7-42.3 36.7-.6 0-2 1.3-3.1 2.8-1.1 1.6-16.4 15.6-34 31.2l-32 28.3-1.8-2.4c-23.9-31.1-45.9-52.3-67.5-65.1-9.9-5.9-24.6-11.7-34.4-13.7-11.2-2.3-31.1-2.1-41.6.4-20 4.8-37.3 18.2-45 34.9-3.2 7-3.4 8.2-3.4 17.6 0 17.9 6.4 31.8 22.9 49.4 18.2 19.5 57.3 54.5 121.3 108.6 69.3 58.5 89.7 77.1 108.5 98.5 37.9 43.4 56.3 79 64.7 125.7 2 11.3 2.3 16.1 2.3 39.8 0 30-1 38.4-7 62-9.7 37.9-30.2 72.9-58.6 100-10.5 10-18.5 16.6-19.1 15.9-.9-.8-6.3 2.9-9.2 6.3-4.8 5.7-29.1 19.1-48.2 26.6-20.2 7.9-48.1 14.3-73.5 16.7-18.8 1.8-60.6.8-77.9-1.9-29-4.5-52.8-11.9-77.5-24.1-38.5-19-68-44.4-97.2-83.6-11.8-15.9-34.5-52.7-33.2-53.8 4.6-3.6 76.3-45.6 77.3-45.3 1.6.7 3.6-1.1 3-2.7-.3-.9 13.1-9.9 21.2-14.2 2.8-1.5 20.3-12.2 23.1-14.1 2.1-1.4 2.3-1.3 4.5 2.3 22.5 38.4 51.5 68.7 79.4 82.9 16.4 8.4 30 11.5 50.3 11.5 12.5 0 23.5-1.5 34-4.6 1.7-.5 2.2-.4 1.7.4-1.3 2.2 2.4 1.3 4.7-1.1 1.2-1.3 5.3-4 9.1-6.1 19.3-10.5 35.1-27.9 41.8-46.2 1.8-4.9 2.1-8.2 2.2-19.9.1-16.5-1.1-22.2-7.9-36.3-7.5-15.6-13.5-23.2-35.5-45.3-20.8-20.8-35.5-33.8-80.8-71.3-76.6-63.3-128.8-114.2-153.7-150.1-30.5-44-44.9-90.8-41.5-135.5 2.4-31.8 10.9-59.6 26.2-84.8 7.4-12.3 19.2-27.7 23.1-30.1 1.8-1.1 4.3-3.8 5.6-6.1 2.4-4.2 15.5-16.4 27.7-25.5 29.3-22.1 66-36.7 105-41.9C291.3 3.2 334.7 4 350 6.8zm-235.7 93.8C82.2 149.1 74.5 212.9 94 269.9c7 20.8 17.8 41.7 31.5 61.5 25 36 78 87.7 154.7 151.1 45.1 37.3 60 50.5 80.3 70.8 21.5 21.6 27.5 29.2 35 44.8 6.5 13.6 8 20 7.9 34.3-.1 13.4-1.5 18.6-8 30.2-6 10.8-20.1 24.4-32.6 31.7-5.3 3.1-5.5 2.8-3.1-3.5 1.2-3.3 1.7-7.9 1.7-18.4.1-16.5-1.2-22.2-7.9-36.3-7.5-15.6-13.5-23.2-35.5-45.3-20.8-20.8-35.5-33.8-80.8-71.3-76.6-63.3-128.8-114.2-153.7-150.1-30.5-44-44.9-90.8-41.5-135.5 3.4-45.4 19-81.7 50.4-117.4 5.8-6.6 26.4-25.6 27.7-25.6.4 0-2.3 4.4-5.8 9.7zm209.5 52.9c21.2 4.3 44.5 17.6 65.9 37.8 12.9 12.1 36.8 40.6 36 42.9-.2.6-9.5 9.3-20.8 19.3l-20.4 18.2-1.8-2.4c-10.5-13.7-20.2-25-30.7-35.5-19.1-19.2-35.1-30.4-54-38-14.5-5.8-23.4-7.2-41.5-6.7l-15.3.4 2.4-4.7c2.8-5.7 12.1-15.9 18.1-20 7.1-4.9 15.8-8.8 24-10.8 9.9-2.5 27.4-2.7 38.1-.5zM56.6 702.1c23.3 41.6 51.1 75.7 81.2 99.7 27.5 21.9 61.6 38.5 96.7 47.2 22.5 5.5 36.4 7.1 66.9 7.6 30.7.6 44.5-.3 66.6-4.3 25.5-4.6 47.4-11.9 69.8-23.3l11.7-6-7.5 7.1c-37.7 35.6-88.1 57.2-147.1 62.8-18.8 1.8-60.6.8-77.9-1.9-46.5-7.2-86.8-24.4-122.2-52.1-18-14.1-40.2-38.2-57.5-62.5-13-18.3-34.2-55-32.6-56.6 1.1-1.1 44.6-27.7 45.4-27.8.4-.1 3.3 4.5 6.5 10.1z" class="svg-container zfmXffeD_0"></path></svg>
		*/}</div>
	)
}

export default Logo