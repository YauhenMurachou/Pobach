// Аргумент mapStateToProps является функцией, которая возвращает либо обычный объект, либо другую функцию.
//  Передача этого аргумента connect() приводит к подписке компонента-контейнера на обновления хранилища Redux.
//  Это означает, что функция mapStateToProps будет вызываться каждый раз, когда состояние хранилища изменяется.

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		followUsers: (userId) => {
// 			dispatch(followActionCreator(userId))
// 		},
// 		unfollowUsers: (userId) => {
// 			dispatch(unfollowActionCreator(userId))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersActionCreator(users))
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageActionCreator(pageNumber))
// 		},
// 		setTotalUsersCount: (totalUsersCount) => {
// 			dispatch(setTotalUsersCountActionCreator(totalUsersCount))
// 		},
// 		setIsFetching: (isFetching) => {
// 			dispatch(setIsFetchingActionCreator(isFetching))
// 		}
// 	}
// }

// После вызова функции connect() возвращается компонент высшего порядка???,
//  который можно использовать для оборачивания любого компонента React.
// Т.е. здесь в презентационный компонент UsersC
// в качестве пропсов попадают свойства, которые передаются в connect
// Connect эти функции вызывает сам и автоматом передаёт им state и диспатч
