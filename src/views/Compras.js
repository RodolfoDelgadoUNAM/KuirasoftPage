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


function Compras (props) {

  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
    
  // Toggle active state for Tab
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
                          Basico <i className="tim-icons icon-components"/>
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
                          Economico <i className="tim-icons icon-coins"/>
                        </p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '3'
                        })}
                        onClick={() => { toggle('3'); }}
                    >
                        <p>
                          Emprendedor <i className="tim-icons icon-money-coins"/>
                        </p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '4'
                        })}
                        onClick={() => { toggle('4'); }}
                    >
                        <p>
                          Emprendedor <i className="tim-icons icon-bank"/>
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
                    <CardTitle tag="h2">Pagina Basica</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>                            
                              <ModalDetalles buttonLabel="Detalles"
                                  lista1="- Hasta 4 Secciones de informacion"
                                  lista2="- Enlace a redes y whatsapp"
                                  lista3="- 1 GB SSD para archivos de tu sitio"
                                  lista4="- 1 propuesta de diseño, con base al modelo de negocio"
                                  lista5="- 1 redireccion de correo corporativo a tu correo personal de gmail (Nota: las respuestas al cliente aparecen con tu correo personal)"
                                  lista6="- Dominios con terminacion:(.com/.net/.org/.info/.dev/.in/.page/.business)"
                                  lista7="- Contara con dominio, hosting, certificado SSL por un periodo de servicio de 12 meses contados a partir de la fecha de activación del dominio.Una vez concluido este periodo se podra solicitar una cotizacion por el costo de renovacion. (Ya no se cobra el costo de desarrollo)"
                                  linkPago="https://buy.stripe.com/14k8zTaHwgff0y4dQQ"
                              >
                              </ModalDetalles>
                          </th>
                          <th>
                              <Button href="https://buy.stripe.com/14k8zTaHwgff0y4dQQ" color="success">Comprar <span></span></Button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Pagina web responsiva totalmente personalizada compatible con smartphones, tablets y PCs</td>
                              <td>
                                  <img
                                      alt="web"
                                      src={require("assets/img/web.png").default
                                  }
                                  />
                              </td>
                          </tr>
                          <tr>
                              <td>Dominio de tu pagina y se agrega a motores de google</td>
                              <td>
                                  <img
                                      alt="google"
                                      src={require("assets/img/google.png").default}
                                  />
                              </td>
                          </tr>
                          <tr>
                              <td>Hosting con certificado de seguridad SSL</td>
                              <td>
                                  <img
                                      alt="ssl-certificate"
                                      src={require("assets/img/ssl-certificate.png").default}
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
                            <CardTitle tag="h2">Tienda Basica</CardTitle>
                          </CardHeader>
                          <CardBody>
                            <Table className="tablesorter" responsive>
                              <thead className="text-primary">
                                <tr>
                                  <th>                            
                                      <ModalDetalles buttonLabel="Detalles"
                                          lista1="- Hasta 4 Secciones de informacion"
                                          lista2="- Hasta 15 articulos de tienda"
                                          lista3="- Carrito de compras"
                                          lista4="- Capacitacion online de 1 hora uso de Stripe"
                                          lista5="- Enlace a redes y whatsapp"
                                          lista6="- 1 GB SSD para archivos de tu sitio"
                                          lista7="- 1 propuesta de diseño, con base al modelo de negocio"
                                          lista8="- 1 redireccion de correo corporativo a tu correo personal de gmail (Nota: las respuestas al cliente aparecen con tu correo personal)"
                                          lista9="- Dominios con terminacion:(.com/.net/.org/.info/.dev/.in/.page/.business)"
                                          lista10="- Contara con dominio, hosting, certificado SSL por un periodo de servicio de 12 meses contados a partir de la fecha de activación del dominio.Una vez concluido este periodo se podra solicitar una cotizacion por el costo de renovacion. (Ya no se cobra el costo de desarrollo)"
                                          linkPago="https://buy.stripe.com/cN27vP16W6EF5So9AC"
                                      >
                                      </ModalDetalles>
                                  </th>
                                  <th>
                                      <Button href="https://buy.stripe.com/cN27vP16W6EF5So9AC" color="success">Comprar <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  
                                  <tr>
                                      <td>Tienda en linea 100% administrable por usted mismo, 
                                        con una de las comisiones mas bajas del mercado.
                                      </td>
                                      <td>
                                          <img
                                              alt="stripe"
                                              src={require("assets/img/cc-stripe.png").default
                                          }
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Acepta pagos con MasterCard, VISA y American Express. Tambien cupones de descuento.</td>
                                      <td>
                                          <img
                                              alt="visa"
                                              src={require("assets/img/visa-card.png").default}
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Incluye lo mismo que la pagina basica mas la funcionalidad de tienda</td>
                                      <td>
                                                  <img
                                                      alt="web"
                                                      src={require("assets/img/web.png").default
                                                  }
                                                  />

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
                        <Col sm="12">
                            <h5>En breve actualizaremos esta seccion</h5>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <h5>En breve actualizaremos esta seccion</h5>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <Col sm="12">
                            <h5>En breve actualizaremos esta seccion</h5>
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

export default Compras;