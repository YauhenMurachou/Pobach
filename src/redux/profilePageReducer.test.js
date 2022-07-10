import profilePageReducer, {addPostActionCreator} from "./profilePageReducer";

it('mew post should be created', () => {
	const state = {
		postsData: [
			{ message: 'Привет, как дела?', id: 1, likesCount: 0 },
			{ message: 'Hi! How are you?', id: 2, likesCount: 21 },
			{ message: 'Прывітанне, як твае справы?', id: 3, likesCount: 16 }
		]
	};
	const action = addPostActionCreator('new post with test');
	const newState = profilePageReducer(state, action)

	expect(newState.postsData.length).toBe(4)
})

it('identity posts', () => {
	const state = {
		postsData: [
			{ message: 'Привет, как дела?', id: 1, likesCount: 0 },
			{ message: 'Hi! How are you?', id: 2, likesCount: 21 },
			{ message: 'Прывітанне, як твае справы?', id: 3, likesCount: 16 }
		]
	};
	const action = addPostActionCreator('new post with test');
	const newState = profilePageReducer(state, action)

	expect(newState.postsData[3]).toBe('new post with test')
})

