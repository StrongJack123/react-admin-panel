import './home.css';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../data/dummyData';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart title = "User Analytics" data = {userData} dataKey= "Date" grid={true} dataKeyUser="ActiveUsers"/>
    </div>
  )
}

export default Home;