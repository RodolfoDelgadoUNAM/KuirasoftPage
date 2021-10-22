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
                          Negocios <i className="tim-icons icon-bank"/>
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
                                          lista7="- Dominio, hosting, certificado SSL por un periodo de servicio de 12 meses contados a partir de la fecha de activación del dominio.Una vez concluido este periodo se podra solicitar una cotizacion por el costo de renovacion. (Ya no se cobra el costo de desarrollo)"
                                          linkPago="https://buy.stripe.com/14k9DX9Ds2opgx2bIM"
                                      >
                                      </ModalDetalles>
                                  </th>
                                  <th>
                                      <Button href="https://buy.stripe.com/14k9DX9Ds2opgx2bIM" color="success">Comprar <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Pagina web responsiva con 4 secciones de informacion. Compatible con smartphones, tablets y PCs</td>
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
                                          lista10="- Dominio, hosting, certificado SSL por un periodo de servicio de 12 meses contados a partir de la fecha de activación del dominio.Una vez concluido este periodo se podra solicitar una cotizacion por el costo de renovacion. (Ya no se cobra el costo de desarrollo)"
                                          linkPago="https://buy.stripe.com/28o03n02Se77gx2cMP"
                                      >
                                      </ModalDetalles>
                                  </th>
                                  <th>
                                      <Button href="https://buy.stripe.com/28o03n02Se77gx2cMP" color="success">Comprar <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  
                                  <tr>
                                      <td>Tienda en linea para hasta 15 articulos, 100% administrable por usted mismo, 
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
                    <Col xs="12" sm="6">
                        <Card>
                          <CardHeader>
                              <CardTitle tag="h2">Paquete Web Economico</CardTitle>
                          </CardHeader>
                          <CardBody>
                            <Table className="tablesorter" responsive>
                              <thead className="text-primary">
                                <tr>
                                  <th>                            
                                      <ModalDetalles buttonLabel="Detalles"
                                          lista1="- Hasta 4 Secciones de informacion"
                                          lista2="- Enlace a redes y whatsapp"
                                          lista3="- 3 Cuentas de correo electronico con webmail"
                                          lista4="- 1 cambio de información al mes durante 12 meses (no acomulables)"
                                          lista5="- 5 GB SSD para archivos de tu sitio y tus correos"
                                          lista6="- Dominios con terminacion:(.com/.net/.org/.info/.dev/.in/.page/.business)"
                                          lista7="- 1 propuesta de diseño, con base al modelo de negocio"
                                          lista8="- Dominio, hosting, certificado SSL, Soporte y cuentas de email por un periodo de servicio de 12 meses contados a partir de la fecha de activación del dominio.Una vez concluido este periodo se podra solicitar una cotizacion por el costo de renovacion. (Ya no se cobra el costo de desarrollo)"
                                          linkPago="https://buy.stripe.com/aEU9DXaHw3st3KgbIN"
                                      >
                                      </ModalDetalles>
                                  </th>
                                  <th>
                                      <Button href="https://buy.stripe.com/aEU9DXaHw3st3KgbIN" color="success">Comprar <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Cuentas de correo electronico personalizadas con el nombre de tu empresa</td>
                                      <td>
                                          <img
                                              alt="email"
                                              src={require("assets/img/mail.png").default}
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Pagina web responsiva con hasta 4 secciones de informacion, Dominio y Hosting con certificado de seguridad SSL.</td>
                                      <td>
                                          <img
                                              alt="ssl-certificate"
                                              src={require("assets/img/ssl-certificate.png").default}
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Soporte mensual para cambios de informacion de tu pagina</td>
                                      <td>
                                          <img
                                              alt="support"
                                              src={require("assets/img/support.png").default
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
                            <CardTitle tag="h2">Paquete Tienda Economica</CardTitle>
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
                                          lista4="- 3 Cuentas de correo electronico con webmail"
                                          lista5="- Reporte mensual de Google Analitycs"
                                          lista6="- 1 cambio de información o producto al mes durante 12 meses (no acomulables)"
                                          lista7="- Capacitacion online de 1 hora uso de Stripe"
                                          lista8="- Enlace a redes y whatsapp"
                                          lista9="- 5 GB SSD para archivos de tu sitio y tus correos"
                                          lista10="- Capacitacion online de 1 hora uso de Stripe"
                                          lista11="- 1 propuesta de diseño, con base al modelo de negocio"
                                          lista12="- Dominios con terminacion:(.com/.net/.org/.info/.dev/.in/.page/.business)"
                                          lista13="- Dominio, hosting, certificado SSL, soporte, reporte Analitycs y correo por un periodo de servicio de 12 meses contados a partir de la fecha de activación del dominio.Una vez concluido este periodo se podra solicitar una cotizacion por el costo de renovacion. (Ya no se cobra el costo de desarrollo)"
                                          linkPago="https://buy.stripe.com/7sI5nH8zofbb94A28e"
                                      >
                                      </ModalDetalles>
                                  </th>
                                  <th>
                                      <Button href="https://buy.stripe.com/7sI5nH8zofbb94A28e" color="success">Comprar <span></span></Button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  
                                  <tr>
                                      <td>Tienda en linea para hasta 15 articulos, 100% administrable. Acepta pagos con tarjeta y cupones de descuento.
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
                                      <td>Cuentas de correo electronico, pagina web responsiva con hasta 4 secciones de informacion, Dominio y Hosting con certificado SSL</td>
                                      <td>
                                          <img
                                              alt="email"
                                              src={require("assets/img/mail.png").default}
                                          />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Soporte mensual para cambios de informacion o productos de tu pagina y reporte mensual de Analitycs</td>
                                      <td>
                                          <img
                                              alt="analitycs"
                                              src={require("assets/img/google-analytics.png").default
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