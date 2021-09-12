import React from "react";

// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledCollapse
} from "reactstrap";



function VR (props) {
  const notificationAlertRef = React.useRef(null);
  const notify = (place,message,type,icon) => {
    var options = {};
    options = {
      place: place,
      message: message,
      type: type,
      icon: icon,
      autoDismiss: 20,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  return (
    <>
      <div className="content">
        <Row>
          
          <Col xs="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto" md="12">
                      <Row>
                        <Col md="4">
                            <img
                            alt="Educativas"
                            src={require("assets/img/VRaplicaciones.png").default}
                            />
                            <Button
                            block
                            color="warning"
                            onClick={() => notify("tl","Aplicaciones educativas en realidad virtual para simular entornos practicos, aprender astronomia tocando los planetas? Que tal medicina operando a un avatar? o lenguas en un ambiente extranjero inmersivo?","warning","tim-icons icon-atom")}>
                            Desarrollo de aplicacions educativas
                            </Button>
                        </Col>
                        <Col md="4">
                        <img
                            alt="Trabajo"
                            src={require("assets/img/VReducacion.png").default}
                            />
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bc","Simula tus procesos productivos para capacitar a tu personal sin el riesgo de paros de linea, ademas almacena los resultados para conocer su curva de aprendizaje","primary","tim-icons icon-chart-bar-32")}
                            >
                            Capacitacion para el trabajo
                            </Button>
                        </Col>
                        <Col md="4">
                            <img
                            alt="Juegos"
                            src={require("assets/img/VRentretenimiento.png").default}
                            />
                            <Button
                            block
                            color="info"
                            onClick={() => notify("tr","Algun videojuego en mente? con gusto lo desarrollamos para ti o adquierelode nuestro catalogo","info","tim-icons icon-spaceship")}
                            >
                            Entretenimiento en VR
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Button className="btn-round " color="success" size="lg" block id="toggler" >
                    <span>Ver listado de servicios</span><i className="tim-icons icon-bullet-list-67"/>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <Card className="card-plain">
                            <CardHeader>
                                <CardTitle tag="h4">Lista de servicios de desarrollo Web:</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                <tr>
                                    <th>Servicio</th>
                                    <th>Descripcion</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Desarrollo de aplicacion o videojuego para Realidad Virtual</td>
                                    <td>Para educacion, capacitacion o entretenimiento, se entrega ejecutable para Oculus Quest Link a PC u Oculus Quest Standalone</td>
                                </tr>
                                <tr>
                                    <td>Venta e instalacion de Hardware para VR</td>
                                    <td>Venta de Oculus Quest, Oculus RIFT, Equipo de computo especializado para Realidad virtual y Routers TP Link para VR</td>
                                </tr>
                                <tr>
                                    <td>Demostraciones sin costo</td>
                                    <td>Ponte en contacto con nosotros y hacemos una demostracion de la tecnologia en tu escuela o lugar de trabajo sin costo alguno</td>
                                </tr>
                                </tbody>
                            </Table>
                            </CardBody>
                        </Card>             
                    </UncontrolledCollapse>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
            <CardHeader>
                <Row>
                  <Col className="text-center" sm="12">
                    <CardTitle tag="h2">Algunos de nuestros Demos:</CardTitle>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                  <Row>
                    <Col className="ml-auto mr-auto" xs="12" sm="6">
                        <Col className="ml-auto mr-auto" sm="12">
                          <h2>Vehiculo y Zombies Demo VR</h2>
                          <h3>Demo de vehiculo estandar/automatico desarrollado para cliente de Pennsylvania USA</h3>
                        </Col>
                        <Col className="ml-auto mr-auto" sm="12">
                        <a href="https://drive.google.com/file/d/1c6Mk3u5VBoEIwILgceE2PM4l90s1X8bk/view?usp=sharing" class="btn btn-default btn-round" role="button" aria-disabled="true">Descargar</a>
                        </Col>
                    </Col>
                        
                      <Col className="ml-auto mr-auto" xs="12" sm="6">
                      <iframe width="300" height="300" src="https://www.youtube.com/embed/fgeZ9203kYE?start=327" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </Col>
                  </Row>
              </CardBody>

              <CardBody>
                  <Row>
                    <Col className="ml-auto mr-auto" xs="12" sm="6">
                        <Col className="ml-auto mr-auto" sm="12">
                          <h2>Barco Oculus Demo VR</h2>
                          <h3>En este demo podras navegar por el mar rodeado de montanas controlando el timon y la velocidad del barco desarrollado para cliente de Pennsylvania USA</h3>
                        </Col>
                        <Col className="ml-auto mr-auto" sm="12">
                        <a href="https://drive.google.com/file/d/1uG7wpitrFCzVc6VopXnKzPW_hc45fx3H/view?usp=sharing" class="btn btn-default btn-round" role="button" aria-disabled="true">Descargar</a>
                        </Col>
                    </Col>
                        
                      <Col className="ml-auto mr-auto" xs="12" sm="6">
                        <iframe width="300" height="300" src="https://www.youtube.com/embed/5IYXnjGuyRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </Col>
                  </Row>
              </CardBody>
              <CardBody>
                    <Button className="btn-round " color="default" size="lg" block id="instrucciones" >
                    <span>Instrucciones para ambos demos</span>
                    </Button>
                    <UncontrolledCollapse toggler="#instrucciones">
                        <Card className="card-plain">
                            <CardBody>
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                <tr>
                                    <th>Actividad</th>
                                    <th>Descripcion</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Paso 1</td>
                                    <td>Descarga el zip y descomprimelo en tu pc (no importa la ubiacion)</td>
                                </tr>
                                <tr>
                                    <td>Paso 2</td>
                                    <td>Conecta tus oculus rift o quest por medio del cable link</td>
                                </tr>
                                <tr>
                                    <td>Paso 3</td>
                                    <td>Executa el arhivo boatandocen.exe o Dies Irae segun sea el caso</td>
                                </tr>
                                <tr>
                                    <td>Paso 4</td>
                                    <td>Si no tienes gafas puedes mover la camara manteniendo presionado el boton secundario de tu mouse y con las flechas del teclado </td>
                                </tr>
                                </tbody>
                            </Table>
                            </CardBody>
                        </Card>             
                    </UncontrolledCollapse>
              </CardBody>
            </Card>
          </Col>
        
        
        </Row>

        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
      </div>
    </>
  );
}

export default VR;