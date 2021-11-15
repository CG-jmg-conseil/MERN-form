import React, { Component } from "react";
import axios from 'axios';

export default class Add extends Component {
    constructor(props) {
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = { name: "", message: ""};
    }

      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }

      onChangeMessage(e) {
        this.setState({
          message: e.target.value,
        });
      }
      
      onSubmit= async (e) => {
        e.preventDefault();

        const data = { nom: this.state.name, message: this.state.message };
        console.log(data);
        await axios
          .post('/mern/form', data)
          .then((res) => {
              alert('Le message a bien été inséré dans la collection MongoDB !');
          })
          .catch(error => {
            console.log('Error: ', error);
          });

        // réinitialise les valeurs

        this.setState({
          name: "",
          message: "",
        });
       }

       // formulaire pour recueillir le message et l'auteur

      render() {
        return (
          <div className = "form-box">
            <form id="demoForm" onSubmit={this.onSubmit}>
              <fieldset>
                <label htmlFor="name">Auteur<br />
                  <input type="text" id="name" name="name" value={this.state.name} onChange={this.onChangeName}/><br />
                </label>
                <label htmlFor="message">Message<br />
                  <textarea id="message" name="message" value={this.state.message} onChange={this.onChangeMessage}/>
                </label>
                <input type="submit" value="Envoyer" id= "submitBtn" className = "submitBtn"/>
              </fieldset>
            </form>
          </div>
        );
      }
 }
