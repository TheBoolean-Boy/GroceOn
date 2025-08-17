


const Heading = ({highlight, heading}) => {
  return (

    <div className='w-fit mx-auto'>

      <h1 className='md:text-5xl  text-3xl font-bold'>
        <span className=' text-orange-500'>{highlight}</span> {heading}
      </h1>

      <div className='w-34 h-1 bg-orange-500 md:mt-6 mt-3 ml-auto '></div>

    </div>

  )
}

export default Heading

