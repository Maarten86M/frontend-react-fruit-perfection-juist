import React from 'react';
import Product from './Product';
import './App.css';
import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';

function App() {
    const [messageValue, setMessageValue] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    function sendForm() {
        console.log(`Het bericht: "${messageValue}" is succesvol verzonden.`);
        setSubmitted(true);
    }

    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Ons verhaal</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <header>
                <h1>Fruit perfection</h1>
                <button type="button"
                        onClick={() => console.log("Jij wil shoppen!")}
                >Shop nu
                </button>

            </header>
            <main>

                <Product
                    image={citroenen}
                    title="Citroen"
                    description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />

                <Product
                    image={limoenen}
                    title="Limoen"
                    description="Limoen is familie van de citroen en de sinaasappel en behoort tot de
                    citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij
                    glad en groen."
                />

                <Product
                    image={ijsblokjes}
                    title="IJsblokjes"
                    description="Limoen is familie van de citroen en de sinaasappel en behoort tot
                    de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is
                    dun, vrij glad en groen."
                />

            </main>
            <footer>
                <div className="form-container">
                    <h2>Contactformulier</h2>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Typ hier jouw bericht"
                            name="message"
                            className={messageValue.length > 20 ? 'input-error' : ''}
                            value={messageValue}
                            onChange={(event) => setMessageValue(event.target.value)}
                        />
                        {messageValue.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}
                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name="terms-and-conditions"
                                id="terms-and-conditions"
                                checked={checkedTerms}
                                onChange={() => toggleCheckedTerms(!checkedTerms)}
                            />

                            Ik ga akkoord met de algemene voorwaarden
                        </label>

                    </form>
                    <button
                        type="submit"
                        disabled={!checkedTerms}
                        onClick={sendForm}
                    >
                        Verstuur
                    </button>

                </div>
            </footer>
        </>
    );
}

export default App;
