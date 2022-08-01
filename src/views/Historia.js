import React, { useState } from 'react';

// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink
} from "reactstrap";
import classnames from 'classnames';

function Historia(props) {

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
                        Inicios <i className="tim-icons icon-sound-wave"/>
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
                        Origen <i className="tim-icons icon-paper"/>
                        </p>
                    </NavLink>
                </NavItem>
                
            </Nav>

            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1" >
                    <Card className="card-chart">
                        <CardHeader>
                            <Row>
                                <Col className="text-left" sm="12">
                                    <CardTitle tag="h1">Sobre nosotros</CardTitle>
                                    <CardBody tag="h4">
                                        La empresa KuiraSoft S.A.S. de C.V. nacio en la ciudad de Puebla, Mexico 
                                        en el año 2019. Dedicada a la creacion de juegos y aplicaciones de realidad virtual para la plataforma
                                        Oculus Quest asi como paginas y aplicaciones Web
                                    </CardBody>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                </TabPane>
                <TabPane tabId="2" >
                    <Card className="card-chart">
                        <CardHeader>
                            <Row>
                                <Col className="text-left" sm="12">
                                    <CardTitle tag="h1">Origen etimologico</CardTitle>
                                    <CardBody tag="h4">
                                    Según estudios etnolingüisticos, en el mundo se hablan seis mil idiomas, de los cuales la mitad corre 
                                    el riesgo de desaparacer en un lapso de cincuenta años, tal como ocurre con la lengua de los indígenas 
                                    rarámuri que habitan en algunas regiones del estado de Chihuahua, México..
                                    </CardBody>
                                    <CardBody tag="h4">
                                    Kuira, que significa hola en lengua rarámuri, es la primer palabra que conforma el nombre de la empresa KuiraSoft
                                    </CardBody>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center" sm="12">
                                    <img
                                    alt="..."
                                    src={require("assets/img/raramuris.jpg").default}
                                    />
                                </Col>
                            </Row> 
                        </CardHeader>
                    </Card>
                </TabPane>
                

            </TabContent>
          </Col>
        </Row>
      </div>



    </>
  );
}

export default Historia;
