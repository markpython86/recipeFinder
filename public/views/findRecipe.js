$(document).ready(function () {

	$(".js-example-tags").select2({
		tags: true,
		tokenSeparators: [',', ' ']
	})
	$('#account-form').ajaxForm({
		beforeSubmit: function (formData, jqForm, options) {
			console.log('asd',formData)
			return true
		},
		success: function (responseText, status, xhr, $form) {
			// console.log(responseText)
			if (status == 'success') showUser(responseText);
		},
		error: function (e) {
			console.log('e', e)
		}
		
	});


	var showUser = function (data) {
		console.log(data)
		$('#cards').empty()
		for (let index = 0; index < data.results.length; index++) {
		var title = data.results[index].title;
		var imageURL = data.baseUri+data.results[index].image;
		var servings = data.results[index].servings;
		var readyInMinutes = data.results[index].readyInMinutes;
		
		$('#cards').append(`<div class="row wow fadeIn">
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
		<hr class="mb-5">`)
			
		}
		
	}

});


'<div class="inline-countdown-promo__price text-center"><div class="inline-countdown-promo__discount-sale d-inline-block text-white d-flex flex-column text-left pb-2"><span class="price-section">
Regular&nbsp;
<span class="price old-price">$115</span></span> <span class="price-section">
with Promotion&nbsp;
<span class="price promo-price">$85</span></span></div></div>


'<div class="inline-countdown-promo__price text-center"><div class="inline-countdown-promo__discount-sale d-inline-block text-white d-flex flex-column text-left pb-2" style=" margin-bottom: -16px; "><span class="price-section" style=" margin-bottom: -18px; "> Regular&nbsp; <span class="price old-price" style=" text-decoration: line-through; ">$29</span></span> <span class="price-section"> with Promotion&nbsp; <span class="price promo-price">$19</span></span></div></div><div class="countdown-container countdown-container--left-arrow flex-grow-1 bg-light"><div><div class="countdown-header d-flex justify-content-lg-between justify-content-around"><div class="countdown-header__percentage" style=" color: #ff3072!important; ">25% OFF!</div> <div class="countdown-header__text">PROMO ENDS:</div></div></div> <div class="countdown-container__inner d-flex align-items-center justify-content-between"><!---->  <div class="countdown-base flex-grow-1"><div class="countdown-base__inner align-items-center d-flex text-center justify-content-between"><div class="countdown-base__col"><div class="countdown-base__number">12</div> <div class="countdown-base__label">Hours</div></div> <div class="countdown-base__col"><div class="countdown-base__number">02</div> <div class="countdown-base__label">Minutes</div></div> <div class="countdown-base__col"><div class="countdown-base__number">31</div> <div class="countdown-base__label">Seconds</div></div></div> </div> </div> </div>'