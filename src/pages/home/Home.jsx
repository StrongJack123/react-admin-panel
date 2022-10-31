import './home.css';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../data/dummyData';
import WidgetSm from '../../components/widgetSm/widgetSm';
import WidgetLg from '../../components/widgetLg/widgetLg';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart title = "User Analytics" data = {userData} dataKey= "Date" grid={true} dataKeyUser="ActiveUsers"/>
      <div className="homewidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;