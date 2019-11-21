import React from 'react';

// "stwórz formularz do podawania płci i wieku"

// Część 1
// input na wiek ma być typu range od 16 do 65 lat
// input na płeć ma być typu select i zawierać M lub K

// Część 2
// komponent Form ma zawierać 1 metodę do zmiany stanu w do obu komponentów
// komponent Form ma zawierać metodę onSubmit która loguje w konsoli wartość stanu na wysyłce formularza

class Form extends React.Component {
    state = {

    }
    render() {
        return (
            // <section className='contact' id='contact'><section/>

                <div className='container'>
                    
                   
                    <input type="tekst" name="Płeć" value="K">Kobieta<input/>
                    <input type="tekst" name="Płeć" value="M">Mężczyzna<input/>
                    <form onSubmit={(ev)=>{
                            // console.log('test')
                    }} > 
                    <form/>
                    </div> 
                )
    }
}
// "stwórz formularz do rejestracji usera"

// Część 1
// formularz ma posiadać 4 inputy o nazwach odpowiednio:
// - email, password, confirm-password oraz agreement
// o typach odpowiednio:
// - email, password, password, checkbox
// komponent RegisterForm ma zawierać 1 metodę do zmiany stanu w do obu komponentów

// Część 2 
// komponent RegisterForm ma zawierać metodę onSubmit, która dokonuje walidacji:
// - email - email
// - password/confirm-password - jest dłuższe niż 8 znaków 
// - inputy na hasła mają taką samą wartość
// - agreement musi mieć wartość true

// Część 3
// jeśli walidacja nie przejdzie, trzeba wyświetlić komunikat błędu "ValidationError"
// jeśli walidacja się powiedzie, trzeba wyświeltić komunikat "User created"

class RegisterForm extends React.Component{
     state = {
        email: "",
        password: '',
        confirm_password:'',
        agreement: true,
        ValidationError: false
    ChangeStateOfInput = (event) => {
        const {value,name,type, checked } = event.target
        this.setState({
            (name):value
        })
 }
    
 isFormValid = () => {
    console.log('validate', this.state)
    const {
        email,
        password,
        confirm-password,
        agreement
    } = this.state

    const isEmailValid = (email === email)
    const isPasswordValid = 
     const isAgreementValid = agreement === true


    const conditions = [isEmailValid, isPasswordValid, isAgreementValid ]
    const isConditionsValid = !conditions.includes(false)

    return isConditionsValid
}

    onFormSubmit = (event) => {
        event.preventDefault()

        if(this.isFormValid()){
			this.setState({
				ValidationError:true
			})

			
				console.log('text', this.state)
				this.setState({
					email:'',
                    password:'',
                    confirm-password:'',
                    agreement: true,
                    ValidationError: false  
				)
			}
		}
		else{
			this.setState({
				ValidationError:true
			})
 }


    }
    render(
        const {
			email,
            password,
            confirm-password,
            agreement,
            ValidationError,
		} = this.state
    ) {
        const { email, password, confirm-password, agreement } = this.state
        return (
            // <section className='contact' id='contact'><section/>

                <div className='container'>
                    <h1>Skontaktuj sie z nami</h1>
                   
                    <form onSubmit={this.onFormSubmit}
                    >

                   
                    <input 
                        type='email' 
                        name='email'
                        value={email}
                        onChange={this. ChangeStateOfInput}>
                        </input>
                    <input 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this. ChangeStateOfInput}>
                    </input>
                    <input type='password' name='comfirm-password' value={comfirm-password} onChange={this. ChangeStateOfInput}></input>
                    <input type='checkbox' name= 'agrement' value={agrement} onChange={this. ChangeStateOfInput} ></input>
                    </form>
                    </div> )
    }
}




// "stwórz bardziej zaawansowany komponent typu input"

// Część 0:
// state: {
// options: [array z elementami o wzorcu {label:'Nazwa do selecta', value:'Wartość do selecta'}]
// selected: [array z elementami o wzorcu {label:'Nazwa do selecta', value:'Wartość do selecta'}]
// }

// Część 1
// komponent ma zawierać:
// - select z 10 dowolnymi opcjami przetrzymywany w stanie pod kluczem "options"
// - tyle inputów typu checkbox ile zostało dokonane wyborów z selecta
// - przycisk do wysłania wyborów ze stanu o kluczu "selected"


// Część 2
// jak to ma działać:
// 1. user wybiera element z selecta
// 1a. wybrany element wrzucany jest do stanu { selected:[element0] }
// 2. po wybraniu, nazwa element0 pokazuje się poniżej z checkboxem(checked=true)
// 3. jeśli user wybierze kolejny element to też jest on wrzucany do stanu { selected:[element0, element1] }
// 3a. pokazuje się poniżej element1 z checkboxem(checked=true)
// 4. jeśli user kliknie w checkbox na dowolny element listy to ten element znika z listy


// jeśli user wcisnie przycisk w inputcie, do konsoli ma być logowany stan "selected" a potem stan "selected" ma być czyszczony
// user nie może wybrać 2 razy tego samego elementu - lista checkboxów ma nie mieć duplikatów

class MultiSelectWithConfirmation extends React.Component{
    // ...
}



export default Form
