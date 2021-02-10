import React from 'react';
import Header from './header';
import Menu from './menu';
import Footer from'./footer';
import Baniere from './baniere';
import Contenu from './contenu';
import '../style/ex5.css';





class Page extends React.Component {

 
    render() {
      return (
        <div className="page">
         <h2> {this.props.name}</h2>

    <Header hname={this.props.hname}/>
    <Baniere bname={this.props.bname}/>
    <Contenu text={this.props.text} titre={this.props.titre} note={this.props.note} cname={this.props.cname} aname={this.props.aname}/>
    <Menu mname={this.props.mname}/>
    <Footer fname={this.props.fname}/>
        </div>
        
      );
    }

  }
  export default Page;