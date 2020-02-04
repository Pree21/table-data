import React, { Component } from 'react';
import DataTable from './table/datatable';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      term: '',
      page: 1,
      SelectAllData: false,
      loading:false
    }
  }
  componentDidMount() {
    this.refresh();
    window.addEventListener('scroll', this.handleScroll);
  }

  refresh() {
    this.setState({ loading: true })
    const { data, page,term } = this.state;
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20&q=${term}`)
      .then(response => response.json())
      .then(res => {
        console.log('res', res);
        let newdata = data;
        for (let i = 0; i < res.length; i++) {
          newdata.push(res[i])
        }
        this.setState({
          page:page+1,
          data: newdata,
          SelectAllData: false,
          loading:false
        })
      })
  }
  handleScroll = () => {
    let marginBottom = document.body.scrollHeight - window.scrollY - window.innerHeight;
    if (marginBottom < 500 && this.state.loading === false) {
      this.refresh();
    }
  }
  handleSearch = (event) => {
    this.setState({
      term: event.target.value,
    },()=>this.refresh())
  }
  SelectAll = () => {
    this.setState({
      SelectAllData: !this.state.SelectAllData
    })
  }

  render() {
    const { data, term, SelectAllData,loading } = this.state;
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
            <table cellPadding='8' cellSpacing='0'>
              <thead>
                <tr>
                  <td>S.No</td>
                  <td><input type='checkbox' checked={SelectAllData} onClick={this.SelectAll} /> All </td>
                  <td>Image</td>
                  <td>Title</td>
                </tr>
              </thead>
              <tbody>{data.length > 0 && data.map((item, index) => <DataTable key={index}
                item={item} SelectAllData={SelectAllData} index={index+1} />)}
                {loading && <tr><td colSpan='4'><h3>Loading...</h3></td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
