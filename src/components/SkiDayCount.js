import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import PropTypes from 'prop-types';

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%');
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal);
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (

		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
				<Calendar />
				<span> Days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake />
				<span>Days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain />
				<span>Days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(total, goal)}
				</span>
			</div>
		</div>
)

SkiDayCount.defaultProps = {
	total: 50,
	powder: 10,
	backcountry: 15,
	goal: 50
}

SkiDayCount.propTypes = {
	total: PropTypes.number,
	powder: PropTypes.number,
	backcountry: PropTypes.number,
	goal: PropTypes.number,	
}