# Source code structure

```
.
├── public                  
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png   
│   ├── apple-touch-icon.png     
│   ├── favicon-16x16.png 
│   ├── favicon-32x32.png   
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json   
│   └── robots.txt
├── src
│   ├── assets
│   |	├── data
│   |	|	├── CV.pdf
│   │   |	└── projects.json
│   |	├── fonts
│   │   |	└── CenturyGothic.ttf
│   │   └── img
│   │    	└── xelda-logo.png
│   ├── components
│   |	├── about
│   |	|	├── index.js
│   │   |	└── index.scss
│   |	├── animated-letters
│   |	|	├── index.js
│   │   |	└── index.scss
│   |	├── contact
│   |	|	├── logo
│   |	|	|	├── index.js
│   │   |	|	└── index.scss
│   |	|	├── index.js
│   │   |	└── index.scss
│   |	├── home
│   |	|	├── logo
│   |	|	|	├── index.js
│   │   |	|	└── index.scss
│   |	|	├── index.js
│   │   |	└── index.scss
│   |	├── layout
│   |	|	├── index.js
│   │   |	└── index.scss
│   |	├── projects
│   |	|	├── project
│   |	|	|	├── index.js
│   │   |	|	└── index.scss
│   |	|	├── index.js
│   │   |	└── index.scss
│   │   └── sidebar
│   |	 	├── index.js
│   │    	└── index.scss
│   ├── App.js
│   ├── App.scss
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── webReportVitals.js
│   └── setupTests.js
├── package-lock.json
├── package.json
└── README.md
```

# Components
## about
* This is the component rendered at the `/about` url
* It contains 3 short paragraphs, a link to my CV and a 3d animated cube that shows 6 of my skills in graphical format
## animated-letters
* This is a component that is rendered into many of the `<h1 />` tags in my website
* It animates the letters of the `<h1 />` tag by rendering them at 0.1s intervals with an animation
* It also adds a hover animation when hovering on an individual letter
## contact
* This component is rendered at `/contact`
* It contains a form an end user can fill out to send an email to my email address
* The email sending is supported by emailJs
* Logo:
	* The logo component refers to the phone svg that is rendered to the right hand side of the contact form
## home
* This is the main landing page of the website
* It contains an animated title and a tagline, as well as a link to the contact page
* Logo:
	* This component renders a 3d S svg onto the right hand side of the screen
	* I originally used the gsap library to draw the svg on page load, but this costs money to host publicly, so it currently animates in from the bottom right
## layout
* This component describes the layout of each page that is rendered
* It carries out the things that are needed for all pages, such as a background colour, rendering the sidebar etc to cut down on duplicate code
* Each page that is rendered is wrapped in a `layout` component
## projects
* This component is rendered at `/projects` and disaplys the projects I have worked on
* Project:
	* The project component renders an individual project, rendering text, an image and an optional link to another page (external or internal)
	* The project component handles the logic of choosing which side to render the image on in relation to the text and also which side the component should animate in from
## sidebar
* The sidebar component is rendered to the left hand side of all pages (or minimised on mobile / smaller screens)
* It contains a logo, graphical links to each of the pages on the site and links to my LinkedIn and GitHub profiles