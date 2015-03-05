Titanium.UI.setBackgroundColor('#3399CC');
var win1 = Titanium.UI.createWindow({  
    title:'Window 1',
    backgroundColor:'#3399CC',
    modal: true, 
    exitOnClose: true
});
var win2 = Titanium.UI.createWindow({  
    title:'Window 2',
    backgroundimage:'KatieGregory.pictures.2/25/15.V_A8AA.jpeg',
    modal: true
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'To Window 2',
    window:win1
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'To Window 1',
    window:win2
});
var win1button = Titanium.UI.createButton({
	height: 70,
	Width: 120, 
	left: 100,
	right: 100,
	top: 60,
	color: '#FFFF33',
	title: 'Open Window 2',
	//Font: {
		//FontSize:18,
		//FontFamily; 'briol',
		//FontWeight; 'Bold',
		//FontColor; '#003300'
});
var win2button = Titanium.UI.createButton({
	height: 70,
	Width: 120, 
	left: 100,
	right: 100,
	top: 60,
	color: '#000099',
	title: 'Close Window 2',
	//Font: {
		//FontSize:18,
		//FontFamily: 'arial'
		//FontWeight:'Bold',
		//FontColor; '#003300'
});
var window1label = Titanium.UI.createLabel({
	color:'#660099',
	text:'Once in a Lifetime Occurrance',
	font:{fontSize:25,fontFamily:'Lato', Fontcolor: '#000033'},
	textAlign:'center',
	width:'auto'
});
var window2label = Titanium.UI.createLabel({
	color:'#660099',
	text:' Love It, Live It, Lead It',
	font:{fontSize:25,fontFamily:'Lato', Fontcolor: '#000033'},
	textAlign:'center',
	width:'auto'
});
win1button.addEventListener("click", function(e){
    if (!started) {
        _Window1();
        started = true;
      } 
});
 
win2button.addEventListener("click", function(e){
    if (started) {
        _Window1();
        started = false;
    }
});
var switchOrientation = Ti.UI.createView ({title: 'Make Landscape'});
switchOrientation.addEventListener ('click', rotateLayout) ;
var layout = Ti.UI.createView ({layout: 'vertical'});
layout.add(switchOrientation);
function rotateLayout () {
	win1.orientationModes = [Ti.UI.LANDSCAPE_Left];
	switchOrientation.hide () ;
}
var tabGroup = Titanium.UI.createTabGroup();
win1.add(window1label);
win1.add(win1button);
win2.add(window2label);
win2.add(win2button);
tabGroup.add(tab1);  
tabGroup.add(tab2);
win2.win (close);
win2.win (open);
win2.win = null;   

win.open();