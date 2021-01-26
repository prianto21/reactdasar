import React, { Component } from "react";
import SubLifeCycle from "./SubLifeCycle";
import SubLifeCycle2 from "./SubLifeCycle2";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "bakso",
      halaman: "Daftar Pustaka",
      data: {},
      tampilHalamanSub: false,
      tampilhalaman2: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }

  ubahHalaman(value){
      this.setState({
          halaman:value,
      });
  }

  render() {
    return (
      <div>
        <h1> {this.state.makanan}</h1>
        <h1>{this.state.halaman}</h1>
        {/* <h2>{this.state.data.title}</h2> */}
        {this.state.tampilHalamanSub && (
          <SubLifeCycle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}
        <button
          onClick={() =>
            this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })
          }
        >
          tampil halaman baru
        </button>
        {this.state.tampilhalaman2 && (
          <SubLifeCycle2 ubahHalaman={(value) => this.ubahHalaman(value)} />
        )}
        <button
          onClick={() =>
            this.setState({ tampilhalaman2: !this.state.tampilhalaman2 })
          }
        >
          Tampil halaman ke 2
        </button>
      </div>
    );
  }
}
