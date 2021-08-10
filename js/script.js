/* script.js 
   Author,
   Date,
*/


$(document).ready(function(){ // begin document.ready block

	//Used for the photo grid
	$(".gridpic").hover(function(){
		$('.photocaption', this).fadeToggle();

	});
	
	//Interactive Button
	$("#run_madlib").on("click", madlib);

	//Interactive calc on return/enter
	$("#tuition").on('keypress', (e) => {
		if(e.which == 13) {
			madlib();
		}
	});

	//Interactive Skip
	$(".interactive_skip").on("click", (e) => {
		$("#tuition").val(60000);
		madlib();
	});


}); //end document.ready block

const tuition_data = [
	["Instruction", 2368261114],			//0
	["Research", 460820000],				//1
	["Public Service", 70507797],			//2
	["Academic Support", 76391000],			//3
	["Institutional support", 791502378],	//4
	["Student services", 295378000],		//5
	["Other", 0],							//6
	
	["Instruction Salaries",1224434000]		//7
]


function madlib() {
	const tuition = $("#tuition").val();

	// last input validation
	if (tuition <= 0) {return}

	// reveal the rest of the article
	$(".interactive_hidden").removeClass("interactive_hidden");

	// find the total
	let total = 0;
	for (array of tuition_data) {
		total += array[1];
	}

	// using the total and tuition, find a scalling factor
	const factor = tuition/total;

	// apply the factor to a temporary array
	let t = []
	for (let i = 0; i < tuition_data.length; i++) {
		t[i] = money.format(tuition_data[i][1] * factor);
	}
	const tuition_total = money.format(tuition);
	
	
	const sanky = '<svg id="sankey_svg" height="700" width="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><title>Your Diagram Title</title><!-- Generated with SankeyMATIC on Tue Aug 10 2021 02:26:41 GMT-0700 (Pacific Daylight Time)--><g><rect width="100%" height="100%" fill="rgb(255, 255, 255)"></rect><g transform="translate(12,12)"><g><path class="link" d="M10,183.91151428835158C121.3,183.91151428835158 216.70000000000002,167.8766071968171 328,167.8766071968171" style="fill: none; stroke-width: 335.753; stroke: rgb(107, 174, 214); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Instruction:\
	'+t[0]+'</title></path><path class="link" d="M10,407.8945757191898C121.3,407.8945757191898 216.70000000000002,411.8596686276553 328,411.8596686276553" style="fill: none; stroke-width: 112.213; stroke: rgb(158, 202, 225); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Institutional support:\
	'+t[4]+'</title></path><path class="link" d="M10,496.6667261769581C121.3,496.6667261769581 216.70000000000002,520.6318190854236 328,520.6318190854236" style="fill: none; stroke-width: 65.3314; stroke: rgb(198, 219, 239); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Research:\
	'+t[1]+'</title></path><path class="link" d="M10,550.2705935286469C121.3,550.2705935286469 216.70000000000002,594.2356864371125 328,594.2356864371125" style="fill: none; stroke-width: 41.8763; stroke: rgb(230, 85, 13); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Student services:\
	'+t[5]+'</title></path><path class="link" d="M10,576.6238186911969C121.3,576.6238186911969 216.70000000000002,640.5889115996624 328,640.5889115996624" style="fill: none; stroke-width: 10.8301; stroke: rgb(253, 141, 60); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Academic Support:\
	'+t[3]+'</title></path><path class="link" d="M10,587.0368899086699C121.3,587.0368899086699 216.70000000000002,671.0019828171354 328,671.0019828171354" style="fill: none; stroke-width: 9.99603; stroke: rgb(253, 174, 107); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Public Service:\
	'+t[2]+'</title></path></g><g><g class="node" transform="translate(0,16.034907091534432)"><rect height="576" width="10" id="r0" shape-rendering="crispEdges" style="fill: rgb(49, 130, 189); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(24, 63, 92);"><title>Core Expenses:\
	'+tuition_total+'</title></rect><text x="16" y="288" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0, 0, 0);">Core Expenses: '+tuition_total+'</text></g><g class="node" transform="translate(328,-5.1514348342607263e-14)"><rect height="335.7532143936343" width="10" id="r1" shape-rendering="crispEdges" style="fill: rgb(107, 174, 214); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(52, 85, 104);"><title>Instruction:\
	'+t[0]+'</title></rect><text x="16" y="167.87660719681716" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0, 0, 0);">Instruction: '+t[0]+'</text></g><g class="node" transform="translate(328,355.75321439363427)"><rect height="112.21290846804209" width="10" id="r2" shape-rendering="crispEdges" style="fill: rgb(158, 202, 225); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(77, 98, 110);"><title>Institutional support:\
	'+t[4]+'</title></rect><text x="16" y="56.106454234021044" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0, 0, 0);">Institutional support: '+t[4]+'</text></g><g class="node" transform="translate(328,487.96612286167635)"><rect height="65.33139244749452" width="10" id="r3" shape-rendering="crispEdges" style="fill: rgb(198, 219, 239); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(97, 107, 117);"><title>Research:\
	'+t[1]+'</title></rect><text x="16" y="32.66569622374726" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0, 0, 0);">Research: '+t[1]+'</text></g><g class="node" transform="translate(328,573.2975153091709)"><rect height="41.87634225588307" width="10" id="r4" shape-rendering="crispEdges" style="fill: rgb(230, 85, 13); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(112, 41, 6);"><title>Student services:\
	'+t[5]+'</title></rect><text x="16" y="20.938171127941533" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0, 0, 0);">Student services: '+t[5]+'</text></g><g class="node" transform="translate(328,635.1738575650539)"><rect height="10.830108069216948" width="10" id="r5" shape-rendering="crispEdges" style="fill: rgb(253, 141, 60); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(123, 69, 29);"><title>Academic Support:\
	'+t[3]+'</title></rect><text x="16" y="5.415054034608474" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0, 0, 0);">Academic Support: '+t[3]+'</text></g><g class="node" transform="translate(328,666.0039656342709)"><rect height="9.996034365729084" width="10" id="r6" shape-rendering="crispEdges" style="fill: rgb(253, 174, 107); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(123, 85, 52);"><title>Public Service:\
	'+t[2]+'</title></rect><text x="16" y="4.998017182864542" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0, 0, 0);">Public Service: '+t[2]+'</text></g></g></g></g></svg>'


	// put in the updated sanky chart
	$("#sankey_svg").replaceWith(sanky);

	const text = '<p id="madlib">'+t[0]+' of your tuition was spent on tuition goes toward intruction. Of that, '+t[7]+' was spent on salaries and wages.</p>'

	$("#madlib").replaceWith(text);

	// scroll to it
	$('html,body').animate({scrollTop: $("#article").offset().top});
}

// number to money formatter
let money = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
  
	// These options are needed to round to whole numbers if that's what you want.
	//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
