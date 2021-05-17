import { useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import LinkItem from '../link-item/link-item.component';
import { Link } from 'react-router-dom';
import { LinkContext } from '../../state/link/link.context';
import { nextLink, previousLink } from '../../state/link/link.actions';

import styles from './project2.module.css';

const ProjectTwo = () => {

  const { dispatch, view, PROJECT } = useContext(LinkContext)

  return (
    <div className={styles.projectContainer}>
      <div style={{ position: 'fixed', top: '4rem', left: '4rem' }}>Two</div>
      <main className={styles.main}>
        <section id="overview" className={styles.description}>
          overview section
      </section>
        <section id="understanding" className={styles.description}>
          understanding section
      </section>
        <section id="design-process" className={styles.description}>
          design process section
      </section>
        <section id="layout" className={styles.description}>
          layout section
      </section>
        <section id="interaction" className={styles.description}>
          interaction section
      </section>
        <section id="evaluation" className={styles.description}>
          evaluation section
      </section>
        <section id="reflection" className={styles.description}>
          reflection section
      </section>
        <section >
          back to top
      </section>
      </main>

      <div className={styles.navbarContainer}>
        <nav className={styles.navbar}>
          <div>Try project</div>
          <LinkItem target="overview">Overview</LinkItem>
          <LinkItem target="understanding">Understanding</LinkItem>
          <LinkItem target="design-process">Design process</LinkItem>
          <LinkItem target="layout">Layout</LinkItem>
          <LinkItem target="interaction">Interaction</LinkItem>
          <LinkItem target="evaluation">Evaluation</LinkItem>
          <button onClick={() => scroll.scrollToTop()} className={styles.navlink}>
            back to top
          </button>
        </nav>
      </div>

      <div style={{ position: 'fixed', bottom: '4rem', right: '3rem' }}>
        <Link to={`./${PROJECT[view ? view - 1 : 3]}`}>
          <button onClick={() => dispatch(previousLink())}>-</button>
        </Link>
        {view + 1}
        <Link to={`./${PROJECT[view === 3 ? 0 : view + 1]}`}>
          <button onClick={() => dispatch(nextLink())}>+</button>
        </Link>
      </div>

    </div>
  )
}

export default ProjectTwo