//A reducer is a function that accepts a state which must be equal to something and action
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) =>  {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
            case 'CREATE':
                return posts;
        default:
            return posts;
    }
}