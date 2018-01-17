import React from "react";
import {Link}from "react-router-dom";
import MadLibAPI from "../api/MadLibAPI";


const MadLib1 = ({ verbs, verbs1, verbs2, verbs3, verbs4, nouns, nouns1, nouns2, nouns3, nouns4, nouns5, adjs, adjs1, adverbs }) => (
  <div>
    <h1>
      MadLib1
   </h1>

    <p>
      I saw a "{verbs}" with big "{nouns}" on the train ride to "{nouns1}". To stop myself from staring, I "{verbs2}" my "{nouns3}".
   </p>

    <p>
      George.R.R Martin was so "{verbs1}" while writing Game of Thrones that he "{adverbs}" "{verbs3}" everyone.
   </p>

    <p>
      "{nouns2.toUpperCase()}" Bankrupts Make-A-Wish Foundation by wishing for so many "{nouns4}".
   </p>

    <p>
      When this girl was "{adjs}" by her "{nouns5}", The internet came together and "{adjs1}" told her to "{verbs4}".
   </p>

  </div>
);

class MadLibs1 extends React.Component{
  constructor(){
    super();
  this.state={
    verbs: "",
    verbs1: "",
    verbs2: "",
    verbs3: "",
    verbs4: "",
    nouns: "",
    nouns1: "",
    nouns2: "",
    nouns3: "",
    nouns4: "",
    nouns5: "",
    adjs: "",
    adjs1: "",
    adverbs:""
  }
  }


  getWords = () =>{
    const verb = MadLibAPI.getVerbs()
    const verb1 = MadLibAPI.getVerbs()
    const verb2 = MadLibAPI.getVerbs()
    const verb3 = MadLibAPI.getVerbs()
    const verb4 = MadLibAPI.getVerbs()
    const noun = MadLibAPI.getNouns()
    const noun1 = MadLibAPI.getNouns()
    const noun2 = MadLibAPI.getNouns()
    const noun3 = MadLibAPI.getNouns()
    const noun4 = MadLibAPI.getNouns()
    const noun5 =MadLibAPI.getNouns()
    const adj = MadLibAPI.getAdj()
    const adj1 = MadLibAPI.getAdj()
    const adverb = MadLibAPI.getAdv()

  this.setState({ verbs: verb,
                  verbs1: verb1,  
                  verbs2: verb2, 
                  verbs3: verb3, 
                  verbs4: verb4, 
                  nouns: noun, 
                  nouns1:noun1,
                  nouns2: noun2,
                  nouns3: noun3,
                  nouns4: noun4,
                  nouns5: noun5,
                  adjs: adj,
                  adjs1: adj1,
                  adverbs: adverb
                  })

  }
  componentWillMount(){
    this.getWords();
  }
  handleRefresh =()=>{
    this.getWords();
  }


  render(){
    const { verbs, verbs1, verbs2, verbs3, verbs4, nouns, nouns1, nouns2, nouns3, nouns4, nouns5, adjs, adjs1, adverbs}=this.state
    
    return(

<div>
  <MadLib1
  verbs={verbs}
  verbs1={verbs1}
  verbs2={verbs2}
  verbs3={verbs3}
  verbs4={verbs4}
  nouns={nouns}
  nouns1={nouns1}
  nouns2={nouns2} 
  nouns3={nouns3}
  nouns4={nouns4}
  nouns5={nouns5}
  adjs={adjs}
  adjs1={adjs1}
  adverbs={adverbs}
   /> 
   <div>
   <button onClick={this.handleRefresh}>  Generate  </button>
    </div>
    
    <br />

    <div>
   <Link to="/MadLibs">Back</Link>
   </div>
</div> 
    )
  }
}

export default MadLibs1;

