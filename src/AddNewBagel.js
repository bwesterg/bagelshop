import React, { Component } from "react";
import "./AddNewBagel.css"

export default class AddNewBagel extends Component {

    state = {
        newBagel: {
            name: "",
            rating: 5,
        }
    }

    handleChange = property => event => {
        const newBagel = this.state.newBagel
        newBagel[property] = event.target.value
        this.setState({ newBagel })
    }
    //check react documents for another way to do this
    

    addBagel = event => {
        event.preventDefault()
        const { name, rating } = this.state.newBagel
        this.props.postBagel({ name, rating })

        this.setState({
            newBagel: {
                name: "",
                rating: 5,
            }
        })
    }

    render(){
        return (
            <section className="add-bagel">
            <h2>New Bagel Details</h2>
                <form onSubmit={this.addBagel}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={this.state.newBagel.name}
                        onChange={this.handleChange("name")}
                    />
                    <input 
                        type="number" 
                        min="1" 
                        max="10" 
                        placeholder="Rating" 
                        value={this.state.newBagel.rating}
                        onChange={this.handleChange("rating")} 
                    />
                    <input type="submit" value="Add Bagel"/>
                </form>
            </section>
        )
    }
}