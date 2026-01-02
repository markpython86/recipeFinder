$(document).ready(() => {
	$(".js-example-tags").select2({
		tags: true,
		tokenSeparators: [",", " "],
	});
	$("#account-form").ajaxForm({
		beforeSubmit: (formData, jqForm, options) => {
			console.log("asd", formData);
			return true;
		},
		success: (responseText, status, xhr, $form) => {
			// console.log(responseText)
			if (status == "success") showUser(responseText);
		},
		error: (e) => {
			console.log("e", e);
		},
	});

	var showUser = (data) => {
		console.log(data);
		$("#cards").empty();
		for (let index = 0; index < data.results.length; index++) {
			var title = data.results[index].title;
			var imageURL = data.baseUri + data.results[index].image;
			var servings = data.results[index].servings;
			var readyInMinutes = data.results[index].readyInMinutes;

			$("#cards").append(`<div class="row wow fadeIn">
		<!-- Grid column-->
		<div class="col-lg-5 col-xl-4 mb-4">
		  <!-- Featured image-->
		  <div class="view overlay rounded z-depth-1 fit-image"><img class="img-fluid" style="
			object-fit: cover !important;
			width: 100% !important;
			height: 178px;" src="${imageURL}" alt><a href="#" target="_blank"></a>
			<div class="mask rgba-white-slight"></div>
		  </div>
		</div>
		<!-- Grid column-->
		<!-- Grid column-->
		<div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
		  <h3 class="mb-3 font-weight-bold dark-grey-text"><strong>${title}</strong></h3>
		  <p class="grey-text">${servings}</p><p class="grey-text">${readyInMinutes}</p>
		  
		 <!-- <a class="btn btn-primary btn-md" href="https://mdbootstrap.com/education/tech-marketing/web-push-introduction/" target="_blank">Start tutorial<i class="fas fa-play ml-2"></i></a>
		</div>-->
		<!-- Grid column-->
		<!-- Grid row-->
		<hr class="mb-5">`);
		}
	};
});
