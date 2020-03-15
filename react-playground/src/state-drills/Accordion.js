import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    tab: []
  }
  state = {
    currentAccordionTab: 0
  }
  handleButtonClick() {
    console.log('button clicked')
  }
  renderButtons() {
    return this.props.tab.forEach((tab, index) => (
      <li>
        <button key={index} onClick={this.handleButtonClick}>
          {tab.title}
        </button>
      </li>
    ))
  }
  renderContent() {
    const currentTab = this.props.tab[0]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderButtons}
          {this.props.tab.length && this.renderContent()}
        </ul>
      </div>
    )
  }
}

export default Accordion;