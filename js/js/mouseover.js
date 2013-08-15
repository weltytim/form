function image_display (id){
	var value=id;
                var num = value.split("_");
                document.getElementById("image"+num[1]+"_1").style.display='none';
				document.getElementById("image"+num[1]+"_2").style.display='block';
		
	}
	
	function image_block (id){
	var value=id;
                var num = value.split("_");
                document.getElementById("image"+num[1]+"_2").style.display='none';
				document.getElementById("image"+num[1]+"_1").style.display='block';
		
	}