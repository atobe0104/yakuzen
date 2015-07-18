function chart() {
	var type01_value = 1;
	var type02_value = 1;
	var type03_value = 1;
	var type04_value = 1;
	var type05_value = 1;
	var type06_value = 1;

	for (var i=1 ; i<=42 ; i++){
		var value_plus = $("[name=checkbox"+ i +"]:checked").val();
		if(value_plus == undefined){
			value_plus = 0;
		}
		var plus = parseInt(value_plus);
		if(i <7){
			var type01_value = eval(type01_value + plus);  // eval関数で数値化する
		}else if(i < 14){
			var type02_value = eval(type02_value + plus);  // eval関数で数値化する
		}else if(i < 21){
			var type03_value = eval(type03_value + plus);  // eval関数で数値化する
		}else if(i < 28){
			var type04_value = eval(type04_value + plus);  // eval関数で数値化する
		}else if(i < 35){
			var type05_value = eval(type05_value + plus);  // eval関数で数値化する
		}else if(i < 42){
			var type06_value = eval(type06_value + plus);  // eval関数で数値化する
		}
	}
	var values = [type01_value, type02_value, type03_value, type04_value, type05_value, type06_value];
	var max_value =Math.max.apply(null, values);
	if(type01_value > 1 || type02_value > 1 || type03_value > 1 || type04_value > 1 || type05_value > 1 || type06_value > 1){
		$('.user_type_wrap').css('display','block');
	}else{
		$('.user_type_wrap').css('display','none');
	}

	if(type01_value == max_value && type01_value > 1){
		$('#user_type01').addClass('true_type');
	}else{
		$('#user_type01').removeClass('true_type');		
	}
	if(type02_value == max_value && type02_value > 1){
		$('#user_type02').addClass('true_type');
	}else{
		$('#user_type02').removeClass('true_type');		
	}
	if(type03_value == max_value && type03_value > 1){
		$('#user_type03').addClass('true_type');
	}else{
		$('#user_type03').removeClass('true_type');		
	}
	if(type04_value == max_value && type04_value > 1){
		$('#user_type04').addClass('true_type');
	}else{
		$('#user_type04').removeClass('true_type');		
	}
	if(type05_value == max_value && type05_value > 1){
		$('#user_type05').addClass('true_type');
	}else{
		$('#user_type05').removeClass('true_type');		
	}
	if(type06_value == max_value && type06_value > 1){
		$('#user_type06').addClass('true_type');
	}else{
		$('#user_type06').removeClass('true_type');		
	}
	var data = {
	    labels: ["気虚","気滞","血虚","血オ","陰虚","痰湿"],
	    datasets: [
	        {
	            label: "Qiita Scouter",
	            fillColor: "rgba(200,0,0,0.2)",
	            strokeColor: "red",
	            pointColor: "red",
	            pointStrokeColor: "red",
	            pointHighlightFill: "red",
	            pointHighlightStroke: "red",
	            data: [type01_value, type02_value, type03_value,type04_value, type05_value,type06_value]
	        }
	    ]
	};
	var ctx = document.getElementById("radarChart").getContext("2d");
	var options = {};
	var radarChart = new Chart(ctx).Radar(data, options);
	var rader = chart.Radar(radarChartData, {
	  scaleShowLabels: true,  // 目盛を表示
	  pointLabelFontSize : 20 // ラベルを表示
	});
}
$(function() {
	var data = {
	    labels: ["気虚","気滞","血虚","血オ","陰虚","痰湿"],
	    datasets: [
	        {
	            label: "Qiita Scouter",
	            fillColor: "rgba(200,0,0,0.2)",
	            strokeColor: "red",
	            pointColor: "red",
	            pointStrokeColor: "red",
	            pointHighlightFill: "red",
	            pointHighlightStroke: "red",
	            data: [1,1,1,1,1,1]
	        }
	    ]
	};
	var ctx = document.getElementById("radarChart").getContext("2d");
	var options = {};
	var radarChart = new Chart(ctx).Radar(data, options);
	$("#cheakboxes").click(function(){
		chart();
	});
});