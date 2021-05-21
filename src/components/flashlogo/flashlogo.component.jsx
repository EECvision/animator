import styles from './flashlogo.module.css';
import { animated, useSpring } from 'react-spring';
// import useMeasure from 'react-use-measure';
import { selectFlash } from '../../state/nav/nav.selectors';
import { setFlash } from '../../state/nav/nav.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function FlashLogo({ children, flash, setFlash }) {

  // const [ref,{height, width}] = useMeasure();

  const { justifyContent, n } = useSpring({
    to: async (next, cancel) => {
      await next({ justifyContent: 'flex-start', n: 1 })
      await next({ justifyContent: 'flex-end', n: 0 })
    },
    from: { justifyContent: 'flex-start', n: 0 },
    config: { duration: 300 },
    reverse: flash,
    reset: false,
  });

  return (
    <animated.div  onMouseOver={()=> setFlash(true)} onMouseLeave={()=> setFlash(false)} style={{ justifyContent }} className={styles.flashBar}>
      <div className={styles.text}>{children}</div>
      <animated.div style={{
        width: n.to([0, 1], [0, 100]).to(n => `${n.toFixed(2)}%`),
        height: '1rem',
        position: 'absolute',
        background: '#4B9FE1'
      }} />
    </animated.div>
  )
}

const mapStateToProps = createStructuredSelector ({
  flash: selectFlash
})

const mapDispatchToProps = dispatch => ({
  setFlash: state => dispatch(setFlash(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashLogo);