import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { typingButton, typingCompute } from 'containers/actions';
import { randomCompute } from 'utils/math';
import { setIntervalXTimes } from 'utils';

class MonkeyComputes extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyPress(e) {
    const { launchMonkeyCompute } = this.props;
    // 32 is code for space bar
    if (e.keyCode !== 32) return;
    setIntervalXTimes(launchMonkeyCompute, 750, 20);
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  launchMonkeyCompute: () => {
    const randomComputation = randomCompute();
    dispatch(typingButton(randomComputation));
    dispatch(typingCompute(randomComputation));
  },
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(MonkeyComputes);
