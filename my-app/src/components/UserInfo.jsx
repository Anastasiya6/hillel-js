import avatar from '../assets/avatar.jpg';

const user = {
    name: 'Anastasiya',
    imageSize: 120,
};

export default function UserInfo( user ) {

    return (
        <div>
            <h2>{user.name}</h2>
            <img
                className="avatar"
                src={avatar}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                }}
            />
        </div>
    );
}