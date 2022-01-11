
import { useRouter } from "next/router";

const HeaderItem = (props) => {
const router = useRouter();
  const {Icon, title, data} = props
  
  return (
    <div onClick={() => router.push(`/?genre=${data}`)} className='flex flex-col items-center text-black cursor-pointer group w-12 sm:w-20 hover:text-white active:text-red'>
      <Icon className='h-12 mb-1 c-red group-hover:animate-bounce '/>
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem
