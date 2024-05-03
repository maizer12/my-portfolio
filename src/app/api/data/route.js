export async function GET(req) {
	const user = {
		name: 'ivan',
		age: 20,
		sex: 'man',
	}

	return new Response(JSON.stringify(user))
}
