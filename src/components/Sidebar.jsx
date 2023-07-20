import paperPlane from '../assets/paper-plane.png'
import githubIcon from '../assets/github.png'

function Sidebar() {
  return (
    <div className='h-[600px] min-w-[300px] p-[48px] bg-slate-50 text-center rounded-lg flex flex-col'>
      <img src={paperPlane} alt='' className='w-[200px] mx-auto'/>
      <h1 className='text-4xl'>CV Generator</h1>

      <p className='mt-auto flex mx-auto'>mikemelchior
        <img src={githubIcon} alt='' className='w-[20px] ml-4' />
      </p>
    </div>
  )
}


export default Sidebar