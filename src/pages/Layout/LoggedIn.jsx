
import CategoryTabs from '../Home/ArticleCategory/CategoryTabs';
import NavigationBar from '../Shared/Navbar/NavigationBar';

const LoggedIn = () => {
    return (
        <>
            <NavigationBar user='Logged-in' />
            <CategoryTabs user='Logged-in' />
        </>
    );
};

export default LoggedIn;