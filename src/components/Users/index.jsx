import User from "./User"
function Users(props) {
    const users = props.users;
    return (
        <ul> {users.map((user) => <User key={user.id} value={user.id} user={user}/> )} </ul> );
}
export default Users
