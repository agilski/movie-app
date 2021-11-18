import Search from "../../components/Search"
import List from "../../components/List"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchMovieList } from "../../redux/action-creators"

function Home({ getMovieList, data, isLoading, isEmpty }) {
  const [page, setPage] = useState(1)
  const [searchValue, setSearchValue] = useState('avengers')

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if(!isEmpty) {
        setPage(page + 1)
      }
    }
  }
  
  useEffect(() => {
    loadMovieData()
  }, [page])

  function loadMovieData() {
    const params = {
      page,
      searchValue,
      nextPage: page === 1 ? false : true,
    }
    getMovieList(params)
  }

  function handleOnChange(e) {
    setSearchValue(e.target.value)
  }

  function handleOnSearch() {
    setPage(1)
  }

  return (
    <div>
      <Search 
        onChangeValue={(e) => handleOnChange(e)} 
        onClickSearch={handleOnSearch} 
      />
      <List movieData={data}/>
      {/* {isLoading ? <div>loading ...</div> : null} */}
      {isEmpty ? <div>no more data</div> : null}
    </div>
  )
}

const mapStateToProps = ({ data = [], isLoading, isEmpty }) => ({
  data,
  isLoading,
  isEmpty,
})

const mapDispatchToProps = (dispatch) => ({
  getMovieList: (params) => dispatch(fetchMovieList(params))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
