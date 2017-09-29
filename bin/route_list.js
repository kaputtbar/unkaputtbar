
function Route_List () {}

Route_List.path_prefix = '../routes/';
Route_List.list = [
	{	path:	'/', 	
		module:	'index.js' },

//	{ 	path:	'error/', 
//		module: 	'error/error.js' },
		
//	{ 	path:	'vignette/', 
//		module: 	'vignette/vignette_back_to_index.js' },
				
	{ 	path:	'/vignette/json_parser', 
		module: 	'vignette/json_parser/json_parser.js' },

	{ 	path:	'/vignette/nervous_clock', 
		module: 	'vignette/nervous_clock/nervous_clock.js' }
		
/*****************
	{ 	path:	'vignette/waveform_slider/', 
		module: 	'vignette/waveform_slider/waveform_slider.js' },
		
	{ 	path:	'vignette/musical_circle_cluster/', 
		module: 	'vignette/musical_circle_cluster/musical_circle_cluster.js' },
		
	{ 	path:	'vignette/automation/', 
		module: 	'vignette/automation/automation.js' },
		
	{ 	path:	'vignette/throughput_measurement/', 
		module: 	'vignette/throughput_measurement/throughput_measurement.js' },

	{ 	path:	'vignette/calendar/', 
		module: 	'vignette/calendar/calendar.js' },
		
	{ 	path:	'vignette/x/', 
		module: 	'vignette/x/x.js' },
		
	{ 	path:	'site/x/', 
		module: 	'site/x/x.js' },
		
	{ 	path:	'site/x/', 
		module: 	'site/x/x.js' }
**********************************************/
];

module.exports = Route_List;		
