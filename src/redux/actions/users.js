import API from '../../Api'

export const setUsers = (items) => ({
    type: 'SET_USERS',
    payload: items,
});

export const fetchUsers = () => (dispatch) => {
    API.get('users')
        .then(
            ({data}) => 
            {
                dispatch(setUsers(data));
            }
        );
};