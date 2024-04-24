// import { Outlet } from 'react-router-dom'
// import { Footer, Header } from '../components'
import { Home } from '../routes' // Aqui vão os componentes
import styles from './MainLayout.module.css'

export const MainLayout = () => {
  return (
    <>

      <main className={styles.Main}>
        < Home />
      </main>

    </>
  )
}