import Banner from '../Banner/Banner';
import CategoryTabs from '../ArticleCategory/CategoryTabs';
import CategoryResponsive from '../../components/CategoryResponsive/CategoryResponsive';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='d-none d-lg-block'>
                <CategoryTabs></CategoryTabs>
            </div>
            <div className='d-lg-none'>
                <CategoryResponsive/>
            </div>
        </div>
    );
};

export default Home;