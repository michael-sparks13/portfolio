const projects = [
	{
		name: "CrowdedParks.org",
		about:
			"To start my journalism career, I needed somewhere to publish. So I taught myself how to code and bulit this website. It's pretty cool.",
		tools: "VS Code, Host Gator for hosting, porkbun for domain purchasing",
		link: "https://www.crowdedparks.org",
		img: "images/projects/crowded-cover.jpg",
		process:
			"I actually used SquareSpace to start. I didn't know how to code so that was the quickest way to get a site up and running and publish my reporting while working on this in the background. From there, I basically used Google and YouTube to figure out how to make my own version of the site. This marked my first foray into web development.",
		type: "journalism",
		outcome:
			"I learned a few valuable lessons that I still take with me today: (1) the value of breaking down large projects into manageable 'problems' and then focusing on solving them one by one. (2) The value of using existing work as a starting point. No need to reinvent the wheel everytime. (3). Of course, all of the mechanics that go into building a website!",
		date: "2021",
	},
	{
		name: "Forecasting Hurricane Otis (Master's Capstone)",
		about: "",
		tools: "",
		link: "https://michael-sparks13.github.io/otis/",
		img: "images/projects/storm_wreckage.avif",
		process: "",
		type: "journalism",
		outcome: "",
		date: "",
	},
	{
		name: "Lands of the Bible",
		about:
			"I wanted to follow NatGeo's example as a way to sharpen my design sense. This helped!",
		tools: "QGIS and Illustrator",
		link: "images/projects/nat_geo_bible_lands@3x.png",
		img: "images/projects/nat_geo_bible_lands@3x.png",
		process:
			"Simple process of creating data in QGIS and designing in Illustrator. There were, however, a lot of new techniques",
		type: "static",
		outcome:
			"I couldn't be happier with how this turned out. National Geographic is National Geographic for a reason. One of my major learnings here was how much of a difference even subtle changes in type and color can make.",
		date: "May 2024",
	},
	{
		name: "Flavortown, USA",
		about:
			"Guy Fieri, my personal hero, has been to almost 1,400 restaurants (as of Jan 2023) on his flagship show Diners, Drive-ins, and Dives. This awesome map shows you where they are.",
		tools:
			"Made with Mapbox Studio & Mapbox GL to design and place the map. Python & BeautifulSoup to scrape the data.",
		link: "https://michael-sparks13.github.io/flavortown/",
		img: "images/projects/flavortown.png",
		process:
			"I initially contacted the owners of a Guy Fieri fan site to see if they would kindly share their data with me. I never heard back though so I had to learn how to use the python library beautiful soup to scrape the site. Luckily the HTML was well formatted but I did have to do a decent amount of manual work to make the data usable as a geojson.",
		type: "interactive",
		outcome:
			"I love this map. It is quirky and offbeat but fun and engaging. Plus, I learned how to do some webscraping and a few fun design things in Mapbox Studio.",
		date: "Feb 2023",
	},
	{
		name: "Canadian Wildfires",
		about:
			"An interactive comparison of 2023's fire season with the previous 10 years.",
		tools: "Made with Leaflet, MapTiler, and MapShaper.com.",
		link: "https://michael-sparks13.github.io/canadian-wildfires/",
		img: "images/projects/wildfires.png",
		process:
			"The tricky part here was getting all of the data in a web friendly format. The fire geometries were so complex I had to to a lot of simplification via both QGIS and Mapshaper to get the files down to a workable size. I also needed to use mapshaper to do some transformations as not all files were in the same GCS.",
		type: "interactive",
		outcome:
			"This map does a great job of visualizing the massive impact of the 2023 Canadian fireseason. It was a great project to practice visualizing some complex geometries over time.",
		date: "Oct 2023",
	},
	{
		name: "Historic Trails",
		about:
			"A beautiful static map with light shaded relief showing some historic trails.",
		tools: "Created with Adobe Illustrator and data from Natural Earth",
		link: "images/projects/trails.png",
		img: "images/projects/trails.png",
		process:
			"This is a classic example of a QGIS to Illustrator workflow. I used Natural Earth data for the shaded relief layer.",
		type: "static",
		outcome:
			"Another project I used to help refine my design sense. This turned out nicely!",
		date: "March 2024",
	},
	{
		name: "Clean Energy Production",
		about:
			"Analysing data from the American Clean Power Associate using QGIS, this map looks at the growth in clean energy production spurred by the IRA",
		tools: "Made with Illustrator",
		link: "images/projects/cleanEnergySpend_195mm-01.png",
		img: "images/projects/cleanEnergySpend_195mm-01.png",
		process:
			"I used QGIS to analyze the data and dynamically size the circles. Then Illustrator for the design details",
		type: "static",
		outcome:
			"Another project I used to help refine my design sense. This turned out nicely!",
		date: "Jan 2024",
	},
	{
		name: "Parchment Effect",
		about: "Experimenting with a 'parchment effect' design style",
		tools: "Made with Illustrator",
		link: "images/projects/parchment.png",
		img: "images/projects/parchment.png",
		process:
			"This is a classic example of a QGIS to Illustrator workflow. I found the parchment layer online.",
		type: "static",
		outcome:
			"I wanted to experiment with giving a map a different type of feel, and this was good practice in draping an image layer over GIS details to get a nice look",
		date: "Jan 2024",
	},
	{
		name: "Kenyan Education",
		about:
			"This map looks at trends in school enrollment by gender, from grades 1 through 8 in Kenya.",
		tools: "Made with Leaflet and D3.js",
		link: "https://michael-sparks13.github.io/kenyan-education/",
		img: "images/projects/kenya.png",
		process:
			"Data came from the Kenya Open Data portal. I worked with an instructor on several design iterations before we landed on the dynamically sized rings for each grade & gender",
		type: "interactive",
		outcome:
			"At the time I built this, I didn't know D3. But I knew that was the library I needed to get the UX I wanted. This was a useful exercise in figuing out how to use a new library without needing to become an expert in it.",
		date: "April 2023",
	},
	{
		name: "US Housing Statistics",
		about: "Interactively mapping homeownership rates across the country",
		tools: "Built using Leaflet",
		link: "https://michael-sparks13.github.io/housing-data/",
		img: "images/projects/housing-stats.png",
		process:
			"Data comes from the American Community Survey. Processed using QGIS and formatted as GeoJSONs. Interactive web map built with leaflet.",
		type: "interactive",
		outcome:
			"This project taught me the power of simple interactive tools, like the drop down, and the insights they can dynamically reveal. That's what makes web mapping special.",
		date: "March 2023",
	},
	{
		name: "US Unemployment Rates",
		about:
			"Interactively mapping 2001-2021 unemployment rates county-by-county",
		tools: "Built using Leaflet",
		link: "https://michael-sparks13.github.io/us-unemployment/",
		img: "images/projects/unemployment.png",
		process: "Data comes from the BLS",
		type: "interactive",
		outcome:
			"One of the coolest things about this map is the clear trends we see after 9/11, the financial crisis, and covid.",
		date: "February 2023",
	},
	{
		name: "Calculating Wind Turbine Density",
		about:
			"Exploring where wind turbines are really located across the country",
		tools: "Layers styled and calculations done with QGIS",
		link: "images/projects/wind-turbine.png",
		img: "images/projects/wind-turbine.png",
		process:
			"The main processing I did here was creating a hexagonal bin layer and then spatially joining that on top of the wind turbine layer. This is similar to the 'tessellation' process in ArcGIS.",
		type: "static",
		outcome:
			"This map is a great example of the power of spatial data. We don't think of Texas or the plains as being big alternative energy states. But here we can see that that's where the majority of turbines lie.",
		date: "Sep 2022",
	},
	{
		name: "The Pacific Crest Trail",
		about:
			"I took an old school map of the US in 1957 by Erwin Raisz, vectorized it in QGIS, and then added a country layer and trail layer. I modeled the map's style after the original by Mr. Raisz",
		tools: "QGIS, GDAL, Illustrator",
		link: "images/projects/pct.png",
		img: "images/projects/pct.png",
		process:
			"Made with QGIS to create & style layers & GDAL to vectorize the raster image; Illustrator for some final touchups",
		type: "static",
		outcome:
			"Here is a good example of the power of combining different source material.",
		date: "Oct 2023",
	},
	{
		name: "The National Park Where Preservation Isn't the Goal",
		about:
			"I traveled to Assateague Island National Seashore to see their unique approach to handling climate change",
		tools: "Originally published on CrowdedParks.org",
		link: "https://www.crowdedparks.org/articles/assateague-island.html",
		img: "images/projects/assateague.jpeg",
		process: "",
		type: "journalism",
		outcome: "",
		date: "Oct 2021",
	},
	{
		name: "Electric Vehicles Unplugged",
		about:
			"An exploration of the promises of EVs and the challenges the Park Service faces in transitioning to them.",
		tools: "Originally published on NationalParksTraveler.org",
		link: "https://www.crowdedparks.org/articles/electric-vehicles.html",
		img: "images/projects/solar-array.webp",
		process: "",
		type: "journalism",
		outcome: "",
		date: "March 2022",
	},
	{
		name: "Hydropower in New England",
		about: "There's a lot of hydropower in New England.",
		tools: "Made with Leaflet.",
		link: "https://michael-sparks13.github.io/newengland-hydropower/",
		img: "images/projects/hydropower.png",
		process:
			"This was one of the earliest interactive maps I made and was really just about exploring the specific functionality browser-based symbol-sizing.",
		type: "interactive",
		outcome:
			"As one of my earliest projects, this reinforced the fact that continually building new things is the only way to learn and get better.",
		date: "December 2022",
	},
	{
		name: "Our National Parks' Secret Weapon? Volunteers.",
		about:
			"An look into how and why the Park Service relies so heavily on volunteer labor",
		tools: "Originally published on CrowdedParks.org",
		link: "https://www.crowdedparks.org/articles/volunteers-article.html",
		img: "images/projects/volunteers.jpeg",
		process: "",
		type: "journalism",
		outcome: "",
		date: "Aug 2021",
	},
	{
		name: "Crowded Parks Part One",
		about: "Using data to investigate how crowded national parks really are",
		tools:
			"Data pulled, cleaned, and visualized using Python and Pandas. \nOriginally published on CrowdedParks.org",
		link: "https://www.crowdedparks.org/articles/crowding-part-one.html",
		img: "images/projects/crowded-pt1.jpeg",
		process: "",
		type: "journalism",
		outcome: "",
		date: "Sep 2021",
	},
	{
		name: "Crowded Parks Part Two",
		about: "Using data to investigate how crowded national parks really are",
		tools: "Originally published on CrowdedParks.org",
		link: "https://www.crowdedparks.org/articles/crowding-part-two.html",
		img: "images/projects/crowded-pt2.jpeg",
		process: "",
		type: "journalism",
		outcome: "",
		date: "Sep 2021",
	},
	{
		name: "Natural Arches of the USA",
		about:
			"Just a cool, early, map showing how many natural arches there are in the US and where they are located.",
		tools: "QGIS, Mapbox",
		link: "https://michael-sparks13.github.io/arches/",
		img: "images/projects/arches.jpeg",
		process:
			"I used GDAL and QGIS to convert raster elevation units and create contours. Mapbox to display the final data and styles..",
		type: "interactive",
		outcome:
			"As one of my earliest projects, this reinforced the fact that continually building new things is the only way to learn and get better.",
		date: "Oct 2022",
	},
	{
		name: "Active Fires and Thermal Anomalies",
		about:
			"Using an API provided by NASA, this map shows active fires and thermal anomalies for a week in May 2022. You can over over each point to learn more about it.",
		tools: "Made with NASA's Fire Info for Resource Mgmt API",
		link: "https://michaelsparks13.github.io/firms/",
		img: "images/projects/fire.png",
		process:
			"My main goal here was to add to my 'local machine' knowledge by using an API to pull in data.",
		type: "interactive",
		outcome:
			"The US government makes TONS of great info available, but accessing it is a skill in its own right. Being able to navigate through NASA APIs is a very useful skill. I'm glad I have it.",
		date: "",
	},
	{
		name: "GDP per Capita and Internet Connectivity",
		about:
			"Comparing how internet connectivity and GDP per capita are related. Another great example of how spatial data can trends pop out",
		tools: "QGIS",
		link: "images/projects/gdp.png",
		img: "images/projects/gdp.png",
		process:
			"This was built entirely with QGIS. Obviously, QGIS has limited design functionality compared to Illustrator, but you have to start somewhere.",
		type: "static",
		outcome: "This was my first or second ever static map!",
		date: "Sep 2022",
	},

	//lots and spaces
];

export { projects };
