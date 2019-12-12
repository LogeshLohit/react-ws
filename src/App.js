import React from 'react';
import './App.css';
import Table from './components/Table';
import AddHero from './components/AddHero';
import Display from './liftup/display';
import RenderTest from './stateless-comp-test/RenderTest';
import SetStateTest from './components/SetStateTest';
import ButtonCounter from './hoc/ButtonCounter';
import HoverCounter from './hoc/HoverCounter';
import ButtonCounterRP from './renderprops/ButtonCounterRP';
import IncrementCounter from './renderprops/incrementCounterRP';
import HoverCounterRP from './renderprops/HoverCounterRP';
// import ShoppingProvider from './shopping-cart/ShoppingProvider';
// import ShoppingState from './shopping-cart/ShoppingState';
import IssueDataProvider from './issue-tracker/IssueDataProvider';
import { IssueContext } from './issues-tracker/IssueContext';
import InfoProvider from './context-info/InfoProvider';
import { InfoContext } from './context-info/InfoContext';
import InfoConsumer from './context-info/InfoConsumer';
import ShoppingProvider from './issue-tracker/ShoppingProvider';
import ShoppingState from './issue-tracker/ShoppingState';
import IssueProvider from './issues-tracker/IssueProvider';
import IssuesTable from './issues-tracker/IssuesTable';
import AddIssue from './issues-tracker/AddIssue';
class App extends React.Component {
  state = {
    heros: [
      {
        name: "Ironman",
        power: "Brain"
      },
      {
        name: "Captain America",
        power: "Leader"
      }
    ]
  }

  removeHero = (heroId) => {
    this.setState({ heros: this.state.heros.filter((h, index) => heroId !== index) })
  }

  addHero = (hero) => {
    console.log("add hero called" + JSON.stringify(hero))
    // this.state.heros.push(hero);
    this.setState({ heros: [...this.state.heros, hero] })
    this.state.heros.map(h => console.log(h.name))
    //console.log("after adding hero: "+t)
  }
  render() {
    return (
      <div>
        {/* <SetStateTest /> */}
        {/* <RenderTest /> */}
        {/* <Display /> */}
        {/* <Table heros={this.state.heros} removeHero={this.removeHero} />
        <AddHero addHero={this.addHero} /> */}



        {/* hoc demo */}
        {/* <ButtonCounter />
        <HoverCounter /> */}
        {/* <MouseTracker></MouseTracker> */}


        {/* RENDER PROPS DEMO */}
        {/* <IncrementCounter display={(counter, incrementCounter, setInitialValue) =>
          (<ButtonCounterRP intialValue={5} counter={counter} incrementCounter={incrementCounter} setInitialValue={setInitialValue} />)} />
        <IncrementCounter display={(counter, incrementCounter) =>
          (<HoverCounterRP intialValue={10} counter={counter} incrementCounter={incrementCounter} />)} /> */}


        {/* SHOPPING CART CONTEXT TEST */}
        {/* <ShoppingProvider>
            <ShoppingState></ShoppingState>
          </ShoppingProvider> */}


        {/* ISSUE TRACKER CONTEXT TEST */}
        {/* <IssueDataProvider><IssueContext.Consumer>
          {(issue) => <div>This is {issue}{console.log(issue)}</div>}
        </IssueContext.Consumer>
        </IssueDataProvider> */}


        {/* <InfoProvider>
          <InfoConsumer></InfoConsumer>
        </InfoProvider> */}


        {/* ISSUES TRACKER FROM GITHUB */}
        {/* <IssueProvider>
          <IssuesTable />
          <IssueContext.Consumer>
            {
              values => {
                if (values.showAddIssueFrame)
                  return <div>Add Issue Component here!</div>
              }}
          </IssueContext.Consumer>
        </IssueProvider> */}
        <IssuesTable />

        {/* <IssueContext.Consumer>
          {
            values => {
              return  <button className="btn btn-warning" onClick={() => values.toggleFlag}>Add new issue</button>

              // { console.log(values.showAddIssueFrame + " " + values.showAddIssueFrameFlag) }
              // if (values.showAddIssueFrameFlag)
              //   return <AddIssue></AddIssue>
            }
          }
        </IssueContext.Consumer> */}
      </div>
    );

  }
}
// class Cat extends React.Component {
//   render() {
//     const mouse = this.props.mouse;
//     return (
//       <h1 style={{ position: 'absolute', left: mouse.x, top: mouse.y }} >h4ll</h1>
//     );
//   }
// }

// class MouseWithCat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

//         {/*
//           We could just swap out the <p> for a <Cat> here ... but then
//           we would need to create a separate <MouseWithSomethingElse>
//           component every time we need to use it, so <MouseWithCat>
//           isn't really reusable yet.
//         */}
//         <Cat mouse={this.state} />
//       </div>
//     );
//   }
// }

// class MouseTracker extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Move the mouse around!</h1>
//         <MouseWithCat />
//       </div>
//     );
//   }
// }
export default App;
