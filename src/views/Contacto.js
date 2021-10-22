import React from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import 
{ 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';




const firebaseConfig = {

    apiKey: "AIzaSyDPMHoqAKg7m3VdWm_onUxpxT5rdPUYGIQ",
  
    authDomain: "pagina-web-kuirasoft.firebaseapp.com",
  
    databaseURL: "https://pagina-web-kuirasoft-default-rtdb.firebaseio.com",
  
    projectId: "pagina-web-kuirasoft",
  
    storageBucket: "pagina-web-kuirasoft.appspot.com",
  
    messagingSenderId: "235090419499",
  
    appId: "1:235090419499:web:378f75462127f73c68af6e",
  
    measurementId: "G-JDXH2TE181"
  
  };

const app = initializeApp(firebaseConfig);

function Contacto(props){
  return (
    <>
    <div className="content">
      <Row>
        <Col xs="12">
        <Card className="card-chart">
            <CardHeader>
                <Row>
                    <Col className="text-left" sm="12">
                        <Form id="Formulario-Contacto">
                            <FormGroup>
                                <Label for="Name">Nombre</Label>
                                <Input type="text" name="Name" id="Name" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="Email" placeholder="ejemplo@gmail.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Dejenos sus comentarios o requerimientos</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="TCs" />{' '}
                                    Acepto los      
                                    <a href="https://www.kuirasoft.com/Privacy.html"> Terminos y condiciones </a>   
                                    de KuiraSoft SAS de CV                           
                                </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit" onClick={() => BorrarFormulario()}>Enviar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </CardHeader>
        </Card>             
        </Col>
      </Row>
    </div>
    </>
  );
}

function BorrarFormulario()
{
    document.getElementById("Formulario-Contacto").reset();
}

export default Contacto;
