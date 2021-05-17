import { Link } from 'react-scroll';
import styles from './link-item.module.css';
import { useState } from 'react';

const LinkItem = ({target, children}) => {
  const [active, setActive] = useState(null);
  return (
    <Link 
      style={{color: active ? 'red' : 'blue'}}
      className={styles.linkItem}
      activeClass="active"
      to={target}
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
      delay={500}
      onSetActive={()=> setActive(true)}
      onSetInactive={()=> setActive(false)}
      ignoreCancelEvents={false}
    >
      {children}
    </Link>
  )
}

export default LinkItem;

