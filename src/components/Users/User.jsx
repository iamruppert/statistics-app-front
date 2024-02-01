const User = (props) => {
    const user = props.user;
    return ( <li> {user.firstname} {user.lastname} </li> );
}
export default User
