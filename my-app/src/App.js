import MyButton from './components/MyButton';
import MyApp from './components/MyApp';
import UserInfo from './components/UserInfo';
import ShoppingList from './components/ShoppingList';

export default function App() {

    return (
        <div>
            <h1>Hello, React!</h1>

            <UserInfo />
            <MyButton />
            <MyButton />
            <MyApp />
            <ShoppingList />
        </div>
    );
}
