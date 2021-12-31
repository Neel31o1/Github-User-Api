class Github {
	constructor() {
		this.client_id = 'bb3bc6d093a27ddf6fa1'
		this.client_secret = 'cca5695c6ebc3554df15d6bc0dba65c5234b1269'
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		)

		const profile = await profileResponse.json()

		return {
			profile,
		}
	}
}
