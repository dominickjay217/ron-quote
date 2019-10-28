new Vue({
	el: '#app',
	data: {
		results: []
	},
	mounted() {

		axios.get("https://api.tvmaze.com/schedule?country=GB").then(response => {
			this.results = response.data
		})
	}
})