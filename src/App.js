import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import WalletConnect from './components/WalletConnect'
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Alert from 'react-bootstrap/Alert';

function App() {

    const [web3ProviderStatus, setWeb3ProviderStatus] = useState(false);

    useEffect(() => {
        if(window.ethereum) {
            setWeb3ProviderStatus(true);
            window.web3 = new Web3(window.ethereum);
        } else if(window.web3) {
            setWeb3ProviderStatus(true);
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            console.log("No provider found")
            window.alert("No Web3 Provider installed in Browser. Please install Metamask");
        }
    }, [])

    return (
        <Container fluid className="App">
            {web3ProviderStatus ? <Row className="content-row">
                <Col>
                    <h1>Welcome to the Homepage!</h1>
                    <WalletConnect />
                </Col>
            </Row> : <Alert variant="danger">No Web3 Provider Found</Alert>}
            
        </Container>
    );
}

export default App;