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


export const setUser = (data) => ({
    type: 'SET_USER',
    payload: data,
});

export const fetchUser = (id) => (dispatch) => {
    API.get(`users/${id}`)
        .then(
            ({data}) => 
            {
                dispatch(setUser(data));
            }
        );
};