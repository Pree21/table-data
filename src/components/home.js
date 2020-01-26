import React, { Component } from 'react';
import DataTable from './table/datatable';
import InfiniteScroll from 'react-infinite-scroll-component';

const searchingFor = (term) => {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term
  }
}
class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      term: '',
      page: 1,
      SelectAllData: false
    }
  }
  componentDidMount() {
    this.refresh(1);
  }

  refresh(page) {
    const { data } = this.state;
    console.log('refresh')
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${page}`)
      .then(response => response.json())
      .then(res => {
        console.log('res', res)
        let newdata = data;
        for (let i = 0; i < res.length; i++) {
          newdata.push(res[i])
        }
        this.setState({
          data: newdata,
          SelectAllData: false,
          page
        })

      })
  }
  handleSearch = (event) => {
    this.setState({
      term: event.target.value,
    })
  }
  SelectAll = () => {
    this.setState({
      SelectAllData: !this.state.SelectAllData
    })
  }

  fetchData() {
    console.log('fetchData');
    let page = this.state.page;
    page++;
    this.refresh(page)
    this.setState({ page })
  }

  render() {
    const { data, term, SelectAllData } = this.state;
    return (
      <div className="app">
        <header>
          <h1 className="logo">Data Table</h1>
        </header>
        <div className="main">
          <div className="search-form">
            <form>
              <input type="text" className="text" placeholder="Search by title" onChange={this.handleSearch} />
            </form>
          </div>
          <div className="">
            <InfiniteScroll
              dataLength={data.length} //This is important field to render the next data
              next={() => this.fetchData()}
              hasMore={true}
              style={{ width: '100%' }}
              refreshFunction={() => this.refresh(1)}
              pullDownToRefresh={true}>
              <table cellPadding='8' cellSpacing='0'>
                <thead>
                  <tr>
                    <td>S.No</td>
                    <td><input type='checkbox' checked={SelectAllData} onClick={this.SelectAll} /> All </td>
                    <td>Image</td>
                    <td>Title</td>
                  </tr>
                </thead>
                <tbody>{data.length > 0 && data.filter(searchingFor(term)).map((item, index) => <DataTable key={index}
                  item={item} SelectAllData={SelectAllData} />)}
                </tbody>
              </table>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
