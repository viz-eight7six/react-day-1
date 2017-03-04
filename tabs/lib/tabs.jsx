import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    };

    // this.clickTab = this.clickTab.bind(this);
    this.renderTab = this.renderTab.bind(this);
  }

  clickTab(idx) {
    this.setState({tabIndex: idx});
  }

  renderTab(idx) {
    let title = this.props.data[idx].title;
    let titleEl = idx === this.state.tabIndex ? (<b>{title}</b>) : title;
    return (
      <li key={idx} onClick={this.clickTab.bind(this, idx)}>{titleEl}</li>
    );
  }

  render() {
    let tabTitles = this.props.data.map((datum, i) => (
      this.renderTab(i)
    ));

    return (
      <header>
        <h3>Tabs</h3>
        <ul>
          {tabTitles}
        </ul>

        <article>
          <h3>Content</h3>
          {this.props.data[this.state.tabIndex].content}
        </article>
      </header>
    );
  }
}

export default Tabs;
