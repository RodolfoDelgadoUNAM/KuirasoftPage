import React, { useState } from 'react';

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
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  CardText,
} from "reactstrap";

import ModalDetalles from "../components/ProductModals/ModalPaginaBasica";
import classnames from 'classnames';


function Juegos (props) {


  const [currentActiveTab, setCurrentActiveTab] = useState('1');
    

  const toggle = tab => {
      if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }
  
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                       >
                        <p>
                          PC WebGL <i className="tim-icons icon-spaceship"/>
                        </p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        <p>
                          Android <i className="tim-icons icon-triangle-right-17"/>
                        </p>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <Row>

                      <Col xs="12" sm="6">
                        <Card>
                          <CardHeader>
                              <CardTitle tag="h2">Sparty Bros</CardTitle>
                          </CardHeader>
                          <CardBody>
                            <Table className="tablesorter" responsive>
                              <thead className="text-primary">
                                <tr>
                                  <th>
                                      <Button href="https://kuirasoft.github.io/Sparty-PCGame/" color="success">Jugar <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                    <td>
                                        Estilo Mario Bros 2D, Parte de nuestros cursos de programacion, Juego oficial Michigan State University, Puedes jugarlo desde cualquier PC
                                    </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <img
                                              alt="web"
                                              src={require("assets/img/Sparty.png").default
                                          }
                                          />
                                      </td>
                                  </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6">
                        <Card>
                          <CardHeader>
                              <CardTitle tag="h2">DarkFuga</CardTitle>
                          </CardHeader>
                          <CardBody>
                            <Table className="tablesorter" responsive>
                              <thead className="text-primary">
                                <tr>
                                  <th>
                                      <Button href="https://kuirasoft.github.io/DarkFuga-PCGame/" color="success">Jugar <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                    <td>
                                        Estilo 2D Puzzle, Avanza por los planetas del sistema solar, parte de nuestros cursos de programacion, Puedes jugarlo desde cualquier PC (tambien disponible en playstore)
                                    </td>
                                  </tr>
                                  <tr>
                                      <td>
                                      <iframe width="300" height="200" src="https://www.youtube.com/embed/OVcjBhMBNIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                      </td>
                                  </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6">
                        <Card>
                          <CardHeader>
                              <CardTitle tag="h2">Aztlan: la noche triste</CardTitle>
                          </CardHeader>
                          <CardBody>
                            <Table className="tablesorter" responsive>
                              <thead className="text-primary">
                                <tr>
                                  <th>
                                      <Button href="https://kuirasoft.github.io/Aztlan-Demo-Web/" color="success">Jugar Demo <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                    <td>
                                        Videojuego 3D sobre la conquista al imperio Mexica, Se encuenta en desarrollo por un grupo de estudiantes de Diseno e informatica.
                                    </td>
                                  </tr>
                                  <tr>
                                      <td>
                                      <td>
                                          <img
                                              alt="web"
                                              src={require("assets/img/Aztlan.png").default
                                          }
                                          />
                                      </td>
                                      </td>
                                  </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>


                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <Row>
                    
                    <Col xs="12" sm="6">
                        <Card>
                          <CardHeader>
                              <CardTitle tag="h2">DarkFuga</CardTitle>
                          </CardHeader>
                          <CardBody>
                            <Table className="tablesorter" responsive>
                              <thead className="text-primary">
                                <tr>
                                  <th>
                                      <Button href="https://play.google.com/store/apps/details?id=com.KuiraSoft.DarkFuga" color="success">Descargar desde  Playstore <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                    <td>
                                        Estilo 2D Puzzle, Avanza por los planetas del sistema solar, parte de nuestros cursos de programacion, Puedes descargarlo en la playstore
                                    </td>
                                  </tr>
                                  <tr>
                                      <td>
                                      <iframe width="300" height="200" src="https://www.youtube.com/embed/OVcjBhMBNIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                      </td>
                                  </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>



                    </Row>
                </TabPane>
            </TabContent>

          </Col>

        </Row>
      </div>

    </>
  );
}

export default Juegos;