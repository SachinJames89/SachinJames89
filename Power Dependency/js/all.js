// JavaScript Document
var myCanvas,context= null;

var allData = [
["Chhattisgarh","CT",8.449,3.502,3.502,7.863,0.001,0.001,0.060,0.149,0.381],
["Dadra & Nagar Haveli","DN",2.521,0.801,0.801,1.998,0.244,0.001,0.282,0.001,0.001],
["Daman & Diu","DD",0.595,0.367,0.397,0.046,0.006,0.001,0.010,0.001,0.001],
["Goa","GA",0.493,0.603,0.605,0.403,0.060,0.001,0.033,0.001,0.001],
["Gujarat","GJ",32.327,13.965,13.965,19.368,6.128,0.023,0.689,0.951,5.173],
["Madhya Pradesh","MP",15.878,11.957,11.957,10.466,0.318,0.001,0.337,3.968,0.794],
["Maharastra","MH",40.001,20.569,21.586,24.907,4.279,0.001,0.850,4.101,5.869],
["Chandigarh","CH",0.259,0.249,0.249,0.041,0.020,0.001,0.012,0.066,0.001],
["Delhi","DL",9.231,4.647,4.651,5.608,2.605,0.001,0.151,0.851,0.021],
["Haryana","HR",10.155,7.538,7.538,7.485,0.691,0.006,0.136,1.691,0.153],
["Himachal Pradesh","HP",4.708,1.704,1.830,0.188,0.077,0.006,0.043,3.632,0.771],
["Jammu & Kashmir","JK",3.108,2.542,3.188,0.406,0.375,0.012,0.096,2.042,0.183],
["Punjab","PB",9.372,6.262,6.262,4.666,0.357,0.001,0.257,3.729,0.367],
["Rajasthan","RJ",17.302,11.941,11.981,9.451,0.955,0.001,0.706,1.907,4.287],
["Uttarakhand","UT",3.186,2.067,2.160,0.371,0.087,0.001,0.029,2.470,0.235],
["Uttar Pradesh","UP",17.567,13.169,13.502,13.147,0.678,0.001,0.414,2.289,1.043],
["Andhra Pradesh","AP",21.272,13.986,14.251,10.551,4.149,0.047,0.341,4.597,1.594],
["Karnataka","KA",17.156,10.682,11.700,7.579,0.001,0.290,0.315,4.431,4.546],
["Kerala","KL",4.770,4.092,4.316,1.127,0.658,0.317,0.119,2.316,0.239],
["Pondicherry","PY",0.471,0.378,0.378,0.284,0.041,0.001,0.025,0.001,0.001],
["Tamil Nadu","TN",25.432,14.247,15.056,10.739,1.264,0.508,0.646,2.687,9.779],
["Assam","AS",1.404,1.312,1.420,0.075,0.738,0.027,0.001,0.530,0.040],
["Arunachal Pradesh","AR",0.308,0.154,0.155,0.001,0.041,0.021,0.001,0.121,0.129],
["Bihar","BR",2.706,2.386,2.571,2.407,0.001,0.001,0.001,0.160,0.142],
["DVC","DVC",8.417,2.971,2.989,8.068,0.112,0.001,0.001,0.239,0.001],
["Jharkhand","JH",3.176,1.153,1.165,2.904,0.001,0.001,0.001,0.248,0.026],
["Manipur","MN",0.221,0.160,0.161,0.001,0.059,0.057,0.001,0.101,0.008],
["Meghalaya","ML",0.561,0.386,0.388,0.001,0.082,0.004,0.001,0.440,0.039],
["Mizoram","MZ",0.186,0.098,0.100,0.001,0.035,0.065,0.001,0.043,0.046],
["Nagaland","NL",0.145,0.129,0.130,0.001,0.042,0.004,0.001,0.067,0.037],
["Orissa","OR",9.085,3.853,3.865,6.296,0.001,0.001,0.001,2.668,0.124],
["Sikkim","SK",0.388,0.100,0.100,0.103,0.001,0.007,0.001,0.216,0.065],
["Tripura","TR",0.534,0.236,0.240,0.001,0.432,0.007,0.001,0.078,0.021],
["West Bengal","WB",10.718,7.457,7.506,8.882,0.124,0.016,0.001,1.537,0.163],
["Central (Unallocated)","C",8.720,0.001,0.001,6.626,0.669,0.001,0.627,0.803,0.001],
["Andaman & Nicobar","AN",0.088,0.041,0.050,0.001,0.001,0.075,0.001,0.001,0.014],
["Lakshadweep","LD",0.013,0.011,0.011,0.001,0.001,0.013,0.001,0.001,0.001]

];

var colors = ['CCCCCC','F15A24','662D91'];
var showData = [2,3];

function bindEvents(){
	$(".button").unbind('click').bind('click',function(e){
		var thisBt = $(this);
		context.clearRect(0,0,myCanvas.width,myCanvas.height);
		showData[0] = showData[1];
		showData[1] = thisBt.index()+2;
/*		$($(".button")[showData[0]-2]).css({
			"border-style":"solid",
			"border-width":"1px",
			"border-color":"#000"
		});
			$($(".button")[showData[1]-2]).css({
			"border-style":"solid",
			"border-width":"1px",
			"border-color":"#000"
		});*/
		getCenter();	
	});
}

function drawCircle(centerX, centerY, radius, color){
	
	  context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = 0;
      context.strokeStyle = "rgba(255,255,255,0)";
      context.stroke();
}

function getCenter(){
	var len = allData.length;
	
	for(var i=1; i<=len; i++){
		var x = i%7;
		if(x == 0)
		{
			x=7;
		}
		var y = (i%7!=0)?(Math.floor(i/7 + 1) ):(Math.floor(i/7));
				
		var radius1 = allData[i-1][showData[0]];
		var radius2 = allData[i-1][showData[1]];
		var color1 = $($(".button")[showData[0]-2]).css("background-color");
		var color2 = $($(".button")[showData[1]-2]).css("background-color");
		if(radius1>radius2){
			drawCircle((x-1)*102+70,y*100+50,radius1,color1);
			drawCircle((x-1)*102+70,y*100+50,radius2,color2);
		}
		else{
			drawCircle((x-1)*102+70,y*100+50,radius2,color2);
			drawCircle((x-1)*102+70,y*100+50,radius1,color1);
		}
		
	}
	
}

function setupCanvas(){
	myCanvas = document.getElementById('myCanvas');
	context = myCanvas.getContext("2d");
	myCanvas.width = 760;
	myCanvas.height = 734;	
	bindEvents();
}




$(document).ready(function(e) {
	setupCanvas();
	getCenter();
});