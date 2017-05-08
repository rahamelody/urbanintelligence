$('#wellsfargo').click(function(){

  	$('#details-wellsfargo').slideToggle();
  	console.log("hi");


});

$('#chase').click(function(){

  	$('#details-chase').slideToggle();
  	console.log("hi");


});

$('#spotify').click(function(){

  	$('#details-spotify').slideToggle();
  	console.log("hi");
});

$('#birchbox').click(function(){

  	$('#details-birchbox').slideToggle();
  	console.log("hi");
});

$('#blueapron').click(function(){

  	$('#details-blueapron').slideToggle();
  	console.log("hi");
});

$('#amazon').click(function(){

  	$('#details-amazon').slideToggle();
  	console.log("hi");
});

$('#google').click(function(){

  	$('#details-google').slideToggle();
  	console.log("hi");
});

checkboxes = document.getElementsByName('foo');
function toggle(source) {

  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
  
}

