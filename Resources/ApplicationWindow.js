function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'fff'
	});
	
	// Create a View. 
	var view1 = Titanium.UI.createView({
		layout: 'vertical',
   		top: '3%',
   		left: '5%',
  		width: '90%',
  		height: '80%',
   		backgroundColor:'019875'
	});
	
	self.add(view1);

	// Create a Label.
	var label1 = Ti.UI.createLabel({
		text : 'PANTONE',
		color : 'fff',
		font: { fontSize: 58, fontFamily: 'Helvetica Neue Bold' }, 		
		top : '5%'
		
	});
	
	// Add to the parent view.
	view1.add(label1);
	
	var label2 = Ti.UI.createLabel({
		text : 'Giving you the best colors.',
		color : 'fff',
		font: { fontSize: 30, fontFamily: 'Helvetica Neue Bold' }, 		
		top : '15%',
		textAlign : 'center'
	});

	view1.add(label2);
	
	var label3 = Ti.UI.createLabel({
		text : 'Color of the Year 2013: Emerald',
		color : '019875',
		font : { fontSize: 12, fontFamily: 'Helvetica Neue Bold' },
		top: '93%'
	});
	
	self.add(label3);
	
	var button = Ti.UI.createButton({
		height:'85%',
		width:400,
		title:L('openWindow'),
		top: 90,
		color:'ddfff7',
		font: { fontSize: 38, fontFamily: 'Helvetica Bold'}
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			     backgroundGradient: {
        			type: 'linear',
        			startPoint: { x: '50%', y: '0%' },
        			endPoint: { x: '50%', y: '100%' },
        			colors: [ '99fee7', '015541']
    				}
		}));
	});
		
	return self;
};

module.exports = ApplicationWindow;