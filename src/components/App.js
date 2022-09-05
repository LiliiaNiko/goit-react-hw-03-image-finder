import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImagesGallery from './ImageGallery/ImagesGallery';
import Loader from './Loader/Loader';
import { AppContainer } from './App.styled';
import { FetchImages } from '../servises/pixabayApi';

export class App extends Component {
  state = {
    query: '',
    items: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  handleSearchbarSubmit = query => {
    this.setState({ query, page: 1, items: [] });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });

      FetchImages(this.state.query, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            items: [...prevState.items, ...data.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImagesGallery items={this.state.items} />
        {this.state.items.length !== 0 && <Button onClick={this.loadMore} />}
        {this.state.status === 'pending' && <Loader />}
        {this.state.status === 'rejected' && (
          <div>{this.state.error.message}</div>
        )}
      </AppContainer>
    );
  }
}
