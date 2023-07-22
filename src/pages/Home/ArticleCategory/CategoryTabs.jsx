
import { Container, Tab, Tabs } from 'react-bootstrap';
import Post from './Post';
import ArticleCard from '../Card/ArticleCard';
import EducationCard from '../Card/EducationCard';
import MeetupCard from '../Card/MeetupCard';
import JobCard from '../Card/JobCard';
import EditLocation from '../../components/EditLocation/EditLocation';
import RecommendGroup from '../../components/RecommendGroup/RecommendGroup';

const CategoryTabs = ({ user }) => {
    return (
        <Container className='d-flex justify-content-between gap-5'>
            
            <div className='w-75 '>
          
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="my-5 "
                    variant='underline'
                >
                    <Tab eventKey="home" title="All Posts(32)">
                        <ArticleCard />
                        <EducationCard />
                        <MeetupCard />
                        <JobCard />
                    </Tab>
                    <Tab eventKey="article" title="Article">
                        <ArticleCard />
                    </Tab>
                    <Tab eventKey="event" title="Event">
                        <MeetupCard />
                    </Tab>
                    <Tab eventKey="education" title="Education">
                        <EducationCard />
                    </Tab>
                    <Tab eventKey="job" title="Job">
                        <JobCard />
                    </Tab>
                </Tabs>
                
            </div>
        
            <div className='mt-5'>
                <Post user='Logged-in' />
                <div className='mt-5'>
                    <EditLocation user='Logged-in'/>
                </div>
                <div className='mt-5'>
                    <RecommendGroup user='Logged-in'/>
                </div>
            </div>
        </Container>
    );
};

export default CategoryTabs;