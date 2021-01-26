import React, { Component } from "react";
import { Formulir } from "./Formulir";
import { NavbarComponent } from "./NavbarComponent";
import { Tabel } from "./Tabel";

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const MakananSelainYangdiPilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

        this.setState({
            makanans: [
              ...MakananSelainYangdiPilih,
              {
                id: this.state.makanans.length + 1,
                nama: this.state.nama,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga,
              },
            ],
          });

    }
    

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: 0,
    });
  };

  editData = (id) => {
    const MakananYangdiPilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: MakananYangdiPilih[0].nama,
      deskripsi: MakananYangdiPilih[0].deskripsi,
      harga: MakananYangdiPilih[0].harga,
      id: MakananYangdiPilih[0].id,
    });
  };

  hapusData=(id)=>{
    const MakananBaru = this.state.makanans
    .filter((makanan) => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan;
    });

    this.setState({
        makanans:MakananBaru
    })
  }
  render() {
    console.log(this.state.makanans);
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-3">
          <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
