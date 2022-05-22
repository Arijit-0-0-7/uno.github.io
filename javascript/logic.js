/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var list_of_otps=[];
var list_of_player;
function tocharArray(str){
    var arr=[];
    for(var i=0;i<str.length;i++)
        arr[i]=str[i];
    return arr;
}
function room_creation(){
    var dlg=document.getElementById("room_dialog");
        dlg.show();
    document.getElementById('make_room').onclick=function(){
        dlg.close();
        make_room();
    };
    document.getElementById('join_room').onclick=function(){
        dlg.close();
        join_room();
    };
}   
function make_room(){
    var n=generate_code();
    if(n===-1){
        alert("Can't generate code......because you are the only player here.");
    }
    else{
        alert("share the code "+n);
        list_of_otps.push(n);
        join_room();
    }
}
function no_of_players(){
    var no_of_players = prompt("Enter the number of players (minimum : 2 players)");
    return parseInt(no_of_players);
}
function generate_code(){
    var n = no_of_players();
    if(n<=1){
        alert("Please bring your friends!!!!");
        return -1;
    }
    else{
        var myrandom=Math.round(Math.random()*(99999999-10000000))+10000000;
        return myrandom;
    }
}
function getName(){
    var name=prompt("Enter your name");
    return name;
}
function join_room(){
    var code=prompt("Enter your code");
    var flag=0;
    for(var i=0;i<list_of_otps.length;i++){
        if(code==list_of_otps[i])
            flag=1;
    }
    if(flag==1){
        var name=getName();
        var list_of_players=list_of_player;
        list_of_players.set(name,code);
        final_player_list();
    }
    else{
        alert("Enter correct code");
        join_room();
    }
}
function final_player_list(){
    var str="";
    var n = no_of_players();
    var list = list_of_player;
	for(var i=0;i<n;i++)
		str=str+list.next().value+",";
    var y=confirm(str);
    if(y==true)
       arrange_players(str);
    else
        final_player_list();
    
}
function arrange_players(str){
    var n = no_of_players();
	var deck=cardShuffle();
	var d;
    switch(n){
        case 2 :{
            d=twoPlayerArrangement(str,deck);
            break;
        }
        case 3 :{
            d=threePlayerArrangement(str,deck);
            break;
        }
        case 4 :{
            d=fourPlayerArrangement(str,deck);
            break;
        }
        case 5 :{
            d=fivePlayerArrangement(str,deck);
            break;
        }
        case 6 :{
            d=sixPlayerArrangement(str,deck);
            break;
        }
        case 7 :{
            d=sevenPlayerArrangement(str,deck);
            break;
        }
        case 8 :{
            d=eightPlayerArrangement(str,deck);
            break;
        }
    }
	strartTurn(d);
}
function twoPlayerArrangement(str,deck){
    var arr=new Array(2);
    var name=str.split(",");
    arr.push("rc01");
    arr.push("rc21");
    var d1=playerDeck("rc01",name,0,deck);
    setName("rc01",name,0);
    var d2=playerDeck("rc21",name,1,d1);
    setName("rc21",name,1);
	remaingDeck(d2);
	return arr;
}
function threePlayerArrangement(str,deck){
    var arr=new Array(3);
    var name=str.split(",");
    arr.push("rc10");
    arr.push("rc12");
    arr.push("rc21");
    var d1=playerDeck("rc10",name,0,deck);
    setName("rc10",name,0);
    var d2=playerDeck("rc12",name,1,d1);
    setName("rc12",name,1);
    var d3=playerDeck("rc21",name,2,d2);
    setName("rc21",name,2);
	remaingDeck(d3);
	return arr;
}
function fourPlayerArrangement(str,deck){
    var arr=new Array(4);
    var name=str.split(",");
    arr.push("rc10");
    arr.push("rc12");
    arr.push("rc21");
    arr.push("rc01");
    var d1=playerDeck("rc10",name,0,deck);
    setName("rc10",name,0);
    var d2=playerDeck("rc12",name,1,d1);
    setName("rc12",name,1);
    var d3=playerDeck("rc21",name,2,d2);
    setName("rc21",name,2);
    var d4=playerDeck("rc01",name,3,d3);
    setName("rc01",name,3);
	remaingDeck(d4);
	return arr;
}
function fivePlayerArrangement(str,deck){
    var arr=new Array(5);
    var name=str.split(",");
    arr.push("rc10");
    arr.push("rc12");
    arr.push("rc21");
    arr.push("rc00");
    arr.push("rc02");
    var d1=playerDeck("rc10",name,0,deck);
    setName("rc10",name,0);
    var d2=playerDeck("rc12",name,1,d1);
    setName("rc12",name,1);
    var d3=playerDeck("rc21",name,2,d2);
    setName("rc21",name,2);
    var d4=playerDeck("rc00",name,3,d3);
    setName("rc00",name,3);
    var d5=playerDeck("rc02",name,4,d4);
    setName("rc02",name,4);
	remaingDeck(d5);
	return arr;
}
function sixPlayerArrangement(str,deck){
    var arr=new Array(6);
    var name=str.split(",");
    arr.push("rc00");
    arr.push("rc02");
    arr.push("rc10");
    arr.push("rc12");
    arr.push("rc20");
    arr.push("rc22");
    var d1=playerDeck("rc00",name,0,deck);
    setName("rc00",name,0);
    var d2=playerDeck("rc02",name,1,d1);
    setName("rc02",name,1);
    var d3=playerDeck("rc10",name,2,d2);
    setName("rc10",name,2);
    var d4=playerDeck("rc12",name,3,d3);
    setName("rc12",name,3);
    var d5=playerDeck("rc20",name,4,d4);
    setName("rc20",name,4);
    var d6=playerDeck("rc22",name,5,d5);
    setName("rc22",name,5);
	remaingDeck(d6);
	return arr;
}

function sevenPlayerArrangement(str,deck){
    var arr=new Array(7);
    var name=str.split(",");
    arr.push("rc00");
    arr.push("rc02");
    arr.push("rc10");
    arr.push("rc12");
    arr.push("rc20");
    arr.push("rc22");
    arr.push("rc21");
    var d1=playerDeck("rc00",name,0,deck);
    setName("rc00",name,0);
    var d2=playerDeck("rc02",name,1,d1);
    setName("rc02",name,1);
    var d3=playerDeck("rc10",name,2,d2);
    setName("rc10",name,2);
    var d4=playerDeck("rc12",name,3,d3);
    setName("rc12",name,3);
    var d5=playerDeck("rc20",name,4,d4);
    setName("rc20",name,4);
    var d6=playerDeck("rc22",name,5,d5);
    setName("rc22",name,5);
    var d7=playerDeck("rc21",name,6,d6);
    setName("rc21",name,6);
	remaingDeck(d7);
	return arr;
}
function eightPlayerArrangement(str,deck){
    var arr=new Array(8);
    var name=str.split(",");
    arr.push("rc00");
    arr.push("rc02");
    arr.push("rc10");
    arr.push("rc12");
    arr.push("rc20");
    arr.push("rc22");
    arr.push("rc21");
    arr.push("rc01");
    var d1=playerDeck("rc00",name,0,deck);
    setName("rc00",name,0);
    var d2=playerDeck("rc02",name,1,d1);
    setName("rc02",name,1);
    var d3=playerDeck("rc10",name,2,d2);
    setName("rc10",name,2);
    var d4=playerDeck("rc12",name,3,d3);
    setName("rc12",name,3);
    var d5=playerDeck("rc20",name,4,d4);
    setName("rc20",name,4);
    var d6=playerDeck("rc22",name,5,d5);
    setName("rc22",name,5);
    var d7=playerDeck("rc21",name,6,d6);
    setName("rc21",name,6);
    var d8=playerDeck("rc01",name,7,d7);
    setName("rc01",name,7);
	remaingDeck(d8);
	return arr;
}
//card shuffle.................................................
//---------------------------------------------------------------
//---------------------------------------------------------------
//var deck=[];
function card_pack(){
	var deck=[];
    var card13=['0','1','2','3','4','5','6','7','8','9','a','r','b'];
    var color4=['r','g','b','y'];
    var special2=['w','c'];
    for(var i=0;i<card13.length*8;i++){
        for(var j=0;j<color4.length*2;j++){
            var card=color4[j%4]+card13[i%13];
            deck.push(card);
        }
    }
    for(var k=0;k<special2.length*4;k++){
        deck.push(special2[k%2]);
    }
    var pack=deck;
    return pack;
}
function cardShuffle(){
    var pack=card_pack();
    for(var i=pack.length-1;i>=0;i--){
        var j=Math.random()*i;
        var temp=pack[i];
        pack[i]=pack[j];
        pack[j]=temp;
    }
    return pack;
}
//---------------------------------------------------------------
//---------------------------------------------------------------
function setName(str,arr,i){
	setChildAttribute(str,"div",'id','name',i);
	setNewAttr(str,"div",'class','names',i);
    setText(arr[i],'name');
}
function createChild(parentTagId,ChildTag){
	var parent=document.getElementById(parentTagId);
	var child=document.createElement(ChildTag)
	parent.appendChild(child);
}
function setChildAttribute(parentTagId,ChildTag,childAttName,childAttValue,i)
{
	createChild(parentTagId,ChildTag);
	//var parent=document.getElementById(parentTagId);
	setNewAttr(parentTagId,childAttName,childAttValue,i);
}
function setNewAttr(parentTagId,childAttName,childAttValue,i){
	var parent=document.getElementById(parentTagId);
	parent.children[i].setAttribute(childAttName,childAttValue);
}
function setText(text,tagId){
	var tagText=document.createTextNode(text);
	var x=document.getElementById(tagId);
	x.appendChild(tagText);
}
//----------------------------------------------
//----------------------------------------------
function designCard_inList(p,Deck,i,card){
	setChildAttribute(Deck,'div','class','card',0);
    setNewAttr(Deck,'id',card+"+"+(p+i),1); 
	setChildAttribute(card,'div','class','cardHead',0);
	setChildAttribute(card,'div','class','cardBody',1);
	setChildAttribute(card,'div','class','cardFoot',2);
            return document.getElementById(card);
}
function playerDeck(coordinate,arr,p,deck){
	setChildAttribute(coordinate,'ul','id',arr[p]);
    for(var i=0;i<7;i++){
        var card=deck.pop();
		setChildAttribute(arr[p],'li','id',card);
		appendColorTextCard(p*7,card,i);
    }
	return deck;
}
function appendColorTextCard(p,card,i){
	if(card.length==1){
            var divCard=designCard_inList(p,card,i,card);
            divCard.style.zIndex=i+1;
            var text="";
            if(card=='w')
                text='+4';
            else if(card=='c')
                text='C';
			setText(text,'cardBody');
            divCard.style.backGround='black';
        }
        else{
            var DivCard=designCard_inList(p,card,i,card);
            DivCard.style.zIndex=i+1;
            var cards=tocharArray(card);
            var tex="";
            switch(cards[1]){
                case 'a':{
                        tex='+2';
                        break;
                }
                case 'r':{
                        tex='R';
                        break;
                }
                case 'b':{
                        tex='X';
                        break;
                }
                default :{
                        tex=cards[1];
                        break;
                }
                    
            }
			setText(tex,'cardHead');
			setText(tex,'cardFoot');
            switch(cards[0]){
                case 'r':{
                     DivCard.style.backgroundColor="red";
                     break;
                }
                case 'b':{
                     DivCard.style.backgroundColor="blue";
                     break;
                }
                case 'g':{
                     DivCard.style.backgroundColor="green";
                     break;
                }
                case 'y':{
                     DivCard.style.backgroundColor="yellow";
                     break;
                }
            }
        }
}
function remaingDeck(deck){
    var n=deck.length;
	setChildAttribute("rc11","div",'id','remainingCards',0);
	setChildAttribute("rc11","div",'id','dropbox',1);
    setChildAttribute("remainingCards","ul",'id','gameDeck',0);
    for(var i=0;i<n;i++){
        var card=deck.pop();
		setChildAttribute("gameDeck",'li','id',card);
		appendColorTextCard((120-deck.length+1),card,i);
    }
	drawFirstCard(card)
}
function drawFirstCard(card){
	var drawBox=document.getElementById('dropbox');
	setChildAttribute('dropbox','ul','id','dropCardList',0);
	var draw=document.getElementById('gameDeckList');
	appendCard(card,'gameDeckList','dropCardList');
}
function appendCard(card,newParentId,oldParentId){
	var destination=document.getElementById(newParentId);
	var source=document.getElementById(oldParentId);
	source.removeChild(document.getElementById(card));
	createChild(destination,designCard_inList(destination,0,card));
	setColorText(destination,card,0);
}
//start game.................
//...........................
function strartTurn(str){
	eachturn(str);
}
function getCoordinate(str){
	var coordinate=tocharArray(str);
	var a=new Array(2);
	a.push(coordinate[2]);
	a.push(coordinate[3])
	return a;
}
function eachturn(str){
	for(var i=0;i<str.length;i++){
		var arr=getCoordinate(str[i]);
		var x=parseInt(arr[0]);
		var y=parseInt(arr[1]);
		for (var i = 0; i < 3; i++){
            if(x==0 && y==i);
        }
        for (var i = 1; i < 3; i++){
            if(x==i && y==2);
        }
 		for (var i = 1; i >= 0; i--){
			if(x==2 && y==i);
        }
		for (var i = 1; i > 0; i--){
			if(x==i && y==0);
        }
	}
}
function turn(str){
	var arr=getCoordinate(str);
	x=parseInt(arr[0]);
	y=parseInt(arr[1]);
	for (var i=0;i<3; i++){
        if(x==0 && y==i){
			var playerDraw=getPlayerCardName("rc"+str);
			var gameDeck=getGameDeckCardName("rc11");
		}
    }
    for (var i=1;i<3; i++){
        if(x==i && y==2);
    }
 	for (var i=1;i>=0; i--){
		if(x==2 && y==i);
    }
	for (var i=1;i>0; i--){
		if(x==i && y==0);
    }		
}
function getPlayerCardName(str){
	var coordinate=document.getElementById(str);
	var playerCard=coordinate.children[0];
	var noOfCardWithPlayer=playerCard.childElementCount;
	for(var i=0;i<noOfCardWithPlayer;i++){
		var cardList=playerCard.children[i];
		var card=cardList.children[0];
		var name=card.id;
	}
	
}
function appendToDrawBox()
{
	var drawbox=document.getElementById("rc11");
	
}
//...........
function getGameDeckCardName(str)
		//{
	var coordinate=document.getElementById(str);
	var Deck=coordinate.children[0];
	var CardList=Deck.children[0];
	var drawCard=coordinate.children[1];
	
	var noOfCardWithPlayer=playerCard.childElementCount;
	for(var i=0;i<noOfCardWithPlayer;i++){
		var cardList=playerCard.children[i];
		var card=cardList.children[0];
		var name=card.id;
	}
	
}
		
// JavaScript Document
