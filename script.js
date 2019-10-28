new Vue({
	el: '#app',
	data() {
		return {
			info: null
		}
	},
	mounted() {
		axios
			.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/1`)
			.then(response => (this.info = response.data[0]))
			.catch(error => {
				console.log(error)
				this.error = true
			})
			.finally(() => this.loading = false)
	}
})