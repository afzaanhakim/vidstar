

const HeaderItem = (props) => {

  const {Icon, title} = props
  return (
    <div className='flex flex-col items-center text-black cursor-pointer group w-12 sm:w-20 hover:text-white'>
      <Icon className='h-12 mb-1 c-red group-hover:animate-bounce'/>
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem
