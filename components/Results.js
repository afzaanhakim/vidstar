import Thumbnail from './Thumbnail.js';

const Results = ({results}) => {

  const resultItem = results.map(result => (
    <Thumbnail key={result.id} result={result}/>
  ))
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 '>
      
      {resultItem}
    </div>
  )
}

export default Results
