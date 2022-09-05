import { Component } from 'react';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as AddIcon } from 'components/icons/search.svg';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <div>
        <SearchbarContainer>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <AddIcon width="15" height="15" />
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleChangeQuery}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchbarContainer>
      </div>
    );
  }
}

export default Searchbar;
