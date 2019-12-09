// import React, { Component } from "react"

// class MemeGenerator extends Component {
//  constructor() {
//   super()
//   this.state = {
//    topText: "",
//    bottomText: "",
//    randomImage: "http://i.imgflip.com/1bij.jpg",
//    allMemeImages: []
//   }
//   this.handleChange = this.handleChange.bind(this)
//   this.handleSubmit = this.handleSubmit.bind(this)
//  }

//  handleChange(event) {
//   const { name, value } = event.target
//   this.setState({
//    [name]: value
//   })
//  }

//  handleSubmit(event) {
//   event.preventDefault();
//   const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
//   const randMemeImg = this.state.allMemeImages[randNum].url

//   this.setState({ randomImage: randMemeImg })
//  }
//  componentDidMount() {
//   fetch("https://api.imgflip.com/get_memes")
//    .then(response => response.json())
//    .then(response => {
//     const { memes } = response.data
//     this.setState({ allMemeImages: memes })
//    })
//  }
//  render() {
//   return (
//    <div>
//     <form className="meme-form" onSubmit={this.handleSubmit}>
//      <input
//       type="text"
//       placeholder="Top Text"
//       name="topText"
//       value={this.state.topText}
//       onChange={this.handleChange}
//      />
//      <br />
//      <input
//       type="text"
//       placeholder="Bottom Text"
//       name="bottomText"
//       value={this.state.bottomText}
//       onChange={this.handleChange}
//      />
//      <button>Gen</button>
//     </form>
//     <div className="meme">
//      <img src={this.state.randomImage} />
//      <h2 className="top">{this.state.topText}</h2>
//      <h2 className="bottom">{this.state.bottomText}</h2>
//     </div>
//    </div>
//   )
//  }
// }
// export default MemeGenerator

// import React from "react"

// function Header() {
//  return (
//   <header>
//    <img
//     src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
//     alt="problems"
//    />
//    <p>Meme Generator</p>
//   </header>
//  )
// }

// export default Header
