import { animateScroll as scroll } from 'react-scroll';
import LinkItem from '../link-item/link-item.component';
import { Link } from 'react-router-dom';
import { nextLink, previousLink } from '../../state/link/link.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProject, selectView } from '../../state/link/link.selectors';
import styles from './project2.module.css';
import { setLocation } from '../../state/nav/nav.actions';
import { useEffect } from 'react';

const ProjectTwo = ({ nextLink, previousLink, PROJECT, view, setLocation }) => {
  scroll.scrollToTop();

  useEffect(() => {
    setLocation('project')
  })

  return (
    <div className={styles.projectContainer}>
      <div className={styles.navbar}>
        <Link to='/work' className={styles.arrowLeft}>
          <i className="fas fa-arrow-left"></i>
        </Link>
        {/* <Navbar /> */}

        <Link className={styles.next} to={`./${PROJECT[view === 3 ? 0 : view + 1]}`}>
          <div onClick={() => nextLink()}>Up Next: {PROJECT[view === 3 ? 0 : view + 1]}</div>
        </Link>
      </div>

      <div style={{ position: 'fixed', top: '4rem', left: '3rem' }}>Two</div>
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
      </main>

      <div className={styles.sidebarContainer}>
        <nav className={styles.sidebar}>
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
      <Link className={styles.previous} to={`./${PROJECT[view ? view - 1 : 3]}`}>
          <div onClick={() => previousLink()}>Previous: {PROJECT[view ? view - 1 : 3]}</div>
      </Link>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  PROJECT: selectProject,
  view: selectView
})

const mapDispatchToProps = dispatch => ({
  previousLink: () => dispatch(previousLink()),
  nextLink: () => dispatch(nextLink()),
  setLocation: loc => dispatch(setLocation(loc))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTwo)