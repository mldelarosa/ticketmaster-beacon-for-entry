function doAJAX(url){
	$.ajax({
		url: url
	}).then(function(data) {
		$.each(data, function(i, item) {
			var $a = item.didAttend;
			$("#status").setValue("Status: " + changed);
			/*
			$("#results").append(
				"<h2>NEXT VISITOR:</h2>" +
				"<p>Visitor ID: " + item.visitor.id + "</p>" +
				"<p>Visitor last name: " + item.visitor.lastName + "</p>" +
				"<p>Visitor first name: " + item.visitor.firstName + "</p>" +
				"<p>Visitor Username: " + item.visitor.username + "</p>" +
				//"<p>Visitor Password: " + item.visitor.password + "</p>" +
				
				"<p id=attended" + i + ">Attended? " + item.didAttend + "</p>" +
				
				"<p>Event ID: " + item.event.id + "</p>" +
				"<p>Event name: " + item.event.name + "</p>"
			);	//end of .append
			
			//change the css color of the attended <p>
			if($a = "true")
				$("#attended" + i).css("background-color", "green");
			else
				$("#attended" + i).css("background-color", "red");
			*/

		}) //end of .each item
	});	//end of .then
};	//end of doAJAX



//******************************************************//
//		poll the database for changes to didAttend		//
//******************************************************//

(function poll() {
	setTimeout (function() {
		$ajax({url:"/BeaconServlet/api/rest/Roster/Event/9", success: function(data) {
			$(document).ready(doAJAX("/BeaconServlet/api/rest/Roster/Event/9"));
		}, dataType: "json", complete: poll });
	}, 30000); //end of setTimeout
})(); //end of poll


//$(document).ready(doAJAX("/BeaconServlet/api/rest/Roster/Event/9"));	//only event 9 has tuples for now
//$(document).ready(doAJAX("/BeaconServlet/api/rest/Roster/Event/2"));

