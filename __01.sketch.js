
bin/
└── server_main.js

public/
├── images
├── javascripts
└── stylesheets
    └── style.css
    
routes
├── index.js
└── users.js

views
├── error.html
├── index.html
├── layout.html
└── other.html

_______________________________________


//forEach()
app.use(path, module);


list = [
	{ 	path:	'/', 	
		module:	'/index.js' },

	{ 	path:	'error/', 
		module: 	'error/error.js' },
		
	{ 	path:	'vignette/', 
		module: 	'vignette/vignette_back_to_index.js' },
				
	{ 	path:	'vignette/json_parser/', 
		module: 	'vignette/json_parser/json_parser.js' },
				
	{ 	path:	'vignette/waveform_slider/', 
		module: 	'vignette/waveform_slider/waveform_slider.js' },
		
	{ 	path:	'vignette/musical_circle_cluster/', 
		module: 	'vignette/musical_circle_cluster/musical_circle_cluster.js' },
		
	{ 	path:	'vignette/automation/', 
		module: 	'vignette/automation/automation.js' },
		
	{ 	path:	'vignette/throughput_measurement/', 
		module: 	'vignette/throughput_measurement/throughput_measurement.js' },
		
	{ 	path:	'vignette/x/', 
		module: 	'vignette/x/x.js' },
		
];

app.path()

module.exports = list;

_______________________________________
		
function Route_List = {}

Route_List.list_offset = '../';
Route_List.list = [
		{	path:	'/', 	
			module:	'/index.js' },

		{ 	path:	'error/', 
			module: 	'error/error.js' },
			
		{ 	path:	'vignette/', 
			module: 	'vignette/vignette_back_to_index.js' },
					
		{ 	path:	'vignette/json_parser/', 
			module: 	'vignette/json_parser/json_parser.js' },
					
		{ 	path:	'vignette/waveform_slider/', 
			module: 	'vignette/waveform_slider/waveform_slider.js' },
			
		{ 	path:	'vignette/musical_circle_cluster/', 
			module: 	'vignette/musical_circle_cluster/musical_circle_cluster.js' },
			
		{ 	path:	'vignette/automation/', 
			module: 	'vignette/automation/automation.js' },
			
		{ 	path:	'vignette/throughput_measurement/', 
			module: 	'vignette/throughput_measurement/throughput_measurement.js' },
			
		{ 	path:	'vignette/x/', 
			module: 	'vignette/x/x.js' }
	];
			
module.export = Route_List;		
		
		
		
		


_______________________________________
so, next, what shouLd you do?

well, since you need a welcome


public/
	javascripts/
		vendor.libraries/
		code/




routes:
	./index.js
	./showcase/
		json_parser/
			json_parser.js
		nervous_clock/
			nervouse_clock.js
____________________________________________________________
	
	/
	error/
		error.js
		
	vignette/
		json_parser/				{do}.js
		nervous_clock/			{do}.js
		image_slider/				{do}.js
		waveform_slider/			{do}.js
		automation/				{do}.js
		musical_circle_cluster/		{do}.js
		logo_example/			{do}.js
		throughput_measurement	{do}.js
		banner/					{do}.js
		hourglass/				{do}.js
		vignette_back_to_index.js
		
	index.js
____________________________________________________________
	
		
	routes:
		/								<- index.js
		vignette/							<- vignette_back_to_index.js
		vignette/json_parser/				<- json_parser.js
		vignette/nervous_clock/				<- nervous_clock.js
		vignette/waveform_slider/			<- waveform_slider.js
		vignette/automation/				<- automation.js
		vignette/musical_circle_cluster/		<- musical_circle_cluster.js
		vignette/banner/					<- banner.js
		vignette/hourglass/				<- hourglass.js
		error/							<- error.js
		
________________________________________

	index.js:
		links to 
			vignette/json_parser
			vignette/nervous_clock
			
	vignette/json_parser/json_parser.js:
		links to
			/

	vignette/nervous_clock/nervous_clock.js
		links to
			/
			vignette/json_parser

________________________________________

	
	
