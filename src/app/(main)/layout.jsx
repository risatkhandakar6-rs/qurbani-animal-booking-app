import Footer from '@/components/Shared/Footer'
import NavBar from '@/components/Shared/NavBar'


export default function layout({children}) {
  return (
    <div>
      <>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
      </>
    </div>
  )
}
