import './featuredinfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <div className="featuredTitle">
                Revenue
            </div>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">
                    $2500
                </div>
                <div className="featuredMoneyRate">
                -4.4 <ArrowDownwardIcon className="featuredIcon negative"/> 
                </div>
            </div>
            <div className="featuredSub">
                Compared to Last month
            </div>
        </div>
        <div className="featuredItem">
            <div className="featuredTitle">
                Revenue
            </div>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">
                    $2500
                </div>
                <div className="featuredMoneyRate">
                -4.4 <ArrowDownwardIcon className="featuredIcon negative"/> 
                </div>
            </div>
            <div className="featuredSub">
                Compared to Last month
            </div>

        </div>
        <div className="featuredItem">
            <div className="featuredTitle">
                Revenue
            </div>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">
                    $2500
                </div>
                <div className="featuredMoneyRate">
                +4.4  <ArrowUpwardIcon className="featuredIcon"/> 
                </div>
            </div>
            <div className="featuredSub">
                Compared to Last month
            </div>
        </div>
    </div>
  )
}

export default FeaturedInfo