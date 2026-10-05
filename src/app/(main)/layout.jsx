import NavBar from '@/components/Shared/NavBar'


export default function layout({children}) {
  return (
    <div>
      <>
        <NavBar></NavBar>
        {children}
      </>
    </div>
  )
}
